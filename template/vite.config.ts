// @ts-nocheck
import path from "path";
import fs from "node:fs/promises";
import { spawn } from "child_process";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { mdxComponentsPlugin } from "./vite-plugin-mdx-components";

function earlyDocsRuntimePreloadPlugin() {
    return {
        name: "early-docs-runtime-preload",
        apply: "build",
        async writeBundle(options, bundle) {
            const preloadTargets = Object.values(bundle)
                .filter((entry) => {
                    if (entry.type !== "chunk") {
                        return false;
                    }

                    return (
                        /^assets\/MdxContent\.lazy-.*\.js$/.test(entry.fileName) ||
                        /^assets\/mdx-components-.*\.js$/.test(entry.fileName)
                    );
                })
                .map((entry) => entry.fileName)
                .sort();

            if (preloadTargets.length === 0) {
                return;
            }

            const outputDir = options.dir ?? path.resolve(__dirname, "dist");
            const indexHtmlPath = path.resolve(outputDir, "index.html");

            let html;
            try {
                html = await fs.readFile(indexHtmlPath, "utf8");
            } catch {
                return;
            }

            const preloadTags = preloadTargets
                .map(
                    (fileName) =>
                        `    <link rel="modulepreload" crossorigin href="/${fileName}">`,
                )
                .join("\n");

            if (html.includes('rel="modulepreload" crossorigin href="/assets/MdxContent.lazy-')) {
                return;
            }

            const nextHtml = html.replace("</head>", `${preloadTags}\n    </head>`);
            await fs.writeFile(indexHtmlPath, nextHtml, "utf8");
        },
    };
}

function createManualChunks(id) {
    const normalizedId = id.replace(/\\/g, "/");

    if (
        normalizedId.includes("/react-docs-ui/dist/docs-app.es.js") ||
        normalizedId.includes("/react-docs-ui/dist/DocsApp-")
    ) {
        return "docs-app";
    }

    if (
        normalizedId.includes("/react-docs-ui/dist/GlobalContextMenu-") ||
        normalizedId.includes("/react-docs-ui/dist/SearchRuntime-") ||
        normalizedId.includes("/react-docs-ui/dist/SearchDialog-") ||
        normalizedId.includes("/components/search/") ||
        normalizedId.includes("/lib/search") ||
        normalizedId.includes("/flexsearch/") ||
        normalizedId.includes("/cmdk/")
    ) {
        return "docs-search";
    }

    if (
        normalizedId.includes("/components/ai/") ||
        normalizedId.includes("/lib/ai")
    ) {
        return "docs-ai";
    }

    if (
        normalizedId.includes("/components/MdxContent") ||
        normalizedId.includes("/react-markdown/") ||
        normalizedId.includes("/remark-") ||
        normalizedId.includes("/rehype-") ||
        normalizedId.includes("/unified/") ||
        normalizedId.includes("/micromark/") ||
        normalizedId.includes("/mdast-util-") ||
        normalizedId.includes("/hast-util-") ||
        normalizedId.includes("/katex") ||
        normalizedId.includes("/katex-physics") ||
        normalizedId.includes("/gray-matter/")
    ) {
        return "docs-renderer";
    }

    if (
        normalizedId.includes("/react-router") ||
        normalizedId.includes("/@radix-ui/") ||
        normalizedId.includes("/lucide-react/")
    ) {
        return "docs-ui";
    }

    return undefined;
}

function searchIndexPlugin() {
    return {
        name: "search-index-plugin",
        configureServer(server) {
            const publicDir = path.resolve(__dirname, "public");
            const docsDir = path.resolve(publicDir, "docs");

            server.watcher.add(docsDir);

            let generating = false;
            let pending = false;

            const generateIndex = () => {
                if (generating) {
                    pending = true;
                    return;
                }
                generating = true;

                const child = spawn(
                    "react-docs-ui",
                    ["generate-search-index"],
                    {
                        cwd: path.resolve(__dirname),
                        stdio: "inherit",
                        shell: process.platform === "win32",
                    },
                );

                child.on("close", () => {
                    generating = false;
                    if (pending) {
                        pending = false;
                        generateIndex();
                    }
                });
            };

            const isDocFile = (file) => {
                return (
                    file.includes(path.sep + "docs" + path.sep) &&
                    (file.endsWith(".md") || file.endsWith(".mdx"))
                );
            };

            const debounce = (fn, delay) => {
                let timer = null;
                return (...args) => {
                    if (timer) clearTimeout(timer);
                    timer = setTimeout(() => fn(...args), delay);
                };
            };

            const debouncedGenerate = debounce(generateIndex, 500);

            server.watcher.on("change", (file) => {
                if (isDocFile(file)) debouncedGenerate();
            });

            server.watcher.on("add", (file) => {
                if (isDocFile(file)) debouncedGenerate();
            });

            server.watcher.on("unlink", (file) => {
                if (isDocFile(file)) debouncedGenerate();
            });
        },
    };
}

function publicHmrPlugin() {
    return {
        name: "public-hmr",
        configureServer(server) {
            const publicDir = path.resolve(__dirname, "public");
            const configDir = path.resolve(publicDir, "config");
            const docsDir = path.resolve(publicDir, "docs");

            server.watcher.add([configDir, docsDir]);

            const isTargetFile = (file) => {
                const relativePath = path.relative(publicDir, file);
                return (
                    (relativePath.startsWith("config" + path.sep) &&
                        file.endsWith(".yaml")) ||
                    (relativePath.startsWith("docs" + path.sep) &&
                        (file.endsWith(".md") || file.endsWith(".mdx")))
                );
            };

            const triggerReload = (file) => {
                if (isTargetFile(file)) {
                    server.ws.send({ type: "full-reload", path: "*" });
                }
            };

            server.watcher.on("change", triggerReload);
            server.watcher.on("add", triggerReload);
        },
    };
}

export default defineConfig({
    plugins: [
        react(),
        mdxComponentsPlugin({
            componentsPath: "./src/components",
            outputPath: "./src/generated/mdx-components.ts",
        }),
        earlyDocsRuntimePreloadPlugin(),
        searchIndexPlugin(),
        publicHmrPlugin(),
    ],
    resolve: {
        dedupe: ["react", "react-dom", "react-router-dom"],
        alias: {
            "@": "src",
            buffer: "buffer",
        },
    },
    define: {
        global: "globalThis",
    },
    server: {
        host: "0.0.0.0",
        port: 5173,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
            },
        },
        fs: {
            allow: [
                path.resolve(__dirname),
                path.resolve(__dirname, "../../react-docs-ui/dist"),
            ],
        },
    },
    build: {
        chunkSizeWarningLimit: 2000,
        assetsInlineLimit: 0,
        modulePreload: false,
        rollupOptions: {
            output: {
                manualChunks: createManualChunks,
            },
        },
    },
});

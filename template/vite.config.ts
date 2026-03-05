// @ts-nocheck
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { mdxComponentsPlugin } from "./vite-plugin-mdx-components"

export default defineConfig({
  plugins: [
    react(),
    mdxComponentsPlugin({
      componentsPath: './src/components',
      outputPath: './src/generated/mdx-components.ts'
    })
  ],
  resolve: {
    alias: {
      "@": "src",
      buffer: "buffer/",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  build: {
    // 提高 chunk 大小警告的阈值到 2000 kB
    chunkSizeWarningLimit: 2000
  }
})
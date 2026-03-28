import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mainFile = path.resolve(__dirname, "../template/src/main.tsx");

const localImport = 'import { startDocsApp } from "./utils/docs-bootstrap.local";';
const packageImport = 'import { startDocsApp } from "./utils/docs-bootstrap.package";';
const commentedPackageImport = `// ${packageImport}`;

function switchToPublishSource(source) {
  return source
    .replace(`${commentedPackageImport}\n`, `${packageImport}\n`)
    .replace(`${localImport}\n`, "");
}

function switchToLocalSource(source) {
  let next = source.replace(`${packageImport}\n`, `${commentedPackageImport}\n`);
  if (!next.includes(localImport)) {
    next = next.replace(`${commentedPackageImport}\n`, `${commentedPackageImport}\n${localImport}\n`);
  }
  return next;
}

const mode = process.argv[2];
const source = fs.readFileSync(mainFile, "utf8");

if (mode === "publish") {
  fs.writeFileSync(mainFile, switchToPublishSource(source));
} else if (mode === "restore") {
  fs.writeFileSync(mainFile, switchToLocalSource(source));
} else {
  console.error('Usage: node scripts/switch-template-main.js <publish|restore>');
  process.exit(1);
}

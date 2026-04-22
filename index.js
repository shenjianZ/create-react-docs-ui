#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const templateIgnore = new Set([
  'node_modules',
  'dist',
  '.vite',
  '.turbo',
  'pnpm-lock.yaml',
  'package-lock.json',
  'yarn.lock',
  'bun.lockb',
  'tsconfig.app.tsbuildinfo',
])

function shouldSkipTemplateEntry(file) {
  return templateIgnore.has(file)
}

function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    const destDir = path.dirname(dest)
    fs.mkdirSync(destDir, { recursive: true })
    fs.copyFileSync(src, dest)
  }
}

function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    if (shouldSkipTemplateEntry(file)) continue
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

function isEmpty(dirPath) {
  const files = fs.existsSync(dirPath) ? fs.readdirSync(dirPath) : []
  return files.length === 0 || (files.length === 1 && files[0] === '.git')
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) return
  for (const file of fs.readdirSync(dir)) {
    if (file === '.git') continue
    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true })
  }
}

function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z\d\-~]+/g, '-')
}

function getPackageManager() {
  const userAgent = process.env.npm_config_user_agent || ''
  if (userAgent.includes('pnpm')) return 'pnpm'
  if (userAgent.includes('yarn')) return 'yarn'
  if (userAgent.includes('bun')) return 'bun'
  return 'npm'
}

function getPackageManagerField(pm) {
  const userAgent = process.env.npm_config_user_agent || ''
  const token = userAgent.split(' ')[0]
  return token?.startsWith(`${pm}/`) ? token : undefined
}

function findLocalReactLib() {
  // Try to locate the built library in the monorepo for convenience
  const repoRoot = path.resolve(__dirname, '..')
  const reactLibDir = path.resolve(repoRoot, 'react-docs-ui')
  const distEs = path.resolve(reactLibDir, 'dist', 'react-docs-ui.es.js')
  if (fs.existsSync(distEs)) {
    return reactLibDir
  }
  return null
}

async function init() {
  const argTargetDir = process.argv[2]
  let targetDir = argTargetDir || 'my-react-docs-project'

  const getProjectName = () =>
    path.basename(path.resolve(targetDir))

  const projectName = getProjectName()
  const packageName = toValidPackageName(projectName)

  console.log(`\n🚀 Creating React Docs UI project in ${targetDir}...`)

  const root = path.join(process.cwd(), targetDir)
  if (fs.existsSync(root)) {
    if (!isEmpty(root)) {
      console.log(`\n❌ Error: Target directory "${targetDir}" is not empty.`)
      process.exit(1)
    } else {
      emptyDir(root)
    }
  }

  console.log(`\n📁 Scaffolding project in ${root}...`)

  const templateDir = path.resolve(__dirname, 'template')
  const write = (file, content) => {
    const targetPath = path.join(root, file)
    if (content !== undefined) {
      fs.mkdirSync(path.dirname(targetPath), { recursive: true })
      fs.writeFileSync(targetPath, content)
    } else {
      copy(path.join(templateDir, file), targetPath)
    }
  }

  // Copy static template except package.json for injection
  const files = fs.readdirSync(templateDir)
  for (const file of files.filter((f) => f !== 'package.json' && !shouldSkipTemplateEntry(f))) {
    write(file)
  }

  // Prepare package.json
  const pkg = JSON.parse(
    fs.readFileSync(path.join(templateDir, 'package.json'), 'utf-8')
  )
  pkg.name = packageName
  const pm = getPackageManager()
  const runCmd = pm === 'npm' ? 'npm run' : pm
  const packageManagerField = getPackageManagerField(pm)
  if (packageManagerField) {
    pkg.packageManager = packageManagerField
  } else {
    delete pkg.packageManager
  }

  // If local lib exists, link it via file: for quick testing
  const localLib = findLocalReactLib()
  if (localLib) {
    pkg.dependencies['react-docs-ui'] = `file:${path.relative(root, localLib).replace(/\\/g, '/')}`
    console.log(`\n🔗 Using local react-docs-ui from: ${localLib}`)
  }

  write('package.json', JSON.stringify(pkg, null, 2) + '\n')
  
  console.log(`\n✅ Done! Created ${projectName} at ${root}`)
  console.log('\n📚 Get started with:')
  console.log(`\n  cd ${targetDir}`)
  console.log(`  ${pm} install`)
  console.log(`  ${runCmd} dev`)
  console.log('\n🎉 Your React Docs UI project is ready!')
}

init().catch((e) => {
  console.error(e)
  process.exit(1)
})



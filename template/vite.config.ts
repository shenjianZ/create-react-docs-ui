// @ts-nocheck
import path from "path"
import { spawn } from "child_process"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { mdxComponentsPlugin } from "./vite-plugin-mdx-components"

function searchIndexPlugin() {
  return {
    name: 'search-index-plugin',
    configureServer(server) {
      const publicDir = path.resolve(__dirname, 'public')
      const docsDir = path.resolve(publicDir, 'docs')
      
      server.watcher.add(docsDir)
      
      let generating = false
      let pending = false
      
      const generateIndex = () => {
        if (generating) {
          pending = true
          return
        }
        generating = true
        
        const child = spawn('node', ['scripts/generate-search-index.js'], {
          cwd: path.resolve(__dirname),
          stdio: 'inherit'
        })
        
        child.on('close', () => {
          generating = false
          if (pending) {
            pending = false
            generateIndex()
          }
        })
      }
      
      generateIndex()
      
      const isDocFile = (file) => {
        return file.includes(path.sep + 'docs' + path.sep) && 
               (file.endsWith('.md') || file.endsWith('.mdx'))
      }
      
      const debounce = (fn, delay) => {
        let timer = null
        return (...args) => {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => fn(...args), delay)
        }
      }
      
      const debouncedGenerate = debounce(generateIndex, 500)
      
      server.watcher.on('change', (file) => {
        if (isDocFile(file)) debouncedGenerate()
      })
      
      server.watcher.on('add', (file) => {
        if (isDocFile(file)) debouncedGenerate()
      })
      
      server.watcher.on('unlink', (file) => {
        if (isDocFile(file)) debouncedGenerate()
      })
    }
  }
}

function publicHmrPlugin() {
  return {
    name: 'public-hmr',
    configureServer(server) {
      const publicDir = path.resolve(__dirname, 'public')
      const configDir = path.resolve(publicDir, 'config')
      const docsDir = path.resolve(publicDir, 'docs')

      server.watcher.add([configDir, docsDir])

      const isTargetFile = (file) => {
        const relativePath = path.relative(publicDir, file)
        return (
          relativePath.startsWith('config' + path.sep) && file.endsWith('.yaml')
        ) || (
          relativePath.startsWith('docs' + path.sep) &&
          (file.endsWith('.md') || file.endsWith('.mdx'))
        )
      }

      const triggerReload = (file) => {
        if (isTargetFile(file)) {
          server.ws.send({ type: 'full-reload', path: '*' })
        }
      }

      server.watcher.on('change', triggerReload)
      server.watcher.on('add', triggerReload)
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    mdxComponentsPlugin({
      componentsPath: './src/components',
      outputPath: './src/generated/mdx-components.ts'
    }),
    searchIndexPlugin(),
    publicHmrPlugin()
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
    chunkSizeWarningLimit: 2000
  }
})
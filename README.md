English | [简体中文](README-zh.md)

## create-react-docs-ui

Scaffold a React documentation site in seconds, powered by [`react-docs-ui`](https://github.com/shenjianZ/react-docs-ui). Focus on writing Markdown; routing, theming, MDX, syntax highlighting, i18n, sidebar/TOC and a command menu are prewired.

### Features
- Configuration over code via `public/config/site.yaml`
- MD/MDX rendering, syntax highlight, GFM, simple frontmatter parsing
- Light/dark theme and command palette (Cmd/Ctrl+K)
- Built-in i18n folders (e.g. `en`, `zh-cn`)
- Ready-to-run Vite setup

### Requirements
- Node.js >= 18

### Quick start
- npm:
```bash
npm create react-docs-ui@latest my-docs
```
- yarn:
```bash
yarn create react-docs-ui my-docs
```
- pnpm:
```bash
pnpm create react-docs-ui my-docs
```
Then:
```bash
cd my-docs
npm install
npm run dev
```
Dev server runs at http://localhost:5173

### Scripts (generated project)
- `dev`: start Vite dev server
- `build`: type-check and build
- `preview`: preview production build

### Project structure (generated)
- `public/config/site.yaml` and `public/config/site.en.yaml`: site config per language
- `public/docs/<lang>/**/*.md`: Markdown docs, matched by route slug
- `src/`: app entry; usually no changes required

### Config example (`public/config/site.yaml`)
```yaml
site:
  logo: /logo.svg
  title: My Docs
  description: Awesome docs
navbar:
  showTitle: true
  items:
    - title: GitHub
      link: https://github.com/shenjianZ/react-docs-ui
      external: true
sidebar:
  collections:
    guide:
      sections:
        - title: Getting Started
          path: guide
          children:
            - { title: Introduction, path: guide/introduction }
```

### Docs example (`public/docs/en/guide/introduction.md`)
```markdown
---
title: Introduction
---

# Introduction

Welcome to My Docs!
```

### Links
- Underlying UI library: `react-docs-ui` — https://github.com/shenjianZ/react-docs-ui

### License
[MIT](LICENSE)

简体中文 | [English](README.md)

## create-react-docs-ui

秒级搭建 React 文档站，基于 [`react-docs-ui`](https://github.com/shenjianZ/react-docs-ui)。专注写 Markdown，路由、主题、MDX、代码高亮、国际化、侧边栏/目录与命令面板均已预置。

### 特性
- 以配置为中心：`public/config/site.yaml`
- 支持 MD/MDX、语法高亮、GFM、简易 Frontmatter 解析
- 亮/暗主题切换与命令面板（Cmd/Ctrl+K）
- 预置多语言目录（如 `en`、`zh-cn`）
- Vite 开箱可用

### 环境要求
- Node.js >= 18

### 快速开始
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
然后：
```bash
cd my-docs
npm install
npm run dev
```
开发地址：http://localhost:5173

### 生成项目脚本
- `dev`: 启动 Vite 开发服务器
- `build`: 类型检查并构建
- `preview`: 预览产物

### 生成项目结构
- `public/config/site.yaml`、`public/config/site.en.yaml`：按语言的站点配置
- `public/docs/<lang>/**/*.md`：文档 Markdown，路径映射路由
- `src/`：应用入口，一般无需修改

### 配置示例（`public/config/site.yaml`）
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
        - title: 入门
          path: guide
          children:
            - { title: 介绍, path: guide/introduction }
```

### 文档示例（`public/docs/en/guide/introduction.md`）
```markdown
---
title: Introduction
---

# Introduction

Welcome to My Docs!
```

### 相关链接
- 底层 UI 库：`react-docs-ui` — https://github.com/shenjianZ/react-docs-ui

### 许可证
[MIT](LICENSE)

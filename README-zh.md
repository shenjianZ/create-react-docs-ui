简体中文 | [English](README.md)

## create-react-docs-ui

秒级搭建 React 文档站，基于 [`react-docs-ui`](https://github.com/shenjianZ/react-docs-ui)。

### 特性

- 配置驱动，通过 `site.yaml` 控制
- MD/MDX 支持，代码语法高亮
- 明暗主题切换
- 命令菜单（Cmd+K）
- 右键菜单
- 国际化支持
- Vite 开箱可用

### 快速开始

```bash
npm create react-docs-ui@latest my-docs
cd my-docs
npm install && npm run dev
```

### 项目结构

- `public/config/site.yaml` - 网站配置
- `public/docs/<lang>/**/*.md` - 文档文件
- `src/` - 应用入口

### 许可证

MIT
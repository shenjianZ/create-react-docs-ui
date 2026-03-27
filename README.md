English | [简体中文](README-zh.md)

## create-react-docs-ui

Scaffold a React documentation site in seconds, powered by [`react-docs-ui`](https://github.com/shenjianZ/react-docs-ui).

### Features

- Configuration-driven via `site.yaml`
- MD/MDX with syntax highlighting
- Light/dark themes
- Command menu (Cmd+K)
- Context menu
- Internationalization
- Vite setup

### Quick Start

```bash
pnpm create react-docs-ui my-docs
cd my-docs
pnpm install
pnpm dev
```

### Project Structure

- `public/config/site.yaml` / `public/config/site.en.yaml` - Site configuration
- `public/docs/<lang>/**/*.md` - Documentation files
- `src/` - App entry

### License

MIT

---
title: "AI Agent Skills"
description: "使用 AI Agent Skills 提升 React Docs UI 开发效率"
author: "React Docs UI Team"
date: "2026-03-25"
---

# AI Agent Skills

React Docs UI 提供了一套 AI Agent Skills，帮助您更高效地配置、编写文档和使用脚手架。

## 简介

AI Agent Skills 是专门为 React Docs UI 设计的 AI 辅助技能集合，可以集成到支持技能的 AI Agent（如 Claude Code、Cursor 等）中，帮助您：

- 📝 快速编写配置文件
- 📚 高效编写文档内容
- 🚀 便捷创建新项目

## 可用技能

### 1. React Docs UI Config

**用途**：编写有效的 `site.yaml` 和 `site.en.yaml` 配置文件

**功能**：
- 配置导航栏（navbar）、侧边栏（sidebar）
- 管理主题、TOC、搜索、导出、字体等
- 维护中英文配置同步

**使用场景**：
- 修改站点配置
- 添加新的导航项
- 配置侧边栏导航

### 2. React Docs UI Doc Authoring

**用途**：编写 Markdown、Frontmatter 和 MDX 文档

**功能**：
- 使用 frontmatter 字段（title、description、author、date）
- 使用自定义 MDX 组件
- 维护中英文双语文档

**使用场景**：
- 创建新的文档页面
- 编写技术文档
- 管理双语文档

### 3. React Docs UI Scaffold

**用途**：创建和引导使用 create-react-docs-ui 文档站点

**功能**：
- 创建新的文档项目
- 理解生成后的项目结构
- 执行项目启动命令

**使用场景**：
- 初始化新项目
- 了解项目结构
- 启动开发服务器

## 安装 Skills

### 获取 Skills

1. 克隆 skills 仓库：
```bash
git clone https://github.com/shenjianZ/react-docs-skills.git
cd react-docs-skills
```

2. 或访问 [GitHub Releases](https://github.com/shenjianZ/react-docs-skills/releases) 下载最新版本

### 配置 AI Agent

#### Claude Code

将技能目录添加到 Claude Code 的工作区：

```bash
cp -r skills/* ~/.claude/skills/
```

#### Cursor

```bash
# 假设 Cursor 的技能目录在 ~/.cursor/skills
cp -r skills/* ~/.cursor/skills/
```

#### 其他 Agent

请参考您的 Agent 文档，找到技能目录位置并复制技能文件。

## 使用示例

### 配置文件编写

**对话示例**：
```
你: 帮我添加一个新的导航项到 site.yaml，名称为"博客"，链接为"/blog"
AI: [使用 React Docs UI Config 技能]
```

**结果**：AI 会自动生成正确的 YAML 配置片段，并提醒您同步修改中英文配置文件。

### 文档编写

**对话示例**：
```
你: 帮我写一个关于 React Hooks 的文档页面
AI: [使用 React Docs UI Doc Authoring 技能]
```

**结果**：AI 会创建完整的 Markdown 文档，包含适当的 frontmatter 和内容结构。

### 项目创建

**对话示例**：
```
你: 帮我创建一个新的文档项目，名称为"my-docs"
AI: [使用 React Docs UI Scaffold 技能]
```

**结果**：AI 会提供完整的创建步骤和后续操作指南。

## 技能仓库

- **GitHub**: https://github.com/shenjianZ/react-docs-skills
- **文档**: https://github.com/shenjianZ/react-docs-skills/blob/master/docs/USAGE.md
- **贡献**: https://github.com/shenjianZ/react-docs-skills/blob/master/CONTRIBUTING.md

## 常见问题

### Q: 技能没有生效怎么办？

请检查：
1. 技能文件是否正确复制到 Agent 的技能目录
2. Agent 是否支持技能功能
3. 技能配置文件格式是否正确

### Q: 如何更新技能？

使用 git 拉取最新代码：
```bash
cd react-docs-skills
git pull origin main
# 然后重新复制到 Agent 技能目录
```

### Q: 可以自定义技能吗？

可以！参考 [贡献指南](https://github.com/shenjianZ/react-docs-skills/blob/master/CONTRIBUTING.md) 了解如何创建新技能。

### Q: 技能在哪些 AI Agent 上可用？

目前支持：
- Claude Code
- Cursor
- 其他支持技能系统的 AI Agent

## 相关资源

- [React Docs UI 主仓库](https://github.com/shenjianZ/react-docs-ui)
- [create-react-docs-ui](https://github.com/shenjianZ/create-react-docs-ui)
- [使用指南](https://github.com/shenjianZ/react-docs-skills/blob/master/docs/USAGE.md)
- [开发指南](https://github.com/shenjianZ/react-docs-skills/blob/master/docs/DEVELOPMENT.md)

## 反馈与支持

如果您在使用 skills 时遇到问题或有改进建议，请：

- 提交 [GitHub Issue](https://github.com/shenjianZ/react-docs-skills/issues)
- 参与 [GitHub Discussions](https://github.com/shenjianZ/react-docs-skills/discussions)
- 查看 [常见问题](https://github.com/shenjianZ/react-docs-skills/blob/master/docs/USAGE.md#常见问题)
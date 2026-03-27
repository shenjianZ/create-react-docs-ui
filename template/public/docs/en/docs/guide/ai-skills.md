---
title: "AI Agent Skills"
description: "Use AI Agent Skills to improve React Docs UI development efficiency"
author: "React Docs UI Team"
createdAt: "2026-03-25"
lastUpdated: "2026-03-27"
---

# AI Agent Skills

React Docs UI provides a set of AI Agent Skills to help you configure, author documentation, and use scaffolding more efficiently.

## Introduction

AI Agent Skills are specialized AI-assisted skill collections designed for React Docs UI. They can be integrated into AI Agents that support skills (such as Claude Code, Cursor, etc.), helping you:

- 📝 Quickly write configuration files
- 📚 Efficiently author documentation
- 🚀 Easily create new projects

## Available Skills

### 1. React Docs UI Config

**Purpose**: Write valid `site.yaml` and `site.en.yaml` configuration files

**Features**:
- Configure navbar and sidebar
- Manage theme, TOC, search, export, fonts, etc.
- Maintain bilingual configuration synchronization

**Use Cases**:
- Modify site configuration
- Add new navigation items
- Configure sidebar navigation

### 2. React Docs UI Doc Authoring

**Purpose**: Write Markdown, Frontmatter, and MDX documentation

**Features**:
- Use frontmatter fields (title, description, author, createdAt, lastUpdated)
- Use custom MDX components
- Maintain bilingual documentation

**Use Cases**:
- Create new documentation pages
- Author technical documentation
- Manage bilingual documentation

### 3. React Docs UI Scaffold

**Purpose**: Create and bootstrap documentation sites with create-react-docs-ui

**Features**:
- Create new documentation projects
- Understand generated project structure
- Execute project startup commands

**Use Cases**:
- Initialize new projects
- Understand project structure
- Start development server

## Installation

### Get Skills

1. Clone the skills repository:
```bash
git clone https://github.com/shenjianZ/react-docs-skills.git
cd react-docs-skills
```

2. Or download the latest version from [GitHub Releases](https://github.com/shenjianZ/react-docs-skills/releases)

### Configure AI Agent

#### Claude Code

Add the skills directory to Claude Code's workspace:

```bash
cp -r skills/* ~/.claude/skills/
```

#### Cursor

```bash
# Assuming Cursor skills directory is at ~/.cursor/skills
cp -r skills/* ~/.cursor/skills/
```

#### Other Agents

Please refer to your Agent documentation to find the skills directory location and copy the skill files.

## Usage Examples

### Configuration File Authoring

**Example Dialogue**:
```
You: Help me add a new navigation item to site.yaml, name it "Blog", link to "/blog"
AI: [Uses React Docs UI Config skill]
```

**Result**: AI will automatically generate the correct YAML configuration snippet and remind you to synchronize with the bilingual configuration files.

### Documentation Authoring

**Example Dialogue**:
```
You: Help me write a documentation page about React Hooks
AI: [Uses React Docs UI Doc Authoring skill]
```

**Result**: AI will create a complete Markdown document with appropriate frontmatter and content structure.

### Project Creation

**Example Dialogue**:
```
You: Help me create a new documentation project named "my-docs"
AI: [Uses React Docs UI Scaffold skill]
```

**Result**: AI will provide complete creation steps and follow-up operation guidelines.

## Skills Repository

- **GitHub**: https://github.com/shenjianZ/react-docs-skills
- **Documentation**: https://github.com/shenjianZ/react-docs-skills/blob/master/docs/USAGE.md
- **Contributing**: https://github.com/shenjianZ/react-docs-skills/blob/master/CONTRIBUTING.md

## FAQ

### Q: What if the skills are not working?

Please check:
1. Whether skill files are correctly copied to the Agent's skills directory
2. Whether the Agent supports skill functionality
3. Whether skill configuration file format is correct

### Q: How to update skills?

Use git to pull the latest code:
```bash
cd react-docs-skills
git pull origin main
# Then re-copy to Agent skills directory
```

### Q: Can I customize skills?

Yes! Refer to [Contributing Guide](https://github.com/shenjianZ/react-docs-skills/blob/master/CONTRIBUTING.md) to learn how to create new skills.

### Q: Which AI Agents are skills available on?

Currently supports:
- Claude Code
- Cursor
- Other AI Agents with skill system support

## Related Resources

- [React Docs UI Repository](https://github.com/shenjianZ/react-docs-ui)
- [create-react-docs-ui](https://github.com/shenjianZ/create-react-docs-ui)
- [Usage Guide](https://github.com/shenjianZ/react-docs-skills/blob/master/docs/USAGE.md)
- [Development Guide](https://github.com/shenjianZ/react-docs-skills/blob/master/docs/DEVELOPMENT.md)

## Feedback & Support

If you encounter issues or have suggestions while using skills, please:

- Submit [GitHub Issue](https://github.com/shenjianZ/react-docs-skills/issues)
- Participate in [GitHub Discussions](https://github.com/shenjianZ/react-docs-skills/discussions)
- View [FAQ](https://github.com/shenjianZ/react-docs-skills/blob/master/docs/USAGE.md#常见问题)

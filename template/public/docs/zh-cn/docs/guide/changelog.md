---
title: 更新日志模块
description: 说明模板项目如何启用和维护 Changelog / Release Notes。
author: React Docs UI Team
createdAt: 2026-03-27
---

# 更新日志模块

模板项目已经内置 Changelog / Release Notes 能力。

## 你需要维护的文件

- 站点配置：`public/config/site.yaml` 与 `public/config/site.en.yaml`
- 发布记录：`public/docs/<lang>/changelog/*.md`
- 构建索引脚本：`scripts/generate-changelog-index.js`

## 路由约定

- 列表页：`/:lang/changelog`
- 详情页：`/:lang/changelog/:slug`

## 列表分页

你可以在站点配置里使用 `changelog.pageSize` 控制每页显示多少条：

```yaml
changelog:
  enabled: true
  title: "更新日志"
  pageSize: 10
```

配置后，列表页会启用 URL 分页。例如第 2 页：

```text
/zh-cn/changelog?page=2
```

## frontmatter 示例

```yaml
---
title: v0.1.0 发布说明
version: v0.1.0
date: 2026-03-27
summary: 首个公开版本，提供基础文档站能力。
type: release
breaking: false
---
```

## 如何新增一条 changelog

1. 在每种语言目录下创建一个新的 Markdown 或 MDX 文件。

```text
public/docs/zh-cn/changelog/v0.2.0.md
public/docs/en/changelog/v0.2.0.md
```

2. 文件名就是这条发布记录的 slug。上面的文件会对应：

- `/zh-cn/changelog/v0.2.0`
- `/en/changelog/v0.2.0`

3. 先写 frontmatter，再写正文内容。

推荐字段：

- `title`：详情页标题
- `version`：列表页显示的版本号
- `date`：用于排序，新的会排在前面
- `summary`：列表页摘要
- `type`：`release`、`feature`、`fix`、`breaking`、`deprecation`
- `breaking`：`true` 或 `false`
- `draft`：可选，设为 `true` 后不会出现在列表页

4. 重新生成 changelog 索引。

```bash
pnpm prepare:docs
```

`predev` 和 `prebuild` 已经会自动执行这一步；如果你想立刻刷新列表页使用的 JSON 索引，可以手动跑一次。

分页由前端列表页根据 `changelog.pageSize` 控制，不影响 changelog 文件内容结构或索引生成逻辑。

## 完整示例

```md
---
title: v0.2.0 发布说明
version: v0.2.0
date: 2026-04-02
summary: 新增 API 页面并优化站内搜索相关性。
type: feature
breaking: false
draft: false
---

## Highlights

- 新增 API 参考文档页面。
- 优化全文搜索排序。
```

如果你要让更新日志同时支持双语，请保持 `zh-cn` 和 `en` 两套发布记录同步，并在新增、重命名或删除文件后重新生成索引。

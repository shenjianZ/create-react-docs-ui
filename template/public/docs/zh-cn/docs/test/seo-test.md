---
title: SEO 页面级覆盖测试
description: 这是一个用于验证页面 frontmatter 是否覆盖默认 SEO 配置的测试页面。
canonical: https://your-docs-site.example.com/zh-cn/docs/test/seo-test
author: 开发团队
createdAt: 2026-03-27
lastUpdated: 2026-03-27
---

# SEO 页面级覆盖测试

这个页面专门用于验证页面级 frontmatter 对 SEO 的覆盖效果。

## 预期结果

打开浏览器开发者工具，在 `head` 中确认：

- `document.title` 包含“SEO 页面级覆盖测试”
- `meta[name="description"]` 使用本页 description
- `link[rel="canonical"]` 等于 frontmatter 里的 canonical
- `meta[property="og:title"]` 与页面标题一致
- `meta[property="og:url"]` 与 canonical 一致

## 说明

这个测试页没有设置 `noindex: true`。
如果需要验证 noindex，可再单独新增一个页面，因为 `noindex` 会覆盖 canonical 行为。

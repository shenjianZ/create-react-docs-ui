---
title: 接入概览
description: 概览 React Docs UI 模板当前依赖的后端能力、配置开关和联调方式
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# 接入概览

模板当前把后端能力分成两层：

1. `backend`：控制认证、评论、书签、统计、反馈等业务 API。
2. `export.pdfServer`：控制服务端 PDF 生成，它不是 `backend.baseUrl` 的一部分。

## 当前支持的能力

- 用户认证：邮箱密码、邮箱验证码、Google / GitHub OAuth
- 页面评论：列表、发布、回复、编辑、删除、点赞
- 书签：收藏、取消收藏、状态查询
- 统计：页面访问和停留时长上报
- 页面反馈：反馈状态查询与提交
- 头像上传：通过 `multipart/form-data` 上传头像

## 配置如何生效

`public/config/site.yaml` 与 `public/config/site.en.yaml` 中的关键项：

```yaml
backend:
  enabled: true
  baseUrl: "/api"
  features:
    auth: true
    comments: true
    bookmarks: true
    analytics: true
    feedback: true
```

- `backend.enabled = false`：整体关闭后端相关 UI
- `backend.features.auth = false`：隐藏登录入口和用户菜单
- `backend.features.comments = false`：隐藏评论区
- `backend.features.bookmarks = false`：隐藏书签按钮
- `backend.features.analytics = false`：停止上报浏览数据
- `backend.features.feedback = false`：即使 `feedback.endpoint` 存在也不显示反馈组件

## 本地联调默认方式

- 文档站：`pnpm dev`，默认 `http://localhost:5173`
- Rust 后端：`cargo run`，默认 `http://localhost:3000`
- 模板代理：`/api -> http://localhost:3000`

所以前端请求 `/api/auth/login` 时，开发环境会自动转发到后端服务。

## 建议阅读顺序

先看 [部署 Rust 后端](/docs/backend/deploy-rust-backend)，再看 [能力准备清单](/docs/backend/capability-preparation) 和具体的 SMTP / OAuth 教程。

---
title: 接口约定
description: 汇总 React Docs UI 模板当前实际依赖的后端接口、响应格式和鉴权约定
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# 接口约定

模板默认约定所有业务接口都挂在 `/api` 之下，并返回统一结构：

```json
{ "code": 200, "message": "success", "data": {} }
```

## 前端真实依赖的接口

- 认证：`/auth/login`、`/auth/login/email-code`、`/auth/email/send-code`、`/auth/register`
- OAuth：`/auth/oauth/:provider/start`、`/auth/oauth/:provider/callback`
- Token：`/auth/refresh`、`/auth/delete-refresh-token`
- 用户：`/auth/me`、`/auth/profile`、`/auth/avatar`
- 评论：`GET/POST /comments`、`PUT/DELETE /comments/:id`、`POST /comments/:id/like`
- 书签：`GET/POST /bookmarks`、`GET /bookmarks/check`、`DELETE /bookmarks/:id`
- 统计：`POST /analytics/view`、`POST /analytics/duration`
- 反馈：`GET /feedback/status`、`POST /feedback`

## 鉴权约定

- Access Token 保存在 `auth.access_token`
- Refresh Token 保存在 `auth.refresh_token`
- 受保护接口通过 `Authorization: Bearer <token>` 传递
- 401 时前端会自动调用 `/auth/refresh`

## 特殊请求

- 头像上传必须使用 `multipart/form-data`
- 上传字段名固定为 `avatar`
- OAuth 登录完成后，popup 会通过 `auth:oauth:result` 向 opener 回传结果

## 未启用能力时的表现

- `backend.enabled = false`：前端整体不展示后端能力
- 某个 `backend.features.* = false`：只关闭对应 UI，不影响其他功能
- `feedback.endpoint` 不可用：反馈组件会隐藏，而不是显示一个坏掉的提交表单

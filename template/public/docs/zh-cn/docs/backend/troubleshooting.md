---
title: 常见问题
description: 排查 React Docs UI 模板接入后端时常见的 OAuth、SMTP、代理、鉴权和功能显示问题
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# 常见问题

## 登录按钮出现了，但点了没反应

- 检查浏览器是否拦截 popup
- 检查 `backend.features.auth` 是否开启
- 检查 `/api/auth/oauth/:provider/start` 是否能访问

## 页面一直 401

- Access Token 可能过期
- `/api/auth/refresh` 可能不可用
- Redis 未启动时，refresh token 和 OAuth state 都会出问题

## 评论、书签、反馈没有显示

- 检查 `backend.enabled`
- 检查对应 `backend.features.comments` / `bookmarks` / `feedback`
- 检查后端接口是否存在并可返回 200

## SMTP 发不出去邮件

- 密码可能需要应用专用密码
- `587` 时通常要开启 `starttls`
- 服务器可能被防火墙拦截出站端口

## Google / GitHub 登录报回调不匹配

- 开放平台回调地址和后端 `redirect_uri` 不一致
- 本地和生产环境地址混用了
- 不要把前端地址填进 callback URL

## 头像上传失败

- 请求必须是 `multipart/form-data`
- 字段名必须叫 `avatar`
- 后端需要暴露 `/api/avatar/*`

## `/api` 代理没有生效

- 检查模板 `vite.config.ts` 是否仍保留 `/api -> http://localhost:3000`
- 检查后端是否真的启动在 `3000`
- 如果你改了后端端口，也要同步修改代理目标

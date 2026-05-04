---
title: Google / GitHub OAuth
description: 为 React Docs UI 模板准备 Google 和 GitHub 第三方登录所需材料，并完成本地与生产配置
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# Google / GitHub OAuth

模板当前推荐接入 Google 和 GitHub，两者都由后端完成 callback，前端只负责打开 popup 并接收结果。

## 先准备什么

- 一个前端 origin，例如 `http://localhost:5173`
- 一个后端 origin，例如 `http://localhost:3000`
- 对应平台的 `client_id` 和 `client_secret`
- 与后端配置完全一致的回调地址

## 本地开发填写方式

Google：

- Authorized JavaScript origins：`http://localhost:5173`
- Authorized redirect URI：`http://localhost:3000/api/auth/oauth/google/callback`

GitHub：

- Homepage URL：`http://localhost:5173`
- Authorization callback URL：`http://localhost:3000/api/auth/oauth/github/callback`

## 后端配置示例

```toml
[auth]
frontend_base_url = "http://localhost:5173"

[auth.providers.google]
enabled = true
client_id = "your-google-client-id"
client_secret = "your-google-client-secret"
redirect_uri = "http://localhost:3000/api/auth/oauth/google/callback"

[auth.providers.github]
enabled = true
client_id = "your-github-client-id"
client_secret = "your-github-client-secret"
redirect_uri = "http://localhost:3000/api/auth/oauth/github/callback"
```

## 生产环境规则

- `frontend_base_url`：填前端站点地址
- `redirect_uri`：填真正处理 callback 的后端地址

不要把两者写成同一个地址。

## 常见问题

- Google 提示 redirect_uri_mismatch：开放平台配置与后端配置不一致
- GitHub 登录后拿不到邮箱：账号没有公开主邮箱，后端会回退查询邮箱列表
- popup 被拦截：浏览器阻止弹窗，需要允许后重试

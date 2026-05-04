---
title: 能力准备清单
description: 在启用 React Docs UI 后端能力前，需要准备好的环境、账号和配置材料
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# 能力准备清单

在你打开 `backend` 功能之前，建议先把下面几类材料准备齐。

## 基础环境

- 前端站点地址：本地通常是 `http://localhost:5173`
- 后端 API 地址：本地通常是 `http://localhost:3000`
- 数据库：SQLite / MySQL / PostgreSQL 任选其一
- Redis：用于 token、验证码、OAuth state
- JWT 密钥：生产环境请使用强随机字符串

## 登录与账号体系

- 邮箱验证码登录：需要可用 SMTP
- Google OAuth：需要 Google Cloud 项目、OAuth Client、回调地址
- GitHub OAuth：需要 GitHub OAuth App、回调地址
- 用户头像：需要后端对 `/api/avatar/*` 做静态资源暴露

## 内容互动能力

- 评论：需要 comments 相关表与鉴权
- 书签：需要 bookmarks 相关表与鉴权
- 反馈：需要 `/api/feedback/status` 和 `/api/feedback`
- 统计：需要 `/api/analytics/view` 与 `/api/analytics/duration`

## 配置材料建议一次收集

- 生产前端域名
- 生产后端域名
- Google `client_id` / `client_secret`
- GitHub `client_id` / `client_secret`
- SMTP 主机、端口、账号、密码、发件邮箱、发件人名称
- 数据库连接信息
- Redis 连接信息

## 一条经验

不要先在前端把所有按钮都打开，再回头补能力。  
更稳妥的顺序是：后端部署 -> 迁移 -> SMTP / OAuth -> 联调 -> 最后启用 `backend.features.*`。

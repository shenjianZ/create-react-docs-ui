---
title: 后端集成
description: 了解 React Docs UI 模板启用认证、评论、书签、统计和反馈能力所需的后端准备工作
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# 后端集成

如果你准备启用登录、评论、书签、统计、反馈或服务端 PDF，这一组文档就是模板项目的后端接入入口。

## 先读什么

- [接入概览](/docs/backend/overview) - 前端依赖哪些后端能力，以及配置如何生效
- [部署 Rust 后端](/docs/backend/deploy-rust-backend) - 使用官方 `web-rust-template-project` 跑通本地或生产后端
- [能力准备清单](/docs/backend/capability-preparation) - 上线前要准备的域名、数据库、Redis、密钥、回调地址
- [邮箱 SMTP 配置](/docs/backend/email-smtp) - 邮箱验证码发送能力的配置方法
- [Google / GitHub OAuth](/docs/backend/oauth-google-github) - 第三方登录材料准备和配置教程
- [接口约定](/docs/backend/endpoint-contract) - 前端当前实际依赖的接口与返回格式
- [常见问题](/docs/backend/troubleshooting) - 401、OAuth、SMTP、代理和权限问题排查

## 适用范围

本文档默认以仓库中的 `web-rust-template-project` 作为官方参考后端实现。

- 前端文档站默认运行在 `http://localhost:5173`
- 业务后端默认运行在 `http://localhost:3000`
- 模板内置 Vite 代理会把 `/api` 转发到 `http://localhost:3000`

如果你使用其他后端框架，也至少需要满足本组文档中的能力清单和接口契约。

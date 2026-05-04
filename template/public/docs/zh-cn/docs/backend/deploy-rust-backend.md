---
title: 部署 Rust 后端
description: 使用官方 web-rust-template-project 部署 React Docs UI 所需的后端服务
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# 部署 Rust 后端

推荐直接使用仓库中的 `web-rust-template-project` 作为 React Docs UI 的官方参考后端。

## 本地最短启动路径

```bash
cd web-rust-template-project
cargo run
```

默认会启动在 `http://localhost:3000`，并暴露 `/api/*` 接口。

## 启动前要确认的依赖

- 数据库：SQLite 可直接起步；MySQL / PostgreSQL 适合正式环境
- Redis：用于 refresh token、邮箱验证码、OAuth state 等缓存
- Rust 工具链：建议使用仓库当前锁定的稳定版本

## 升级认证能力前的步骤

如果你要启用邮箱验证码或 OAuth，不要只靠自动建表。

1. 先备份数据库
2. 执行 `docs/sql/migrations/auth-upgrade.*.sql`
3. 配置 `auth.email_verification.*`、`auth.providers.*`
4. 再启动新版本服务

## 生产部署建议

- 前端站点：`https://docs.example.com`
- 后端 API：`https://api.example.com`
- 反向代理：把后端 `/api` 与 `/api/avatar` 暴露给外部
- 前端配置：生产环境保持 `backend.baseUrl: "/api"`，由网关或同域代理转发

## 可复用的后端文档

- `web-rust-template-project/README.md`
- `docs/development/getting-started.md`
- `docs/development/auth-upgrade.md`
- `docs/deployment/environment-variables.md`
- `docs/deployment/production-guide.md`

如果你要部署服务端 PDF，请继续阅读模板中的 [PDF Server 部署](/docs/guide/pdf-server)。

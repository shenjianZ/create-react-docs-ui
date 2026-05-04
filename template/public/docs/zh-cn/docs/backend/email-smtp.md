---
title: 邮箱 SMTP 配置
description: 为 React Docs UI 模板启用邮箱验证码发送能力，并完成 SMTP 配置和验证
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# 邮箱 SMTP 配置

邮箱验证码注册和邮箱验证码登录都依赖后端 SMTP 配置。

## 必填字段

参考 `web-rust-template-project/docs/development/auth-upgrade.md`，至少需要：

- `auth.email_verification.smtp.enabled = true`
- `host`
- `port`
- `username`
- `password`
- `from_email`
- `from_name`
- `starttls`

## 常见配置

```toml
[auth.email_verification.smtp]
enabled = true
host = "smtp.gmail.com"
port = 587
username = "your.name@example.com"
password = "your-app-password"
from_email = "your.name@example.com"
from_name = "React Docs"
starttls = true
```

## 选择 587 还是 465

- `587 + starttls = true`：更常见，推荐优先尝试
- `465`：部分服务商要求隐式 TLS，此时通常关闭 `starttls`

## 上线前检查

- 邮箱服务商是否允许 SMTP
- 是否需要应用专用密码，而不是邮箱登录密码
- `from_email` 是否与服务商发信规则一致
- 服务端是否能访问 SMTP 主机和端口

## 验证方式

后端启动后，请直接调用：

```bash
curl -X POST http://localhost:3000/api/auth/email/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","purpose":"register"}'
```

如果失败，优先检查账号密码、端口、防火墙和邮箱服务商安全策略。

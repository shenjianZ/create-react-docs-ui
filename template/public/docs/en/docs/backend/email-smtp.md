---
title: Email SMTP
description: Configure SMTP for email verification codes used by the React Docs UI template
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# Email SMTP

Email-code registration and email-code login both depend on SMTP in the backend.

## Required fields

At minimum:

- `auth.email_verification.smtp.enabled = true`
- `host`
- `port`
- `username`
- `password`
- `from_email`
- `from_name`
- `starttls`

## Example

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

## 587 or 465

- `587 + starttls = true`: preferred default
- `465`: used by some providers with implicit TLS

## Validation

```bash
curl -X POST http://localhost:3000/api/auth/email/send-code \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","purpose":"register"}'
```

If sending fails, check your provider policy, app password, firewall, and port accessibility first.

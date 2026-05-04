---
title: Overview
description: Overview of the backend capabilities, config switches, and local integration flow used by the React Docs UI template
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# Overview

The template separates backend support into two layers:

1. `backend`: business APIs for auth, comments, bookmarks, analytics, and feedback.
2. `export.pdfServer`: server-side PDF generation. It is separate from `backend.baseUrl`.

## Capabilities currently supported

- User auth: email/password, email-code login, Google / GitHub OAuth
- Comments: list, create, reply, edit, delete, like
- Bookmarks: create, remove, status check
- Analytics: page-view and duration tracking
- Page feedback: status check and submit
- Avatar upload via `multipart/form-data`

## How config controls the UI

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

- `backend.enabled = false`: hide the whole backend-driven UI
- `backend.features.auth = false`: hide login and user menu
- `backend.features.comments = false`: hide comments
- `backend.features.bookmarks = false`: hide bookmarks
- `backend.features.analytics = false`: stop analytics reporting
- `backend.features.feedback = false`: hide feedback even if `feedback.endpoint` exists

## Default local integration flow

- Docs frontend: `pnpm dev` on `http://localhost:5173`
- Rust backend: `cargo run` on `http://localhost:3000`
- Built-in proxy: `/api -> http://localhost:3000`

Start with [Deploy Rust Backend](/docs/backend/deploy-rust-backend), then continue with capability prep, SMTP, and OAuth setup.

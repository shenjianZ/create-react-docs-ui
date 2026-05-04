---
title: Backend Integration
description: Learn what backend capabilities React Docs UI needs for auth, comments, bookmarks, analytics, feedback, and server-side PDF
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# Backend Integration

If you want login, comments, bookmarks, analytics, feedback, or server-side PDF export, this section is the backend entry point for the template project.

## Recommended reading order

- [Overview](/docs/backend/overview) - What backend capabilities the frontend expects
- [Deploy Rust Backend](/docs/backend/deploy-rust-backend) - Run the official `web-rust-template-project`
- [Capability Preparation](/docs/backend/capability-preparation) - Collect domains, secrets, database, Redis, SMTP, and OAuth credentials
- [Email SMTP](/docs/backend/email-smtp) - Configure verification email sending
- [Google / GitHub OAuth](/docs/backend/oauth-google-github) - Prepare and configure third-party login
- [Endpoint Contract](/docs/backend/endpoint-contract) - APIs the frontend actually calls
- [Troubleshooting](/docs/backend/troubleshooting) - Debug 401s, SMTP, OAuth, proxy, and permission issues

## Default setup used in this doc set

This section treats `web-rust-template-project` as the official reference backend.

- Docs frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`
- Dev proxy: `/api -> http://localhost:3000`

If you use another backend stack, you still need to satisfy the capability list and endpoint contract described here.

---
title: Capability Preparation
description: Checklist of infrastructure, accounts, secrets, and callback URLs required before enabling backend features
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# Capability Preparation

Before you enable backend-driven UI, collect the following inputs first.

## Core environment

- Frontend site URL, usually `http://localhost:5173`
- Backend API URL, usually `http://localhost:3000`
- One database: SQLite, MySQL, or PostgreSQL
- Redis for tokens, email codes, and OAuth state
- A strong JWT secret for production

## Login and account features

- SMTP for email-code auth
- Google OAuth credentials
- GitHub OAuth credentials
- Static avatar hosting through `/api/avatar/*`

## Interactive content features

- Comments tables and auth support
- Bookmarks tables and auth support
- `/api/feedback/status` and `/api/feedback`
- `/api/analytics/view` and `/api/analytics/duration`

## Collect these values together

- Frontend production domain
- Backend production domain
- Google `client_id` / `client_secret`
- GitHub `client_id` / `client_secret`
- SMTP host, port, username, password, sender email, sender name
- Database connection values
- Redis connection values

Recommended order: backend deployment -> migrations -> SMTP / OAuth -> local integration -> enable `backend.features.*`.

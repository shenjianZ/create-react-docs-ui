---
title: Endpoint Contract
description: APIs, auth rules, and response conventions currently required by the React Docs UI template
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# Endpoint Contract

The template assumes business APIs live under `/api` and return a shared envelope:

```json
{ "code": 200, "message": "success", "data": {} }
```

## APIs the frontend currently depends on

- Auth: `/auth/login`, `/auth/login/email-code`, `/auth/email/send-code`, `/auth/register`
- OAuth: `/auth/oauth/:provider/start`, `/auth/oauth/:provider/callback`
- Token: `/auth/refresh`, `/auth/delete-refresh-token`
- User: `/auth/me`, `/auth/profile`, `/auth/avatar`
- Comments: `GET/POST /comments`, `PUT/DELETE /comments/:id`, `POST /comments/:id/like`
- Bookmarks: `GET/POST /bookmarks`, `GET /bookmarks/check`, `DELETE /bookmarks/:id`
- Analytics: `POST /analytics/view`, `POST /analytics/duration`
- Feedback: `GET /feedback/status`, `POST /feedback`

## Auth rules

- Access token key: `auth.access_token`
- Refresh token key: `auth.refresh_token`
- Protected APIs use `Authorization: Bearer <token>`
- The frontend retries with `/auth/refresh` on 401

## Special request rules

- Avatar upload must use `multipart/form-data`
- The upload field name must be `avatar`
- OAuth popup completion is reported with `auth:oauth:result`

## UI behavior when features are disabled

- `backend.enabled = false`: hide backend-driven UI entirely
- `backend.features.* = false`: hide only the matching feature
- Unavailable `feedback.endpoint`: hide the feedback block instead of showing a broken submit form

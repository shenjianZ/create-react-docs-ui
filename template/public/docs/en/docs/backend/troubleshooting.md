---
title: Troubleshooting
description: Common fixes for OAuth, SMTP, proxy, auth, and feature visibility issues in the React Docs UI template
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# Troubleshooting

## The login button opens nothing

- The browser may be blocking popups
- `backend.features.auth` may be disabled
- `/api/auth/oauth/:provider/start` may be unreachable

## The app keeps returning 401

- Access tokens may have expired
- `/api/auth/refresh` may be failing
- Redis is required for refresh tokens and OAuth state

## Comments, bookmarks, or feedback are missing

- Check `backend.enabled`
- Check `backend.features.comments`, `bookmarks`, and `feedback`
- Confirm the backend endpoints return 200

## SMTP does not send mail

- Your provider may require an app password
- `587` usually expects `starttls = true`
- Outbound mail ports may be blocked by the server firewall

## Google / GitHub says callback mismatch

- The platform callback URL does not match backend `redirect_uri`
- Local and production URLs were mixed
- The frontend URL was used where the backend callback URL was required

## Avatar upload fails

- The request must be `multipart/form-data`
- The field name must be `avatar`
- The backend must expose `/api/avatar/*`

## `/api` proxy is not working

- Check `vite.config.ts` still points `/api` to `http://localhost:3000`
- Confirm the backend is actually running on port `3000`

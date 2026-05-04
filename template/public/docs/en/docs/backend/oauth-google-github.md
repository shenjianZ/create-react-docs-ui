---
title: Google / GitHub OAuth
description: Prepare and configure Google and GitHub third-party login for the React Docs UI template
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# Google / GitHub OAuth

The template currently recommends Google and GitHub. The backend handles the callback; the frontend only opens a popup and receives the result.

## What you need first

- A frontend origin such as `http://localhost:5173`
- A backend origin such as `http://localhost:3000`
- Platform `client_id` and `client_secret`
- Callback URLs that exactly match backend config

## Local development setup

Google:

- Authorized JavaScript origins: `http://localhost:5173`
- Authorized redirect URI: `http://localhost:3000/api/auth/oauth/google/callback`

GitHub:

- Homepage URL: `http://localhost:5173`
- Authorization callback URL: `http://localhost:3000/api/auth/oauth/github/callback`

## Backend config example

```toml
[auth]
frontend_base_url = "http://localhost:5173"

[auth.providers.google]
enabled = true
client_id = "your-google-client-id"
client_secret = "your-google-client-secret"
redirect_uri = "http://localhost:3000/api/auth/oauth/google/callback"

[auth.providers.github]
enabled = true
client_id = "your-github-client-id"
client_secret = "your-github-client-secret"
redirect_uri = "http://localhost:3000/api/auth/oauth/github/callback"
```

## Important rule

- `frontend_base_url`: the frontend site that opens the popup
- `redirect_uri`: the backend callback endpoint

Do not use the same URL for both.

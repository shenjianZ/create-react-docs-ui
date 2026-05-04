---
title: Deploy Rust Backend
description: Run the official web-rust-template-project backend used by React Docs UI
author: React Docs UI Team
createdAt: 2026-04-25
lastUpdated: 2026-04-25
---

# Deploy Rust Backend

The recommended backend for React Docs UI is the `web-rust-template-project` included in this workspace.

## Shortest local startup path

```bash
cd web-rust-template-project
cargo run
```

By default the service starts at `http://localhost:3000` and exposes `/api/*`.

## Dependencies to confirm first

- Database: SQLite for the quickest start, MySQL / PostgreSQL for real deployments
- Redis: required for refresh tokens, email codes, and OAuth state
- Rust toolchain: use the project-supported stable toolchain

## Before enabling upgraded auth features

Do not rely only on automatic table creation.

1. Back up your database
2. Run `docs/sql/migrations/auth-upgrade.*.sql`
3. Configure `auth.email_verification.*` and `auth.providers.*`
4. Start the upgraded service

## Production deployment suggestion

- Frontend site: `https://docs.example.com`
- Backend API: `https://api.example.com`
- Reverse proxy: expose `/api` and `/api/avatar`
- Frontend config: keep `backend.baseUrl: "/api"` and let your gateway proxy it

Useful backend docs:

- `web-rust-template-project/README.md`
- `docs/development/getting-started.md`
- `docs/development/auth-upgrade.md`
- `docs/deployment/environment-variables.md`
- `docs/deployment/production-guide.md`

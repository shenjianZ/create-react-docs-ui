---
title: SEO Page Override Test
description: This page verifies that page-level frontmatter overrides the default SEO configuration.
canonical: https://your-docs-site.example.com/en/docs/test/seo-test
author: Development Team
createdAt: 2026-03-27
lastUpdated: 2026-03-27
---

# SEO Page Override Test

This page is intended to verify page-level SEO overrides from frontmatter.

## Expected result

Open DevTools and inspect `head`:

- `document.title` should include "SEO Page Override Test"
- `meta[name="description"]` should use this page description
- `link[rel="canonical"]` should match the frontmatter canonical
- `meta[property="og:title"]` should match the page title
- `meta[property="og:url"]` should match the canonical

## Notes

This page does not set `noindex: true`.
Use a separate page for noindex verification because `noindex` suppresses canonical behavior.

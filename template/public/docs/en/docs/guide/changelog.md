---
title: Changelog Module
description: Explains how to enable and maintain Changelog / Release Notes in the template project.
author: React Docs UI Team
createdAt: 2026-03-27
---

# Changelog Module

The template project includes built-in Changelog / Release Notes support.

## Files you maintain

- Site config: `public/config/site.yaml` and `public/config/site.en.yaml`
- Release entries: `public/docs/<lang>/changelog/*.md`
- Index script: `scripts/generate-changelog-index.js`

## Route conventions

- List page: `/:lang/changelog`
- Detail page: `/:lang/changelog/:slug`

## Frontmatter example

```yaml
---
title: v0.1.0 Release Notes
version: v0.1.0
date: 2026-03-27
summary: First public release with the core documentation site features.
type: release
breaking: false
---
```

## Add a new changelog item

1. Create a new Markdown or MDX file in each language directory.

```text
public/docs/zh-cn/changelog/v0.2.0.md
public/docs/en/changelog/v0.2.0.md
```

2. Use the file name as the release slug. The file above becomes:

- `/zh-cn/changelog/v0.2.0`
- `/en/changelog/v0.2.0`

3. Fill in frontmatter first, then write the release notes body.

Recommended fields:

- `title`: display title on the detail page
- `version`: release version shown in the list
- `date`: used for sorting, newest first
- `summary`: short list-page summary
- `type`: `release`, `feature`, `fix`, `breaking`, or `deprecation`
- `breaking`: `true` or `false`
- `draft`: optional, set to `true` to hide the item from the list

4. Regenerate the changelog index.

```bash
pnpm prepare:docs
```

`predev` and `prebuild` already call this for you, but run it manually if you want to refresh the JSON index immediately.

## Complete example

```md
---
title: v0.2.0 Release Notes
version: v0.2.0
date: 2026-04-02
summary: Added API pages and improved search relevance.
type: feature
breaking: false
draft: false
---

## Highlights

- Added API reference pages.
- Improved full-text search ranking.
```

If you want bilingual release notes, keep `zh-cn` and `en` entries aligned and regenerate the index after adding, renaming, or deleting files.

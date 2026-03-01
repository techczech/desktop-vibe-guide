---
description: >
  Log editorial changes to the changelog. Reads recent git diff or manual description,
  classifies the change, updates frontmatter dates, and appends to changelog.jsonl.
  Invoke with /doc-changelog.
---

# /doc-changelog

Editorial change logger for Desktop Vibe Guide.

## When to Use

After making editorial changes to docs — manually or via other editorial skills.

## Steps

1. **Determine what changed** — Read `git diff` for recent changes to `docs/`, or accept a manual description
2. **Classify** — Pick the type: `audit`, `edit`, `structure`, `terms`, `style`, `research`, `system`
3. **Identify affected files** — List doc filenames
4. **Update frontmatter** — Set `updated` date to today on each affected doc
5. **Draft changelog entry** — Show it to the user for confirmation
6. **Append** — Add to `editorial-workspace/changelog.jsonl`

## Entry Format

```json
{"date":"2026-03-01","type":"edit","description":"Updated Homebrew install instructions","files":["mac-setup-guide.md"],"agent":"doc-changelog"}
```

See `editorial-workspace/core/references/changelog-schema.md` for full field definitions.

## Invocation

**From git diff:** `/doc-changelog`
**With description:** `/doc-changelog "Updated setup instructions for new Antigravity version"`

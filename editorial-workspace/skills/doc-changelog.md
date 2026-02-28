---
description: Log editorial changes to the changelog. Reads recent git diff or manual description, summarizes the change, updates frontmatter dates, and appends to changelog.jsonl. Invoke with /doc-changelog.
---

# /doc-changelog

Editorial change logger for Desktop Vibe Guide.

## When to Use

After making editorial changes to docs — manually or via other editorial skills. This skill captures what was done for the project's editorial history.

## Steps

1. **Determine what changed** — Either:
   - Read `git diff` for recent uncommitted changes to `docs/`
   - Accept a manual description from the user
2. **Classify the change** — Pick the appropriate type:
   - `audit` — structural compliance fix
   - `edit` — content modification
   - `structure` — reorganization, new sections, moved content
   - `terms` — terminology correction
   - `style` — voice/tone adjustment
   - `research` — factual update based on verification
   - `system` — editorial system changes (config, glossary schema, etc.)
3. **Identify affected files** — List the doc filenames (just names, not paths)
4. **Update frontmatter** — Set `updated` date to today on each affected doc
5. **Append to changelog** — Add one JSONL entry to `editorial-workspace/changelog.jsonl`:
   ```json
   {"date":"2026-02-28","type":"edit","description":"Updated Homebrew install instructions for macOS Sequoia","files":["mac-setup-guide.md"],"agent":"doc-changelog"}
   ```
6. **Confirm** — Show the user the changelog entry before appending

## Invocation

**From git diff:** `/doc-changelog`

**With description:** `/doc-changelog "Updated setup instructions for new Antigravity version"`

## Schema Reference

See `editorial-workspace/core/references/changelog-schema.md` for full field definitions.

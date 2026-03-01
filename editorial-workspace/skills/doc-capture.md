---
description: >
  End-of-session capture for editorial work. Summarizes decisions, updates changelog and
  frontmatter, captures learnings (including voice guide changes) to lessons-learned.md,
  and lists open items. Invoke with /doc-capture.
---

# /doc-capture

Session capture for Desktop Vibe Guide editorial work.

## How to Run

1. Read the generic workflow: `editorial-workspace/core/references/capture-workflow.md`
2. Review what was done in this session
3. Update changelog, frontmatter, glossary, and lessons learned
4. Present summary with open items

## When to Use

Run at the end of any editorial session — after reviews, edits, audits, or term discovery.

## Steps

1. **Summarize** what was done: docs edited, decisions made, patterns discovered
2. **Check changelog** — ensure every edit has an entry in `editorial-workspace/changelog.jsonl`
3. **Update frontmatter** — set `updated` to today on modified docs
4. **Update glossary** — add terms discovered during the session to `editorial-workspace/glossary.json`
5. **Capture voice guide changes** — if `/doc-review` was run, note what changed in the voice guide
6. **Log learnings** — append to `editorial-workspace/guides/lessons-learned.md`
7. **List open items** — note unfinished work
8. **Present summary** — show recap

## Invocation

**End of session:** `/doc-capture`
**With notes:** `/doc-capture "Focused on fixing Next Steps sections across all docs"`

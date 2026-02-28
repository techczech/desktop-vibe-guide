---
description: End-of-session capture for editorial work. Summarizes decisions, updates changelog and frontmatter, captures learnings to lessons-learned.md, and lists open items. Invoke with /doc-capture.
---

# /doc-capture

Session capture for Desktop Vibe Guide editorial work.

## Quick Start

1. Read the generic workflow: `editorial-workspace/core/references/capture-workflow.md`
2. Follow the steps below with project-specific paths

## When to Use

Run at the end of any editorial session — after reviews, edits, audits, or pipeline runs.

## Steps

### 1. Summarize What Happened
Review the current session: what docs were edited, what decisions were made, what was discovered.

### 2. Ensure Changelog Is Complete
Check `editorial-workspace/changelog.jsonl` — every edit from this session should have an entry. If any are missing, draft and append them.

### 3. Update Frontmatter Dates
For every doc modified in this session, set `updated:` to today's date in the YAML frontmatter.

### 4. Update Glossary
If new terms were introduced or existing definitions refined, update `editorial-workspace/glossary.json`.

### 5. Capture Learnings
Append to `editorial-workspace/guides/lessons-learned.md`:
- Style decisions with rationale
- Common issues found (for future audits to catch)
- Patterns that worked well
- Things to watch for

### 6. List Open Items
Note anything unfinished for the next session.

### 7. Present Summary
Show a concise recap: what was done, decisions made, learnings, open items, files modified.

## Invocation

**End of session:** `/doc-capture`

**With notes:** `/doc-capture "Focused on fixing Next Steps sections across all docs"`

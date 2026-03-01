---
description: >
  Audit documentation across five dimensions: structural compliance, content completeness,
  cross-doc consistency, navigation/discoverability, and audience fit. Proposes findings
  and asks before fixing. Invoke with /doc-audit.
---

# /doc-audit

Exploratory documentation audit for Desktop Vibe Guide.

## How to Run

1. Read the generic workflow: `editorial-workspace/core/references/audit-workflow.md`
2. Read project rules: `editorial-workspace/rules/structural-rules.md`
3. Read project config: `editorial-workspace/editorial-config.json`
4. Scan target doc(s) across all five dimensions, then present findings and ask which to fix

## Project Context

**Audience**: Researchers, academics, and non-developers.
**Docs location**: `docs/`
**19 docs** across 6 categories (see `editorial-config.json` for details).

### Structural Rules (from rules/structural-rules.md)

- YAML frontmatter required (title, status, updated, template, category)
- H1 title with trailing emoji
- `---` between H2 sections
- `## Next Steps` section (3-4 links), except about.md
- Footer: `---\n\n*Last updated: YYYY-MM-DD*`
- `> **Try:** *"prompt text"*` format for interactive prompts
- Relative markdown links: `[Display Text](filename.md)`

### Cross-Doc Consistency

Known patterns to check:
- Single-source-of-truth: each concept has ONE canonical doc (see glossary `first_defined_in`)
- Director metaphor should be consistent across all docs that use it
- Platform flags (macOS/Windows) should use consistent format

### Navigation

- Next Steps should form coherent paths through the 6 categories
- Reference docs (Template C) should be well-linked from narrative docs
- about.md is the only doc exempt from Next Steps

### Audience Fit

- Target audience is smart but not technical
- Docs should explain developer concepts without assuming familiarity
- Examples should relate to research/academic workflows where possible

## Invocation

**Single doc:** `/doc-audit setup.md`
**All docs:** `/doc-audit`

## Output

Write report to `editorial-workspace/audit-reports/audit-YYYY-MM-DD.md`, append to `editorial-workspace/changelog.jsonl`, present findings grouped by dimension and sorted by severity. Ask which to fix.

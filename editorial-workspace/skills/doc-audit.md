---
description: Audit documentation for structural compliance. Run on a single doc or all docs in docs/. Use when checking frontmatter, heading structure, section separators, required sections, link integrity, or footer format. Invoke with /doc-audit.
---

# /doc-audit

Structural compliance checker for Desktop Vibe Guide docs.

## Quick Start

1. Read the generic workflow: `editorial-workspace/core/references/audit-workflow.md`
2. Read project rules: `editorial-workspace/rules/structural-rules.md`
3. Read project config: `editorial-workspace/editorial-config.json`
4. Follow the workflow steps with the project-specific checks below

## Project-Specific Checks

These checks supplement the generic audit workflow with this project's conventions.

### Frontmatter (from editorial-config.json)

Required fields: `title`, `status`, `updated`, `template`, `category`

Allowed `status` values: `draft`, `review`, `published`

Allowed `template` values: `A`, `B`, `C`, `D`

### Structure

1. **Emoji H1** — First heading must be `# Title 🎯` (H1 with trailing emoji)
2. **HR separators** — `---` between every H2 section
3. **Next Steps section** — Every doc must have `## Next Steps` with 3-4 links. Exception: `about.md`
4. **Footer** — Last lines must be `---\n\n*Last updated: YYYY-MM-DD*`
5. **Try: blocks** — Interactive prompts must use: `> **Try:** *"prompt text"*`

### Links

- Internal cross-references use relative markdown links: `[Display Text](filename.md)`
- Every `[text](file.md)` must point to an existing file in `docs/`
- External URLs must be well-formed

## Invocation

**Single doc:** `/doc-audit setup.md`

**All docs:** `/doc-audit` (no argument = scan all docs in `docs/`)

## Output

Write report to `editorial-workspace/audit-reports/audit-YYYY-MM-DD.md`, append to `editorial-workspace/changelog.jsonl`, and present findings inline sorted by severity: Critical → Warning → Suggestion.

After presenting findings, ask the user which to fix. Do not auto-fix.

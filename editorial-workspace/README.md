# Editorial Workspace

Systematic editorial infrastructure for the Desktop Vibe Guide documentation.

## Structure

- `core/` → symlink to the [doc-editorial-skill](~/gitrepos/02_workskills/doc-editorial-skill) (generic workflows)
- `rules/structural-rules.md` — this project's structural conventions
- `glossary.json` — canonical terminology for this project
- `changelog.jsonl` — append-only log of all editorial actions
- `editorial-config.json` — project-specific configuration
- `skills/` — assembled skills (core workflow + local rules)
- `agents/` — assembled subagents
- `audit-reports/` — output from audit runs (gitignored)
- `research/` — fact-checking workspace (gitignored)

## Quick Start

```bash
# Run an audit
/doc-audit

# Check terminology
/doc-terms

# Full editorial pipeline
/doc-pipeline

# After editing, log changes
/doc-changelog
```

## How Skills Work

Each skill in `skills/` combines a generic workflow from `core/references/` with local rules from `rules/`, `glossary.json`, and `agents-instructions/`. The core provides the HOW; this workspace provides the WHAT.

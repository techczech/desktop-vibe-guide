---
description: Review documentation for voice, tone, and style consistency. Checks against the project voice guide, doc templates, readability, progressive disclosure, and jargon handling. Invoke with /doc-review.
---

# /doc-review

Voice, tone, and style reviewer for Desktop Vibe Guide docs.

## Quick Start

1. Read the generic workflow: `editorial-workspace/core/references/review-workflow.md`
2. Read the voice guide: `editorial-workspace/guides/voice-and-tone.md`
3. Read doc templates: `editorial-workspace/guides/doc-templates.md`
4. Read project config: `editorial-workspace/editorial-config.json`
5. Follow the workflow steps with the project-specific context below

## Project Voice Summary

- **Tone**: Conversational, encouraging, never condescending
- **Reading level**: Non-developers (researchers, academics)
- **Jargon rule**: Explain every technical term on first use, or link to its canonical doc
- **Metaphor**: "Director" — user directs, AI executes
- **Format**: Short paragraphs, concrete examples, "Try:" blocks for hands-on learning

### Template Types

| Template | Purpose | Key feature |
|----------|---------|-------------|
| A (start) | Zero-knowledge entry points | Mental model first, then "Try:" blocks |
| B (core) | Assumes prior experience | Deeper skill focus, builds on A docs |
| C (reference) | Lookup material | Scannable, table-heavy, not narrative |
| D (meta) | About, etc. | Project context |

### What to Flag

- Sentences starting with "Simply..." or "Just..." (implies it's obvious)
- Unexplained acronyms (API, CLI, SSH, DNS, etc.)
- Paragraphs >4 sentences without a break
- Missing "Try:" blocks in Template A docs
- Re-explanations of concepts that have a canonical doc (violates single-source)

## Invocation

**Single doc:** `/doc-review setup.md`

**All docs:** `/doc-review`

## Output

Write report to `editorial-workspace/audit-reports/review-YYYY-MM-DD.md`, append to `editorial-workspace/changelog.jsonl`, present suggestions inline grouped by: Critical tone issues → Structural gaps → Polish.

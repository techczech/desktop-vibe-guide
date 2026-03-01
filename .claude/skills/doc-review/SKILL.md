---
description: >
  Review documentation for voice, tone, and style. Checks against the project voice guide,
  then evolves the guide based on user feedback (accept/reject/rank). The voice guide is a
  living document that improves with each review. Invoke with /doc-review.
---

# /doc-review

Voice, tone, and style reviewer for Desktop Vibe Guide. The voice guide evolves from your feedback.

## How to Run

1. Read the generic workflow: `editorial-workspace/core/references/review-workflow.md`
2. Read the voice guide: `editorial-workspace/guides/voice-and-tone.md`
3. Read doc templates: `editorial-workspace/guides/doc-templates.md`
4. Read project config: `editorial-workspace/editorial-config.json`
5. Scan doc(s), present findings, ask for accept/reject/rank, then update the voice guide

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

## Feedback Loop

After presenting findings:
1. Ask user to **accept** or **reject** each finding
2. Ask which **categories** of issues matter most
3. **Update the voice guide** based on decisions:
   - Rejected findings → add exceptions or clarifications to the guide
   - Accepted patterns not yet in guide → add them
   - Category rankings → reorder priorities in the guide
   - Add a dated note summarizing what was learned

## Invocation

**Single doc:** `/doc-review setup.md`
**All docs:** `/doc-review`

## Output

Write report to `editorial-workspace/audit-reports/review-YYYY-MM-DD.md`, update `editorial-workspace/guides/voice-and-tone.md` based on feedback, append to `editorial-workspace/changelog.jsonl`. Present suggestions grouped by: Critical tone issues → Structural gaps → Polish.

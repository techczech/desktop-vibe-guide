# Lessons Learned

A living document. When you discover something that should inform future documentation work -- a pattern that worked, a mistake to avoid, a convention that needs updating -- add an entry here.

## Format for New Entries

```
### [YYYY-MM-DD] [Brief title]

**Context:** What you were doing
**Observation:** What you noticed
**Recommendation:** What to do about it
```

Append new entries at the **TOP** of the Log section (newest first).

---

## Log

### 2026-02-27 Initial corpus analysis

**Context:** Reviewed all 19 docs to extract conventions and create the editorial guides.

**Observations:**

1. **Missing `## Next Steps` sections.** Three docs that should have Next Steps don't:
   - `setup.md` -- ends with "The Golden Rule" and footer. Has inline links in "Understanding How the Agent Works" section but no formal `## Next Steps`.
   - `permissions-and-approvals.md` -- ends with a Summary table and footer. No Next Steps.
   - `planning-mode.md` -- ends with "Tips for Working with Plans" and footer. No Next Steps.

2. **Inconsistent section naming.** `why-desktop-agents.md` ends with `## Getting Started` instead of `## Next Steps`. It serves the same purpose (links to next docs) but breaks the naming convention.

3. **"Try:" block formatting varies.** Three distinct formats in use:
   - `key-concepts.md`: `> **Try:** *"prompt"*` (the standard per voice-and-tone.md)
   - Most other docs: `> *"prompt"*` (no "Try:" label)
   - `how-websites-work.md`: `**Ask the agent:** *"prompt"*` (inline, not blockquote)

   The `> **Try:** *"prompt"*` format from key-concepts.md is the clearest and should be the standard.

4. **Markdown overlap.** `file-formats.md` and `markdown-for-writers.md` both cover Markdown basics (headings, bold, lists, links). Per the single-source-of-truth principle, `markdown-for-writers.md` should be the canonical Markdown reference. `file-formats.md` should keep only a brief summary and link to it.

5. **Cross-reference density varies.** Start docs (why-desktop-agents, setup, key-concepts) have rich cross-linking. Some reference docs (git-github-basics.md, markdown-for-writers.md) have fewer inline cross-references to related docs.

6. **Horizontal rules mostly consistent.** Nearly all docs use `---` between every H2 section. Minor gaps in `git-github-basics.md` which omits some separators between early sections.

7. **Positive: Director metaphor is well-managed.** `why-desktop-agents.md` is the canonical source. `workflow.md` and `setup.md` correctly reference it with links rather than re-explaining. This is a good model for single-source-of-truth in practice.

8. **Positive: Footer dates are 100% consistent.** All docs use `*Last updated: February 27, 2026*` format.

**Recommendations:**
- Add `## Next Steps` sections to setup.md, permissions-and-approvals.md, and planning-mode.md
- Rename `## Getting Started` to `## Next Steps` in why-desktop-agents.md
- Standardize "Try:" blocks to `> **Try:** *"prompt here"*` format across all docs
- In file-formats.md, trim the Markdown basics section and link to markdown-for-writers.md
- Add a few cross-references from reference docs to related reference docs
- Add missing `---` separators in git-github-basics.md

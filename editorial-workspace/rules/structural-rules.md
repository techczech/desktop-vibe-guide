# Structural Rules — Desktop Vibe Guide

Project-specific conventions for all docs in `/docs/`.

## Required Elements

1. **YAML frontmatter** with required fields: title, status, updated, template, category
2. **H1 title with emoji** as the first heading: `# Title Here 🎯`
3. **Horizontal rules** (`---`) between every H2 section
4. **`## Next Steps` section** containing 3-4 relevant links (except `about.md`)
5. **Footer**: `---\n\n*Last updated: [DATE]*` as the last line
6. **Cross-references** use relative markdown links: `[Planning Mode](planning-mode.md)`
7. **Single source of truth**: each concept has ONE canonical doc; others link, don't re-explain

## Try: Block Format

Standard format for interactive prompts:

```
> **Try:** *"Your prompt here"*
```

Not `> *"prompt"*` (missing "Try:" label) and not `**Ask the agent:** *"prompt"*` (non-standard).

## Template Rules

- **Template A** (start docs): Zero-knowledge assumption, mental model first, "Try:" blocks
- **Template B** (core docs): Assumes prior experience, deeper skill focus
- **Template C** (reference docs): Lookup material, scannable structure
- **Template D** (meta pages): About, etc.

See `editorial-workspace/guides/doc-templates.md` for full template structures.

## Known Issues (from lessons-learned.md)

- 3 docs missing `## Next Steps`: setup.md, permissions-and-approvals.md, planning-mode.md
- `why-desktop-agents.md` uses `## Getting Started` instead of `## Next Steps`
- Try: block formatting varies across docs (3 different formats in use)
- `file-formats.md` and `markdown-for-writers.md` have markdown overlap (violates single-source)
- `git-github-basics.md` missing some `---` separators

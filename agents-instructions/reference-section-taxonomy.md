# Reference Section Taxonomy

The reference category contains 11 documents in a flat list. This file documents their logical groupings, cross-linking strategy, and a recommendation for future sidebar organization.

---

## Sub-Groups

### Platform Guides

Setup instructions specific to an operating system.

| Doc | Purpose |
|-----|---------|
| `mac-setup-guide.md` | Mac-specific prerequisites, Homebrew, tips, troubleshooting |
| `windows-setup-guide.md` | Windows-specific prerequisites, WSL, tips, troubleshooting |

**Cross-link pattern:** Both are linked from `setup.md` (the canonical getting-started doc). They link to each other only for comparison, not for content. Each ends with Next Steps pointing to key-concepts.md or antigravity-quickstart.md.

### Fundamentals

Background knowledge that helps the reader understand what agents do.

| Doc | Purpose |
|-----|---------|
| `terminal-basics.md` | CLI history, core commands, why it matters |
| `file-formats.md` | Markdown, JSON, CSV -- when to use which |
| `markdown-for-writers.md` | Markdown for text-heavy work, beyond code |

**Cross-link pattern:** `terminal-basics.md` is referenced from `workflow.md`. `markdown-for-writers.md` is the canonical Markdown reference; `file-formats.md` should cover the comparison angle (when to use which format) and link to `markdown-for-writers.md` for Markdown specifics. See [lessons-learned.md](lessons-learned.md) for the overlap issue.

### Web Development

Building and deploying web applications.

| Doc | Purpose |
|-----|---------|
| `how-websites-work.md` | Browsers, servers, React, localhost concepts |
| `webapp-hosting.md` | Cloudflare Pages, Vercel, complexity levels |
| `adding-ai-features.md` | Using Google AI Studio API in apps |

**Cross-link pattern:** These form a natural reading sequence: understand (`how-websites-work`) -> build (covered in core docs) -> deploy (`webapp-hosting`) -> enhance (`adding-ai-features`). Cross-links should follow this flow. `from-ai-studio.md` links backward into this group.

### Tools and Migration

Specific tools and transition pathways.

| Doc | Purpose |
|-----|---------|
| `git-github-basics.md` | Version control for non-developers |
| `alternative-agents.md` | Comparison of Antigravity, Cursor, Claude Code, etc. |
| `from-ai-studio.md` | Migration path from Google AI Studio prototyping |

**Cross-link pattern:** `git-github-basics.md` is referenced from `markdown-for-writers.md` and `workflow.md`. `alternative-agents.md` is relatively standalone. `from-ai-studio.md` links to `adding-ai-features.md` and `webapp-hosting.md`.

---

## Current Ordering in App.jsx

The `allDocs` array currently lists reference docs in this order:

1. mac-setup-guide (Platform)
2. windows-setup-guide (Platform)
3. terminal-basics (Fundamentals)
4. how-websites-work (Web Dev)
5. webapp-hosting (Web Dev)
6. adding-ai-features (Web Dev)
7. from-ai-studio (Tools)
8. alternative-agents (Tools)
9. file-formats (Fundamentals)
10. git-github-basics (Tools)
11. markdown-for-writers (Fundamentals)

The groups are partially clustered (Platform docs are adjacent, Web Dev docs are adjacent) but Fundamentals are scattered (positions 3, 9, 11).

---

## Sidebar Sub-Grouping Recommendation (Future Task)

The website sidebar currently shows all reference docs in a flat list under "Reference." Adding visual sub-headings would make the list scannable.

**Proposed approach:**

1. Add a `subCategory` field to reference docs in the `allDocs` array:
   ```javascript
   { id: 'mac-setup', ..., category: 'reference', subCategory: 'platform' }
   { id: 'terminal-basics', ..., category: 'reference', subCategory: 'fundamentals' }
   ```

2. Reorder to group by sub-category:
   - Platform: mac-setup, windows-setup
   - Fundamentals: terminal-basics, file-formats, markdown
   - Web Development: how-websites, hosting, ai-features
   - Tools & Migration: git-github, alternative-agents, ai-studio

3. Update sidebar rendering in `DocView` to show sub-headings within "Reference"

4. Optionally update the homepage "Reference" card grid to show sub-groups

**Proposed `subCategory` values:** `platform`, `fundamentals`, `webdev`, `tools`

**Note:** This is a UI enhancement, not a documentation change. The markdown files themselves don't need to change. Only App.jsx and possibly index.css need updates.

---

## When Adding a New Reference Doc

1. Determine which sub-group it belongs to (Platform / Fundamentals / Web Dev / Tools)
2. Place it adjacent to related docs in the `allDocs` array
3. Add cross-references to/from its sub-group siblings
4. Check for overlap with existing docs (single source of truth)
5. If it introduces a new sub-group, update this file

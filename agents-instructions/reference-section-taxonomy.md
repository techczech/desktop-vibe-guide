# Documentation Category Taxonomy

The documentation is organized into 6 navigational categories (plus `other` for the About page). Each category groups docs by *why* a reader needs them.

---

## Categories

### Why Desktop Agents (`why`)

The big picture — what agents are, how to think about them, and what's out there.

| Doc | Purpose |
|-----|---------|
| `why-desktop-agents.md` | Motivation: why agents beat copy-paste chatbot workflows |
| `key-concepts.md` | Mental models: workspaces, feedback loops, approval prompts |
| `alternative-agents.md` | Landscape: Antigravity vs Cursor vs Claude Code vs others |

### Getting Started (`start`)

Practical setup — install, configure, first project.

| Doc | Purpose |
|-----|---------|
| `setup.md` | Main getting-started guide, links to platform guides |
| `antigravity-quickstart.md` | First project walkthrough |
| `mac-setup-guide.md` | Mac-specific prerequisites, Homebrew, troubleshooting |
| `windows-setup-guide.md` | Windows-specific prerequisites, WSL, troubleshooting |

**Cross-link pattern:** `setup.md` links to both platform guides. Platform guides link back to `antigravity-quickstart.md` as the next step.

### Working with Agents (`agents`)

Daily agent interaction skills.

| Doc | Purpose |
|-----|---------|
| `workflow.md` | Core workflow loop: describe → agent executes → verify → iterate |
| `permissions-and-approvals.md` | Permission system, trust levels, approval shortcuts |
| `planning-mode.md` | Three-stage lifecycle: planning → execution → verification |

### Writing & Documents (`writing`)

Content creation — need these when working with text, data, notes.

| Doc | Purpose |
|-----|---------|
| `markdown-for-writers.md` | Canonical Markdown reference; why it beats Word |
| `file-formats.md` | Markdown vs JSON vs CSV comparison; when to use which |

**Cross-link pattern:** `file-formats.md` links to `markdown-for-writers.md` for Markdown specifics.

### Building Web Apps (`webapps`)

Web dev pipeline: understand → deploy → enhance → migrate.

| Doc | Purpose |
|-----|---------|
| `how-websites-work.md` | Browsers, servers, localhost, React basics |
| `webapp-hosting.md` | Cloudflare Pages, Vercel, deployment options |
| `adding-ai-features.md` | Google AI Studio API integration |
| `from-ai-studio.md` | Migration path from AI Studio prototyping to local dev |

**Cross-link pattern:** These form a natural reading sequence. `from-ai-studio.md` links backward into this group.

### Tools for Agents (`agenttools`)

Tools agents use on your behalf — know what they are and why they matter, not how to use them yourself (agents handle the how).

| Doc | Purpose |
|-----|---------|
| `terminal-basics.md` | CLI history, core commands, why it matters |
| `git-github-basics.md` | Version control for non-developers |

**Cross-link pattern:** `terminal-basics.md` is referenced from `workflow.md`. `git-github-basics.md` is referenced from `markdown-for-writers.md` and `workflow.md`.

---

## Linear Reading Order

The `allDocs` array in `App.jsx` determines prev/next navigation. The order follows the category table above: why → start → agents → writing → webapps → agenttools → about.

---

## When Adding a New Doc

1. Determine which category it belongs to based on *why* a reader needs it
2. Place it adjacent to related docs in the `allDocs` array
3. Add cross-references to/from its category siblings
4. Check for overlap with existing docs (single source of truth)
5. If it introduces a new category, update `categoryMeta` in `App.jsx` and this file

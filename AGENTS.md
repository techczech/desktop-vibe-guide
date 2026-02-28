# AGENTS.md — Desktop Vibe Guide

Instructions for AI coding agents working on this project.

## Project Overview

- **Purpose**: A comprehensive guide for desktop productivity and "vibecoding" using Antigravity (Google's agentic AI IDE)
- **Target Audience**: Researchers, academics, and non-developers wanting to automate their desktop workflow
- **Philosophy**: If you can chat, you can build. Mastering the machine through AI-led collaboration.
- **Scope**: Cross-platform (macOS/Windows), covering file management, custom tools, and web development

## Environment

- macOS Apple Silicon (arm64) — primary dev machine
- Shell: zsh with Homebrew at /opt/homebrew
- Node.js managed via fnm (default: LTS)

## Tech Stack

- **Framework**: Vite + React (vanilla CSS, no Tailwind)
- **Content Rendering**: react-markdown for .md → HTML
- **Icons**: lucide-react
- **Routing**: react-router-dom
- **Hosting**: Cloudflare Pages via Wrangler

## Build Commands

```bash
cd website
pnpm install          # Install dependencies (pnpm is the package manager)
pnpm run dev          # Start dev server (http://localhost:5173)
pnpm run build        # Build for production (output: dist/)
```

## Documentation Architecture

- `/docs/` — Markdown source files (source of truth)
- `/website/public/docs/` — Copies served by the website (keep in sync via `./sync-docs.sh`)
- `/website/src/App.jsx` — Navigation config (`allDocs` array defines doc order, categories, metadata)

### Adding or Editing Documentation

1. Edit the `.md` file in `/docs/`
2. Run `./sync-docs.sh` to copy to `/website/public/docs/`
3. If adding a new doc, also add an entry to the `allDocs` array in `App.jsx`
4. Rebuild and redeploy

### Document Conventions

All markdown docs must follow these patterns:
- **H1 title with emoji**: `# Title Here 🎯`
- **Horizontal rules**: Use `---` between major sections
- **Next Steps section**: Every doc (except about.md) ends with `## Next Steps` containing 3-4 relevant links
- **Footer**: Every doc ends with `---\n\n*Last updated: [DATE]*`
- **Tone**: Conversational, encouraging, no jargon (or jargon explained immediately)
- **Single source of truth**: Each concept has ONE canonical doc. Other docs reference it with a brief mention and a link, not a re-explanation.
- **Cross-references**: Use relative markdown links like `[Planning Mode](planning-mode.md)`

### Documentation Authoring Guides

Detailed guidance for writing and structuring docs lives in `editorial-workspace/guides/`:

| You need to...                           | Read                            |
|------------------------------------------|---------------------------------|
| Write or rewrite a doc's content         | `editorial-workspace/guides/voice-and-tone.md` |
| Create a new doc or restructure one      | `editorial-workspace/guides/doc-templates.md`   |
| Understand what's gone wrong before      | `editorial-workspace/guides/lessons-learned.md` |
| Decide where a reference doc fits        | `editorial-workspace/guides/reference-section-taxonomy.md` |

**Audience reminder**: The Desktop Vibe Guide is for researchers, academics, and non-developers. They are smart but not technical. Every documentation decision should be made with this audience in mind.

### Editorial Quality System

Automated documentation quality checks are managed by the editorial system in `editorial-workspace/`. Use these commands to run checks:

| Command | What it does |
|---------|-------------|
| `/doc-audit` | Checks structural rules — emoji H1, `---` separators, `## Next Steps`, footer, frontmatter, links |
| `/doc-terms` | Checks 18 canonical terms for consistent spelling |
| `/doc-review` | Reviews voice and tone against the project's style guide |
| `/doc-research` | Verifies tool instructions are still accurate via web search |
| `/doc-pipeline` | Runs all 4 checks at once using parallel reviewer agents |
| `/doc-changelog` | Logs what changed to `editorial-workspace/changelog.jsonl` |
| `/doc-capture` | Captures decisions and learnings at the end of a session |
| `/doc-learning-paths` | Generates reading sequences for different audience personas |

See `editorial-workspace/README.md` for full details on the editorial system, its files, and how it connects to the shared `doc-editorial-skill` repo (linked via `editorial-workspace/core/`).

### Document Categories (in App.jsx)

| Category key | Sidebar label | Docs |
|---|---|---|
| `why` | Why Desktop Agents | why-desktop-agents, key-concepts, alternative-agents |
| `start` | Getting Started | setup, antigravity-quickstart, mac-setup, windows-setup |
| `agents` | Working with Agents | workflow, permissions-and-approvals, planning-mode |
| `writing` | Writing & Documents | markdown-for-writers, file-formats |
| `webapps` | Building Web Apps | how-websites-work, webapp-hosting, adding-ai-features, from-ai-studio |
| `agenttools` | Tools for Agents | terminal-basics, git-github |
| `other` | *(not in sidebar)* | about |

## Deployment

- Cloudflare Pages via Wrangler
- On ARM Windows, Wrangler requires WSL
- GitHub: https://github.com/techczech/desktop-vibe-guide

## Code Style

- Vanilla CSS (light theme with glassmorphism accents)
- Icons: lucide-react
- No TypeScript — plain JSX
- Prefer existing patterns over introducing new ones
- When building frontends, aim for polished, distinctive UI — avoid generic AI-generated aesthetics

## Toolchain

- **JavaScript**: Use whatever package manager the project uses (this project: pnpm). Never mix package managers.
- **Python**: Use `uv` for environment management if needed
- **Package installation**: Homebrew for system-level tools
- **Secrets**: Never hardcode API keys. Use environment variables.
- **Git**: Default branch is `master`. Commits are scanned for secrets by gitleaks pre-commit hook.

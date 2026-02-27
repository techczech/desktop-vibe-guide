# CLAUDE.md — Desktop Vibe Guide

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

### Detailed Documentation Guidance

For AI agents working on documentation content, see `agents-instructions/` for:
- **Voice and tone** — Style guide with before/after examples (`voice-and-tone.md`)
- **Document templates** — Structural patterns for each doc category (`doc-templates.md`)
- **Lessons learned** — Known issues and historical decisions (`lessons-learned.md`)
- **Reference taxonomy** — How reference docs relate and should be organized (`reference-section-taxonomy.md`)

Read `agents-instructions/README.md` first. It routes you to the right file.

### Document Categories (in App.jsx)

| Category | Purpose | Docs |
|----------|---------|------|
| `start` | Essential onboarding, read in order | why-desktop-agents, setup, antigravity-quickstart, key-concepts |
| `core` | Deeper topics, read as needed | workflow, permissions-and-approvals, planning-mode |
| `reference` | Look up when relevant | Platform guides, terminal, hosting, AI features, file formats, git, markdown, alternatives |
| `other` | Meta | about |

## Deployment

- Cloudflare Pages via Wrangler
- On ARM Windows, Wrangler requires WSL (see AGENTS.md for workflow)
- GitHub: https://github.com/techczech/desktop-vibe-guide

## Code Style

- Vanilla CSS (light theme with glassmorphism accents)
- Icons: lucide-react
- No TypeScript — plain JSX
- Prefer existing patterns over introducing new ones
- When building frontends, aim for polished, distinctive UI — avoid generic AI-generated aesthetics

## Global Toolchain (from ~/AGENTS.md)

- **JavaScript**: Use whatever package manager the project uses (this project: pnpm). Never mix package managers.
- **Python**: Use `uv` for environment management if needed
- **Package installation**: Homebrew for system-level tools
- **Secrets**: Never hardcode API keys. Use environment variables.
- **Git**: Default branch is `master`. Commits are scanned for secrets by gitleaks pre-commit hook.

# Editorial Workspace — Desktop Vibe Guide

This folder is the editorial quality system for the Desktop Vibe Guide — a documentation project with 19 markdown docs aimed at researchers, academics, and non-developers learning to use AI desktop agents.

Your AI agent uses the files here to check docs for structural issues, terminology consistency, voice and tone, and factual accuracy. The generic editorial patterns come from the [doc-editorial-skill](core/README.md) (linked in `core/`). This project's specific rules, glossary, and conventions live here.

## Commands You Can Use

Tell your agent any of these, or describe what you want in plain language:

| Command | What it does |
|---------|-------------|
| `/doc-audit` | Checks structural rules — emoji H1, `---` separators, `## Next Steps`, footer, frontmatter, links |
| `/doc-terms` | Checks 18 canonical terms (Antigravity, vibecoding, GitHub, etc.) for consistent spelling |
| `/doc-review` | Reviews voice and tone against the project's conversational, encouraging style |
| `/doc-research` | Verifies tool instructions (Antigravity, Homebrew, Cloudflare, etc.) are still accurate |
| `/doc-pipeline` | Runs all 4 checks at once using parallel reviewer bots |
| `/doc-changelog` | Logs what changed to `changelog.jsonl` |
| `/doc-capture` | Captures decisions and learnings at the end of a session |
| `/doc-learning-paths` | Generates reading sequences for 5 audience personas |

Examples of what you might say:
- "Audit all my docs for structural issues"
- "Is the terminology consistent across the getting started docs?"
- "Check if the Homebrew and Cloudflare instructions are still correct"
- "Log the edits I just made"
- "What should a brand new reader look at first?"

## Your Files

| File / Folder | What it is | When to edit |
|--------------|-----------|-------------|
| `glossary.json` | 18 canonical terms with definitions and spelling rules | When adding new concepts or changing terminology |
| `editorial-config.json` | Structural checks: emoji H1, `---` separators, Next Steps, footer | When adding or removing structural rules |
| `rules/structural-rules.md` | This project's conventions in plain English | When conventions change |
| `changelog.jsonl` | Automatic log of all editorial actions | Don't edit — the agent appends to it |
| `skills/` | 8 skill files — one per `/doc-*` command | When customizing a workflow |
| `agents/` | 4 reviewer bots (structure, style, cross-refs, facts) | When you want different review specializations |
| `audit-reports/` | Output from audits and reviews (gitignored) | Read and delete as needed |
| `research/` | Working files from fact-checking (gitignored) | Same — read and delete as needed |
| `core/` | Shortcut to the shared skill repo | Don't edit through here — edit the core repo directly |

## This Project's Specifics

**19 docs** across 6 categories: Why Desktop Agents, Getting Started, Working with Agents, Writing & Documents, Building Web Apps, Tools for Agents.

**4 doc templates**: A (start — zero-knowledge entry points), B (core — assumes experience), C (reference — scannable lookup), D (meta — about page).

**18 glossary terms** covering tools (Antigravity, Git, GitHub, Homebrew, Cloudflare Pages, Gemini API, AI Studio), concepts (vibecoding, agent, prompt, context, localhost, director metaphor, Planning Mode, permissions), platforms (WSL), and formats (Markdown).

**Known issues** (from `rules/structural-rules.md`):
- 3 docs missing `## Next Steps`: setup.md, permissions-and-approvals.md, planning-mode.md
- `why-desktop-agents.md` uses `## Getting Started` instead of `## Next Steps`
- Try: block formatting varies across docs
- `file-formats.md` and `markdown-for-writers.md` have markdown overlap
- `git-github-basics.md` missing some `---` separators

**Voice guide**: `agents-instructions/voice-and-tone.md` — conversational, encouraging, never condescending, explain jargon on first use.

**Doc templates**: `agents-instructions/doc-templates.md` — structural patterns for each template type.

## How It All Connects

Your local files (glossary, rules, config) define **what** to check. The generic workflows in `core/` define **how** to check. Your skills in `skills/` combine both — they tell the agent "follow this workflow, applying these rules."

Shortcuts in `.claude/skills/` and `.claude/agents/` let Claude Code find everything. Other agents (Antigravity, Codex) are configured through their own instruction files.

For the full explanation of how core and local relate, see the [doc-editorial-skill README](core/README.md).

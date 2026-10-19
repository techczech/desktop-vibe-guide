# Editorial Workspace — Desktop Vibe Guide

This folder is the editorial quality system for the Desktop Vibe Guide — a documentation project with 19 markdown docs aimed at researchers, academics, and non-developers learning to use AI desktop agents.

Your AI agent uses the files here to check docs for structural issues, discover terminology patterns, review voice and tone, and verify factual accuracy. Every workflow is interactive: it proposes findings and asks before acting. Generic editorial workflows may be supplied by an independently installed editorial tool. Tool locations and local integration links are not distributed with this repository. This project's specific rules, glossary, and conventions live here.

## Commands You Can Use

Tell your agent any of these, or describe what you want in plain language:

| Command | What it does |
|---------|-------------|
| `/doc-audit` | Audits docs across 5 dimensions: structure, completeness, consistency, navigation, audience fit |
| `/doc-terms` | Discovers candidate terms and checks terminology consistency against the glossary |
| `/doc-review` | Reviews voice and tone — evolves the voice guide based on your feedback |
| `/doc-research` | Two-step fact verification: identifies checkable claims, then verifies what you select |
| `/doc-changelog` | Logs what changed to `changelog.jsonl` |
| `/doc-capture` | Captures decisions and learnings at the end of a session |
| `/doc-learning-paths` | Proposes reader personas and generates reading sequences |
| `/doc-init` | Guided walkthrough for setting up a new editorial workspace |

Examples of what you might say:
- "Audit all my docs for issues"
- "Find terms that should be in the glossary"
- "Review the voice in setup.md and help me refine the voice guide"
- "What claims in the setup doc should we fact-check?"
- "Log the edits I just made"
- "What should a brand new reader look at first?"

## Your Files

| File / Folder | What it is | When to edit |
|--------------|-----------|-------------|
| `glossary.json` | Canonical terms with definitions and spelling rules | When adding new concepts or changing terminology |
| `editorial-config.json` | Project settings, paths, and frontmatter rules | When changing project structure or settings |
| `rules/structural-rules.md` | This project's conventions in plain English | When conventions change |
| `guides/voice-and-tone.md` | Voice guide — evolves from `/doc-review` feedback | Updated automatically during reviews |
| `guides/doc-templates.md` | Template patterns (A/B/C/D) | When changing template structures |
| `guides/lessons-learned.md` | Accumulated editorial learnings | Updated by `/doc-capture` |
| `changelog.jsonl` | Log of all editorial actions | Don't edit — the agent appends to it |
| `skills/` | Skill files — one per `/doc-*` command | When customizing a workflow |
| `agents/` | Specialist reviewer instructions (structure, style, cross-refs, facts) | When you want different review specializations |
| `audit-reports/` | Output from audits and reviews (gitignored) | Read and delete as needed |
| `research/` | Working files from fact-checking (gitignored) | Same — read and delete as needed |
| `core/` | Optional, ignored local editorial integration | Configure locally; do not commit tool paths |

## This Project's Specifics

**19 docs** across 6 categories: Why Desktop Agents, Getting Started, Working with Agents, Writing & Documents, Building Web Apps, Tools for Agents.

**4 doc templates**: A (start — zero-knowledge entry points), B (core — assumes experience), C (reference — scannable lookup), D (meta — about page).

**Audience**: Researchers, academics, and non-developers. Smart but not technical.

## Documentation Authoring Guides

| You need to... | Read |
|----------------|------|
| Write or rewrite a doc's content | `guides/voice-and-tone.md` |
| Create a new doc or restructure one | `guides/doc-templates.md` |
| Understand what's gone wrong before | `guides/lessons-learned.md` |
| Decide where a reference doc fits | `guides/reference-section-taxonomy.md` |

## How It All Connects

The project files (glossary, rules, config and voice guide) define **what** to check. An installed editorial tool may supply the review workflow. Follow the requested scope; a workflow does not authorise additional changes.

Use the editorial commands installed for your agent. Local tool setup is separate from this public documentation repository.

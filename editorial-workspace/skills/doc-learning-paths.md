---
description: Generate reading sequences (learning paths) from doc frontmatter. Uses teaches/prerequisites fields to compute recommended reading order for different user goals. Invoke with /doc-learning-paths.
---

# /doc-learning-paths

Learning path generator for Desktop Vibe Guide docs.

## How It Works

Each doc has frontmatter fields:
- `teaches`: concepts this doc introduces
- `prerequisites`: doc IDs that should be read first
- `category`: navigation grouping

Use these to compute directed reading sequences for different user goals.

## Steps

1. **Scan all docs** — Read frontmatter from every `.md` file in `docs/`
2. **Build dependency graph** — Map each doc to its prerequisites and what it teaches
3. **Generate paths** for each persona below
4. **Validate** — Ensure no circular dependencies, no missing prerequisites
5. **Present** — Show paths as numbered reading lists with brief rationale

## Personas and Their Paths

### "I'm brand new to this"
Goal: Understand what desktop agents are and get set up.
Start from zero-knowledge docs (no prerequisites), follow to first project.

Expected path: why-desktop-agents → key-concepts → setup → antigravity-quickstart

### "I want to build a website"
Goal: Go from setup to a deployed web app.
Assumes basic setup done, focuses on web development docs.

Expected path: setup → how-websites-work → webapp-hosting → adding-ai-features

### "I'm a researcher who wants to automate workflows"
Goal: Use agents for desktop productivity, not web dev.
Focus on agent skills, file management, workflow patterns.

Expected path: why-desktop-agents → setup → workflow → planning-mode → markdown-for-writers → file-formats

### "I want to understand the tools"
Goal: Reference material for terminal, git, and agent management.
Reference docs (Template C), can be read in any order after basics.

Expected path: terminal-basics → git-github-basics → permissions-and-approvals

### "I'm migrating from AI Studio"
Goal: Move from browser-based AI prototyping to local desktop agents.

Expected path: from-ai-studio → setup → how-websites-work → adding-ai-features

## Output

Present each path as:

```markdown
## Path: [Persona Name]

1. **[Doc Title](filename.md)** — What you'll learn: [teaches list]
2. **[Doc Title](filename.md)** — What you'll learn: [teaches list]
   ↳ Prerequisite: [previous doc]
...
```

Also flag any gaps: "No doc currently covers X, which this path would benefit from."

## Invocation

**Generate all paths:** `/doc-learning-paths`

**Check a specific path:** `/doc-learning-paths "I want to build a website"`

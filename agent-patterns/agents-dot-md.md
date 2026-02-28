# Pattern: AGENTS.md as the Single Source of Truth

## The Problem

Different AI coding agents read different instruction files:
- **Claude Code** reads `CLAUDE.md`
- **Codex / OpenCode** reads `AGENTS.md`
- **Antigravity** reads `.idx/instructions.md`

If you put project instructions in `CLAUDE.md`, other agents don't see them. If you duplicate content across files, they drift apart.

## The Solution

Use `AGENTS.md` as the primary instruction file for all agents. Make agent-specific files just point to it.

### For Claude Code

`CLAUDE.md` supports `@file` includes — one file can pull in another. So `CLAUDE.md` becomes a one-liner:

```
@AGENTS.md
```

Claude Code expands this at launch, loading the full AGENTS.md contents into context. The result is identical to having everything in CLAUDE.md, but the instructions live in the cross-agent standard file.

### For Antigravity

The setup script appends key file references to `.idx/instructions.md`. Antigravity reads that file and knows where to find the project's AGENTS.md and editorial workspace.

### For Codex / OpenCode

These agents read `AGENTS.md` directly — no extra setup needed.

## Global vs Project Instructions

There are two levels:

- **`~/AGENTS.md`** — Machine-wide preferences (toolchain, environment, conventions). Applies to all projects on this machine.
- **`./AGENTS.md`** — Project-specific instructions (tech stack, build commands, documentation architecture).

For Claude Code, the global `~/.claude/CLAUDE.md` references `~/AGENTS.md` for machine-wide config. The project `CLAUDE.md` references `./AGENTS.md` for project config. Both get loaded at launch.

## Key Details

- The `@` include syntax resolves paths relative to the file containing the import
- Imported files can recursively import other files (max depth: 5)
- First time Claude Code encounters imports, it shows an approval dialog
- Keep total imported content reasonable — it all consumes context tokens
- `CLAUDE.local.md` (auto-gitignored) can hold personal per-project preferences

## When to Use This Pattern

Always. There's no downside to using AGENTS.md as the primary file. Even if you only use Claude Code today, the instructions are ready for any other agent without changes.

---
description: Check terminology consistency across docs against the project glossary. Flags bad variants, undefined jargon, missing first-mention links, and suggests new glossary entries. Invoke with /doc-terms.
---

# /doc-terms

Terminology consistency checker for Desktop Vibe Guide docs.

## Quick Start

1. Read the generic workflow: `editorial-workspace/core/references/terms-workflow.md`
2. Read the glossary: `editorial-workspace/glossary.json`
3. Read project config: `editorial-workspace/editorial-config.json` (for audience context)
4. Follow the workflow steps with the project-specific context below

## Project Context

**Audience**: Researchers, academics, and non-developers wanting to automate their desktop workflow.

These readers will NOT know: CLI syntax, Git concepts, web development terms, AI/ML jargon.

These readers WILL know: academic writing, research workflows, file management basics.

### Key Glossary Categories

- **Tools**: Antigravity, Git, GitHub, Homebrew, Cloudflare Pages, Gemini API, AI Studio
- **Concepts**: vibecoding, agent, prompt, context, localhost, director metaphor
- **Platforms**: WSL, Homebrew
- **Workflows**: Planning Mode, permissions
- **Formats**: Markdown

### Common Bad Variants to Watch For

- "antigravity" (lowercase) → "Antigravity"
- "Github" or "github" → "GitHub"
- "homebrew" (lowercase) → "Homebrew"
- "bot" or "chatbot" → "agent"
- "console" → "terminal"
- "GIT" → "Git"

## Invocation

**Single doc:** `/doc-terms setup.md`

**All docs:** `/doc-terms`

## Output

Write report to `editorial-workspace/audit-reports/terms-YYYY-MM-DD.md`, append to `editorial-workspace/changelog.jsonl`, present findings inline.

For new glossary entries, draft in schema format and confirm with user before adding to `glossary.json`.

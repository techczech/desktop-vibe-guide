---
description: >
  Discover candidate terms and check terminology consistency. Scans docs for project jargon,
  technical terms, product names, and audience-specific phrases. Proposes glossary entries
  and checks existing terms for consistent usage. Invoke with /doc-terms.
---

# /doc-terms

Term discovery and consistency checker for Desktop Vibe Guide.

## How to Run

1. Read the generic workflow: `editorial-workspace/core/references/terms-workflow.md`
2. Read the glossary: `editorial-workspace/glossary.json`
3. Read project config: `editorial-workspace/editorial-config.json`
4. Scan docs, discover candidates, present them, then check existing terms

## Project Context

**Audience**: Researchers, academics, and non-developers. They will NOT know: CLI syntax, Git concepts, web development terms, AI/ML jargon. They WILL know: academic writing, research workflows, file management basics.

### Current Glossary Categories

- **Tools**: Antigravity, Git, GitHub, Homebrew, Cloudflare Pages, Gemini API, AI Studio
- **Concepts**: vibecoding, agent, prompt, context, localhost, director metaphor
- **Platforms**: WSL, terminal
- **Workflows**: Planning Mode, permissions
- **Formats**: Markdown

### Common Bad Variants to Watch For

- "antigravity" (lowercase) → "Antigravity"
- "Github" or "github" → "GitHub"
- "homebrew" (lowercase) → "Homebrew"
- "bot" or "chatbot" → "agent"
- "console" → "terminal"
- "GIT" → "Git"

### Discovery Focus

When scanning for new terms, pay attention to:
- Technical terms that appear without explanation (the audience won't know them)
- Recurring metaphors ("director", "conversation") that need consistent application
- Audience-specific phrases from research/academic contexts used in adapted ways
- Tool names with capitalization variants across docs

## Invocation

**Single doc:** `/doc-terms setup.md`
**All docs:** `/doc-terms`

## Output

Write report to `editorial-workspace/audit-reports/terms-YYYY-MM-DD.md`, present candidates grouped by category. For approved entries, update `editorial-workspace/glossary.json` and log to `editorial-workspace/changelog.jsonl`.

---
description: >
  Two-step fact verification. First identifies checkable claims and groups them by staleness
  risk, then verifies only the ones you select. Uses web search against official sources.
  Invoke with /doc-research.
---

# /doc-research

Two-step fact verification for Desktop Vibe Guide.

## How to Run

1. Read the generic workflow: `editorial-workspace/core/references/research-workflow.md`
2. Scan doc(s) for verifiable claims
3. Present candidates grouped by risk — ask which to verify
4. Research selected claims, present findings, ask which to update

## What to Look For in This Project

### Tool Instructions
- **Antigravity**: IDE features, keyboard shortcuts, workspace setup, extension capabilities
- **Git/GitHub**: Commands, GitHub UI references, authentication methods
- **Homebrew**: Install commands, tap names, formula availability
- **Cloudflare Pages**: Deployment steps, Wrangler CLI commands, free tier limits
- **Gemini API**: Model names, API endpoints, pricing, capability claims

### Platform-Specific Steps
- **macOS**: Homebrew paths (`/opt/homebrew`), Xcode CLI tools, shell config (`.zshrc`)
- **Windows**: WSL setup, PowerShell commands, path differences, winget usage

### Official Sources

| Tool | Primary source |
|------|---------------|
| Antigravity | Google's official Antigravity docs |
| Git | git-scm.com |
| GitHub | docs.github.com |
| Homebrew | brew.sh, formulae.brew.sh |
| Cloudflare Pages | developers.cloudflare.com |
| Gemini API | ai.google.dev |
| Node.js | nodejs.org |
| WSL | learn.microsoft.com |

## Invocation

**Single doc:** `/doc-research setup.md`
**All docs:** `/doc-research`

## Output

Write report to `editorial-workspace/research/research-YYYY-MM-DD.md`, append to `editorial-workspace/changelog.jsonl`. Present candidates first (grouped by risk), then findings after verification. Ask before making any edits.

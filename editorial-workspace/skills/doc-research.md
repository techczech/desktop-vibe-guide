---
description: Verify factual accuracy of tool instructions, URLs, commands, and platform-specific claims in docs. Uses web search to check against official sources. Invoke with /doc-research.
---

# /doc-research

Fact verification for Desktop Vibe Guide docs.

## Quick Start

1. Read the generic workflow: `editorial-workspace/core/references/research-workflow.md`
2. Follow the workflow steps with the project-specific sources below

## What to Verify in This Project

### Tool Instructions
- **Antigravity**: IDE features, keyboard shortcuts, workspace setup, extension capabilities
- **Git/GitHub**: Commands, GitHub UI references, authentication methods
- **Homebrew**: Install commands, tap names, formula availability
- **Cloudflare Pages**: Deployment steps, Wrangler CLI commands, free tier limits
- **Gemini API**: Model names, API endpoints, pricing, capability claims

### Platform-Specific Steps
- **macOS**: Homebrew paths (`/opt/homebrew`), Xcode CLI tools, shell config (`.zshrc`)
- **Windows**: WSL setup, PowerShell commands, path differences, winget usage

### URLs to Check
- Official documentation links
- GitHub repository URLs
- Tool download pages
- API reference links

### Version-Sensitive Claims
- Node.js LTS version references
- Python version requirements
- Tool version numbers (Antigravity, Wrangler, etc.)

## Official Sources

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

Write report to `editorial-workspace/research/research-YYYY-MM-DD.md`, append to `editorial-workspace/changelog.jsonl`, present findings inline: Outdated → Broken URLs → Unverifiable.

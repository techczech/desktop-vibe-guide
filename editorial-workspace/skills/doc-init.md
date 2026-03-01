---
description: >
  Guided walkthrough for setting up an editorial workspace in a new project. Walks through
  each file one at a time — explains what it's for, asks what you want, generates it.
  Creates config, glossary, structural rules, voice guide, and skill files.
  Invoke with /doc-init.
---

# /doc-init

Guided editorial workspace setup.

## How to Run

1. Read the generic workflow: `editorial-workspace/core/references/init-workflow.md`
2. Walk through each step, explaining and asking before generating each file
3. Wire the generated skills into the agent platform

## What It Creates

- `editorial-workspace/editorial-config.json` — project settings and paths
- `editorial-workspace/glossary.json` — initial glossary (from doc scanning or empty)
- `editorial-workspace/changelog.jsonl` — initialized changelog
- `editorial-workspace/rules/structural-rules.md` — conventions in plain English
- `editorial-workspace/guides/voice-and-tone.md` — voice guide based on interview
- `editorial-workspace/skills/*.md` — skill files for each editorial command
- Directory structure for reports and research

## Invocation

`/doc-init`

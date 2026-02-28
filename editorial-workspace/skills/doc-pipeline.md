---
description: Run a full editorial review by spawning all checker agents in parallel (structure, style, cross-references, facts). Collects and deduplicates findings into a single prioritized report. Invoke with /doc-pipeline.
---

# /doc-pipeline

Full editorial review pipeline for Desktop Vibe Guide docs.

## Quick Start

1. Read the generic workflow: `editorial-workspace/core/references/pipeline-workflow.md`
2. Follow the steps below to spawn agents and collect results

## How to Run

### Spawn All Agents in Parallel

Use the Task tool to launch all 4 agents simultaneously. Each agent has its own `.md` file in `editorial-workspace/agents/` with full instructions.

```
Task: structure-checker agent
  subagent_type: general-purpose
  prompt: "You are the structure-checker agent. Read editorial-workspace/agents/structure-checker.md for your full instructions. Check all docs in docs/ for structural compliance. Return a structured report."

Task: style-reviewer agent
  subagent_type: general-purpose
  prompt: "You are the style-reviewer agent. Read editorial-workspace/agents/style-reviewer.md for your full instructions. Review all docs in docs/ for voice and tone. Return a structured report."

Task: xref-validator agent
  subagent_type: general-purpose
  prompt: "You are the xref-validator agent. Read editorial-workspace/agents/xref-validator.md for your full instructions. Validate all cross-references in docs/. Return a structured report."

Task: fact-checker agent
  subagent_type: general-purpose
  prompt: "You are the fact-checker agent. Read editorial-workspace/agents/fact-checker.md for your full instructions. Verify factual claims in docs/. Return a structured report."
```

### Single Doc Mode

For a single doc, add the filename to each agent prompt: "Check only `setup.md` in docs/."

### After Collection

1. Collect all 4 reports
2. Deduplicate — same issue from multiple agents → keep most specific
3. Prioritize: Critical → Warning → Suggestion
4. Write combined report to `editorial-workspace/audit-reports/pipeline-YYYY-MM-DD.md`
5. Append to `editorial-workspace/changelog.jsonl`
6. Present findings and ask user which to fix
7. After fixes, offer to re-run specific agents to verify

## Invocation

**All docs:** `/doc-pipeline`

**Single doc:** `/doc-pipeline setup.md`

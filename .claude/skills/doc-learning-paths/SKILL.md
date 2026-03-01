---
description: >
  Generate reading sequences by proposing reader personas based on the project's actual
  content, then building paths through the docs for each approved persona. Interactive —
  proposes and asks before generating. Invoke with /doc-learning-paths.
---

# /doc-learning-paths

Interactive learning path generator for Desktop Vibe Guide.

## How to Run

1. Read the generic workflow: `editorial-workspace/core/references/learning-paths-workflow.md`
2. Scan all docs in `docs/` — read frontmatter (teaches, prerequisites, category)
3. Propose 3-5 personas based on the content
4. Ask user to approve/modify personas
5. Generate and present paths for approved personas

## Project Context

**Audience**: Researchers, academics, and non-developers.
**6 categories**: Why Desktop Agents, Getting Started, Working with Agents, Writing & Documents, Building Web Apps, Tools for Agents.

### Frontmatter Fields to Use

- `teaches`: Concepts this doc introduces
- `prerequisites`: Doc IDs to read first
- `category`: Navigation grouping
- `template`: A (start), B (core), C (reference), D (meta)

Template A docs are natural entry points. Template C docs are reference material.

## Invocation

**Generate all paths:** `/doc-learning-paths`
**Check a specific path:** `/doc-learning-paths "I want to build a website"`

## Output

Present paths as numbered reading lists with rationale. Flag gaps where a new doc would help. Ask for adjustments before finalizing.

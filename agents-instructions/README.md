# Documentation Agent Instructions

Detailed guidance for AI agents working on Desktop Vibe Guide documentation. This folder extends CLAUDE.md with specifics about voice, structure, and lessons learned.

## Quick Reference

1. Edit docs in `/docs/`, run `./sync-docs.sh`, update `allDocs` in App.jsx if new
2. Every doc: H1 with emoji, `---` between sections, `## Next Steps` (3-4 links), footer with date
3. Single source of truth: one concept = one canonical doc. Others link, don't re-explain.
4. Voice: "you" language, contractions, director metaphor, honest about failures
5. Cross-references: relative links like `[Planning Mode](planning-mode.md)`

## When to Read What

| You need to...                           | Read                            |
|------------------------------------------|---------------------------------|
| Write or rewrite a doc's content         | [voice-and-tone.md](voice-and-tone.md) |
| Create a new doc or restructure one      | [doc-templates.md](doc-templates.md)   |
| Understand what's gone wrong before      | [lessons-learned.md](lessons-learned.md) |
| Decide where a reference doc fits        | [reference-section-taxonomy.md](reference-section-taxonomy.md) |

## What This Folder Does NOT Cover

This folder covers only documentation *content* -- how to write it, structure it, and organize it.

CLAUDE.md covers everything else:
- Build commands, tech stack, deployment
- Project overview and environment
- Code style for the website itself
- The `allDocs` array structure in App.jsx

## Target Audience Reminder

The Desktop Vibe Guide is for **researchers, academics, and non-developers** wanting to automate their desktop workflow using Antigravity. Every documentation decision should be made with this audience in mind. They are smart but not technical. They don't know (or want to learn) programming jargon.

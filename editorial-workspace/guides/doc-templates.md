# Document Structure Templates

## Choosing a Template

| Category    | When to use                                 | Template | Exemplar doc              |
|-------------|---------------------------------------------|----------|---------------------------|
| `start`     | Essential onboarding, read sequentially     | A        | key-concepts.md           |
| `core`      | Deeper skill, read when needed              | B        | permissions-and-approvals.md |
| `reference` | Look-up material for a specific topic       | C        | terminal-basics.md        |
| `other`     | Meta/about pages                            | D        | about.md                  |

---

## Template A: Start Document

Start docs assume zero knowledge. They build a mental model and guide the reader to take their first action.

```markdown
# [Title] [Emoji]

[1-3 sentence hook: why this matters to the reader personally.
Not instructions -- an emotional or intellectual hook.]

---

## [Mental Model / "Why" Section]

[Explain the concept using analogy or real-world comparison.
This is where the "director metaphor" or similar framing goes.]

---

## [Core Content Section 1]

[Concept explanation -> example -> "Try:" block]

> **Try:** *"[copy-paste-ready prompt]"*

---

## [Core Content Section 2]

[Same pattern: concept -> explanation -> action]

---

## [What You Need / What You Don't]

[Set expectations. What the reader DOES need to learn
vs what the agent handles for them.]

---

## Next Steps

- **[Doc Title](filename.md)** -- [one-line description of what they'll learn]
- **[Doc Title](filename.md)** -- [one-line description]
- **[Doc Title](filename.md)** -- [one-line description]

---

*Last updated: [Month Day, Year]*
```

**Key characteristics:**
- Opens with emotional/intellectual hook (not instructions)
- Heavy use of analogies and metaphors
- "Try:" blocks after concepts, not before
- Explicit "you don't need to learn X" reassurance sections
- 3-4 Next Steps links pointing forward in the reading sequence

**Exemplars:** why-desktop-agents.md, setup.md, key-concepts.md, antigravity-quickstart.md

---

## Template B: Core Document

Core docs assume the reader has used Antigravity at least once. They go deeper on a specific skill.

```markdown
# [Title] [Emoji]

[1-2 sentence overview: what this doc covers and why it matters.]

---

## [How It Works]

[The mechanism or process. Can use numbered stages.
Include a summary table if the process has distinct phases.]

---

## [Detailed Section 1]

[One aspect of the skill, with examples.]
[Decision tables where appropriate: "When to use X vs Y"]

---

## [Detailed Section 2]

[Another aspect. Subsections for variations.]

### [Subsection: Troubleshooting]

[Problem -> Solution pairs woven into the relevant section,
not banished to an appendix.]

---

## [Practical Tips]

[Numbered or bulleted actionable tips.
These are earned wisdom, not generic advice.]

---

## Next Steps

- **[Doc Title](filename.md)** -- [one-line description]
- **[Doc Title](filename.md)** -- [one-line description]
- **[Doc Title](filename.md)** -- [one-line description]

---

*Last updated: [Month Day, Year]*
```

**Key characteristics:**
- Can use numbered stages or phases for processes
- Decision tables ("When to use X") are common
- Cross-references both start docs (for background) and reference docs (for details)
- Troubleshooting woven into relevant sections, not separated
- Tips section near the end with practical advice

**Exemplars:** workflow.md, permissions-and-approvals.md, planning-mode.md

---

## Template C: Reference Document

Reference docs are looked up, not read sequentially. Sections must be self-contained and scannable.

```markdown
# [Title] [Emoji]

[1-2 sentence framing: what this topic is and when you'd look it up.]

---

## [Background / Context]

[Brief "why this exists" -- 1-2 paragraphs max.
The reader is here for specifics, not philosophy.]

---

## [Core Content Section 1]

[Self-contained. Scannable. A reader jumping here from the TOC
should understand this section without reading previous sections.]

---

## [Core Content Section 2]

[Same pattern. Tables, code blocks, and command examples are
common here. Platform-flag content with 🍎/🪟 where needed.]

---

## [Core Content Section 3]

[Reference docs typically have 3-6 content sections.]

---

## [Common Issues / Troubleshooting]  (if applicable)

[Problem -> Solution pairs. Include actual error messages
the reader might see.]

---

## Next Steps

- **[Doc Title](filename.md)** -- [one-line description]
- **[Doc Title](filename.md)** -- [one-line description]
- **[Doc Title](filename.md)** -- [one-line description]

---

*Last updated: [Month Day, Year]*
```

**Key characteristics:**
- Frontloaded: most important info first
- Self-contained sections (reader may jump to one section via TOC)
- Heavier use of code blocks and command examples
- Platform-specific sections clearly flagged
- Troubleshooting with specific error messages when applicable

### Reference Sub-Variants

Different types of reference docs have slightly different emphases:

| Sub-type          | Docs                                    | Emphasis                        |
|-------------------|-----------------------------------------|---------------------------------|
| Platform guides   | mac-setup-guide, windows-setup-guide    | Prerequisites -> Steps -> Tips -> Common Issues |
| Fundamentals      | terminal-basics, file-formats, markdown | History/Why -> Core Content -> Getting Started |
| Web Development   | how-websites-work, hosting, ai-features | Concept -> Complexity Levels -> Agent Integration |
| Tools & Migration | git-github, alternatives, from-ai-studio | What It Is -> How To Use -> Comparison/Migration |

See [reference-section-taxonomy.md](reference-section-taxonomy.md) for detailed cross-linking guidance.

**Exemplars:** terminal-basics.md, file-formats.md, mac-setup-guide.md, alternative-agents.md

---

## Template D: Other (Meta) Document

The about page and any future meta pages.

```markdown
# [Title] [Emoji]

[Free-form content. Conversational. Personal.]

---

*Last updated: [Month Day, Year]*
```

No `## Next Steps` section required. These are informational, not instructional.

**Exemplar:** about.md

---

## Adding a New Document: Checklist

1. **Decide the category** (start / core / reference / other) -- this determines the template
2. **Check for overlap** -- does an existing doc already cover this? (Single source of truth)
3. **Create the file** in `/docs/[filename].md` using the appropriate template
4. **Write content** following the template AND [voice-and-tone.md](voice-and-tone.md)
5. **Add entry to `allDocs`** in `/website/src/App.jsx`:
   - Pick an appropriate `id`, `title`, `icon` (from lucide-react), `description`
   - Place it in the correct position within its category
   - For reference docs, consult [reference-section-taxonomy.md](reference-section-taxonomy.md) for placement
6. **Add cross-references**: link FROM related existing docs TO the new doc (brief mention + link)
7. **Write Next Steps**: link TO 3-4 related docs from the new doc
8. **Run `./sync-docs.sh`** to copy to `/website/public/docs/`
9. **Test**: `cd website && pnpm run dev` and verify the doc renders correctly
10. **Verify TOC**: check that the "On this page" sidebar picks up all headings

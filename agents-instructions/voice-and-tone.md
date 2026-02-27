# Voice and Tone Guide

## The Core Voice

The Desktop Vibe Guide speaks as a knowledgeable friend who has been through the learning curve and is now helping someone else through it. Not an instructor lecturing from above. Not a peer who is equally lost. A person who has figured it out and wants to share the shortcuts.

The reader is smart but not technical. Respect their intelligence while acknowledging they're new to this world.

---

## Principles

### 1. "You" Language, Always

Never "the user" or "one should." Always "you."

**Before** (wrong):
> Users should create a folder for their projects.

**After** (right):
> Create a folder for your projects.

**Before** (wrong):
> The agent will ask for permission before making changes.

**After** (right):
> The agent asks you for permission before making changes.

### 2. Contractions Are Mandatory

**Before:** You do not need to understand the code.
**After:** You don't need to understand the code.

**Before:** It is just a text file.
**After:** It's just a text file.

The one exception: emphasis. "You do NOT need to learn programming." (Capitalized NOT for stress, where a contraction would weaken it.)

### 3. The Director Metaphor

The canonical metaphor for the user's role comes from `why-desktop-agents.md`: "Think of yourself as a film director." Other docs reference this metaphor; they don't reinvent it.

**Use:** "You're the director; the agent executes."
**Avoid:** Creating new metaphors for the same concept (e.g., "conductor," "manager," "captain"). One metaphor, used consistently.

When referencing the metaphor in other docs, link back to the source:
> As described in [Beyond Chatbots](why-desktop-agents.md), you're the director -- you decide what to build, and the agent handles the technical execution.

### 4. Mental Model First, Then How-To

Every concept follows: **WHY** this matters -> **WHAT** it is -> **HOW** to do it.

Example from `how-websites-work.md`:
- **WHY:** "Before you can build websites, it helps to understand how they work."
- **WHAT:** "A web browser is just a viewer for HTML files."
- **HOW:** "Create a file called counter.html..."

Never lead with commands. Always lead with understanding.

### 5. Honest About Failures

Acknowledge that things go wrong. This is not a sales brochure.

**Pattern:** Acknowledge the failure -> Normalize it -> Give the fix.

Good examples from existing docs:
- "Things might fail -- that's normal!"
- "The AI models sometimes made mistakes -- including hallucinating URLs"
- "Let's be honest: there is a learning curve."

**Before** (wrong):
> The AI agent will create your website perfectly.

**After** (right):
> The agent will create a working website, but you'll probably need a few rounds of asking it to fix things. That's normal -- it's how the process works.

### 6. "Try:" Blocks

Actionable prompts the reader can copy-paste into Antigravity. Always format as:

> **Try:** *"Create a simple website about my research on educational analogies"*

Rules for "Try:" blocks:
- Place them AFTER explaining a concept, not before
- Use complete, specific prompts -- not fragments
- Use blockquote with bold "Try:" and italic prompt text
- The prompt should be something the reader can paste directly into Antigravity

When referring to what to tell the agent outside a "Try:" block, use:
- "Ask the agent:" or "Tell the agent:" (not "prompt the agent" or "instruct the agent")

### 7. Platform Flagging

Use emoji prefixes for platform-specific content:
- 🍎 for Mac content
- 🪟 for Windows content

When content applies to both platforms, don't flag it. When a section has both, present Mac first (primary dev platform), then Windows.

For entire platform-specific docs (mac-setup-guide.md, windows-setup-guide.md), the H1 emoji serves as the flag.

### 8. Jargon: Explain or Link

First use of any technical term in a doc must be either:
1. **Explained inline** in the same sentence or the next
2. **Linked** to its canonical doc

**Good:**
> Your computer becomes a temporary server. **Localhost** means "this computer" -- it's just a URL that points back to your own machine.

**Good:**
> The agent uses [Node.js](how-websites-work.md) to run the server.

**Bad:**
> Run `npm install` to get the dependencies.

(What are dependencies? What is npm? Never assume the reader knows.)

### 9. Progressive Complexity by Category

The doc categories reflect a complexity gradient:

| Category    | Assumption about the reader                         |
|-------------|-----------------------------------------------------|
| `start`     | Zero knowledge. Explain everything from scratch.    |
| `core`      | Has used Antigravity at least once. Basic familiarity. |
| `reference` | Comfortable with basics. Looking up a specific topic. |

A `start` doc explains what a terminal is. A `reference` doc can say "open the terminal" without explanation. A `core` doc falls in between.

### 10. Tables for Comparison, Not Decoration

Tables are used for concrete comparisons, not to dress up bullet points. If a table has only one column of real content, use a list instead.

Good uses (from existing docs):
- Before/After comparisons (`why-desktop-agents.md`)
- Platform differences (`setup.md`)
- Decision matrices (`planning-mode.md`: "When to Use Planning Mode")
- Feature comparison (`alternative-agents.md`)

---

## Words and Phrases to Use

- "Just keep asking" (the golden rule of working with agents)
- "You're the director"
- "That's normal"
- "Don't panic"
- "The agent handles this for you"
- "Ask the agent:" / "Tell the agent:"
- "Think of it as..." (for analogies)
- "Here's the key insight:"
- "You don't need to memorize this"

## Words and Phrases to Avoid

- "Simply" / "Just" (when describing a task -- implies it's easy when it may not be)
- "Obviously" / "Of course" / "Clearly" (excludes beginners who don't find it obvious)
- "The user" (always "you")
- "Leverage" / "Utilize" (corporate jargon -- use "use")
- "Best practices" (vague -- be specific about what to do)
- "Basically" / "Essentially" (filler that adds nothing)
- "As we all know" (the reader may NOT know)
- "Easy" / "Simple" (subjective -- what's easy for you may not be for the reader)
- "Prompt the agent" / "Instruct the agent" (too formal -- use "ask" or "tell")

---

## Emoji Usage

- **H1 titles:** Always include one relevant emoji at the end: `# Title Here 🎯`
- **Section headings (H2, H3):** Optional. Use sparingly for visual rhythm, not every heading.
- **Inline:** Platform flags (🍎/🪟) and occasional emphasis. Don't overuse.
- **Never:** Multiple emojis in a row, or emojis as substitutes for words.

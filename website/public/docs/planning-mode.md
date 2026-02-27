# Planning Mode: Complex Projects Made Simple 📋

When you ask Antigravity to do something big—like "build a website for my research"—the agent doesn't just start typing code randomly. It **plans first**. Understanding how this works helps you stay in control of complex projects.

---

## The Three Stages

Every complex task follows a lifecycle:

### 1. Planning 🗺️
The agent researches your request and creates a structured plan:
- What files need to be created or changed
- What tools or libraries are needed
- The order of operations
- What it will check afterwards

You'll see this as an **Implementation Plan** — a document the agent creates that you can review before anything happens.

### 2. Execution ⚡
Once you approve (or the agent proceeds), it carries out the plan:
- Creating and editing files
- Running commands
- Installing dependencies
- Starting servers

You'll see the agent working through its checklist, creating files in your workspace, and running terminal commands.

### 3. Verification ✅
After building, the agent checks its own work:
- It may launch a **browser** (you'll see a blue border around it) to inspect what it created
- It checks for errors in the terminal
- It may create a **walkthrough** document showing what was accomplished

---

## The Task and Plan Tabs

When the agent enters planning mode, you'll notice **tabs at the top** of the chat panel:

- **Task** — Shows the current status: what the agent is working on right now
- **Plan** — Shows the full implementation plan with all proposed changes

**Always check the Plan tab** before accepting. It tells you exactly what the agent intends to do, which files it will create or modify, and how it will verify the results.

---

## When Models Are Too Eager

Not all AI models handle planning equally. From experience:

### Gemini (Google's Default)
- Fast and capable
- Higher usage limits (it's Google's own model)
- Sometimes **too eager** — it may start building before you've finished reviewing the plan
- Great for straightforward tasks

### Claude Opus (Anthropic)
- More disciplined about following plans precisely
- Waits for your approval before proceeding
- Lower usage limits (Google pays Anthropic to use it)
- Better for tasks where you want **strict plan adherence**

**Practical tip:** For most tasks, Gemini works well. But if you find it rushing ahead before you've reviewed the plan, switch to Opus for that task. You can always switch back afterwards.

> *"Switch to Opus for this task—I want you to plan carefully first"*

---

## How to Trigger Planning Mode

Planning mode activates automatically for complex requests. But you can also explicitly ask for it:

- *"Plan this first before making any changes"*
- *"Create an implementation plan for building a portfolio website"*
- *"I want to review the plan before you start"*

For simple tasks (changing a colour, fixing a typo), the agent will just do it directly — no planning needed.

---

## Reading an Implementation Plan

A typical implementation plan includes:

### Goal Description
What the agent understands you want to achieve.

### Proposed Changes
A list of files to create, modify, or delete, grouped by component. This is where you check:
- Is this what I asked for?
- Is it creating too many files or too few?
- Does the structure make sense?

### Verification Plan
How the agent will confirm everything works—running the server, checking for errors, testing in the browser.

---

## Artifacts: Your Paper Trail

Throughout planning and execution, the agent creates **artifacts** — documents that capture its work:

- **Implementation Plan** — The proposed changes (created during Planning)
- **Task Checklist** — A living to-do list tracking progress (updated during Execution)
- **Walkthrough** — A summary of what was accomplished (created during Verification)

These give you a clear record of what happened and why.

---

## When to Use Planning Mode

| Scenario | Use Planning? |
|----------|:---:|
| "Change the header colour" | No — just do it |
| "Fix that typo" | No — just do it |
| "Build a website for my research" | **Yes** |
| "Reorganise all my project files" | **Yes** |
| "Add a new section with interactive features" | **Yes** |
| "Deploy this to Cloudflare" | Maybe — depends on complexity |

**Rule of thumb:** If your request involves creating multiple files or making structural changes, planning mode is your friend.

---

## Tips for Working with Plans

1. **Review before approving** — Read the plan tab; make sure it matches your vision
2. **Give feedback on the plan** — *"This looks good but I don't want the image gallery section"*
3. **Don't be afraid to reject** — If the plan is wrong, say so. The agent will revise.
4. **Start broad, then refine** — Let the agent create a rough plan, then give specific feedback
5. **Switch models if needed** — If the agent keeps jumping past planning, try Opus

---

*Last updated: February 27, 2026*

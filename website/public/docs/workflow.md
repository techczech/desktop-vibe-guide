---
title: "Desktop Productivity"
template: B
status: published
version: 1.0
created: 2026-02-27
updated: 2026-02-28
category: agents
teaches: [file-management, workflow-patterns, productivity]
prerequisites: [setup]
---
# High-Speed Productivity with Antigravity 🚀

This guide covers how to achieve maximum productivity and "vibe coding" speed when working with Antigravity. Whether you're a complete beginner or experienced with the tool, the workflows below will help you get the most out of your agent.

---

## What to Expect in Your First Session

If this is your first time, here's what will happen:

1. **The agent will ask permission** before running commands or changing files. This is normal — click Accept to proceed. See [Permissions](permissions-and-approvals.md) for details.
2. **Things might fail** — that's normal! Even experienced developers hit errors. Just say *"That didn't work, try something else"*.
3. **It will look like magic** — the agent creates files, writes code, starts servers, and launches browsers from a single conversation.
4. **Dark mode is the default** — AI models love dark themes. Ask *"Switch to a light colour scheme"* if you prefer.
5. **You don't need to understand the code** — focus on the result. Does it look right? Does it work?

---

## The Core Workflow

### 1. Describe What You Want
Be clear about your goal. You don't need technical language—plain English works great.

**Good prompts:**
- "Create a website that shows weather forecasts"
- "Add a dark mode toggle to the header"
- "Fix the error I'm seeing in the terminal"

**Less effective prompts:**
- "Make it better" (too vague)
- "Do the thing" (what thing?)

### 2. Let the Agent Work
The agent will:
- Create and edit files
- Run commands
- Install dependencies
- Start servers

Watch what it's doing. You'll learn from seeing the process.

![Example of adding a feature with Antigravity](/images/toc-feature-example.png)

### 3. Test and Verify
After major changes:
- Check your browser (refresh if needed)
- Look for errors in the terminal
- Make sure things work as expected

### 4. Iterate
If something isn't right:
- Describe what's wrong
- Ask for changes
- Be specific about what you want different

---

## Using Planning Mode for Complex Projects

For bigger tasks—building a whole website, reorganising project files, adding complex features—the agent can **plan first** before making changes.

### How It Works
1. Ask the agent to plan: *"Plan this out before making changes"*
2. The agent creates an **Implementation Plan** you can review
3. Check the **Plan tab** at the top of the chat panel
4. Approve, give feedback, or reject
5. The agent executes the approved plan step by step

### Why This Matters
- You stay in control of complex changes
- You can catch problems before they happen
- The agent works more systematically

### Model Choice for Planning
Different models have different strengths for planning. See [Planning Mode](planning-mode.md#when-models-are-too-eager) for guidance on when to switch models.

See **[Planning Mode](planning-mode.md)** for the full guide.

---

## When Things Go Wrong

### The Agent Gets Stuck
Say: *"Try a different approach"* or *"Search online for a solution"*

### The Agent Keeps Asking for Permission
That's the [permissions system](permissions-and-approvals.md) at work. If it gets tedious, switch to "Auto" mode — see [Permissions](permissions-and-approvals.md) for all the options.

### Commands Fail or Get Blocked
Occasionally, you might hit environment-specific blocks (file locks on Windows, permission issues on Mac). 

**Solutions:**
- **Mac:** If the agent says "permission denied," ask it to explain or check if it needs help with a command.
- **Windows:** Close other programs using the files (like a running server) before making major changes.
- **General:** If a tool isn't working natively, the agent might suggest a different environment (like WSL on Windows or Homebrew on Mac).

### The Agent Makes Mistakes
It happens. AI models sometimes:
- Hallucinate URLs that don't exist
- Use outdated information
- Make incorrect assumptions

**Your response:** Correct them. Say *"That URL doesn't exist, look up the correct one"* or *"That's not right, try again."*

### You're Not Sure What Happened
Ask: *"What did you just do?"* or *"Explain what that command does."*

### Quick Troubleshooting Cheat Sheet

- **"File Locked" or "EPERM" (Windows):** Close other programs using the project folder
- **"Command not found":** Restart your terminal after installing new tools
- **"Permission Denied" (Mac):** Ask the agent to check folder permissions
- **Agent gets stuck looping:** Tell it *"Stop. Search online for this specific error."*
- **Everything looks wrong:** Start fresh — *"Delete everything and start over with a simpler approach."*

---

## Tips for Better Results

### Be the Director
You direct the work; the agent executes. Think of yourself as a film director — see [Beyond Chatbots](why-desktop-agents.md#the-director-metaphor) for this mindset.

### Start Simple, Then Expand
Begin with a basic version, then add features one at a time.

1. "Create a simple to-do list app"
2. "Add the ability to mark items as complete"
3. "Add a search box to filter items"
4. "Make it save to local storage so it persists"

### Use Search When Needed
If the agent doesn't know something current, ask it to search:
- *"Search online for how to deploy to Cloudflare in 2026"*
- *"Look up the current syntax for that command"*

### Switch Models If Stuck
Different AI models have different strengths. If one model keeps failing at a task, try switching to another in your settings. A fresh perspective often helps.

---

## Common Tasks

### Starting a New Project
> *"Create a React website with a dark theme and a welcome page"*

### Running a Local Server
> *"Start the development server"*

The agent will run `npm run dev` or equivalent and tell you the localhost URL.

### Making Changes
> *"Change the header color to blue"*
> *"Add a footer with my name"*
> *"Make the text larger on mobile"*

### Deploying
> *"Deploy this to Cloudflare Pages"*

The agent will handle the build and deployment process. If it's your first time, it might ask you to run a login command in your terminal to authenticate.

### Saving to GitHub
> *"Create a GitHub repository and push this code"*

The agent will use `gh` (GitHub CLI) to create and push.

---

## The Full "Vibe" Loop

Here is the complete loop from idea to published project:

1. **Start the Agent** — Open Antigravity and open your project folder
2. **Speak in Plain English** — Tell the agent what you want (e.g., *"Take my article and build an interactive website"*)
3. **Let It Work (and Watch)** — If it works, great. If it fails, say *"That failed. Explain what happened and suggest a fix."*
4. **Share Your Code** — *"Push this to GitHub as a public project"*
5. **Publish to the World** — *"Deploy this to Cloudflare Pages"*

The agent handles the build and deployment. On first use, it might ask you to authenticate via your browser.

---

## The Golden Rules

1. **Just keep asking.** The agent is patient and tireless.
2. **Be specific.** Clear prompts get better results.
3. **Plan complex tasks.** Use [Planning Mode](planning-mode.md) for big projects.
4. **Verify results.** Check that things work after changes.
5. **Correct mistakes.** The agent learns from your feedback.
6. **Use search.** When the agent doesn't know, ask it to look it up.

You are the director. The AI executes. Together, you can build anything.

---

## Next Steps

- **[Key Concepts](key-concepts.md)** — Understand the essential mental models
- **[Planning Mode](planning-mode.md)** — Master complex, multi-step projects
- **[Permissions](permissions-and-approvals.md)** — Configure the trust system to match your comfort level

---

*Last updated: February 27, 2026*

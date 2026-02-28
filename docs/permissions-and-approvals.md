---
title: "Permissions & Approvals"
template: B
status: published
version: 1.0
created: 2026-02-27
updated: 2026-02-28
category: agents
teaches: [permissions, trust-levels, auto-mode]
prerequisites: [setup]
---
# Permissions and Approvals: Staying in Control 🔐

When you work with Antigravity, the agent can do powerful things on your computer—run commands, create files, install software. But it always asks first. This guide explains how the permission system works and how to configure it to match your comfort level.

---

## How Permissions Work

Every time the agent wants to take an action that could change something on your computer, it pauses and asks for your approval. You'll see a popup or inline prompt showing:

- **What command** it wants to run
- **Why** it wants to run it

You can then **Accept** or **Reject** the action. This is true for both terminal commands and file edits.

---

## Terminal Execution Policies

Antigravity has several levels of autonomy you can configure for how it handles terminal commands:

### Request Review (Default for Beginners)
The agent **always asks** before running any terminal command. You see each command and decide whether to approve it.

**Best for:** New users who want to understand what's happening at every step.

### Auto
The agent decides whether to run a command based on its own safety assessment. Safe commands (like listing files) run automatically. Potentially risky ones (like deleting files) still ask for approval.

**Best for:** Intermediate users who trust the agent for routine tasks but want a safety net.

### Turbo / Always Proceed
The agent runs commands automatically without asking, except for commands on a configurable deny list (things you've explicitly said "never do without asking").

**Best for:** Experienced users who want maximum speed and are comfortable reviewing results rather than previewing actions.

### Off
The agent will not run terminal commands at all unless you explicitly permit each one.

**Best for:** When you want the agent to only edit files and plan, without touching the terminal.

### Custom
Fine-grained control over which types of commands need review and which can run automatically.

**Best for:** Users who want specific rules (e.g., "auto-approve `npm` commands but always ask before `git push`").

---

## How to Change Your Permission Settings

1. Open **Antigravity Settings** (gear icon or via the Command Palette)
2. Look for **Terminal Execution** or **Agent Permissions**
3. Choose your preferred policy
4. Optionally configure allow/deny lists for specific commands

---

## File Editing Approvals

Beyond terminal commands, the agent also asks before editing your files:

- When the agent makes changes, you'll see a **diff view** showing what's being added (green) and removed (red)
- You can **Accept All** changes, **Accept Individual** changes, or **Reject** them
- After accepting, the changes are saved to your files

### Tip from Practice
When the agent finishes a batch of work and there are no more red indicators in the diff view, all changes have been applied. You can scroll through to review what was done.

---

## The Trust Spectrum

Your relationship with the agent evolves over time:

```
New User                                           Experienced User
|-------|------------|------------|------------|---------|
   Off    Request     Auto         Custom       Turbo
          Review
```

**Start with Request Review.** Watch what commands the agent runs. Learn what they do. As you build confidence, move towards Auto or Turbo.

There's no rush. Even experienced users sometimes switch back to Request Review for unfamiliar projects or sensitive tasks.

---

## When to Be Careful

Always pay extra attention when the agent wants to:

- **Delete files** — Make sure it's deleting what you expect
- **Install software globally** — This affects your whole computer, not just the project
- **Run commands with `sudo`** (Mac/Linux) — This runs with administrator privileges
- **Push to GitHub** — This makes your code public (if the repo is public)
- **Deploy to the internet** — This makes your website visible to everyone

For these actions, **always read what the agent is doing** before approving.

---

## Practical Tips

### "The agent keeps asking me things"
That's normal when you're on Request Review. If you find it tedious after a while, switch to Auto mode—the agent will handle routine commands silently and only ask about important ones.

### "I accidentally approved something wrong"
Don't panic. Most actions can be undone:
- File changes can be reverted (the agent keeps track, or you can use Git)
- Installed packages can be uninstalled
- If you're unsure, ask the agent: *"Undo what you just did"*

### "I want to see what the agent did"
Ask: *"What did you just do?"* or *"Show me what commands you ran."* The agent will explain its actions.

---

## Summary

| Policy | Agent Asks? | Speed | Safety |
|--------|------------|-------|--------|
| **Off** | Always (and won't run commands) | Slowest | Maximum |
| **Request Review** | Always | Slow | High |
| **Auto** | Only for risky actions | Medium | Good |
| **Custom** | Based on your rules | Flexible | Configurable |
| **Turbo** | Almost never | Fastest | You verify after |

**Our recommendation:** Start with **Request Review**. Move to **Auto** once you're comfortable. Use **Turbo** when you want maximum speed on familiar projects.

---

*Last updated: February 27, 2026*

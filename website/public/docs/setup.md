---
title: "Getting Started"
template: A
status: published
version: 1.0
created: 2026-02-27
updated: 2026-02-28
category: start
teaches: [antigravity, installation, setup]
prerequisites: []
---
# Getting Started with AI-Powered Productivity 🚀

Welcome! This guide will take you from zero to building and publishing your own websites and software—all by having a conversation with an AI.

No coding experience required. If you can chat, you can build.

---

## What is Antigravity?

**Antigravity** is an agentic AI coding tool from Google. Its tagline is "Build the new way."

Unlike simple code assistants that just suggest code, Antigravity is an **agent** that can take actions on your behalf:

- Write and edit files, run terminal commands, and install software
- Start servers, deploy websites, and manage GitHub repositories
- Search the web and interact with browsers

See the [Quick Start Guide](antigravity-quickstart.md#what-can-antigravity-do-) for the full list of capabilities.

You talk to it in plain English, and it does the work.

To understand why this matters—and how it's different from using ChatGPT—see **[Beyond Chatbots: The New Age of Desktop Productivity](why-desktop-agents.md)**.

### It's Also a Great Text Editor

Antigravity isn't just for code. It can edit any text file—documents, notes, research papers. When you write in [**Markdown**](markdown-for-writers.md) (a simple formatting language that is both easy to write and read), your text can easily be converted into websites, PDFs, or other formats. This entire documentation site was written in Markdown files that the agent then turned into a website.

### Alternatives to Antigravity

There are other AI coding tools, but they typically require payment:
- **Cursor**: A paid AI-powered code editor
- **VS Code + Claude Code or Codex plugins**: Require subscriptions

Antigravity is free, which makes it a great starting point for beginners.

---

## Step 1: Install Antigravity

Go to the official download page:

**[https://antigravity.google/download](https://antigravity.google/download)**

Follow the installation instructions for your operating system. Once installed, you'll have access to the Antigravity interface with a chat sidebar where you can give commands to the agent.

### Platform-Specific Setup

The rest of the setup process differs between Mac and Windows. Follow the guide for your platform:

- 🍎 **[Mac Setup Guide](mac-setup-guide.md)** — Homebrew, Xcode tools, Gatekeeper, Apple Silicon tips
- 🪟 **[Windows Setup Guide](windows-setup-guide.md)** — Volta, PowerShell, WSL, OneDrive tips

### What's Different Between Mac and Windows?

Both platforms work well with Antigravity. The main differences:

| | Mac | Windows |
|---|---|---|
| **Terminal** | Terminal.app or iTerm2 (zsh) | Windows Terminal (PowerShell) |
| **Package manager** | Homebrew | Volta / winget |
| **Node.js install** | `brew install node` | `volta install node@22` |
| **Common issues** | Gatekeeper, permissions | File locks, OneDrive, ARM/WSL |
| **Path style** | `/Users/you/gitrepos` | `C:\Users\you\gitrepos` |

The agent handles these differences for you. Just tell it what you want and it will use the right commands for your system.

---

## Step 2: Create Your First Project

1. Create a new folder on your computer for your projects.
2. Open this folder in Antigravity (File → Open Folder).
3. Now you have a workspace. This is where the agent will create files for you.

See your platform-specific guide for detailed folder setup instructions.

---

## Step 3: Start Talking to the Agent

Just type what you want. For example:
> *"Create a simple website with a dark theme and a welcome message."*

The agent will start working. You'll see it creating files, writing code, and sometimes running commands. When it's done, it will tell you how to preview your work.

**What can you ask it to do?**
- "Make a portfolio website for my photography"
- "Write a Python script that organizes my photos by date"
- "Install Git for me"
- "Create a GitHub repository and push my code"
- "Deploy this website to Cloudflare"
- "Search online for how to fix this error"

---

## Understanding How the Agent Works

Before you go further, it helps to understand a few core concepts:

- **[Key Concepts](key-concepts.md)** — The essential mental models for working with desktop agents
- **[Permissions and Approvals](permissions-and-approvals.md)** — How the agent asks your permission before taking actions
- **[Planning Mode](planning-mode.md)** — How the agent plans complex projects before executing them

---

## Not Just Websites: Local Servers and Software

Antigravity can build more than websites. It can create:
- Command-line tools
- Data processing scripts
- Automation utilities
- Desktop applications

### What is "localhost"?

When you're building software, you often need to run it on your own computer first to test it. This is called running it **locally**. Your computer becomes a temporary server.

When you hear "localhost" or see `http://localhost:5173`, that's your computer serving a website to itself. Only you can see it—it's not on the internet yet.

The agent can:
- Start a local server for you automatically
- Open your browser to show the preview
- Restart the server when you make changes

Just ask: *"Start the development server"* and it will handle the rest.

---

## How This Website Was Built

The website you're reading right now was made entirely through conversation with an AI agent. Here's the actual workflow:

1. **User:** "Create a documentation website for setting up my desktop for AI-powered productivity."
2. **Agent:** Created a React project, designed a dark-themed interface, wrote all the documentation.
3. **User:** "Deploy it to Cloudflare."
4. **Agent:** Handled the deployment process, including cross-platform tool configuration.
5. **User:** "Create a GitHub repository."
6. **Agent:** Installed GitHub CLI, authenticated, created a public repo, pushed the code.

When the agent got stuck, the user said "Try something else" or "Search online for a solution." That's the workflow.

---

## The Golden Rule

**Just keep asking.**

- If something fails, tell the agent
- If you don't understand, ask for an explanation
- If you want it different, describe what you want
- If the agent is stuck, say "search online for a solution"

The agent is patient. It will keep trying. You are the director; the agent executes.

**Remember:** You're the director, not the camera operator — see [Beyond Chatbots](why-desktop-agents.md#the-director-metaphor) for this mindset.

---

*Last updated: February 27, 2026*

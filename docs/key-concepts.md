---
title: "Key Concepts"
template: A
status: published
version: 1.0
created: 2026-02-27
updated: 2026-02-28
category: why
teaches: [mental-models, prompts, context, agents]
prerequisites: []
---
# Key Concepts for Working with Desktop Agents 🧠

Before you dive in, it helps to understand a few core ideas. These aren't technical lessons—they're mental models that will help you get the most out of Antigravity.

---

## 1. Workspaces: One Folder, One Project

Everything starts with a folder on your computer. When you open a folder in Antigravity, it becomes your **workspace**—the agent's domain.

- Keep **one folder per project** (e.g., `~/gitrepos/my-website`)
- The agent sees everything inside that folder
- It creates, edits, and organises files within that workspace

You can work on **multiple projects at once** by opening separate Antigravity windows (File → New Window), each pointing to a different folder.

> **Try:** *"Create a folder called 'gitrepos' in my home directory and inside it create 'my-first-project'"*

---

## 2. The Agent as Executor

The agent isn't just answering questions—it's **doing things on your computer**:

- Creating and editing files
- Running terminal commands
- Installing software
- Starting local servers
- Opening a browser to test what it built
- Generating images
- Deploying websites to the internet

When the agent works, you'll see it creating files in the sidebar, running commands in the terminal panel, and sometimes launching a browser with a blue border (that's the agent browsing its own creation to verify it works).

> **Try:** *"Create a simple website about my research on educational analogies"*

---

## 3. Planning vs Doing

Not all tasks are equal. The agent has two main approaches:

### Fast Mode (Simple Tasks)
For straightforward requests, the agent just does it:
- *"Change the background colour to blue"*
- *"Add a footer with my name"*
- *"Fix that error"*

### Planning Mode (Complex Tasks)
For bigger projects, the agent **plans first**:
1. It researches what's needed
2. Creates an **implementation plan** you can review
3. Waits for your approval
4. Executes the plan step by step
5. Verifies the results

You'll see tabs at the top of the chat: **Task** (what it's doing) and **Plan** (the full implementation plan). Review the plan before the agent starts building.

> **Tip:** If you want the agent to plan before acting, say: *"Plan this first before making any changes"*

See [Planning Mode](planning-mode.md) for the full guide.

---

## 4. Models: Different Brains for Different Tasks

Antigravity can use different AI models. **Gemini** (Google's default) is fast and handles most tasks well. **Claude Opus** (Anthropic) is more disciplined and follows plans more precisely.

You can switch models in the Antigravity settings. If one model keeps getting stuck, switching to another often helps.

For a detailed comparison of when to use each model, see [Planning Mode](planning-mode.md#when-models-are-too-eager).

---

## 5. Your Computer as a Development Environment

When the agent builds a website or app, it turns your computer into a temporary server. Key terms you'll encounter:

- **localhost** — Your computer talking to itself. When you see `http://localhost:5173`, that's your computer serving a website to your own browser. Only you can see it.
- **Node.js** — A program that runs JavaScript on your computer (not in a browser). It powers the development server.
- **npm** — A tool that downloads and manages code libraries. Think of it as an app store for code.

You don't need to understand these deeply. The agent will install and manage them. But recognising the terms helps you follow what's happening.

> **Try:** *"Start the development server so I can preview the website"*

---

## 6. Iteration: Start Simple, Then Refine

The most effective way to work with an agent:

1. **Start with the simplest version** — *"Create a basic website for my personas"*
2. **Review what you get** — Is it roughly right?
3. **Ask for specific changes** — *"Make the header larger and change the colour scheme to warm tones"*
4. **Keep refining** — *"Add a navigation menu"*, *"Include the descriptions from my article"*

Don't try to describe everything in one prompt. Build up gradually. Each iteration gets you closer.

### When Things Go Wrong

Don't panic — tell the agent what happened and ask it to try a different approach. See [Desktop Productivity](workflow.md#when-things-go-wrong) for detailed troubleshooting strategies.

---

## 7. Trust and Verification

The agent will ask your permission before running commands, editing files, or installing software. This keeps you in control. As you gain confidence, you can give the agent more autonomy.

See [Permissions and Approvals](permissions-and-approvals.md) for full details on configuring the trust system.

**Always verify the results** — check browser previews, read generated text, and test interactive features. The agent is powerful but not perfect.

---

## 8. From Local to Live

The typical journey for any project:

```
Your Idea → Agent Builds It → Preview on localhost → Deploy to the Internet
```

1. **Describe your project** — The agent creates it on your computer
2. **Preview locally** — Open `localhost:XXXX` in your browser to see it
3. **Iterate** — Make changes until you're happy
4. **Deploy** — *"Deploy this to Cloudflare Pages"* makes it live on the internet
5. **Custom domains** — You can link a custom domain (like `yourname.com`) or use subdomains for different projects

> **Try:** *"Deploy this website to Cloudflare Pages"*

---

## 9. Beyond Websites: Desktop Productivity

Desktop agents aren't just for building websites. You can use them for everyday computer tasks:

- **File organisation** — *"Organise my Downloads folder into subfolders by file type"*
- **Document creation** — *"Write a summary of this PDF as a Markdown file"*
- **Data processing** — *"Read this spreadsheet and create a chart"*
- **Automation** — *"Create a script that renames all photos in this folder by date"*

Think of the agent as a very capable assistant who happens to be sitting at your computer.

---

## Next Steps

Now that you understand the concepts:
- **[Set up your environment](setup.md)** — Platform-specific guides for Mac and Windows
- **[Quick Start](antigravity-quickstart.md)** — Create your first project
- **[Permissions](permissions-and-approvals.md)** — Understand the trust system
- **[Planning Mode](planning-mode.md)** — Master complex projects

---

*Last updated: February 27, 2026*

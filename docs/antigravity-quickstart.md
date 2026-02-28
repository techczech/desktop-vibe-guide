---
title: "Antigravity Quick Start"
template: A
status: published
version: 1.0
created: 2026-02-27
updated: 2026-02-28
category: start
teaches: [first-project, antigravity-basics]
prerequisites: [setup]
---
# Antigravity Quick Start Guide ⚡

Before you can use Antigravity to manage your projects, you need to create a workspace folder on your computer. If you haven't set up Antigravity yet, follow your platform guide first:

- 🍎 **[Mac Setup Guide](mac-setup-guide.md)**
- 🪟 **[Windows Setup Guide](windows-setup-guide.md)**

---

## Step 1: Create a Project Folder

You can do this however you are most comfortable:

### Using Finder/File Explorer (The Familiar Option)
- **Mac**: Go to your home directory (`/Users/YourName`), create a folder named `gitrepos`, and inside it, create another folder for your project (e.g., `my-first-project`).
- **Windows**: Navigate to `C:\Users\YourName`, create a folder named `gitrepos`, and inside it, create your project folder.

### Using Terminal (The Fast Option)
Paste this command:

**Mac/Linux:**
```bash
mkdir -p ~/gitrepos/my-first-project
```

**Windows (PowerShell):**
```powershell
mkdir -p $HOME\gitrepos\my-first-project
```

### Using Antigravity
You can ask Antigravity to create files and folders on your computer but it is best to create one workspace where all your other workspaces will be located first.

In general, it is then best to have one folder per project and open the folder in Antigravity as your workspace. But Antigravity can be asked to look for other places on your computer, as well.

> *"Create a folder named 'my-first-project' in 'gitrepos'."*

---

## Step 2: Open the Folder in Antigravity

1. Open the **Antigravity** application.
2. Go to the menu at the top of your screen and select `File` > `Open Folder...`
3. Navigate to the folder you just created: `~/gitrepos/my-first-project` (or your Windows equivalent).
4. Click **Open**.

---

## Step 3: Start Working with the Agent

Now that you have the folder open, you're ready to start! From here on, you interact with the chat box in Antigravity to do everything else.

### Example First Tasks

**Create a simple website:**
> *"Create a simple website with a dark theme and a welcome message."*

**Download a Git repository:**
> *"Clone the repository from https://github.com/username/repo-name into this folder."*

**Organize files:**
> *"Create folders for 'docs', 'scripts', and 'data'."*

**Write documentation:**
> *"Create a README.md file with a project description and setup instructions."*

---

## What Can Antigravity Do?

Antigravity is an **agentic AI** that can:
- Write and edit any text files (code, documents, Markdown)
- Run terminal commands
- Install software and dependencies
- Start local development servers
- Create and manage Git repositories
- Deploy websites to hosting platforms
- Search the web for solutions

You describe what you want in plain English, and the agent does the work.

---

## Tips for Success

### Be Specific
Clear prompts get better results:
- ✅ "Create a Python script that renames all .jpg files in this folder by adding today's date"
- ❌ "Make it better"

### Let the Agent Work
Watch what it's doing. You'll learn from seeing the process. The agent will show you:
- Files it's creating or editing
- Commands it's running
- Errors it encounters and how it fixes them

### Use Planning Mode for Complex Tasks
For big projects, ask the agent to plan first:
> *"Plan this out before making any changes"*

The agent will create an implementation plan you can review. See **[Planning Mode](planning-mode.md)** for the full guide.

### Understand Permissions
The agent will ask your approval before running commands or editing files. This keeps you in control. See **[Permissions and Approvals](permissions-and-approvals.md)** to learn how to configure this.

### Iterate
If something isn't right:
- Describe what's wrong
- Ask for changes
- Be specific about what you want different

### Ask for Help
If you don't understand something:
> *"What did you just do?"*
> *"Explain what that command does."*

---

## Next Steps

- **Understand the concepts**: See [Key Concepts](key-concepts.md) for the essential mental models
- **Learn the workflow**: See [Desktop Productivity](workflow.md) for high-speed techniques
- **Understand alternatives**: Check out [Alternative Agents](alternative-agents.md) to compare tools
- **Master file formats**: Read [File Formats](file-formats.md) to work effectively with Markdown, JSON, and CSV
- **Why desktop agents?**: Read [Beyond Chatbots](why-desktop-agents.md) for the bigger picture

---

*Last updated: February 27, 2026*

# Mac Setup Guide 🍎

Everything you need to get Antigravity running on your Mac, from installation to your first project.

---

## Prerequisites

### 1. Install Antigravity

Download from the official page:

**[https://antigravity.google/download](https://antigravity.google/download)**

Choose the **macOS** version. It will download a `.dmg` file.

#### First Launch: macOS Gatekeeper

When you first open Antigravity, macOS may block it with a message like *"Antigravity can't be opened because it is from an unidentified developer"* or similar.

**To fix this:**
1. Open **System Settings** → **Privacy & Security**
2. Scroll down to the **Security** section
3. You should see a message about Antigravity being blocked
4. Click **Open Anyway**
5. Confirm when prompted

This is a one-time step. macOS does this for all new applications — it's a security feature, not a problem.

---

### 2. Install Xcode Command Line Tools

Many development tools on Mac need Apple's command-line tools. Open **Terminal** (Spotlight → type "Terminal") and run:

```bash
xcode-select --install
```

A popup will appear asking you to install. Click **Install** and wait (it may take a few minutes).

If you see "already installed," you're good to go.

---

### 3. Install Homebrew

**Homebrew** is Mac's unofficial package manager — it lets you install tools with simple commands. Open Terminal and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, follow any on-screen instructions to add Homebrew to your path (the installer will tell you exactly what to paste).

**Verify it works:**
```bash
brew --version
```

---

### 4. Install Node.js

Node.js powers the development servers the agent uses. With Homebrew:

```bash
brew install node
```

**Verify:**
```bash
node --version
```

You should see something like `v22.x.x`.

---

### 5. Optional: Install GitHub CLI

If you want to push code to GitHub (for backup and sharing):

```bash
brew install gh
```

Then authenticate:
```bash
gh auth login
```

Follow the prompts to log in via your browser.

---

## Your First Project

### Create a Workspace

Create a folder to hold all your projects:

```bash
mkdir -p ~/gitrepos
```

This creates a `gitrepos` folder in your home directory (`~` means home on Mac, e.g. `/Users/kelly/gitrepos`).

Create your first project folder:
```bash
mkdir -p ~/gitrepos/my-first-project
```

### Open in Antigravity

1. Open **Antigravity**
2. Go to **File → Open Folder...**
3. Navigate to `~/gitrepos/my-first-project`
4. Click **Open**

You're ready to start!

---

## Mac-Specific Tips

### The Terminal

Mac comes with **Terminal** built in (find it via Spotlight: ⌘ + Space, type "Terminal"). Your default shell is **zsh**.

For a better terminal experience, consider:
- **[Warp](https://www.warp.dev/)** — AI-powered terminal with modern features
- **[iTerm2](https://iterm2.com/)** — Popular terminal replacement with tabs and split panes

### Keyboard Shortcuts in Antigravity

| Action | Shortcut |
|--------|----------|
| Open folder | ⌘ + O |
| New window | ⌘ + Shift + N |
| Toggle terminal | ⌃ + ` (Control + backtick) |
| Command palette | ⌘ + Shift + P |
| Focus chat | ⌘ + L |

### Apple Silicon (M1/M2/M3/M4)

Most tools work natively on Apple Silicon Macs. Occasionally you might hit an architecture issue where a tool only runs on Intel. The agent may suggest:

```bash
arch -x86_64 brew install some-tool
```

This forces the Intel version. The agent will handle this for you if it comes up.

### Permission Prompts

macOS sometimes asks for additional permissions:
- **"Antigravity wants to access your Documents/Desktop/Downloads"** — Click **Allow** if you want the agent to work with files in those locations
- **"Do you want to allow incoming network connections?"** — This may appear when the agent starts a local development server. Click **Allow** — it's just your computer talking to itself

### OneDrive and iCloud

If you use iCloud Drive, be aware that files in your Documents or Desktop folders may be synced to iCloud. This can occasionally cause issues with file locks.

**Recommendation:** Keep your `gitrepos` folder **outside** of iCloud-synced locations. The home directory (`~/gitrepos`) is usually not synced by default, so you should be fine.

---

## Common Mac Issues

### "Permission denied"
- The agent may need you to change file permissions
- Ask: *"I'm getting a permission error. What should I do?"*
- The agent might suggest `chmod` commands or ask you to check folder permissions

### "Command not found" after installing something
- Close and reopen your terminal
- Or run: `source ~/.zshrc`

### "Port already in use"
- Another program is using the same port (e.g., 5173)
- Tell the agent: *"The port is already in use. Use a different one"*
- Or close the other program first

### Homebrew issues after macOS update
- Sometimes macOS updates break Homebrew
- Run: `brew update && brew doctor`
- Or ask the agent: *"Homebrew isn't working after my macOS update. Help me fix it"*

---

## Next Steps

- **[Key Concepts](key-concepts.md)** — Understand the mental models
- **[Quick Start](antigravity-quickstart.md)** — Build your first project
- **[Permissions](permissions-and-approvals.md)** — Configure the trust system
- **[Planning Mode](planning-mode.md)** — Handle complex projects

---

*Last updated: February 27, 2026*

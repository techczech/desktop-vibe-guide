# Windows Setup Guide 🪟

Everything you need to get Antigravity running on Windows, from installation to your first project.

---

## Prerequisites

### 1. Install Antigravity

Download from the official page:

**[https://antigravity.google/download](https://antigravity.google/download)**

Choose the **Windows** version and run the installer.

---

### 2. Install a Terminal

Windows comes with **PowerShell** and **Command Prompt**, but we recommend **Windows Terminal** for a much better experience:

1. Open the **Microsoft Store** (search "Store" in the Start menu)
2. Search for **Windows Terminal**
3. Install it

For an even better experience, try **[Warp](https://www.warp.dev/)** — an AI-powered terminal available for Windows.

---

### 3. Install Node.js (via Volta)

**Volta** is the cleanest way to manage Node.js on Windows:

1. Download the installer from [volta.sh](https://volta.sh/)
2. Run it
3. Open a **new** terminal window (important — old windows won't see Volta)
4. Install Node.js:

```powershell
volta install node@22
```

**Verify:**
```powershell
node --version
```

---

### 4. Optional: Install GitHub CLI

For pushing code to GitHub:

```powershell
winget install GitHub.cli
```

Then authenticate:
```powershell
gh auth login
```

Follow the prompts to log in via your browser.

---

## Your First Project

### Create a Workspace

Open **PowerShell** or **Windows Terminal** and create a projects folder:

```powershell
mkdir -p $HOME\gitrepos\my-first-project
```

This creates a `gitrepos` folder in your user directory (e.g., `C:\Users\YourName\gitrepos`).

### Open in Antigravity

1. Open **Antigravity**
2. Go to **File → Open Folder...**
3. Navigate to your project folder
4. Click **Open**

You're ready to start!

---

## Windows-Specific Tips

### OneDrive Interference

If you're using OneDrive, be very careful:

- **OneDrive constantly syncs files**, which can interfere with the agent's work
- File locks, "EPERM" errors, and mysterious failures are often caused by OneDrive
- **Recommendation:** Keep your `gitrepos` folder **outside** of OneDrive-synced locations

The safest location is directly in your user folder:
```
C:\Users\YourName\gitrepos
```

Make sure this folder isn't inside `Documents` or `Desktop` if those are synced to OneDrive.

### Path Differences

Windows uses **backslashes** (`\`) in file paths, while most code uses **forward slashes** (`/`). The agent handles this for you in code, but when typing paths in PowerShell, use backslashes.

### WSL (Windows Subsystem for Linux)

Some tools work better on Linux. **WSL** gives you a Linux environment inside Windows:

```powershell
wsl --install
```

You'll need WSL for:
- **ARM-based Windows devices** (Surface Pro X, etc.) — Some tools like Wrangler don't run natively on ARM Windows
- **Deployment to Cloudflare** — May require WSL on ARM devices

The agent will tell you if you need WSL for a specific task.

---

## Common Windows Issues

### "EPERM" or "File Locked" Errors
- Close other programs using the project files (including any running servers)
- Check if OneDrive is interfering
- Try again in a few seconds

### "Command not found" after installing something
- Close and reopen your terminal
- Restart Antigravity

### ARM64 Compatibility
If you're on an ARM-based Windows device:
- Most Node.js tools work fine
- Wrangler (for Cloudflare deployment) needs WSL
- The agent will guide you through WSL setup if needed

### File Path Too Long
Windows has a 260-character path limit by default. If you hit this:
- Keep your project folder close to the root (short paths)
- Or ask the agent: *"Enable long file paths on Windows"*

---

## Deploying from Windows ARM (WSL Workflow)

If you're on ARM Windows and need to deploy to Cloudflare:

1. Build your site in Windows as usual (`npm run build`)
2. Open WSL (`wsl` in terminal)
3. Copy the build output to a Linux path:
```bash
mkdir -p ~/deploy
cp -r /mnt/c/Users/YourName/gitrepos/my-project/dist ~/deploy/
```
4. Deploy from that Linux path:
```bash
cd ~/deploy
npx wrangler pages deploy dist --project-name my-project
```

The agent can guide you through this process. Just say: *"Deploy this to Cloudflare using WSL"*

---

## Next Steps

- **[Key Concepts](key-concepts.md)** — Understand the mental models
- **[Quick Start](antigravity-quickstart.md)** — Build your first project
- **[Permissions](permissions-and-approvals.md)** — Configure the trust system
- **[Planning Mode](planning-mode.md)** — Handle complex projects

---

*Last updated: February 27, 2026*

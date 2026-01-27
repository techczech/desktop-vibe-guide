# AGENTS.md

A guide for AI coding agents working on this project.

## Project Overview
- **Purpose**: A comprehensive guide for high-speed desktop productivity and "vibecoding" using Antigravity.
- **Target Audience**: Researchers, academics, and anyone wanting to automate their desktop workflow.
- **Philosophy**: Mastering the machine through AI-led collaboration; if you can chat, you can build.
- **Scope**: Platform-agnostic (macOS/Windows), covering file management, custom tools, and web development.
- **Tech Stack**: Vite + React, Markdown, Lucide icons.

## Build Commands
```bash
cd website
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production (output: dist/)
```

## Deployment
- Cloudflare Pages via Wrangler
- On ARM Windows, Wrangler requires WSL
- **CRITICAL**: To avoid file system lock issues, you MUST copy the build output to the Linux filesystem before deploying.

### Windows ARM / WSL Deployment Workflow
1. Build the site in Windows as usual (`npm run build`)
2. Switch to WSL (`wsl`)
3. Copy the `dist` folder to a purely Linux path (e.g., `~/vibe-deploy`)
4. Deploy from that Linux path

```bash
# Example sequence in WSL:
# 1. Setup environment (one-time)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 22

# 2. Prepare deployment folder
mkdir -p ~/vibe-deploy
# Remove old build if exists
rm -rf ~/vibe-deploy/dist 

# 3. Copy build from Windows (replace path as needed)
cp -r /mnt/c/Users/mast5819/gitrepositories/windowsvibecodingsetup/website/dist ~/vibe-deploy/

# 4. Deploy
cd ~/vibe-deploy
npm install -D wrangler # Install local wrangler
npx wrangler pages deploy dist --project-name windows-vibe-guide
```

## Repository
- GitHub: https://github.com/techczech/desktop-vibe-guide (Migrated from windows-vibe-guide)

## Documentation Structure
- `/docs/` - Markdown source files
- `/website/public/docs/` - Copies for web (keep in sync)
- `/website/src/App.jsx` - Navigation config

## Code Style
- Vanilla CSS (dark theme, glassmorphism)
- Icons: lucide-react
- Documentation: conversational, encouraging, no jargon

## Adding New Documentation
1. Create .md in `/docs`
2. Copy to `/website/public/docs/`
3. Add to `docs` array in `App.jsx`
4. Rebuild and redeploy

## Common Windows Issues
1. **EPERM/File Locks**: Retry or use WSL
2. **ARM64**: Must use WSL for Wrangler
3. **Path issues**: Forward slashes in code, backslashes in PowerShell

## Agent Behavior Guidelines
- Always explain what you're doing in plain language
- If a command fails, try alternatives or search online
- Remind users they can ask you to install tools for them
- Guide users through terminal steps when necessary
## Progress Status & Recent Updates
- **2026-01-27**: Complete redesign from "Windows Vibe Coding" to "Desktop Vibecoding Productivity Guide".
- **Added Content**: 
    - `docs/terminal-basics.md`: Explainer on terminal history, core commands, and CLI productivity.
    - Updated `docs/setup.md` with **Warp** terminal recommendations for Mac and Windows.
    - Updated `docs/workflow.md` to focus on general desktop automation.
- **Current Status**: Redesign complete, verified locally. The old Windows-only site is now archived.

---

## For Users

You can download this file and place it in your project folder. It helps AI agents understand your project and work more effectively.

**To use it:**
1. Save this file as `AGENTS.md` in your project's root folder.
2. Start chatting with the agent—it will read this file automatically.
3. Customize it with your own project's build commands and preferences.

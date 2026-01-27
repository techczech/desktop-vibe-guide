# The Non-Developer's Guide to Building Web Applications with AI 🤖✨

**Welcome!** This guide is designed for anyone who wants to build, publish, and share websites using AI, *without* needing to understand complex code or terminal commands. Suitable for both **macOS** and **Windows** users.

If you can chat, you can build.

---

Building with AI isn't magic; it's a partnership. Throughout this project, we learned that the AI (Antigravity) is powerful but can occasionally get stuck on environment-specific issues.

**Your Role:**
1.  **Don't Give Up:** If the AI tries a command and it fails, simply tell it "That didn't work, try something else."
2.  **Use Search:** Often, the AI needs a nudge. Asking it to "search online for a solution" is a superpower.
3.  **Switch Models:** If one AI "brain" feels stuck, try switching options (like moving from one model to another in your settings) to get a fresh perspective.
4.  **Read the Logs:** You don't need to understand them. Just copy the error message you see and paste it back to the AI.

---

## 🛠️ The One-Time Setup (Do This First)

To let the AI build for you, you need a few core tools. You only need to install these once. You can ask the Agent inside Antigravity to install them for you but it may be quicker to do it yourself.

### 1. The "Manager" (Volta or Homebrew)
- **Mac:** Use **Homebrew**. Open your terminal and run:
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- **Windows:** Use **Volta**. Download the installer from [volta.sh](https://volta.sh/).

### 2. The "Brain" (Node.js)
This is the engine that runs the code the AI writes.
- **Mac (via Homebrew):** `brew install node`
- **Windows (via Volta):** `volta install node@22`

### 3. The "Sharer" (GitHub CLI)
This lets you share your code with the world without clicking through complex websites.
- **Mac:** `brew install gh`
- **Windows:** `winget install GitHub.cli`
- **Authenticate:** After installing, run `gh auth login` and follow the prompts to log in via your browser.

---

If you are on Windows and want the smoothest experience, you can use **WSL (Windows Subsystem for Linux)**. This gives you a "Linux brain" inside Windows, which is what most AI tools prefer.
6.  Open Terminal and run: `wsl --install`

---

## 🚀 How to Build, Share & Publish (The "Vibe" Workflow)

Now you are ready. Here is the exact loop we used to build this site:

### Step 1: Start the Agent
Open your AI coding tool (VS Code with Antigravity).

### Step 2: Speak in Plain English
Tell the agent what you want.
> *Example: "Make a portfolio website for my photography. Use a dark theme with blue accents."*

### Step 3: Let It Work (and Watch)
The agent will write code. It might try to run commands.
*   **If it works:** Great! You'll see things happen and files being created.
*   **If it fails:** It's common. The agent might show an error (e.g., "EPERM" on Windows or "Permission Denied" on Mac).
    *   **Your Move:** Tell it: *"That failed. Please explain what happened and suggest a fix I can run in my terminal."*

### Step 4: Share Your Code (GitHub)
When your project is ready, you don't need to go to github.com. Just use the agent or the terminal:
```powershell
gh repo create my-website --public --source=. --remote=origin --push
```
*   *This one command creates the online folder, links it, and uploads your code.*

### Step 5: Publish to the World (Cloudflare)
When you want to go live, tell the agent: *"I want to publish this to Cloudflare."*

On some systems, the agent might need a nudge to publish. **You have to be the closer.**

1.  Open your **Terminal**.
2.  Run this "Magic Command":
    ```bash
    npx wrangler pages deploy ./dist
    ```
3.  A browser window will open. Click "Allow" to log in to Cloudflare.
4.  **Done!** Your site is now live on the internet.

---

## 💡 Troubleshooting Cheat Sheet

*   **Error: "File Locked" or "EPERM" (Windows)**
    *   *Solution:* Close any other programs using the project folder and try again.
*   **Error: "Command not found"**
    *   *Solution:* Restart your terminal or computer after installing new tools.
*   **Error: "Permission Denied" (Mac)**
    *   *Solution:* The agent might need you to run a command with `sudo` (be careful) or check folder permissions.
*   **Agent gets stuck looping?**
    *   *Solution:* Tell it: *"Stop everything. Search online for this specific error message."*

---

**Remember:** You are the Director. The AI is the Cameraman. If the shot is blurry, you don't grab the camera—you just tell them to focus.

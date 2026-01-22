# Setting Up Antigravity on Windows 🛠️

Windows provides a unique environment for AI agentic coding. Here is how to optimize it.

## 1. Terminal Choice
We recommend **PowerShell 7** or the **Windows Terminal**. It handles the interactive nature of Antigravity well.

## 2. CLI Alias
Ensure your alias is set up. On your system, it is configured as:
```powershell
agy
```

## 3. Environment Variables
Antigravity often needs specific environment variables for Cloudflare or other services. You can check them using:
```powershell
Get-ChildItem Env: | Where-Object { $_.Name -match "ANTIGRAVITY" }
```

## 4. Node.js Configuration
Use the latest LTS version of Node.js. 
```powershell
node -v # Should be v22+
```

## 5. IDE Setup
VS Code is the preferred editor. Ensure the Antigravity extension is installed and configured to use your local CLI.

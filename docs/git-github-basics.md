# Git & GitHub for Everyone 📚

You don't need to be a developer to use Git and GitHub. Think of them as **Dropbox for version control**—but more powerful.

## What is Git?

**Git** is a tool that tracks changes to your files over time. Imagine you're working on a research paper:
*   **Version 1:** Your first draft.
*   **Version 2:** You add a new section.
*   **Version 3:** Your colleague makes edits.

Instead of saving files as `paper_v1.docx`, `paper_v2_final.docx`, `paper_v2_REALLY_final.docx`, Git keeps one file and **remembers every change**. You can:
*   See who changed what and when.
*   Go back to an older version if needed.
*   Merge changes from multiple people.

## What is GitHub?

**GitHub** is an online storage service for Git projects. It's like Google Drive but designed specifically for Git.

When you upload ("push") your work to GitHub:
*   It's backed up in the cloud.
*   Others can view, download, or collaborate on it.
*   You can control who has access (public or private).

## Why Use Git/GitHub for Datasets or Documents?

1.  **Transparency:** In research, you can share your datasets and code so others can verify your work.
2.  **Collaboration:** Multiple people can work on the same dataset without emailing versions back and forth.
3.  **History:** You can see exactly what changed and when—crucial for reproducibility.
4.  **Backup:** Your work is safe if your computer crashes.

## The Basics (Plain English)

### Saving Your Work
```powershell
git add .             # "Hey Git, remember all the files I changed."
git commit -m "Added new dataset"  # "Here's a snapshot with a note about what I did."
```

### Uploading to GitHub
```powershell
git push              # "Send my snapshots to GitHub."
```

### Downloading Someone Else's Work
```powershell
git clone https://github.com/username/project-name  # "Download this entire project to my computer."
```

### Creating a New Project on GitHub
```powershell
gh repo create my-dataset --public --source=. --push  # "Create a public folder on GitHub and upload my files."
```

## Common Terms (Simplified)

*   **Repository (Repo):** A folder that Git is tracking. Think of it as a "project."
*   **Commit:** A snapshot of your work at a specific moment.
*   **Push:** Upload your commits to GitHub.
*   **Pull:** Download the latest changes from GitHub.
*   **Clone:** Download a full copy of a repository.
*   **Branch:** A parallel version of your work (like a "what if" experiment).

## Real-World Example

You're a researcher sharing a CSV file of climate data:

1.  Put your `climate-data.csv` in a folder.
2.  Run:
    ```powershell
    git init               # Start tracking this folder
    git add climate-data.csv
    git commit -m "Initial dataset upload"
    gh repo create climate-research --public --source=. --push
    ```
3.  Now anyone can visit `github.com/yourusername/climate-research` and download your dataset.
4.  If you update the data next month:
    ```powershell
    git add climate-data.csv
    git commit -m "Updated with January 2026 data"
    git push
    ```
5.  Your collaborators can `git pull` to get the latest version.

---

**You don't need to memorize these commands.** The AI agent can run them for you. Just tell it:
> *"Initialize a Git repository and push this to GitHub as a public project called 'my-dataset'."*

And it will do it. That's the power of agentic coding.

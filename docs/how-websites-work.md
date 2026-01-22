# How Websites Run on Your Computer 🖥️

Before you can build websites, it helps to understand how they actually work. Don't worry—this is simpler than it sounds.

---

## What is a Web Browser, Really?

A web browser (Chrome, Firefox, Edge) is just a **viewer for HTML files**.

That's it. When you visit a website:
1. Your browser asks a server: "Give me your HTML file"
2. The server sends the HTML (plus CSS for styling, JavaScript for interactivity)
3. Your browser displays it

The key insight: **The server can be anywhere**—including your own computer.

---

## What is Localhost?

**Localhost** means "this computer." When you see `http://localhost:5173`, it means:
- `http://` — Use the web protocol
- `localhost` — Talk to this same computer
- `:5173` — On port 5173 (like a specific door number)

Your computer becomes both the server (sending files) and the client (viewing them).

This is how developers test websites before putting them on the internet.

---

## What is Node.js?

**Node.js** is a program that lets your computer run JavaScript outside of a browser.

Why does that matter?

1. **It powers your local server.** When you run `npm run dev`, Node.js starts a server on your computer.
2. **It processes your code.** Modern websites use tools that transform your code before the browser sees it.
3. **It manages packages.** Node.js comes with `npm` (Node Package Manager), which downloads and manages code libraries.

Think of Node.js as the engine that makes everything work behind the scenes.

### How to Install Node.js

Ask the agent:
> *"Install Node.js for me using Volta"*

Or install Volta manually from [volta.sh](https://volta.sh), then run:
```powershell
volta install node
```

---

## What is React?

**React** is a popular way to build websites. Instead of writing raw HTML, you write components:

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

This might look like HTML, but it's actually JavaScript that *generates* HTML. React:
- Makes it easy to build interactive websites
- Automatically updates the page when data changes
- Is used by Facebook, Instagram, Airbnb, and millions of other sites

You don't need to learn React to use it. The AI agent can write React code for you. Just describe what you want:
> *"Add a button that counts how many times it's been clicked"*

---

## How It All Fits Together

Here's what happens when you build a website locally:

```
Your Code (React/JavaScript/HTML)
        ↓
    Node.js processes it
        ↓
    Local Server starts (localhost:5173)
        ↓
    Browser displays it
```

1. **You write code** (or the agent writes it for you)
2. **Node.js runs a development server** that watches for changes
3. **The server sends files** to your browser
4. **You see your website** at `http://localhost:5173`
5. **When you make changes**, the server automatically refreshes your browser

This is called **hot reloading**—you see changes almost instantly.

---

## What Antigravity Does for You

The great news: **Antigravity handles all of this automatically.**

When you say *"Create a website"*, it:
1. Sets up a project with React (or another framework)
2. Configures the development server
3. Installs all the required packages
4. Starts the server
5. Opens your browser to the right URL

When you say *"Make the header blue"*, it:
1. Finds the right file
2. Changes the code
3. Saves it
4. The server detects the change
5. Your browser refreshes automatically

You never have to think about Node.js, npm, or localhost unless something goes wrong.

---

## Common Scenarios

### Starting a Fresh Project
> *"Create a new React website with a dark theme"*

The agent will set everything up and start the server.

### Running an Existing Project
> *"Install the dependencies and run the development server"*

The agent will run `npm install` and `npm run dev`.

### Seeing Your Website
The agent will tell you something like:
> "Server running at http://localhost:5173"

Open that URL in your browser.

### Building for Production
> *"Build the website for production"*

This creates optimized files in a `dist` folder, ready to deploy.

### Deploying
> *"Deploy to Cloudflare Pages"*

The agent will push your `dist` folder to Cloudflare.

---

## Troubleshooting

### "Node.js is not installed"
Ask: *"Install Node.js for me"*

### "Port 5173 is already in use"
Something else is using that port. Ask: *"Stop whatever is running on port 5173"* or *"Use a different port"*

### "npm install failed"
This often happens on Windows due to file locks. Ask: *"Try installing again"* or close other programs that might be using the files (like VS Code or another terminal).

### "I can't see my changes"
Refresh your browser. If that doesn't work, ask: *"Restart the development server"*

---

## Summary

- **Browser**: Displays HTML files
- **Localhost**: Your computer as a server
- **Node.js**: The engine that runs your development environment
- **React**: A popular framework for building interactive websites
- **Antigravity**: Makes all of this happen automatically

You don't need to memorize commands or understand every detail. Just tell the agent what you want, and it will handle the technical parts.

---

*Last updated: January 22, 2026*

# File Formats for AI-Powered Workflows

Understanding file formats is crucial when working with AI agents. Different formats serve different purposes, and choosing the right one makes your work faster and more effective.

---

## Markdown: The Language of AI Agents

Markdown is a simple way to format text that looks great and is easy for both humans and AI agents to read.

### It's Just Text

The most important thing to know about Markdown is that **it is just a plain text file**. 
* The `.md` at the end of the filename is just a convention to tell apps that it contains Markdown formatting. 
* In reality, any text file (even one ending in `.txt`) would work, but `.md` allows the system to know to open the file in an application that knows what to do with it.

### The Basics

In Markdown, you use special characters to tell the computer how to display your text.

#### Headings
Use the `#` symbol to create headings.
* `# Main Title` (Heading 1)
* `## Section Title` (Heading 2)
* `### Sub-section` (Heading 3)

#### Emphasis
* `**Bold Text**`: Wrap text in double asterisks.
* `*Italic Text*`: Wrap text in single asterisks.

#### Lists
Create bullet points with a simple `*` or `-`.
* Item 1
* Item 2

Create numbered lists with numbers:
1. First item
2. Second item

#### Links
You can link to websites or other files:
`[Link Text](https://example.com)`

#### Code and Technical Snippets
If you want to include a snippet of code or a specific command, wrap it in "backticks" (\`).
* **Inline Snippet**: Use single backticks: `git status`
* **Code Block**: Use triple backticks for a longer block:
    ```bash
    git add .
    git commit -m "Update docs"
    git push
    ```

#### Tables
You can create tables using pipes `|` and dashes `-`.

| Column A | Column B |
| :--- | :--- |
| Row 1, Cell 1 | Row 1, Cell 2 |
| Row 2, Cell 1 | Row 2, Cell 2 |

Don't write your Markdown tables manually—ask the AI agent to create them for you.

#### Images
Linking to an image is very similar to a link, but starts with an exclamation mark `!`.
`![image description](image.png)`

You can keep the image file in the same folder as the markdown file or in any other folder as long as you provide the full path such as `![image description](images/image.png)`.

### YAML: Metadata for Your Documents

Sometimes we want to store "data about the data" (metadata) at the top of a document—like the author, date, or tags. We use a format called **YAML** for this.

YAML goes at the very top of the file, between two sets of triple dashes:
```yaml
---
author: Dominik Lukeš
date: 2026-01-29
tags: [productivity, AI, documentation]
status: draft
---
```

AI agents are very good at reading this block to understand the context of your file, but you can also process it automatically using custom software (that the AI agent can write for you).

### Why We Use Markdown

Markdown is the "native language" of AI agents. When you use Markdown:
1. **AI understands structure**: It knows the difference between a title and a paragraph.
2. **No hidden formatting**: Unlike Word files, there are no hidden codes that can confuse the AI.
3. **Easy conversion**: We can easily turn Markdown into beautiful PDFs or websites later.

### How to Create a Markdown File

Every Markdown file usually ends with the extension `.md`. 

**Ask your agent:** 
> *"Create a new markdown file in the 'docs' folder called 'summary.md' with a heading 'Weekly Summary' and a bulleted list."*

The agent will handle the technical work of creating the file; you just need to tell it what content to put in.

---

## JSON: Structured Data for Machines

**JSON** is a standard way to store structured data so that computers can process it with 100% accuracy. While Markdown is for typical text documents, JSON is for highly structured data—such as database records, lists, and complex tables.

(JSON stands for JavaScript Object Notation, but most people using it don't know this, and in practice it's used as a generic term for structured data and has nothing to do with JavaScript anymore.)

### The Structure of JSON

A JSON file is essentially a list of labels (keys) and their values. It always uses curly braces `{ }` to group data and square brackets `[ ]` for lists.

**Example of a project entry:**
```json
{
  "project_name": "Desktop Productivity Guide",
  "version": "1.0",
  "active": true,
  "team_members": [
    "Dominik Lukeš",
    "Agent Antigravity"
  ],
  "metadata": {
    "created_at": "2026-01-29",
    "topic": "AI and Productivity"
  }
}
```

### Why LLMs Love JSON

LLM agents (like Antigravity) are exceptional at parsing JSON. 
* **No ambiguity**: Everything is clearly linked together—no need to look up context.
* **Easy to read**: Both humans and LLMs can read JSON files easily (LLMs more easily).
* **Machine readable**: LLMs find it easy to write software that can read JSON files and process them—e.g., build tables or websites or databases out of them.

### JSON vs CSV: Why It Matters

LLMs can read complicated JSON files but struggle with long CSV files. 

Here's an example of a CSV with headers and column labels:
```csv
name,age,city
Dominik,30,Prague
Alice,25,New York
Bob,35,Los Angeles
```

Here's an example of the same thing using JSON:
```json
[
  {
    "name": "Dominik",
    "age": 30,
    "city": "Prague"
  },
  {
    "name": "Alice",
    "age": 25,
    "city": "New York"
  },
  {
    "name": "Bob",
    "age": 35,
    "city": "Los Angeles"
  }
]
```

You can easily see how much easier it is to know everything about any person in the JSON file by looking at it—without having to look up and down columns and rows to understand what any element means. 

This is particularly true if the CSV has 20 columns and many rows like:

```csv
id,first_name,last_name,email,phone,address,city,country,occupation,company
1,Dominik,Lukes,dominik@oxford.ac.uk,+44-1234-567890,123 High St,Oxford,UK,AI Consultant,University of Oxford
2,Jane,Doe,jane.doe@example.com,+1-555-0199,456 Maple Ave,New York,USA,Senior Developer,Tech Solutions
3,Piotr,Kowalski,p.kowalski@firm.pl,+48-22-123-4567,ul. Marszałkowska 10,Warsaw,Poland,Project Manager,BuildIt Ltd
```

Now, you can see how much easier it is to know everything about any person in the JSON file by looking at it in isolation:

```json
{
    "id": 1,
    "first_name": "Dominik",
    "last_name": "Lukes",
    "email": "dominik@oxford.ac.uk",
    "phone": "+44-1234-567890",
    "address": "123 High St",
    "city": "Oxford",
    "country": "UK",
    "occupation": "AI Consultant",
    "company": "University of Oxford"
}
```


### How to Work with JSON

JSON files end with the extension `.json`. 

You rarely need to write JSON by hand. Instead, you can describe your data and ask the agent to format it for you.

### JSON Syntax Basics

The principles of JSON should be obvious just by looking at the examples. You will never write JSON manually, so you don't need the details, but you should know that:

1. **Quotes**: Both keys (labels) and text values MUST be in double quotes (e.g., `"name": "Dominik"`).
2. **Commas**: Every line in a list or object must end with a comma, **except the last one**.
3. **Braces**: Every opening `{` or `[` must have a matching closing `}` or `]`. 
4. **Difference between {} and []**: 
    * `{}` contains a list of key-value pairs (e.g., `{ "name": "Dominik", "age": 30 }`)
    * `[]` contains a list of values (e.g., `[1, 2, 3]`)—this is used even to create a list of records (e.g., `[ { "name": "Dominik", "age": 30 }, { "name": "Alice", "age": 25 } ]`)

**Ask your agent:** 
> *"Look at the files in the 'publications' folder and create a file called 'index.json' in that same folder. I want it to contain a list of objects with the title, author, and year for each PDF."*

---

## CSV: When Simplicity Matters

CSV (Comma-Separated Values) is a simple tabular format that's easy for spreadsheet applications to read.

### When to Use CSV

* **Spreadsheet compatibility**: When you need to open data in Excel, Google Sheets, or similar tools
* **Simple data**: When your data is truly tabular with no nested structures
* **Human editing**: When non-technical users need to edit data directly

### When NOT to Use CSV

* **Complex structures**: When your data has nested objects or arrays
* **AI processing**: When an AI agent needs to understand and manipulate the data
* **Ambiguous data**: When values might contain commas, quotes, or newlines

### Converting Between Formats

AI agents can easily convert between formats:

> *"Convert this CSV file to JSON format."*
> *"Export this JSON data to a CSV file for use in Excel."*

---

## Choosing the Right Format

| Format | Best For | AI-Friendly | Human-Editable |
|--------|----------|-------------|----------------|
| **Markdown** | Documentation, notes, articles | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **JSON** | Structured data, configurations, APIs | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **CSV** | Simple tables, spreadsheet data | ⭐⭐ | ⭐⭐⭐⭐ |

### General Guidelines

* **Use Markdown** for anything that's primarily text: documentation, notes, articles, guides
* **Use JSON** for structured data that AI agents will process: configurations, data records, API responses
* **Use CSV** only when you specifically need spreadsheet compatibility and the data is simple

---

## Practical Examples

### Example 1: Project Documentation

**Use Markdown** for:
* README.md
* CONTRIBUTING.md
* User guides
* Meeting notes

### Example 2: Configuration Files

**Use JSON** for:
* package.json (Node.js projects)
* settings.json (application settings)
* Data exports from databases

### Example 3: Data Analysis

**Use CSV** when:
* Exporting data for Excel analysis
* Sharing simple tabular data with non-technical users
* Importing into data visualization tools

**Convert to JSON** when:
* Processing with AI agents
* Building web applications
* Creating complex data pipelines

---

*Remember: Let the AI agent handle the formatting. You focus on the content and structure—the agent will write the actual syntax.*  

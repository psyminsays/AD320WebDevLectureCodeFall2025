# Week 1: Intro to HTML

# Learning objectives

- [ ] Understand how HTML plays a role in web development.
- [ ] Recall various HTML tags, CSS selectors, and properties.
- [ ] Open browser developer tools.
- [ ] Build a small HTML page with introductory CSS.

## Agenda

- John Lee Career talk
- Syllabus review
- A note about pacing
- Three Pillars of Web Development
- Terms
- Break
- Demo
- Exit Ticket

### The Three Pillars

- **HTML** – Skeleton (structure)
- **CSS** – Style/clothing (appearance)
- **JavaScript** – Muscular system (movement and interaction)

---

## HTML: HyperText Markup Language

Everyone, take a moment to open a website (Google, or any site you like).  
Press **F12** or right-click and select **Inspect**.

Go to the **Elements** tab. You will see a lot of strange-looking tags. Let’s explore:

- Edit a word and see what happens on the page
- Delete a tag and observe what changes

Why do these changes in code instantly affect what you see on the screen?

This is **HTML**, the building blocks of every web page.  
Originally, HTML was the only language used to build websites.

👉 [Look at some older websites](https://www.webdesignmuseum.org/)

---

## Key Terms

- **Document**  
  A web page is built on an HTML document, the actual file that the browser runs. Historically more text-based, today it forms the foundation of structure and content.

- **Tag**  
  HTML tags define elements of the page. Example: `<h1>` is a top-level heading.

  - Tags may come in pairs: `<h1></h1>`
  - Or be self-closing: `<img />`

- **SPA (Single Page Application)**  
  Older websites used multiple HTML documents connected with `<a>` links. Modern sites often use a single HTML file dynamically updated with JavaScript. We will explore this further when we get into React.

- **Semantic HTML**  
  Early HTML relied heavily on `<div>`s. Today, we have semantic tags like `<header>`, `<nav>`, `<article>`, and `<footer>` that improve readability and accessibility, especially for screen readers.

👉 [HTML Elements List](https://www.w3schools.com/tags/)

- **CSS Selector**  
  A way to target elements in an HTML document so you can apply styles. Examples include tag selectors (`p`), class selectors (`.classname`), and ID selectors (`#idname`).

- **CSS Property**  
  The style you want to add to an element `background-color`

- **CSS Rule**  
  The collection of properties with a selector
  ```css
  p {
    color: blue;
    font-size: 10px;
  }
  ```

---

## Break

---

## Demo

I do not usually recommend coding along during lecture.  
If you do:

- Feel free, but I cannot pause to debug individual issues
- A solution is included in the starter code
- If you get stuck, pause to take notes and compare later
- You can come to me after class for help

---

## In-Class Activity

**Task:** Create a simple HTML file for your team

1. Create a file named `<your-team-name>.html`
2. Inside, include:
   - A header (`<h1>`) with your team name
   - A section with a list (`<ul>` or `<ol>`) of team members
   - An aside with a fun fact about your team
   - A footer with a quote that represents your team
3. Rotate roles so everyone gets a turn coding

---

## Stretch Goal

Add CSS to your HTML

1. Create a file named `<your-team-name>.css`
2. Import it into your HTML with:
   ```html
   <link rel="stylesheet" href="<your-team-name>.css" />
   ```
3. Add sytles using

- A Tag selector
- Class Selector
- ID Selector
  [CSS Cheat Sheet](https://www.geeksforgeeks.org/css/css-cheat-sheet-a-basic-guide-to-css/#CSS%20Basics) Feel free to experement a bit with properties

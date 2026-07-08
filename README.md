# Matthew White — Personal Website

A modern, clean personal website for **Matthew White**, Systems Engineer. Built as a
single-page React application with a focus on resilient, well-tested code.

🔗 **Sections:** About · Systems Engineering Work · Family · Blog

## ✨ Features

- **Editorial "letter" design** — the page reads as a personal letter: warm paper palette,
  Fraunces + Newsreader typography, a single narrow prose column, and no marketing chrome.
  Designed with the [Hallmark](https://skills.sh/nutlope/hallmark) anti-AI-slop design skill.
- **Four content sections** — what I do (with a plain-spoken skills list), selected
  systems-engineering work told as prose, family life, and a reading list of blog posts.
- **Quiet, accessible chrome** — minimal edge-aligned header, letter-close footer, instant
  focus rings, and honest copy with no invented metrics.
- **100% unit test coverage** — every component, utility, and the app entry point is tested.

## 🛠 Tech Stack

| Concern    | Choice                                 |
| ---------- | -------------------------------------- |
| Framework  | React 19 + TypeScript                  |
| Build tool | Vite                                   |
| Styling    | Tailwind CSS + OKLCH design tokens     |
| Testing    | Vitest + React Testing Library         |
| Coverage   | `@vitest/coverage-v8` (100% threshold) |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## 🧪 Testing

The project enforces **100% coverage** on lines, branches, functions, and statements.
The thresholds are configured in `vite.config.ts`, so the coverage command fails if any
code is left untested.

```bash
# Run the test suite once
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with a coverage report
npm run coverage
```

## 📁 Project Structure

```
src/
├── components/     # Navbar, Hero, About, Work, Family, Blog, Footer, Section
├── data/           # Site content (profile, skills, projects, family, blog posts)
├── lib/            # Pure utilities (date + reading-time formatting)
├── test/           # Vitest setup
├── App.tsx         # Page composition
└── main.tsx        # App entry point
```

Content lives in `src/data/content.ts`, so updating copy, projects, or blog posts never
requires touching component code.

## 📄 License

© Matthew White. All rights reserved.

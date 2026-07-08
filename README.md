# Matthew White — Personal Website

A modern, clean personal website for **Matthew White**, Systems Engineer. Built as a
single-page React application with a focus on resilient, well-tested code.

🔗 **Sections:** About · Systems Engineering Work · Family · Blog

## ✨ Features

- **Modern, responsive design** — a dark, glassmorphic aesthetic built with Tailwind CSS,
  custom display typography, and subtle motion.
- **Four content sections** — an about summary with a skills breakdown, selected
  systems-engineering projects, family life, and a blog feed.
- **Fully accessible navigation** — sticky header with a keyboard- and screen-reader-friendly
  mobile menu.
- **100% unit test coverage** — every component, utility, and the app entry point is tested.

## 🛠 Tech Stack

| Concern    | Choice                                 |
| ---------- | -------------------------------------- |
| Framework  | React 19 + TypeScript                  |
| Build tool | Vite                                   |
| Styling    | Tailwind CSS                           |
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

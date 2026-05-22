# PMG Portfolio — CLAUDE.md

Pol Moreno Garcia's personal portfolio. Vite + React (plain JS, no TypeScript).

## Commands

```bash
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve dist/ locally
```

## Project structure

```
src/
  components/   # One file per page section
  data/         # Pure JS data arrays — edit content here
  hooks/        # useTyped, useReveal
  ui/           # Shared atoms: SectionHead, Terminal, Gear
  styles/
    global.css  # ALL styles live here, organised by section
  App.jsx       # Root: theme state + useReveal + section order
  main.jsx      # Entry: createRoot + import global.css

public/
  kronnus-logo.png   # Kronnus project logo
index.html           # HTML shell (font links live here)
vite.config.js
```

## Design system

All CSS is in `src/styles/global.css`. It is divided into clearly labelled sections matching component names. No CSS modules, no Tailwind — just flat class names scoped by section prefix (`.hero .grid`, `.about .bio`, etc.).

### Tokens (CSS variables)
- `--paper` / `--paper-2` — background surfaces
- `--ink` / `--ink-2` / `--ink-mute` — text hierarchy
- `--rule` / `--rule-soft` — borders/dividers
- `--accent` / `--accent-soft` — interactive accent colour
- `--font-mono` — JetBrains Mono (body, labels, code)
- `--font-display` — Space Grotesk (headings)

Dark mode is applied by adding `data-theme="dark"` to `<html>`. Theme state lives in `App.jsx` and is toggled from `Nav.jsx`.

### Reveal animations
Elements with `className="reveal"` start hidden. `useReveal` (called once in `App.jsx`) attaches an `IntersectionObserver` that adds the `.in` class when they scroll into view.

## Updating content

| What | Where |
|---|---|
| Skills list | `src/data/skills.js` |
| Work history | `src/data/experience.js` |
| Education | `src/data/education.js` |
| Projects | `src/components/Projects.jsx` (each card is unique markup) |
| Hero terminal lines | `LINES` const at the top of `src/components/Hero.jsx` |
| About bio text | `src/components/About.jsx` |
| Nav links | `NAV_LINKS` const at the top of `src/components/Nav.jsx` |
| Contact email / links | `src/components/Contact.jsx` |

## Adding a new section

1. Create `src/components/MySectionName.jsx` — export a named function.
2. Add any styles to `src/styles/global.css` under a new comment block `/* MySectionName */`.
3. Import and place the component in `src/App.jsx`.
4. Add a nav entry to `NAV_LINKS` in `src/components/Nav.jsx`.

## Assets

Static files (images, PDFs) go in `public/`. Reference them as `/filename.ext` in JSX (Vite serves `public/` at the root). The resume PDF should be placed at `public/resume_pol_moreno_garcia.pdf`.

## Fonts

Loaded via Google Fonts in `index.html`. Both weights of italic for Space Grotesk are included so the `.acc` italic style on headings renders correctly.

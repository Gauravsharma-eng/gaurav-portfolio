# Gaurav Sharma — Portfolio (React)

A modern, fully responsive portfolio built with **React**, **Bootstrap 5**, and **AOS**
(Animate On Scroll), using a dark "model card / inference console" visual identity fitted
to an ML/AI engineer's work.

## Project structure

```
gaurav-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── Gaurav_Sharma_Resume.pdf   ← replace with your real resume
└── src/
    ├── main.jsx                  # entry point, imports Bootstrap + AOS
    ├── App.jsx                   # assembles all sections
    ├── index.css                 # design tokens + component styles
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Certifications.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Option A — npm (recommended, used in this project)

This project is pre-wired to install Bootstrap 5 and AOS as npm packages and import them
directly in `src/main.jsx`:

```bash
npm run dev 
npm install dev      # local dev server
npm run build     # production build → dist/
```

`src/main.jsx` already contains:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.css'
```

And AOS is initialized once in `App.jsx`:

```js
import AOS from 'aos'
useEffect(() => { AOS.init({ duration: 800, once: true }) }, [])
```

## Option B — CDN (no npm install for Bootstrap/AOS)

If you'd rather not bundle Bootstrap/AOS via npm, drop these tags into `index.html`
instead, and remove the corresponding `import` lines from `src/main.jsx`:

```html
<!-- in <head> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">

<!-- before closing </body> -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
```

With the CDN approach, `AOS` is available on `window`, so initialize it with
`window.AOS.init({ duration: 800, once: true })` inside the same `useEffect` in `App.jsx`.

## Customizing content

- **Resume**: replace `public/Gaurav_Sharma_Resume.pdf` with your actual PDF (same filename,
  or update the `href` in `src/components/Hero.jsx`).
- **Colors/fonts**: all design tokens (colors, fonts, spacing) live at the top of
  `src/index.css` under `:root`.
- **Content**: each section's copy and data lives at the top of its component file as a
  plain array/object (e.g. `SKILL_CATEGORIES` in `Skills.jsx`, `PROJECTS` in `Projects.jsx`),
  so you can update content without touching markup.
- **Contact form**: `Contact.jsx` currently only simulates a submission client-side. Wire
  `handleSubmit` up to a real service (Formspree, EmailJS, or your own API route) before
  going live.

## Deploying

```bash
npm run build
```

Deploy the generated `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host.

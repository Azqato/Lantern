# Lantern

A culture-based social platform for discovering yourself and others through art — books, films, music, games, and podcasts.

**Live site:** [azqato.github.io/Lantern](https://azqato.github.io/Lantern/)

Full documentation: [/docs](./docs/)

---

## Tech Stack

| Concern | Technology | Version |
|---|---|---|
| Static pages | Vanilla HTML5 | — |
| Styling (static) | Tailwind CSS via CDN | 3.x |
| Logic (static) | Vanilla JavaScript | ES6+ |
| Framework (dev) | Next.js | 15.0.0 |
| UI library (dev) | React | 19.0.0 |
| Language (dev) | TypeScript | 5.0.0 |
| CSS processing (dev) | Tailwind CSS + PostCSS + Autoprefixer | 3.4.0 / 8.4.0 / 10.4.0 |
| Deployment | GitHub Pages | static |

The project ships as vanilla HTML/JS/CSS with Tailwind loaded via CDN — zero build step, zero dependencies for the live site. The `app/` and `components/` directories contain a parallel Next.js version for future server-side migration.

---

## Prerequisites

For the static site (no build required):
- Any modern browser

For the Next.js dev environment:
- Node.js 20+
- npm 10+ (or pnpm / yarn)

---

## Installation

```bash
git clone https://github.com/Azqato/Lantern.git
cd Lantern
npm install
```

---

## Running Locally

**Static site (no install needed):**
```bash
# Python
python -m http.server 8000

# Node
npx serve .
```
Then open `http://localhost:8000` — or just open any `.html` file directly in a browser. Works on `file://` protocol.

**Next.js dev server:**
```bash
npm run dev
```
Runs at `http://localhost:3000`. The Next.js app is a parallel implementation; the canonical deployed version is the static HTML site.

---

## Environment Variables

No environment variables are required to run the project in its current state. The app is fully static with hardcoded placeholder data.

When backend services are added, the following variables will be needed (set in `.env.local`, never committed):

| Key | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | Future |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Future |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase public anon key | Future |

---

## Build and Deploy

**Static site — deploy to GitHub Pages:**
1. Push changes to the `main` branch.
2. GitHub Pages serves directly from the repo root (no build step).
3. `.nojekyll` in the root disables Jekyll processing so raw HTML files are served correctly.

**Next.js — production build:**
```bash
npm run build
npm run start
```
Output goes to `.next/`. Not currently deployed; static HTML is the live version.

---

## Project Structure

```
lantern/
├── index.html          — Landing page
├── profile.html        — User profile
├── feed.html           — Discovery feed
├── lists.html          — Curated lists
├── cohorts.html        — Smart Cohorts discovery
├── search.html         — Search with theme browse
├── onboarding.html     — 6-step first-run experience
├── nav.js              — Shared navigation component
├── favicon.svg         — 🏮 lantern emoji favicon
├── README.md           — This file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── app/                — Next.js app router pages
├── components/         — React TSX components
├── lib/                — Data models and utilities
└── docs/               — Full project documentation
```

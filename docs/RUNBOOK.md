# Lantern — Runbook

**Last Updated:** 2026-06-08

---

## Local Setup

Complete steps to get the project running from a fresh machine.

### Prerequisites

| Tool | Version | Check |
|---|---|---|
| Node.js | 20+ | `node --version` |
| npm | 10+ | `npm --version` |
| Git | Any | `git --version` |

A modern browser (Chrome, Firefox, Safari, Edge) is sufficient for the static HTML version — no Node.js required.

### Clone and install

```bash
git clone https://github.com/Azqato/Lantern.git
cd Lantern
npm install
```

`npm install` installs the Next.js dev dependencies. It is not required to run the static site.

---

## Running Locally

### Static site (no install required)

Open any `.html` file directly in a browser. The site works on `file://` protocol.

Or serve with a local HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (no install)
npx serve .

# Node.js (if http-server is installed)
npx http-server . -p 8000
```

Then open `http://localhost:8000`. The landing page is `index.html`.

### Next.js dev server

```bash
npm run dev
```

Runs at `http://localhost:3000`. The Next.js app redirects `/` → `/profile`. Hot reload is enabled.

---

## Build

### Static site

No build step. The static HTML files are the output. Deploy them as-is.

### Next.js production build

```bash
npm run build
```

Output goes to `.next/`. To test the production build locally:

```bash
npm run start
```

Runs at `http://localhost:3000`.

---

## Deploy

### Production — GitHub Pages (current live deployment)

GitHub Pages is configured to serve from the `main` branch root (`/`). `.nojekyll` in the repo root disables Jekyll processing.

**Deploy process:**
1. Merge changes to `main`.
2. Push to GitHub: `git push origin main`.
3. GitHub Pages automatically serves the updated files within 1–2 minutes.
4. Verify at [https://azqato.github.io/Lantern/](https://azqato.github.io/Lantern/).

No CI/CD pipeline. No build step on the server. GitHub Pages reads the raw files.

**First-time setup (already done; documented for reference):**
1. Go to repo **Settings → Pages**.
2. Source: "Deploy from a branch".
3. Branch: `main`, folder: `/ (root)`.
4. Save. The site will be live at `https://<username>.github.io/<repo>/`.

### Future — Next.js on Vercel (planned)

When the Next.js version becomes the canonical deployment:
1. Connect the GitHub repo to Vercel.
2. Vercel auto-detects Next.js and sets build command to `npm run build`, output to `.next/`.
3. Set environment variables in Vercel dashboard (see SECURITY.md).
4. Every push to `main` triggers a new production deploy automatically.

---

## Rollback

### GitHub Pages rollback

GitHub Pages serves the current `main` branch. To roll back:

```bash
# Revert to the previous commit
git revert HEAD
git push origin main
```

Or, if you need to roll back to a specific release tag:

```bash
git checkout <tag-or-commit-sha> -- .
git commit -m "Rollback to <version>"
git push origin main
```

GitHub Pages will serve the reverted version within 1–2 minutes.

### Vercel rollback (future)

In the Vercel dashboard: **Deployments → select previous deployment → Promote to Production**.

---

## Environment Configs

| Environment | URL | Config | Notes |
|---|---|---|---|
| Local (static) | `file://` or `http://localhost:8000` | None | Open HTML files directly |
| Local (Next.js) | `http://localhost:3000` | `.env.local` | Run `npm run dev` |
| Production | `https://azqato.github.io/Lantern/` | None (static) | Served by GitHub Pages |
| Future staging | TBD | `.env.staging` | TBD |

No environment-specific configuration exists in the current static site. All pages behave identically in all environments.

---

## Common Errors

| Error | Likely cause | Fix |
|---|---|---|
| Page shows 404 on GitHub Pages | `.nojekyll` missing, or file not committed | Ensure `.nojekyll` exists in repo root; verify the file is committed and pushed |
| `nav.js` not loading (nav bar missing) | Relative path to `nav.js` is wrong, or running on `file://` with stricter CORS | Serve via a local HTTP server instead of `file://`; verify `<script src="nav.js">` path is relative to the HTML file |
| Tailwind styles missing on static pages | Tailwind CDN `<script>` tag removed or blocked | Check the `<head>` of the affected page; ensure the CDN script is present |
| `npm run dev` fails with "Module not found" | `npm install` not run, or `node_modules` corrupted | Run `npm ci` to restore from lockfile |
| `npm run build` fails with type errors | TypeScript strict mode violations | Run `npx tsc --noEmit` to see all errors; fix before building |
| Next.js app shows blank page at `/` | Root `app/page.tsx` redirect not working | Check that `app/page.tsx` contains a `redirect('/profile')` call |
| Onboarding "Continue" stays disabled | Fewer than 8 works selected | Expected behavior: select at least 8 works in step 2 |
| Active nav link not highlighted | `window.location.pathname` does not match the expected filename | Check `nav.js`; the highlight logic compares `pathname` to each link's `href` |

---

## Monitoring

| What | Where | How to access |
|---|---|---|
| Site uptime | GitHub Pages status | [githubstatus.com](https://www.githubstatus.com/) |
| Live site | [azqato.github.io/Lantern](https://azqato.github.io/Lantern/) | Open in browser |
| JavaScript errors | Browser DevTools console | Open DevTools → Console on any page |
| Build errors | Local terminal | Output of `npm run build` |
| Accessibility | Lighthouse (Chrome DevTools) | DevTools → Lighthouse → Accessibility |
| Performance | Lighthouse (Chrome DevTools) | DevTools → Lighthouse → Performance |

No automated monitoring or alerting is configured. UptimeRobot (free tier) is recommended as a first step once uptime matters.

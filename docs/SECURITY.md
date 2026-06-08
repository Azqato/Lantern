# Lantern — Security

**Last Updated:** 2026-06-08

---

## Authentication Model

No authentication exists in the current version. Lantern v0.7.0 is a fully static, public site. There are no user accounts, no sessions, no login flows, and no protected routes.

**Planned (M3):**
- Email/password authentication via Supabase Auth or a comparable managed service
- Optional social auth (Google, GitHub)
- Session managed via HTTP-only cookies (not localStorage) to prevent XSS token theft
- CSRF protection on all state-mutating endpoints

---

## Authorization Model

No authorization model exists yet. All pages are publicly accessible.

**Planned (M3):**

| Role | Capabilities |
|---|---|
| Unauthenticated visitor | Read public profiles, public lists, landing page |
| Authenticated user | Full read/write to own profile, collections, lists; join cohorts; read others' public profiles |
| Future: creator tier | Enhanced profile features, analytics |
| Future: admin | Content moderation, user management |

Private profiles and lists (the `isPublic` field exists in `CuratedList`) will be read-protected at the API layer once authentication exists.

---

## Data Storage

No user data is stored in the current version. All data is hardcoded static content in JavaScript files. No database, no cookies, no localStorage writes for user data.

**Planned (M3):**

| Data type | Storage | Protection |
|---|---|---|
| User account (email, hashed password) | Supabase PostgreSQL | Encrypted at rest; bcrypt hashed passwords |
| User profile (bio, avatar) | Supabase PostgreSQL | Row-level security (users own their rows) |
| Media library (logged items, ratings, reviews) | Supabase PostgreSQL | Row-level security |
| Session tokens | HTTP-only cookies | Secure, SameSite=Lax |
| Media cover art (future) | Supabase Storage or CDN | Public read; write restricted to service role |

No sensitive data (financial, health, government ID) will be collected.

---

## Environment Variables

No environment variables are in use in the current static version. No secrets are hardcoded anywhere in the repository.

**Future variables (never commit these):**

| Variable | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes (when backend exists) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase public anon key (safe to expose) | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only, high privilege) | Yes — never expose to client |
| `NEXTAUTH_SECRET` | NextAuth.js session signing secret | Yes (if using NextAuth) |
| `SPOTIFY_CLIENT_SECRET` | Spotify OAuth secret for import | Yes (when import ships) |

All secrets must be configured in the hosting environment (Vercel environment variables, GitHub Actions secrets) and in `.env.local` locally. `.env.local` is in `.gitignore` and must never be committed.

---

## Third-Party Trust

| Service | Data received | Current status |
|---|---|---|
| GitHub Pages | Static file serving; no user data | Live |
| Tailwind CSS CDN (jsDelivr) | No user data; loads a CSS file | Live |
| Supabase | User accounts and all app data | Planned (M3) |
| Spotify | Music listening history (import only) | Planned (M6) |
| Goodreads | Book library (CSV import; no live connection) | Planned (M6) |
| Letterboxd | Film library (CSV import; no live connection) | Planned (M6) |
| IGDB (Twitch) | Game library | Planned (M6) |
| Plausible / GA4 | Anonymized page view and event analytics | Planned (M3) |

No user data flows to any third party in the current static version.

---

## Known Attack Surface

| Area | Risk | Mitigation |
|---|---|---|
| Static HTML pages | XSS via user-controlled content | Not applicable yet (no user input stored); must sanitize all user-provided text before rendering via `innerHTML` when dynamic content is added |
| `nav.js` DOM injection | Injecting navigation via `document.querySelector('#nav-placeholder').innerHTML` | Content is static and developer-controlled; not a risk in current version; becomes a risk if nav content becomes user-controlled |
| Tailwind CDN | Supply chain risk if CDN is compromised | Acceptable for MVP; switch to build-step CSS before production user data exists |
| Future API endpoints | IDOR, injection, auth bypass | Must implement row-level security in Supabase; validate all input at the API boundary |
| Future import connectors | OAuth token theft, data exfiltration | Tokens must be stored server-side only; never returned to the client |

---

## Dependency Policy

**Current:** Zero npm runtime dependencies. The static site uses only Tailwind CSS via CDN (no npm packages needed to run). The Next.js dev dependencies are pinned in `package.json`.

**Practices to follow as the project grows:**
- Run `npm audit` before every release and resolve high/critical vulnerabilities.
- Pin exact dependency versions in `package.json` (no `^` or `~` in production dependencies).
- Review changelogs before upgrading any dependency that handles authentication, cryptography, or request parsing.
- Do not add dependencies without a clear need; prefer native browser/Node APIs where feasible.
- Use `npm ci` (not `npm install`) in CI/CD pipelines to enforce exact lockfile versions.

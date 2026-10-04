# IDIA Official Website

Frontend-only product website built with React, Vite, React Router, and CSS.

## Local development

Requires Node.js 24 and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Vite, normally http://127.0.0.1:5173/.

If dependencies are already installed and pnpm is unavailable:

```sh
node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5173 --strictPort
```

## Build

```sh
pnpm build
pnpm preview
```

The build creates `dist/`, including separate static entry files for Download, Pricing, About, and Privacy Policy so direct visits and refreshes work on GitHub Pages.

## GitHub Pages

The deployment workflow in `.github/workflows/deploy.yml` builds and deploys every push to `main`. Repository Settings → Pages → Source must be **GitHub Actions**.

Expected website address: https://eMErsOnW3.github.io/IDIA-OFFCIAL-WEB/

`IDIA_BASE_PATH` sets the production repository path. Local development defaults to `/`. BrowserRouter uses the same base. Future custom-domain deployments can set the base to `/`.

## Project structure

- `src/components/` — reusable navigation, footer, buttons, cards, privacy demonstration, and flow diagram
- `src/pages/` — Home, Download, Pricing, About, Privacy Policy, and the unknown-route page
- `src/styles/global.css` — brand variables, layout, responsive styles, reduced motion
- `src/config.js` — extension version, download URL, contact email
- `src/App.jsx` — routes and page metadata
- `scripts/create-pages.mjs` — static route entries
- `public/favicon.svg` — IDIA favicon

## V1 placeholders

Set `extensionDownloadUrl` and `contactEmail` in `src/config.js` when the official release package and address are ready. Until then, those buttons display clear notices. Terms of Service is a reserved footer entry.

The Privacy Policy is available at `/privacy/` (under the configured base path), linked from every page footer, with no login required. Its content and public privacy contact address are maintained in `src/pages/Privacy.jsx`, with page styles in `src/styles/privacy.css`. No analytics, tracking, cookies, or contact forms are added by the policy page.

The privacy demonstration uses fixed sample text and local timed token substitution. It does not analyze uploads, connect to the extension, or send information to AI. Reset cancels pending timers.

There is no backend, database, authentication, payment integration, analytics, or remote font dependency. Product colors, plan descriptions, and version 0.1.0 follow the website brief; the Chrome extension remains a separate project.


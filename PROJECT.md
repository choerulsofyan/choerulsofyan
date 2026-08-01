# Choerul's Portfolio Website — Project Documentation

A bilingual (EN/ID) freelance developer portfolio: a homepage with 3 featured projects, an all-work page listing every project, and a slide-in case-study modal for project detail. Built as static HTML + React (via Babel in-browser, no build step).

## Stack & architecture

Plain HTML files loading React 18 + Babel standalone from a CDN (see `index.html` / `Work.html` `<head>` for the pinned script tags). No bundler, no npm install — every `.jsx` file is transpiled in-browser. This means:

- Each `<script type="text/babel">` file is its own scope. Shared components are attached to `window` at the end of the file that defines them (e.g. `window.Thumbs = {...}`, `window.CaseStudyModal = ...`).
- Global style objects must have unique names — never a bare `styles` in more than one file.
- Content lives in `data.js`, which sets `window.PORTFOLIO_DATA` (site copy) and `window.CASE_STUDIES` (project data) as plain objects — no fetch, no CMS.

## File map

| File | Role |
|---|---|
| `index.html` | Homepage shell — loads React/Babel, `data.js`, `icons.jsx`, `thumbs.jsx`, `tweaks-panel.jsx`, `case-study.jsx`, `app.jsx` |
| `Work.html` | All-work page shell — loads the same shared files plus `work-app.jsx` instead of `app.jsx` |
| `data.js` | All copy (`window.PORTFOLIO_DATA.en` / `.id`) and all project data (`window.CASE_STUDIES`) |
| `app.jsx` | Homepage sections: Hero, Work (3 featured cards), Services, Stack, Process, Contact, Footer |
| `work-app.jsx` | All-work page — renders every slug in `CASE_STUDIES` as a card grid; reuses Nav/Footer/reveal/scroll-progress (slim copies, since `app.jsx` isn't loaded on this page) |
| `case-study.jsx` | `CaseStudyModal` — the slide-in project detail overlay, shared by both pages |
| `thumbs.jsx` | `window.Thumbs` (single hero image per project, for cards) and `window.ProjectGallery` (multi-image galleries + frame kind, for the case-study modal) |
| `icons.jsx` | `window.I` — small inline SVG icon set |
| `tweaks-panel.jsx` | Copy of the Tweaks starter component (theme/accent/lang toggles) |
| `styles.css` | All styling — design tokens as CSS custom properties at the top, then component sections |
| `assets/projects/<slug>/` | Project images: `hero.png` (card thumbnail + first gallery image), `gallery-1.png`, etc. |
| `uploads/projects/<folder>/` | Source material as supplied by the user (raw screenshots, `project.md`) — not referenced by the live site, kept for provenance |

## Content model

### `window.PORTFOLIO_DATA.{en,id}`
Site-wide copy: nav labels, hero, section headers, services list (with a `link` to a case-study slug), stack/toolbelt list, process steps, contact form copy, footer, about-preview blurb. Every user-facing string exists in both `en` and `id` with the same shape — when adding copy, add both.

### `window.CASE_STUDIES`
Keyed by slug (kebab-case, matches the `assets/projects/<slug>/` folder). Each slug has `en` and `id` variants with this shape:

```js
"project-slug": {
  en: {
    slug: "project-slug",
    title: "Short case-study title",
    client: "Client / product name",
    clientNote: "Country or context, e.g. 'Indonesia · freelance side project'",
    role: "Your role on this project",
    year: "Jan 2025 – Mar 2025",       // or just "2026" — startYear() extracts the first 4-digit year for card display
    stack: ["Laravel", "MySQL"],
    link: "https://...",               // optional — live site or Play Store URL
    linkType: "play",                  // optional — set to "play" for a Google Play link (changes the CTA label)
    hook: "One-sentence pitch, shown on the card and at the top of the detail page.",
    overview: ["Paragraph 1", "Paragraph 2"],
    myRole: "What you actually did, one paragraph.",
    approach: ["Bullet 1", "Bullet 2", "Bullet 3"],
    challenges: [{ p: "Problem statement", s: "How it was solved" }],
    outcome: [{ k: "Live", v: "Description" }, { k: "3 months", v: "..." }],
    nda: "optional NDA disclaimer string"
  },
  id: { /* same shape, Bahasa Indonesia */ }
}
```

Notes:
- If an `outcome` entry has `k: "Live"` and the case study has a `link`, the case-study modal renders that outcome card as a clickable link to the live site/Play Store (see "Outcome & impact" in `case-study.jsx`). This is the only place the live link is surfaced — don't add a second link elsewhere.
- `nda` is optional; omit the key entirely when there's nothing to redact.

### `window.Thumbs` and `window.ProjectGallery` (`thumbs.jsx`)
- `window.Thumbs[slug]` — a component rendering the single image used on project cards (homepage + all-work grid). Real projects use `BrowserThumb` (website screenshot, browser-chrome frame) or `PhoneThumb` (mobile app screenshot, phone-bezel frame). Projects with no real screenshot yet (currently `gmes`) fall back to a hand-drawn CSS placeholder in the system's visual vocabulary (see `ThumbGmes`).
- `window.ProjectGallery[slug]` — `{ kind: 'browser' | 'phone', images: [...] }`, used by the case-study modal to render the full screenshot set:
  - `kind: 'browser'` — 1 image renders as a single browser-chrome frame; 2+ images render as a carousel with prev/next arrows (positioned left/right of the frame) and dot indicators.
  - `kind: 'phone'` — all images render side by side in phone bezels (they're narrow, so this doesn't need a carousel).
  - No entry for a slug → the modal falls back to `window.Thumbs[slug]` (e.g. `gmes`'s CSS placeholder).

## How to add a new project

1. Get real screenshots. Crop/resize as needed (full-page scroll captures should be cropped to roughly a 1.3× width:height "above the fold" ratio before use — see any past `run_script` image-processing call for the pattern). Save into `assets/projects/<new-slug>/` as `hero.png`, `gallery-1.png`, etc.
2. Add a `"<new-slug>": { en: {...}, id: {...} }` entry to `window.CASE_STUDIES` in `data.js`, following the shape above. Get the person's actual role/relationship to the project (freelance? employer? side project?) before writing copy — don't infer or hedge ("likely", "inferred from...") in published copy.
3. Add a `window.Thumbs["<new-slug>"]` entry in `thumbs.jsx` (`BrowserThumb` or `PhoneThumb` depending on whether it's a website or mobile app).
4. Add a `window.ProjectGallery["<new-slug>"]` entry in `thumbs.jsx` with the `kind` and full `images` array.
5. The all-work page (`work-app.jsx`) picks up every slug in `CASE_STUDIES` automatically — no change needed there.
6. To feature it on the homepage, add the slug to `WORK_ORDER` in `app.jsx` (must be exactly 3 slugs — the homepage caps at 3 featured projects; the rest live on `Work.html`).

## Design system notes

- Design tokens (`--bg`, `--surface`, `--surface-2`, `--border`, `--border-strong`, `--text`, `--text-muted`, `--text-faint`, `--accent`, `--radius*`, `--font`, `--font-mono`) are defined at the top of `styles.css` and re-themed per `[data-theme]`/`[data-accent]` attribute on `<html>` (set by the Tweaks panel). Always reference tokens, never hardcode colors.
- Dark theme is the default/primary design; light theme is a secondary supported mode — check both when changing colors.
- Content-reveal-on-scroll (`.reveal` class + `useReveal()` hook) and scroll-progress bar are shared patterns; copy the existing hook rather than reinventing.
- The site intentionally avoids invented metrics/testimonials — all case-study copy should be verifiable and role-first (what you actually did), not marketing language about the client's product.

## Known gaps / follow-ups

- `gmes` has no real screenshots yet (client project, none supplied) — still using the CSS-drawn placeholder thumb. Swap in real images via steps 1–4 above whenever they're available.
- Only `apindo-jawa-barat`, `era-mobile`, and `nurul-falah` have a `link`/live URL wired in. Add `link` (and `linkType: "play"` if applicable) to other case studies as live URLs become available.

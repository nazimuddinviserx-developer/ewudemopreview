
## Changes to make

### 1. Hero section: video → image slider
- Replace the background video in `src/routes/index.tsx` with an auto-advancing image carousel (fade/slide every ~5s, manual dots + arrows, pauses on hover).
- Upload the 6 attached campus photos as Lovable Assets (`src/assets/hero-*.jpg.asset.json`) and use those URLs as slides.
- Keep the headline/subhead overlay with a softened gradient scrim so text stays readable.
- Remove the old `hero-campus.mp4.asset.json` reference.

### 2. Login shortcuts under hero
- New section directly below the hero: three cards titled Student, Faculty, NTS, each linking to `/login/student`, `/login/faculty`, `/login/nts`.
- Compact, icon + label + short helper text, single row on desktop, stacked on mobile.

### 3. Header changes
- Remove the text brand name ("East West University") from `Header.tsx`.
- Use the footer's logo component in the header instead (single logo, no repeated wordmark). Will reuse `Logo` component currently rendered in `Footer.tsx`.
- Remove social icons from the header (keep them only in the footer).

### 4. Color refresh (tone down the red)
- In `src/styles.css`, shift `--primary` from the current bright red toward a deeper, more muted brick/maroon (e.g. `oklch(0.45 0.12 25)` range) with a warmer neutral background.
- Update `--primary-foreground`, ring, and gradient tokens to match. All components keep using semantic tokens, no per-component color edits.

### 5. Typography: Poppins only
- Add Poppins (300/400/500/600/700) via `<link>` in `src/routes/__root.tsx` head.
- Set `--font-sans` and `--font-display` in `@theme` to Poppins in `src/styles.css`.
- Remove any other font families currently referenced.

### 6. Content pass: no em-dashes, more visual
- Sweep `src/lib/site-data.ts` and route files for `—` and replace with commas, periods, or " - " as fits.
- Add image accents to key sections on the home page (program highlights, campus life, news) so the site reads more visually alongside copy. Scope limited to home page in this pass; other pages can follow.

## Files touched
- `src/routes/index.tsx` (hero slider + login shortcuts + visual sections)
- `src/components/site/Header.tsx` (logo swap, remove brand text + socials)
- `src/components/site/Footer.tsx` (no change, just reuse Logo)
- `src/styles.css` (color tokens + Poppins)
- `src/routes/__root.tsx` (Poppins `<link>`)
- `src/lib/site-data.ts` (em-dash sweep)
- New: `src/assets/hero-1..6.jpg.asset.json` (uploaded campus images)
- New: `src/components/site/HeroSlider.tsx`, `src/components/site/LoginShortcuts.tsx`

## Not in scope this pass
- Em-dash sweep on inner route pages (about, departments, etc.) unless you want it now.
- Backend wiring for logins (still UI shells).

Confirm and I'll build it.

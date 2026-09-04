# devbyvojin website

Premium B2B sales website for `devbyvojin`, focused on serious companies, real estate developers and construction-adjacent businesses.

The site has Serbian and English content with an in-page language switcher. Serbian is the default language.

## Positioning

The site should sell business results, not a tech stack. Public-facing copy should avoid leading with React, Next.js, PHP, WordPress or implementation tools.

Core narrative:

1. Problem: most business websites are passive and do not support high-value sales.
2. Solution: devbyvojin builds digital sales assets with clear positioning, proof and conversion paths.
3. Proof: Zoned Panonka is the main case study.
4. Offer: Premium Website, Real Estate Sales App, Care / Maintenance.
5. CTA: start a project or contact devbyvojin.

## Main files

- `app/page.tsx` contains the page content, section data and layout.
- `app/globals.css` contains the visual system, theme tokens and shared section styles.
- `app/layout.tsx` contains metadata and global fonts.

## Content to replace later

- Zoned Panonka visual wrappers should be replaced with real screenshots when available.
- Contact email is currently `sundovicvojin@gmail.com`; replace it when the domain email is ready.
- Selected work includes intentionally broad placeholders until final project names, images and metrics are ready.

## Zoned live data

The website reads public apartment data from:

```text
https://app.zonedpanonka.rs/data/apartments.json
```

`app/api/zoned-stats/route.ts` fetches that JSON server-side and returns aggregate public stats for the devbyvojin case study preview:

- total units
- available units
- reserved units
- sold units
- counts by lamela
- counts by apartment structure
- total listed area

The front page loads `/api/zoned-stats` and displays live numbers in the Zoned Panonka hero panel. The route uses 10-minute revalidation.

Manual check:

```bash
npm run zoned:stats
```

Current fallback numbers are based on the public JSON checked on 2026-09-05:

- total: 210
- available: 47
- reserved: 4
- sold: 159

If this later needs to become more secure or private:

1. Expose a small read-only endpoint from the Zoned server, for example total units, available units, reserved units and sold units.
2. Protect it with an API key or signed token stored as a Vercel environment variable.
3. Fetch it from the website server-side so secrets are never exposed in the browser.
4. Cache the result with a short revalidation window, for example 5-15 minutes.
5. Keep the public website read-only. Do not connect it directly to the production database from the browser.

## Local usage

```bash
npm run dev
```

```bash
npm run build
```

## Vercel

This is now a standard Next.js project for Vercel. Use:

```bash
npm install
npm run build
```

Then connect the repository to Vercel and set the build command to `npm run build`.

## Design direction

Modern premium minimalism: open spacing, restrained color, dark contrast sections, glass/liquid-glass surfaces, soft borders and confident typography. Keep the interface clear on mobile and avoid decorative clutter.

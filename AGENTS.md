# Project context for future Codex work

## Business goal

This is a premium sales website for `devbyvojin`, a Novi Sad based digital studio. The priority is qualified B2B project inquiries from real estate, construction and serious companies.

The project is intended for Vercel deployment. Do not publish it through Sites unless the user explicitly changes that decision.

## Messaging rules

- Sell outcomes, clarity, proof, sales flow and operational confidence.
- Do not lead with frameworks, programming languages or implementation tools in public copy.
- Keep Zoned Panonka as the main proof point.
- Keep the services simple: Premium Website, Real Estate Sales App, Care / Maintenance.
- CTA language should stay close to "Start a project" or "Discuss fit".
- Keep Serbian and English versions aligned. Serbian is the default language.
- Current temporary contact email is `sundovicvojin@gmail.com`.

## Architecture

The project is a standard Next.js project.

- Main page: `app/page.tsx`
- Global styles: `app/globals.css`
- Metadata: `app/layout.tsx`

Prefer keeping content arrays near the top of `app/page.tsx` until the site grows enough to justify a separate content module.

## Zoned data integration

If asked to make Zoned Panonka data real, prefer a read-only backend integration:

- Add a small endpoint on the Zoned backend for aggregate public stats.
- Fetch it server-side from this site using a Vercel environment variable for auth.
- Cache and revalidate the response instead of hitting the backend on every page view.
- Never expose database credentials or admin APIs to the browser.

## Visual rules

Use a premium, quiet, spacious visual system. Glass effects should support hierarchy, not become decoration. Keep responsive layouts stable and avoid adding marketing fluff before the actual sales message.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

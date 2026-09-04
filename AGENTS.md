# Project context for future Codex work

## Business goal

This is a premium sales website for `devbyvojin`, a Novi Sad based digital studio. The priority is qualified B2B project inquiries from real estate, construction and serious companies.

## Messaging rules

- Sell outcomes, clarity, proof, sales flow and operational confidence.
- Do not lead with frameworks, programming languages or implementation tools in public copy.
- Keep Zoned Panonka as the main proof point.
- Keep the services simple: Premium Website, Real Estate Sales App, Care / Maintenance.
- CTA language should stay close to "Start a project" or "Discuss fit".

## Architecture

The project is a Vinext/Next-style Sites project.

- Main page: `app/page.tsx`
- Global styles: `app/globals.css`
- Metadata: `app/layout.tsx`

Prefer keeping content arrays near the top of `app/page.tsx` until the site grows enough to justify a separate content module.

## Visual rules

Use a premium, quiet, spacious visual system. Glass effects should support hierarchy, not become decoration. Keep responsive layouts stable and avoid adding marketing fluff before the actual sales message.

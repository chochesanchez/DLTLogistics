## Replication Prompt (for a new 3PL site with same design)

Goal: Create a new marketing website with the exact same frontend structure, components, typography rhythm, animations, and page composition as this DLT Logistics site, but with new branding (colors, logo) and content (copy, images) for "Dasza 3PL".

Instructions for the implementer (paste into your AI/dev brief):

1) Tech baseline
- Use Next.js (App Router), TypeScript, Tailwind CSS.
- Replicate the component/file structure exactly.
- Reuse the `PageHeader` and `Reveal` components for consistent headers and subtle text transitions.

2) Pages to implement
- `/` Home: hero with overlay, KPIs, services grid (4 cards), partner logos.
- `/about` About: hero image, company intro, value props, logo lockup inline with title.
- `/services` Services overview: hero image, four services cards linking to detail pages.
- `/services/{last-mile|retail|storage|fulfillment}` Detail pages: hero image, intro, features grid, "Why choose us", bottom CTA banner.
- `/contact` Contact: hero image, contact form, company location block with map link.
- `/quote` Quote form and `/quote/thank-you` confirmation page.

3) Components
- `components/shared/Header`: brand logo + text lockup, nav links (About, Services, Get Quote, Contact), mobile menu.
- `components/shared/Footer`: company info + quick links.
- `components/ui/PageHeader`: accepts `title`, optional `subtitle`, optional `image`, optional `breadcrumbs`.
- `components/ui/Reveal`: intersection observer fade-up wrapper; use around hero texts, section headings, KPIs, cards.
- `components/ui/MapComponent`: Google Map with custom marker (optional in contact page).

4) Design system
- Keep typography scale, spacing, and section rhythm identical to the source project.
- Replace color tokens in Tailwind config or via utility classes to match Dasza 3PL branding.
- Keep logos/icons/images brand-appropriate while preserving layout and aspect ratios.
- Maintain consistent card sizes for services grid.

5) Content & assets
- All images must live under `public/images/` with lowercase filenames; update all references accordingly.
- Replace textual content per Dasza 3PL copy deck. Avoid emojis in headings.
- Update KPI figures and partner logos ordering as required by the new brand.

6) SEO
- Mirror metadata in `src/app/layout.tsx`: title, description, keywords, Open Graph/Twitter, canonical, structured data (Organization).
- Provide `icon.png`/`favicon.png` in `public/` for the new brand.

7) QA checklist
- Mobile nav opens/closes.
- Hero text sizes are appropriate on small screens.
- All service cards link correctly to their detail pages (no 404s).
- CTA buttons say "Get Quote" and point to `/quote`.
- All images load in production (case-sensitive paths verified).
- Lighthouse pass for basic SEO and performance.

8) Env variables
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` if using map.
- Remove any i18n configs; default to English.

Deliverables
- A GitHub repo with the same structure, runnable with `npm install && npm run dev`.
- Updated branding and content for Dasza 3PL.



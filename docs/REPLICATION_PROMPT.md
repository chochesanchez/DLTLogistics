## Replication Prompt (Dasza 3PL)

Goal: Build a new marketing site for Dasza 3PL with the same frontend structure, layout system, and interactions as the DLT Logistics website, but with Dasza 3PL branding, colors, imagery, and content.

### Context for the Assistant

- Framework: Next.js (App Router) with TypeScript and Tailwind CSS
- Reuse design system: Page headers with hero image, clean typography, generous whitespace, subtle fade‑up transitions, and consistent section spacing
- Preserve component architecture and file structure from the reference project
- Do NOT copy DLT content; replace with Dasza 3PL information and assets

### Exact Instructions

1) Project Setup
- Create a new Next.js (App Router) + TypeScript project
- Install Tailwind, Heroicons, Prisma, and Testing Library (match versions from reference if possible)
- Configure ESLint with Next.js config

2) Structure
- Replicate the following directories and components:
```
src/app/layout.tsx
src/app/page.tsx
src/app/about/page.tsx
src/app/contact/page.tsx
src/app/quote/page.tsx
src/app/quote/thank-you/page.tsx
src/app/services/page.tsx
src/app/services/{last-mile,retail,storage,fulfillment}/page.tsx

src/components/shared/Header.tsx
src/components/shared/Footer.tsx
src/components/ui/PageHeader.tsx
src/components/ui/Reveal.tsx
src/components/ui/MapComponent.tsx

src/app/api/contact/route.ts
prisma/schema.prisma (Contact model at minimum)
```

3) Design & UX
- Use the clean layout patterns: centered hero titles, readable line lengths, section headers with subtle fades, card grids with consistent sizes, and a CTA at the bottom of service pages
- Recreate subtle `Reveal` animations (fade + translateY) on headings and section intros
- Maintain mobile responsiveness and the mobile menu

4) Branding
- Replace fonts/colors with Dasza 3PL brand tokens
- Replace all images (ensure they live under `public/images/` and are referenced with lowercase paths)
- Update SEO metadata in `app/layout.tsx` (title, description, Open Graph, canonical) and JSON‑LD Organization schema

5) Data & API
- Keep `POST /api/contact` route; store contact data in MongoDB via Prisma
- Update environment variables: `DATABASE_URL`, `NEXT_PUBLIC_APP_URL`, etc.

6) Quality
- Run ESLint and fix issues (watch for unescaped apostrophes in JSX)
- Run tests; add simple render tests for pages/components

7) Deployment
- Deploy to Vercel; set environment variables in the project settings
- Validate production images and case‑sensitive paths

### Acceptance Criteria

- Visual structure matches the reference: page headers, spacing, typography scale, and transitions
- All primary pages exist and are linked from the header and mobile menu
- Service detail pages share the same structure and end with a CTA
- Contact form persists to MongoDB and responds successfully
- No broken images or 404s; all images under `/public/images/`



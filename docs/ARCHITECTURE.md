## Architecture Overview

This document describes the frontend and backend architecture of the DLT Logistics website and provides guidance to replicate the same structure and design for future projects (e.g., Dasza 3PL).

### High‑Level

- Next.js App Router with TypeScript
- Tailwind CSS for styling
- Reusable UI components: `Header`, `Footer`, `PageHeader`, `Reveal`
- MongoDB via Prisma (contact submissions)
- Minimal API surface: `POST /api/contact`
- Hosting: Vercel

### Frontend Structure

```
src/
  app/
    layout.tsx         # Root layout (SEO metadata, structured data, header/footer)
    page.tsx           # Home page
    about/page.tsx     # About us
    contact/page.tsx   # Contact
    quote/page.tsx     # Quote Request form
    quote/thank-you/   # Confirmation page
    services/          # Services overview and detail pages
      page.tsx
      last-mile/page.tsx
      retail/page.tsx
      storage/page.tsx
      fulfillment/page.tsx
    api/contact/route.ts # Contact endpoint

  components/
    shared/
      Header.tsx
      Footer.tsx
    ui/
      PageHeader.tsx   # Reusable page hero with optional image and breadcrumbs
      Reveal.tsx       # IntersectionObserver-based fade-up animation
      MapComponent.tsx # Contact page map

  lib/
    notifications.ts   # Placeholder for future integrations

public/
  images/              # Case-sensitive; use lowercase paths
  favicon.png
```

### Styling & Design System

- Tailwind CSS utilities with a few composed classes in `globals.css` (`section-container`, `hero-section`, `card`, `partner-logo`)
- Typography and spacing mirror the clean layout of EGA reference pages
- Subtle entrance animations via `Reveal` component (fade + translateY)
- Consistent `PageHeader` across all top-level pages and service details

### Routing & Navigation

- Top nav order: About us, Services, Get Quote, Contact
- Mobile menu mirrors desktop links
- Hidden/unused pages can remain in code but are not linked

### Images

- All image paths standardized under `/public/images/` and referenced with lowercase paths to avoid production case-sensitivity issues
- Service pages accept a header image via `PageHeader`

### Backend & Data

- Prisma models include `Contact` (used in production) and `Package`, `Courier`, `StatusHistory`, `Rating` (prepared for potential tracking feature)
- `POST /api/contact` validates, persists to MongoDB, and logs a notification placeholder

### SEO

- `src/app/layout.tsx` defines `metadata` (Open Graph/Twitter), canonical, and an Organization JSON‑LD block
- Favicon/app icon configured at `/favicon.png`

### Environment Variables

```
DATABASE_URL="mongodb://localhost:27017/dlt"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your_key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="DLT Logistics"
```

### Testing & Linting

- Jest + Testing Library for unit/integration tests
- ESLint with Next.js config; avoid unescaped apostrophes in JSX to prevent lint errors

### Deployment

- Prefer GitHub → Vercel integration or run `vercel --prod`
- Ensure images exist in `public/images/` with exact matching filenames and lowercase paths

### Replication Notes

When cloning this structure for a new brand:
- Copy `components/ui/PageHeader.tsx` and `components/ui/Reveal.tsx` unchanged
- Keep layout and SEO structure in `app/layout.tsx`; update brand metadata and URLs
- Replace images under `public/images/` and update references
- Update brand colors in Tailwind config or utility classes as needed



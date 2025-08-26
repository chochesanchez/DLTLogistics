## Architecture Overview

This repository contains the marketing website for DLT Logistics built with Next.js (App Router) and Tailwind CSS. It focuses on clear content, consistent design, lightweight animations, and SEO best practices. Operational features like package tracking and authenticated dashboards are intentionally hidden/disabled in this version.

### High-level
- Frontend: Next.js (App Router), React, TypeScript, Tailwind CSS
- Server routes: Next.js API routes (contact form only)
- Assets: All images served from `public/` (case sensitive paths)
- SEO: Metadata, Open Graph/Twitter tags, canonical URL, favicon/app icon
- DX: ESLint + Jest + TS, simple scripts, optional Docker for local infra

### Repository Layout
```
WEBPAGE/
├─ public/                     # Static assets (images, icons, fonts)
│  └─ images/                  # All images live here (lowercase paths)
├─ src/
│  ├─ app/                     # Next.js App Router pages
│  │  ├─ api/
│  │  │  └─ contact/route.ts   # Contact form endpoint (server route)
│  │  ├─ about/page.tsx        # About page (uses PageHeader)
│  │  ├─ contact/page.tsx      # Contact page (uses PageHeader)
│  │  ├─ services/
│  │  │  ├─ page.tsx           # Services overview (uses PageHeader)
│  │  │  ├─ fulfillment/page.tsx
│  │  │  ├─ last-mile/page.tsx
│  │  │  ├─ retail/page.tsx
│  │  │  └─ storage/page.tsx   # Service detail pages (consistent structure + CTA)
│  │  ├─ layout.tsx            # Root layout + global SEO metadata
│  │  ├─ globals.css           # Tailwind and custom layers/utilities
│  │  └─ page.tsx              # Home page (hero, KPIs, services, partners)
│  ├─ components/
│  │  ├─ shared/
│  │  │  ├─ Header.tsx         # Top navigation, logo, mobile menu
│  │  │  └─ Footer.tsx         # Footer with contact info
│  │  └─ ui/
│  │     ├─ PageHeader.tsx     # Reusable page hero header with optional image/breadcrumbs
│  │     ├─ Reveal.tsx         # IntersectionObserver-based fade-up animation wrapper
│  │     ├─ MapComponent.tsx   # Google Map with custom marker
│  │     ├─ DeliveryStatus.tsx # (UI only)
│  │     ├─ DeliveryDetails.tsx# (UI only)
│  │     └─ RatingModal.tsx    # (UI only)
│  ├─ lib/
│  │  └─ notifications.ts      # Twilio SMS/WhatsApp utility (optional)
│  ├─ types/                   # (Reserved)
│  └─ styles/                  # (Reserved)
├─ prisma/                     # Prisma schema (not required for static site)
├─ scripts/                    # Utility scripts
├─ jest.config.js              # Jest config
├─ jest.setup.js               # Testing setup
├─ tailwind.config.js          # Tailwind config
├─ tsconfig.json               # TypeScript config
└─ package.json                # Scripts and dependencies
```

### Frontend Patterns
- Page hero consistency: `PageHeader` provides a clean, consistent header across pages with optional hero image + breadcrumbs.
- Content rhythm: Sections follow consistent spacing and typography scales inspired by the referenced clean design.
- Animations: `Reveal` adds subtle fade-up on entry using IntersectionObserver; used for hero text, section headings, KPIs, and cards.
- Services: Overview grid on home/services links to detail pages. Detail pages share a standard layout: intro, features grid, "Why choose us", and a bottom CTA banner.
- Assets: All image paths are normalized to lowercase under `public/images/` to avoid production case-sensitivity issues.

### Server/API
- Contact endpoint: `POST /api/contact` receives contact form submissions. Extend with transport (email, webhook, CRM) as needed.
- Other endpoints (e.g., tracking) are intentionally not exposed in this build.

### Optional Integrations
- Twilio notifications (`src/lib/notifications.ts`) provide SMS/WhatsApp templates; not required for the static site flow.
- Prisma + MongoDB present for future expansion; not used by current pages.

### Environment Variables (minimal)
- `NEXT_PUBLIC_APP_URL` (optional, used by notifications)
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (required if using `MapComponent`)
- Twilio variables (optional): `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER`, `TWILIO_WHATSAPP_NUMBER`

### Build & Deploy
- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm start`
- CI/CD: GitHub Actions/Vercel can be connected to build on push to `main`.

### Notes
- i18n and language middleware were removed per product direction; English-only baseline.
- Mobile nav and hero typography were tuned for small screens.
- KPI values and partners ordering are maintained in `src/app/page.tsx`.



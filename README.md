![DLT Logistics Logo](public/images/DLT%20Logistics%20LOGO.png)

# DLT Logistics Website

**Live:** [dltlogistics.com.mx](http://dltlogistics.com.mx/)
**Preview:** dltlogistics.vercel.app  
**Hosting:** Vercel (Common Org scope)

---

## Overview

DLT Logistics’ public website serves as a marketing and lead capture platform, enabling users to:

- Explore services (Last Mile, Storage, Retail, Fulfillment)
- View trusted partners and industry leaders
- Submit “Contact Us” or “Get Quote” forms
- Reach support via WhatsApp

---

## Features

- **Sticky Navigation:** Prominent “Contact Us” button
- **Hero Section:** Bottom-anchored image, KPIs (97.9%, 4.8/5, +20,000)
- **Responsive Services Grid:** With cards for each service
- **Trusted by Industry Leaders:** Seamless CSS marquee with partner logos
- **WhatsApp Button:** Floating, direct link ([wa.link/5trkad](https://wa.link/5trkad))
- **Accessible & SEO-Ready:** Semantic headings, alt text, OpenGraph/Twitter metadata

---

## Pages

- **Home:** `src/app/page.tsx`
- **About:** `src/app/about/page.tsx`
- **Services:** `src/app/services/`
- **Quote:** `src/app/quote/page.tsx`, `src/app/quote/thank-you/page.tsx`
- **Contact:** `src/app/contact/page.tsx`
- **API (Email):** `src/app/api/contact/route.ts`

---

## Forms & Email Pipeline

- **Forms:** Contact & Quote forms submit to `/api/contact` (JSON)
- **Validation:** Zod, honeypot field for spam
- **Email:** Sent via Resend (HTML + text, reply-to submitter)
- **Optional:** Persists to Supabase if envs present

---

## Tech Stack

- **Framework:** Next.js (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS
- **Email:** Resend
- **Persistence:** Supabase (optional)
- **Tooling:** ESLint, Jest, ts-node
- **CI/CD:** Vercel, GitHub Actions

---

## Repository Structure

- `src/app/` — Main pages, API routes, layout, global styles
- `src/components/` — Shared UI (Header, Footer, Modal, BusinessContactForm, etc.)
- `public/images/` — Web assets and partner logos
- `.github/workflows/` — CI/CD workflows

---

## Environment Variables

Set these in Vercel Project Settings:

- `RESEND_API_KEY` — Resend API key
- `EMAIL_FROM` — Verified sender (e.g., forms@dltlogistics.com.mx)
- `EMAIL_TO` — Destination email(s)
- `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE` — (Optional) Supabase
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — (Optional) Google Maps

---

## Development

```bash
npm install
npm run dev         # Local dev server (http://localhost:3001)

npm start
npm run lint
```

**Deploy:**

```bash
vercel --prod --yes --scope commonorg
```

Or use the [Vercel dashboard](https://vercel.com/docs/projects/project-dashboard).

---

## Operations & Notes

- **Logs & Deploys:** Managed via Vercel dashboard
- **Accessibility:** Color contrast, alt text, semantic HTML
- **Security:** SPF/DKIM/DMARC required for email; honeypot for bots
- **Footer “Technology” link:** Hidden until content is ready

---

## Assets

- Logos and images: `public/images/`
- Partner logos: `public/images/partners/`

---

## License

This project is proprietary and not open source.

---

For questions or support, use the Contact form or WhatsApp button on the site. - GitHub workflow .github/workflows/deploy.yml supports token-based “vercel deploy --prod”

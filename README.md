![DLT Logistics Logo](public/images/DLT%20Logistics%20LOGO.png)

# DLT Logistics — dltlogistics.com.mx

Website for **DLT Logistics**, the warehousing, fulfillment and last-mile delivery company of the Dasza group in Monterrey, México.

Live at **https://dltlogistics.com.mx** (English) and **https://dltlogistics.com.mx/es** (Spanish).

## Stack

- [Next.js 15](https://nextjs.org) App Router, React 18, TypeScript
- Tailwind CSS 3, Framer Motion
- [Resend](https://resend.com) for form emails, [Zod](https://zod.dev) for validation
- Hosted on Vercel; every push to `main` deploys production, other branches get preview URLs

## Getting started

```bash
npm install
npm run dev      # http://localhost:3001
npm run lint
npm run build
```

Node 20 or newer.

## Environment variables

Set in Vercel → Project → Settings → Environment Variables (or `.env.local` for development). Without them the site still runs; forms answer with an error and show the WhatsApp / email fallback.

| Variable | Used for |
|---|---|
| `RESEND_API_KEY` | Sending contact and quote emails |
| `EMAIL_FROM` | Sender address (domain verified in Resend) |
| `EMAIL_TO` | Comma-separated lead recipients |
| `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE` | Optional: also store each submission in Supabase (`web_form_submissions`) |

## Structure

```
src/
  app/
    [lang]/            pages; English has no prefix, Spanish lives under /es
      quote/           quote form + thank-you page
      services/[slug]/ one page per service
    api/contact/       contact and quote form handler
    robots.ts, sitemap.ts
  components/          home sections, shared header/footer, UI
  content/site.ts      company facts, KPIs, services, client logos
  i18n/                locale config and EN/ES dictionaries (es is type-checked against en)
  lib/                 bot filtering, location, phone countries
  middleware.ts        locale routing (/en/* → /, everything else → English)
public/
  images/site/         page photography
  images/partners/     client logos
  videos/              home hero video
```

## Content

Company facts, KPIs, services and client logos live in `src/content/site.ts`. Page copy lives in `src/i18n/dictionaries/en.ts` and `es.ts`. Any key added to `en.ts` has to be added to `es.ts` too, or the build fails.

## Contributing

One issue per change, a `feat/…` / `fix/…` / `chore/…` branch, [conventional commits](https://www.conventionalcommits.org), and a pull request to `dev`. `dev` is reviewed before it is merged into `main`.

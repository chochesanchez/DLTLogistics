'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { COMPANY, SERVICES } from '@/content/site'

export function Footer() {
  const pathname = usePathname()
  const showCta = !(pathname === '/' || pathname?.startsWith('/contact') || pathname?.startsWith('/quote'))

  return (
    <footer className="bg-dlt-ink text-white">
      {showCta && (
        <div className="bg-dlt-yellow text-dlt-ink">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95] max-w-2xl">Tell us what you ship. We’ll plan the route.</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/quote" className="inline-flex items-center h-12 px-6 rounded-md bg-dlt-ink text-white font-semibold hover:bg-black">Get a quote</Link>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-12 px-6 rounded-md border-2 border-dlt-ink font-semibold hover:bg-dlt-ink hover:text-white">WhatsApp us</a>
            </div>
          </div>
        </div>
      )}
      <div className="h-2 lane-dashes opacity-80" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-12 text-[15px]">
        <div className="md:col-span-4">
          <div className="font-display text-3xl font-bold">DLT <span className="text-dlt-yellow">Logistics</span></div>
          <p className="mt-4 text-white/65 max-w-xs leading-relaxed">
            Storage, fulfillment and last-mile delivery in Monterrey — the distribution arm of the Dasza group.
          </p>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-white/50 mb-4">Services</h3>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="text-white/85 hover:text-dlt-yellow">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-white/50 mb-4">Company</h3>
          <ul className="space-y-2.5">
            <li><Link href="/about" className="text-white/85 hover:text-dlt-yellow">About</Link></li>
            <li><Link href="/quote" className="text-white/85 hover:text-dlt-yellow">Get a quote</Link></li>
            <li><Link href="/contact" className="text-white/85 hover:text-dlt-yellow">Contact</Link></li>
            <li><a href={COMPANY.daszaUrl} className="text-white/85 hover:text-dlt-yellow">Dasza 3PL (customs &amp; IMMEX)</a></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-white/50 mb-4">Contact</h3>
          <ul className="space-y-2.5 text-white/85">
            <li><a href={COMPANY.phoneHref} className="hover:text-dlt-yellow whitespace-nowrap">{COMPANY.phone}</a></li>
            <li><a href={`mailto:${COMPANY.email}`} className="hover:text-dlt-yellow">{COMPANY.email}</a></li>
            <li><a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-dlt-yellow">WhatsApp</a></li>
            <li className="text-white/60">{COMPANY.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} DLT Last-Mile &amp; Distribution S.A. de C.V. All rights reserved.</span>
          <span>Apodaca, Nuevo León, México</span>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { COMPANY, SERVICES } from '@/content/site'
import { useI18n } from '@/i18n/I18nProvider'
import { basePath } from '@/i18n/config'
import LanguageSwitch from './LanguageSwitch'

export function Footer() {
  const { t, href } = useI18n()
  const path = basePath(usePathname() || '/')
  const showCta = !(path === '/' || path.startsWith('/contact') || path.startsWith('/quote'))

  return (
    <footer className="bg-dlt-ink text-white">
      {showCta && (
        <div className="bg-dlt-yellow text-dlt-ink">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95] max-w-2xl">{t.footer.ctaTitle}</h2>
            <div className="flex flex-wrap gap-3">
              <Link href={href('/quote')} className="inline-flex items-center h-12 px-6 rounded-md bg-dlt-ink text-white font-semibold hover:bg-dlt-muted">{t.common.getQuote}</Link>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-12 px-6 rounded-md border-2 border-dlt-ink font-semibold hover:bg-dlt-ink hover:text-white">{t.common.whatsapp}</a>
            </div>
          </div>
        </div>
      )}
      <div className="h-2 lane-dashes opacity-80" aria-hidden />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-12 text-[15px]">
        <div className="md:col-span-4">
          <div className="font-display text-3xl font-bold">DLT <span className="text-dlt-yellow">Logistics</span></div>
          <p className="mt-4 text-white/65 max-w-xs leading-relaxed">{t.footer.tagline}</p>
          <div className="mt-6"><LanguageSwitch tone="dark" /></div>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-white/50 mb-4">{t.footer.services}</h3>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}><Link href={href(`/services/${s.slug}`)} className="text-white/85 hover:text-dlt-yellow">{t.services[s.slug].name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-white/50 mb-4">{t.footer.company}</h3>
          <ul className="space-y-2.5">
            <li><Link href={href('/about')} className="text-white/85 hover:text-dlt-yellow">{t.footer.about}</Link></li>
            <li><Link href={href('/quote')} className="text-white/85 hover:text-dlt-yellow">{t.footer.quote}</Link></li>
            <li><Link href={href('/contact')} className="text-white/85 hover:text-dlt-yellow">{t.footer.contactLink}</Link></li>
            <li><a href={COMPANY.daszaUrl} className="text-white/85 hover:text-dlt-yellow">{t.footer.dasza}</a></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-white/50 mb-4">{t.footer.contact}</h3>
          <ul className="space-y-2.5 text-white/85">
            <li><a href={COMPANY.phoneHref} className="hover:text-dlt-yellow whitespace-nowrap">{COMPANY.phone}</a></li>
            <li><a href={`mailto:${COMPANY.email}`} className="hover:text-dlt-yellow">{COMPANY.email}</a></li>
            <li><a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-dlt-yellow">WhatsApp</a></li>
            <li className="text-white/60">{t.footer.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} DLT Last-Mile &amp; Distribution S.A. de C.V. {t.footer.rights}</span>
          <span>{t.footer.location}</span>
        </div>
      </div>
    </footer>
  )
}

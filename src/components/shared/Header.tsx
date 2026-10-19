'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useI18n } from '@/i18n/I18nProvider'
import { basePath } from '@/i18n/config'
import LanguageSwitch from './LanguageSwitch'

export function Header() {
  const { t, href } = useI18n()
  const pathname = usePathname() || '/'
  const current = basePath(pathname)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // Home opens full screen on the video: the header fades in as you scroll and fades out back at the top.
  const overlay = current === '/'
  const [faded, setFaded] = useState(overlay)
  const [focused, setFocused] = useState(false)

  const NAV = [
    { path: '/services', label: t.nav.services },
    { path: '/#how-it-works', label: t.nav.how },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact },
  ]

  const { scrollY } = useScroll()
  const fade = useTransform(scrollY, [80, 280], [0, 1])
  const drift = useTransform(scrollY, [80, 280], [-12, 0])
  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 8)
    setFaded(overlay && y < 100)
  })
  useEffect(() => {
    setScrolled(window.scrollY > 8)
    setFaded(overlay && window.scrollY < 100)
  }, [overlay])

  // The menu or keyboard focus always shows the header in full.
  const forced = !overlay || open || focused

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (p: string) => !p.includes('#') && current.startsWith(p)

  return (
    <motion.header
      onFocus={() => setFocused(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && setFocused(false)}
      style={forced ? undefined : { opacity: fade, y: drift }}
      className={`${overlay ? 'fixed inset-x-0' : 'sticky'} top-0 z-50 bg-white ${faded && !forced ? 'pointer-events-none' : ''} ${scrolled ? 'shadow-[0_1px_0_#E1E4EA]' : ''}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-[72px] flex items-center justify-between gap-6">
        <Link href={href('/')} className="flex items-center gap-2 shrink-0" aria-label={t.nav.home}>
          <Image src="/images/DLT Logistics LOGO.png" alt="" width={34} height={34} className="h-8 w-8 object-contain" priority />
          <span className="font-display text-2xl font-bold tracking-tight">
            DLT <span className="font-semibold text-dlt-muted">Logistics</span>
          </span>
        </Link>

        <nav aria-label={t.nav.main} className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          {NAV.map((item) => (
            <Link
              key={item.path}
              href={href(item.path)}
              aria-current={isActive(item.path) ? 'page' : undefined}
              className={`py-2 border-b-[3px] transition-colors ${isActive(item.path) ? 'border-dlt-yellow text-dlt-ink' : 'border-transparent text-dlt-muted hover:text-dlt-ink'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <Link href={href('/quote')} className="hidden sm:inline-flex items-center h-11 px-5 rounded-md bg-dlt-yellow text-dlt-ink font-semibold hover:bg-dlt-yellowDark transition-colors">
            {t.nav.quote}
          </Link>
          <button
            className="md:hidden grid place-items-center h-10 w-10 -mr-2"
            aria-label={open ? t.nav.close : t.nav.open}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white overflow-y-auto">
        <nav aria-label={t.nav.mobile} className="px-5 py-6 flex flex-col">
          {NAV.map((item) => (
            <Link key={item.path} href={href(item.path)} className="font-display text-3xl font-bold py-4 border-b border-dlt-line">
              {item.label}
            </Link>
          ))}
          {/* From sm up the bar already shows "Get a quote" */}
          <Link href={href('/quote')} className="sm:hidden mt-8 flex w-full justify-center items-center h-12 rounded-md bg-dlt-yellow font-semibold">
            {t.nav.quote}
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}

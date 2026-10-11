'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) => !href.includes('#') && pathname?.startsWith(href)

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-[0_1px_0_#E1E4EA]' : ''}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-[72px] flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="DLT Logistics home">
          <Image src="/images/DLT Logistics LOGO.png" alt="" width={34} height={34} className="h-8 w-8 object-contain" priority />
          <span className="font-display text-2xl font-bold tracking-tight">
            DLT <span className="font-semibold text-dlt-muted">Logistics</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`py-2 border-b-[3px] transition-colors ${isActive(item.href) ? 'border-dlt-yellow text-dlt-ink' : 'border-transparent text-dlt-muted hover:text-dlt-ink'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/quote" className="hidden sm:inline-flex items-center h-11 px-5 rounded-md bg-dlt-yellow text-dlt-ink font-semibold hover:bg-dlt-yellowDark transition-colors">
            Get a quote
          </Link>
          <button
            className="md:hidden grid place-items-center h-10 w-10 -mr-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white overflow-y-auto">
        <nav aria-label="Mobile" className="px-5 py-6 flex flex-col">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="font-display text-3xl font-bold py-4 border-b border-dlt-line">
              {item.label}
            </Link>
          ))}
          <Link href="/quote" className="mt-8 inline-flex justify-center items-center h-12 rounded-md bg-dlt-yellow font-semibold">
            Get a quote
          </Link>
        </nav>
      </div>
    </header>
  )
}

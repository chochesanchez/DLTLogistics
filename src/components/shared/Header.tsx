'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function Header() {
  const router = useRouter()
  const [trackingNumber, setTrackingNumber] = useState('')
  // language menu removed
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const languageMenuRef = React.useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 64)
        lastY.current = y
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // no-op: language menu removed

  

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      router.push(`/track/${trackingNumber.trim()}`)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur shadow-sm transition-transform duration-200 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/DLT Logistics LOGO.png"
              alt="DLT Logistics Logo"
              width={36}
              height={36}
              className="mr-2 h-9 w-9 object-contain"
              priority
            />
            <span className="text-2xl font-bold text-primary">DLT</span>
            <span className="text-2xl font-light text-gray-600">Logistics</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition-colors">Services</Link>
            <Link href="/quote" className="text-gray-700 hover:text-primary transition-colors">Get Quote</Link>
            <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#FFCC00] text-black font-semibold hover:bg-[#E6B800] transition-colors">Contact us</Link>
          </nav>

          {/* Language removed */}

          {/* Tracking hidden per request */}

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setShowMobileMenu(false)}
              >
                About us
              </Link>
              {/* Language removed in mobile */}
              <Link 
                href="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setShowMobileMenu(false)}
              >
                Services
              </Link>
              <Link 
                href="/quote"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setShowMobileMenu(false)}
              >
                Get Quote
              </Link>
              <Link 
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-semibold text-black bg-[#FFCC00] hover:bg-[#E6B800] text-center"
                onClick={() => setShowMobileMenu(false)}
                style={{ lineHeight: '2.25rem' }}
              >
                Contact us
              </Link>
            </div>
            {/* Tracking UI removed on mobile */}
          </div>
        )}
      </div>
    </header>
  )
} 
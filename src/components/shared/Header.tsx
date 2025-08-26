'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Static import so the logo is bundled and works in production even if it's outside /public
import logoSrc from '@/../IMAGES/DLT Logistics LOGO.png'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function Header() {
  const router = useRouter()
  const [trackingNumber, setTrackingNumber] = useState('')
  // language menu removed
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const languageMenuRef = React.useRef<HTMLDivElement>(null)

  // no-op: language menu removed

  

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      router.push(`/track/${trackingNumber.trim()}`)
    }
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
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
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
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
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setShowMobileMenu(false)}
              >
                Contact
              </Link>
              <Link 
                href="/quote"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setShowMobileMenu(false)}
              >
                Get Quote
              </Link>
            </div>
            {/* Tracking UI removed on mobile */}
          </div>
        )}
      </div>
    </header>
  )
} 
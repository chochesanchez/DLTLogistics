'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export function Header() {
  const router = useRouter()
  const [trackingNumber, setTrackingNumber] = useState('')
  const [language, setLanguage] = useState('EN')
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' },
    { code: 'KO', label: '한국어' }
  ]

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
            <span className="text-2xl font-bold text-primary">DLT</span>
            <span className="text-2xl font-light text-gray-600">Logistics</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/services"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/technology"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Technology
            </Link>
            <Link 
              href="/contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/quote"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Get Quote
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors"
            >
              <GlobeAltIcon className="h-5 w-5" />
              <span>{language}</span>
            </button>
            
            {showLanguageMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setShowLanguageMenu(false)
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {lang.label} ({lang.code})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tracking Search */}
          <form onSubmit={handleTrackSubmit} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Track your package"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <button
              type="submit"
              className="ml-2 btn-primary"
            >
              Track
            </button>
          </form>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            {/* Add mobile menu implementation later */}
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 
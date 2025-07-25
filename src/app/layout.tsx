import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DLT Logistics - Last Mile & Distribution',
  description: 'DLT Logistics is the last‑mile and domestic distribution arm of the Dasza group, delivering B2B, B2C and omnichannel parcels across México\'s main metropolitan areas.',
  keywords: 'logistics, last mile delivery, distribution, Mexico, B2B, B2C, omnichannel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-neutral-light dark:bg-neutral-dark">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 
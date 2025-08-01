import React from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import './globals.css'

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
      <body className="font-poppins">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 
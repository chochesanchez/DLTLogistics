import React from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dltlogistics.com.mx'),
  title: 'DLT Logistics — Last‑Mile & Distribution in Mexico',
  description:
    "DLT Logistics is the last‑mile and domestic distribution arm of the Dasza group, delivering B2B, B2C and omnichannel parcels across Mexico's main metropolitan areas.",
  keywords:
    'DLT Logistics, logistics Mexico, last mile, distribution, fulfillment, Monterrey, Apodaca, B2B, B2C, omnichannel',
  openGraph: {
    title: 'DLT Logistics — Last‑Mile & Distribution in Mexico',
    description:
      "Fast and reliable last‑mile, storage, distribution and fulfillment services across Mexico's main metros.",
    url: '/',
    siteName: 'DLT Logistics',
    images: [
      { url: '/favicon.png', width: 256, height: 256, alt: 'DLT Logistics' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DLT Logistics — Last‑Mile & Distribution in Mexico',
    description:
      'Storage. Distribution. Fulfillment. Reliable logistics services in Mexico.',
    images: ['/favicon.png'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="DLT Logistics - Last Mile & Distribution" />
        <link rel="icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'DLT Logistics',
              url: 'https://dltlogistics.com.mx',
              logo: 'https://dltlogistics.com.mx/favicon.png',
              sameAs: [
                'https://www.linkedin.com/company/dasza',
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Shared campus with Dasza CEDIS',
                addressLocality: 'Apodaca',
                addressRegion: 'N.L.',
                addressCountry: 'MX',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+52-81-8368-2483',
                contactType: 'customer service',
                areaServed: 'MX',
                availableLanguage: ['English', 'Spanish'],
              },
            }),
          }}
        />
      </head>
      <body className="font-poppins">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 
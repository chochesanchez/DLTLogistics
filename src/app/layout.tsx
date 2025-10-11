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
                telephone: '+52-811-916-1086',
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
        <div className="pt-16">
          {children}
        </div>
        <Footer />
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.link/5trkad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1DA955] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.49 0 .2 5.29.2 11.86c0 2.09.55 4.13 1.6 5.94L0 24l6.35-1.66a11.77 11.77 0 0 0 5.71 1.46h.01c6.56 0 11.86-5.29 11.86-11.86 0-3.17-1.24-6.16-3.41-8.4ZM12.07 21.2h-.01a9.83 9.83 0 0 1-5.01-1.38l-.36-.21-3.77.99 1-3.67-.24-.38a9.84 9.84 0 0 1-1.51-5.22c0-5.43 4.42-9.85 9.86-9.85a9.82 9.82 0 0 1 6.97 2.88 9.81 9.81 0 0 1 2.89 6.97c0 5.43-4.42 9.85-9.86 9.85Zm5.56-7.36c-.3-.15-1.77-.87-2.04-.98-.27-.1-.47-.15-.66.16-.2.3-.76.98-.93 1.18-.17.2-.34.23-.64.08-.3-.15-1.27-.47-2.41-1.5-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.47.13-.62.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.58-.91-2.16-.24-.58-.49-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.77-.73 2.02-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z"/>
          </svg>
        </a>
      </body>
    </html>
  )
} 
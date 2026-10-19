import type { Metadata } from 'next'
import { alternatesFor, localePath, type Lang } from '@/i18n/config'

const SITE_NAME = 'DLT Logistics'
const DEFAULT_IMAGE = { url: '/images/site/truck-road.jpg', width: 2000, height: 1333 }

/**
 * Title, description, canonical/hreflang and complete Open Graph / Twitter blocks for a page.
 * Without its own `openGraph` a page inherits the home page's, so every page builds the full set here.
 */
export function pageMetadata(lang: Lang, path: string, { title, description, image }: { title?: string; description?: string; image?: string }): Metadata {
  const ogTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const img = image ? { url: image } : DEFAULT_IMAGE
  return {
    ...(title ? { title } : {}),
    description,
    alternates: alternatesFor(lang, path),
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: lang === 'es' ? 'es_MX' : 'en_US',
      url: localePath(lang, path),
      title: ogTitle,
      description,
      images: [img],
    },
    twitter: { card: 'summary_large_image', title: ogTitle, description, images: [img.url] },
  }
}

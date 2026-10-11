import type { MetadataRoute } from 'next'

const BASE = 'https://dltlogistics.com.mx'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/about',
    '/services',
    '/services/last-mile',
    '/services/storage',
    '/services/retail',
    '/services/fulfillment',
    '/quote',
    '/contact',
  ].map((p) => ({ url: `${BASE}${p}`, lastModified: new Date() }))
}

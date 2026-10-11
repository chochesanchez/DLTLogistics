import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/technology'] }],
    sitemap: 'https://dltlogistics.com.mx/sitemap.xml',
  }
}

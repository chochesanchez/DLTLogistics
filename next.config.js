/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      // Vercel preview and *.vercel.app URLs serve the same pages; keep them out of search results.
      source: '/:path*',
      missing: [{ type: 'host', value: '(www\\.)?dltlogistics\\.com\\.mx' }],
      headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
    },
    {
      // Media file names are not hashed, so cache for a week and revalidate in the background.
      source: '/:dir(videos|images)/:path*',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }],
    },
  ],
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const {
  NODE_ENV,
  ANALYZE,
  JWT_SECRET,
  NEXT_PUBLIC_URL,
  GOOGLE_ID,
  GOOGLE_SECRET,
  FACEBOOK_ID,
  FACEBOOK_SECRET,
} = process.env
const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: ANALYZE === 'true',
})

// const ContentSecurityPolicy = `default-src 'self';script-src 'self';child-src ${NEXT_PUBLIC_URL};style-src 'self' ${NEXT_PUBLIC_URL};font-src 'self';`
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  /* 
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
*/
]

const config = {
  reactStrictMode: true,
  compress: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  eslint: {
    dirs: ['pages', 'component', 'utils'],
  },
  env: {
    GOOGLE_ID,
    GOOGLE_SECRET,
    FACEBOOK_ID,
    FACEBOOK_SECRET,
  },
  images: {
    disableStaticImages: true,
    domains: ['localhost', NEXT_PUBLIC_URL, 'cdn.shopify.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
module.exports = withCSS({
  cssModules: true,
  target: 'serverless',
  env: {
    JWT_SECRET,
  },
})
if (NODE_ENV === 'production') {
  module.exports = withPWA({
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      runtimeCaching,
      disable: false,
    },
    ...config,
  })
} else {
  module.exports = module.exports = withBundleAnalyzer(config)
}

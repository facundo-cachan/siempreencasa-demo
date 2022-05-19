/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404'],
}

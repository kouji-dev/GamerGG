const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: ['cdn.discordapp.com',  'lh3.googleusercontent.com']
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client']
  },
}

module.exports = withBundleAnalyzer(nextConfig)

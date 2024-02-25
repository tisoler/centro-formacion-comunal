/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  distDir: '_static',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig

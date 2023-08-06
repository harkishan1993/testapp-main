/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost','res.cloudinary.com'],
  },
  env: {
    URL_BASE: 'http://localhost:3000'
  }
}

module.exports = nextConfig

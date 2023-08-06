/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost','res.cloudinary.com','tenaciousinstrument.in'],
  },
  env: {
    URL_BASE: 'https://tenaciousinstrument.in'
  }
}

module.exports = nextConfig

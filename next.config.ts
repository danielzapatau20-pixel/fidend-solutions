import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'assets.higgsfield.ai' },
      { protocol: 'https', hostname: '*.higgsfield.ai' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

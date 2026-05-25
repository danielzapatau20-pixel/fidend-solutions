import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'assets.higgsfield.ai' },
      { protocol: 'https', hostname: '*.higgsfield.ai' },
    ],
  },
}

export default nextConfig

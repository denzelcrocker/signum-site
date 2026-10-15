import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        hostname: 'safety-api.ru',
        pathname: '/**',
        protocol: 'https',
      },
      {
        hostname: 'api.signum-nn.ru',
        pathname: '/**',
        protocol: 'https',
      },
    ],
  },
}

export default nextConfig

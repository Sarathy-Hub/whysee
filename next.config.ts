import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  typescript: {
    ignoreBuildErrors: true
  },

  eslint: {
    ignoreDuringBuilds: true
  },

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  },
    devIndicators: {
      appIsrStatus: true,
      buildActivity: true,
      buildActivityPosition: 'bottom-right'
  },

  experimental: {
    after: true
  }
};

export default nextConfig;

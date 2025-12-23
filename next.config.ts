import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
  /* config options here */
    images: {
    // Add the quality value (85) from your component
    qualities: [85],
    // You can also specify a range, for example:
    // qualities: [75, 80, 85, 90, 95, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

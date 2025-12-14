import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    // Add the quality value (85) from your component
    qualities: [85],
    // You can also specify a range, for example:
    // qualities: [75, 80, 85, 90, 95, 100],
  },
};

export default nextConfig;

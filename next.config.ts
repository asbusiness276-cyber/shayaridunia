import type { NextConfig } from "next";
import shayariData from "./src/data/shayaris.json";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return shayariData.map((s) => ({
      source: `/shayari/${s.id}`,
      destination: `/shayari/${s.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;

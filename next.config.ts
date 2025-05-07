import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.rareblocks.xyz'],
  },
  output: 'standalone',
};

export default nextConfig;

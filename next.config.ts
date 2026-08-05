import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Some versions require this in experimental, some top level, but based on the error it's top level. We'll add it top level.
  },
  // @ts-ignore - fixing cross-origin error in Next.js dev server
  allowedDevOrigins: ['10.2.0.2'],
};

export default nextConfig;

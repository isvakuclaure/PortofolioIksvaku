import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/PortofolioIksvaku',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

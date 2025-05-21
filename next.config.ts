import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/PortofolioIksvaku',
  assetPrefix: '/PortofolioIksvaku',
  images: {
    unoptimized: true,
    domains: [],
    remotePatterns: [],
    path: '/PortofolioIksvaku/_next/image'
  },
  trailingSlash: true,
};

export default nextConfig;

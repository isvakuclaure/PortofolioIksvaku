/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PortofolioIksvaku',
  assetPrefix: '/PortofolioIksvaku/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig; 
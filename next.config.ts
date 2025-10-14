/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    outputFileTracingRoot: path.join(__dirname),
  },
  eslint: {
    ignoreDuringBuilds: true, // 👈 thêm dòng này để bỏ qua lỗi ESLint khi deploy
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
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
  },
};

module.exports = {
  outputFileTracingRoot: 'D:\\free\\portfolio', // Thay bằng đường dẫn gốc dự án của bạn (D:\free\portfolio)
};
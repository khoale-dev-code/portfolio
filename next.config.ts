/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    // ------------------------------------
    // 🚀 VỊ TRÍ MỚI CỦA outputFileTracingRoot
    outputFileTracingRoot: path.join(__dirname),
    // ------------------------------------
    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
        formats: ['image/avif', 'image/webp'],
    },
    
    // Khối 'experimental' chỉ giữ lại các tùy chọn thử nghiệm khác
    experimental: {
        optimizePackageImports: ['lucide-react'],
        // outputFileTracingRoot đã được loại bỏ khỏi đây
    },
    
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'test.ikkxa.com',
                port: '',
            },
        ],
        formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;

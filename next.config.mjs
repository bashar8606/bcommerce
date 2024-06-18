/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.ikkxa.com',
                port: '',
            },
        ],
        formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'test.ikkxa.com',
                port: '',
            },{
                protocol: 'https',
                hostname: 'www.ikkxa.com',
                port: '',
            },
            
        ],
        formats: ['image/webp'],
    },
};

export default nextConfig;

// import createNextIntlPlugin from 'next-intl/plugin';
// // const withNextIntl = require('next-intl/plugin')();
// const withNextIntl = createNextIntlPlugin();
// const createNextIntlPlugin = require('next-intl/plugin');
 
// const withNextIntl = createNextIntlPlugin();
const withNextIntl = require('next-intl/plugin')('./src/i18n/request.js');
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

// export default nextConfig;
// export default withNextIntl(nextConfig);
module.exports = withNextIntl(nextConfig);

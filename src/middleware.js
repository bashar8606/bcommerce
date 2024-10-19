// import createMiddleware from 'next-intl/middleware';
 
// export default createMiddleware({
//   locales: ['ar', 'en'],
//   localeDetection: false,
//   defaultLocale: 'en'
// });
 
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(ar|en)/:path*']
// };

// export { auth as middleware } from "@/auth"

import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(ar|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};


// import createMiddleware from 'next-intl/middleware';

// const locales = ['en', 'ar'];
// const defaultLocaleMap = {
//   'example.com': 'en',  // English domain
//   'example.ae': 'ar',   // Arabic domain
// };

// export default createMiddleware({
//   locales,
//   defaultLocale: 'en',  // Fallback in case domain is not in map
//   async localeDetection(req) {
//     const { headers } = req;
//     const host = headers['host'];
    
//     // Determine the domain's default locale
//     const defaultLocale = defaultLocaleMap[host] || 'en'; // Use 'en' as fallback

//     // Check if the URL already has a locale
//     const currentLocale = req.nextUrl.locale;

//     // If no locale in URL, use default locale based on domain
//     if (!currentLocale || !locales.includes(currentLocale)) {
//       req.nextUrl.locale = defaultLocale;
//     }

//     // Optional: Set a cookie to remember the locale
//     return req.nextUrl.locale;
//   },
// });

// export const config = {
//   matcher: [
//     '/', // Root
//     '/(ar|en)/:path*', // Language paths
//     '/((?!api|_next|_vercel|.*\\..*).*)', // Match all paths excluding API, next.js assets
//   ],
// };

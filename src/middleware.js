import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['ar', 'en', 'es', 'de'],
  localeDetection: false,
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};

// export { auth as middleware } from "@/auth"

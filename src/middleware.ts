import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";
import { createRouteMatcher } from '@clerk/nextjs/server'
import { i18n } from "./lib/i18n-config";

function middleware(request: NextRequest) {
  // Check if the pathname is missing a locale
  const { pathname } = request.nextUrl;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Get the preferred locale from the request
    const locale = request.headers.get("accept-language")?.split(",")?.[0] || i18n.defaultLocale;

    // Redirect to the locale-prefixed path
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])
// Include both localized and non-localized paths, and match the actual route structure
const isPublicRoute = createRouteMatcher([
  '/:locale/(platform)/(clrek)/sign-in/[[...sign-in]]',
  '/:locale/(platform)/(clrek)/sign-up/[[...sign-up]]',
  '/(platform)/(clrek)/sign-in/[[...sign-in]]',
  '/(platform)/(clrek)/sign-up/[[...sign-up]]'
]);


// Use Clerk's middleware and combine it with our locale middleware
export default clerkMiddleware({
  beforeAuth: (req) => {
    return middleware(req);
  },
  afterAuth: async (auth, req) => {
    if (!isPublicRoute(req)) {
      await auth.protect()
    }
  }
});

export const config = {
  matcher: [
    // Protect all routes except static files and images
    "/((?!_next/static|_next/image|favicon.ico).*)",
    // Optional: Also protect API routes
    "/api/:path*"
  ],
};
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "ja"]
const defaultLocale = "en"

function getLocale(request: NextRequest): string {
  // Check if pathname already has a locale
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return defaultLocale

  // Get locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || ""

  // Simple locale detection
  if (acceptLanguage.includes("ja")) return "ja"

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`, request.url),
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico).*)",
  ],
}

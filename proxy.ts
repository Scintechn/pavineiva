import { NextResponse, type NextRequest } from "next/server";

// NOTE: keep in sync with lib/i18n/index.ts. We inline rather than import because
// importing would pull the full dictionaries into the proxy bundle.
const LOCALES = ["pt", "en"] as const;
const DEFAULT_LOCALE = "pt";
const PUBLIC_FILE = /\.[\w-]+$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internals, API, and file-like paths. /_vercel/* MUST be skipped — that's where
  // Web Analytics serves its script and receives beacons; a locale prefix there breaks
  // analytics silently (every event 308-redirected into /pt/_vercel/...).
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel") ||
    pathname.startsWith("/api") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/|_vercel/|api/|.*\\.[\\w-]+$).*)"],
};

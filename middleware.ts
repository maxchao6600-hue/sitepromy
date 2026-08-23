import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  getLanguageFromPathname,
  getLocalizedPath,
  stripLocalePrefix,
} from "@/lib/i18n/routes";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const langParam = searchParams.get("lang");

  if (langParam === "zh" || langParam === "en") {
    const base = stripLocalePrefix(pathname);
    const targetPath = getLocalizedPath(base, langParam);
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = targetPath;
    redirectUrl.searchParams.delete("lang");
    return NextResponse.redirect(redirectUrl, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    "x-sitepro-lang",
    getLanguageFromPathname(pathname),
  );

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};

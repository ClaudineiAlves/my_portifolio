import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALID_LOCALES = ["en", "pt"] as const;
type ValidLocale = (typeof VALID_LOCALES)[number];
const DEFAULT_LOCALE: ValidLocale = "en";
const COOKIE_NAME = "portfolio-locale";

function sanitizeLocale(value: unknown): ValidLocale {
  if (
    typeof value === "string" &&
    VALID_LOCALES.includes(value as ValidLocale)
  ) {
    return value as ValidLocale;
  }
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  // ✅ Pula arquivos estáticos e API diretamente no código (mais confiável que regex)
  const pathname = request.nextUrl.pathname;
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Headers de segurança obrigatórios
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()",
  );

  // ✅ Cookie seguro HttpOnly + Secure + SameSite=Strict
  const currentLocale = request.cookies.get(COOKIE_NAME)?.value;
  const sanitizedLocale = sanitizeLocale(currentLocale);

  if (!currentLocale || !VALID_LOCALES.includes(currentLocale as ValidLocale)) {
    response.cookies.set(COOKIE_NAME, sanitizedLocale, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
  }

  return response;
}

// ✅ Matcher simplificado — aplica a TUDO, o filtro é feito no código acima
export const config = {
  matcher: ["/:path*"],
};

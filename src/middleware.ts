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
  const response = NextResponse.next();

  // Headers de segurança obrigatórios
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()",
  );

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

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

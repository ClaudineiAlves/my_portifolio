import { NextRequest, NextResponse } from "next/server";

const VALID_LOCALES = ["en", "pt"] as const;
type ValidLocale = (typeof VALID_LOCALES)[number];
const COOKIE_NAME = "portfolio-locale";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const locale = body.locale;

    if (!locale || typeof locale !== "string") {
      return NextResponse.json(
        { error: "Locale é obrigatório e deve ser uma string" },
        { status: 400 },
      );
    }

    if (!VALID_LOCALES.includes(locale as ValidLocale)) {
      return NextResponse.json(
        {
          error: `Locale inválido. Valores aceitos: ${VALID_LOCALES.join(", ")}`,
        },
        { status: 400 },
      );
    }

    const response = NextResponse.json({ success: true, locale });

    response.cookies.set(COOKIE_NAME, locale, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("[API /locale] Erro:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}

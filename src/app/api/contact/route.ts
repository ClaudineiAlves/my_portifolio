import { NextRequest, NextResponse } from "next/server";

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
const ipRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const maxRequests = 5;
  const requests = ipRequests.get(ip) || [];
  const recentRequests = requests.filter((time) => now - time < windowMs);
  if (recentRequests.length >= maxRequests) return true;
  recentRequests.push(now);
  ipRequests.set(ip, recentRequests);
  return false;
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
      },
    );
    const data = await response.json();
    return data.success && data.score >= 0.5;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Muitas requisições" },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { name, email, message, recaptchaToken } = body;

    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    if (message.length < 10 || message.length > 1000) {
      return NextResponse.json(
        { error: "Mensagem deve ter 10-1000 caracteres" },
        { status: 400 },
      );
    }

    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "Verificação falhou" },
        { status: 403 },
      );
    }

    const emailjsResponse = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: name,
            from_email: email,
            message,
            reply_to: email,
          },
        }),
      },
    );

    if (!emailjsResponse.ok) {
      const errorData = await emailjsResponse.text();
      console.error("[EmailJS] Erro:", errorData);
      return NextResponse.json(
        { error: "Erro ao enviar email" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API /contact] Erro:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

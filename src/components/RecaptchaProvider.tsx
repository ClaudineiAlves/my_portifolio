"use client";

import Script from "next/script";

export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) {
    console.warn("[Recaptcha] NEXT_PUBLIC_RECAPTCHA_SITE_KEY não definido");
    return <>{children}</>;
  }
  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}

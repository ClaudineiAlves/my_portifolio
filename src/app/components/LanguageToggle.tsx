"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const toggle = () => {
    setLocale(locale === "en" ? "pt" : "en");
  };

  const label = locale === "en" ? "English" : "Português";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch language to ${locale === "en" ? "Português" : "English"}`}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20
                 bg-white/10 hover:bg-white/20 transition-all text-sm font-medium"
    >
      <span>{label}</span>
    </button>
  );
}

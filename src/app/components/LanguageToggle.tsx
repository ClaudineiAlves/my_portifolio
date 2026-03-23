"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { type Locale, localeNames } from "@/i18n";

const flags: Record<Locale, string> = {
  en: "🇺🇸",
  pt: "🇧🇷",
};

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const toggle = () => {
    setLocale(locale === "en" ? "pt" : "en");
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch language to ${locale === "en" ? "Português" : "English"}`}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20
                 bg-white/10 hover:bg-white/20 transition-all text-sm font-medium"
    >
      <span>{flags[locale]}</span>
      <span>{localeNames[locale]}</span>
    </button>
  );
}

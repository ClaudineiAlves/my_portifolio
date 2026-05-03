import en from "./locales/en.json";
import pt from "./locales/pt.json";

export type Locale = "en" | "pt";

export const locales: Record<Locale, typeof en> = { en, pt };

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

export const defaultLocale: Locale = "en";

// Utilitário: acessa chaves aninhadas com dot-notation
// ex: t('hero.title') => string
export type TranslationKeys = typeof en;
// rebuild Sun May  3 01:54:50 PM -03 2026

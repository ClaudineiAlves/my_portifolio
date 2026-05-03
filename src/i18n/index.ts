import en from "./locales/en.json";
import pt from "./locales/pt.json";

export type Locale = "en" | "pt";

export const locales: Record<Locale, typeof en> = { en, pt };

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

export const defaultLocale: Locale = "en";

export type TranslationKeys = typeof en;

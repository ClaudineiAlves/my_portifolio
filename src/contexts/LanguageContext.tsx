"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, defaultLocale, locales } from "@/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  return (
    (path.split(".").reduce((acc: unknown, key: string) => {
      if (acc && typeof acc === "object") {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj) as string) ?? path
  ); // fallback: retorna a própria chave se não encontrar
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Persiste a preferência no localStorage
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-locale") as Locale | null;
    if (saved && saved in locales) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("portfolio-locale", newLocale);
    // Atualiza o atributo lang do HTML para acessibilidade e SEO
    document.documentElement.lang = newLocale;
  };

  const t = (key: string): string => {
    return getNestedValue(
      locales[locale] as unknown as Record<string, unknown>,
      key,
    );
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import { Locale, defaultLocale, locales } from "@/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isReady: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Helper para setar cookie (com Secure em HTTPS)
function setCookie(name: string, value: string, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? ";Secure"
      : "";
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax${secure}`;
}

// Helper para ler cookie
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

// Helper para acessar valores aninhados em objetos
function getNestedValue(
  obj: Record<string, unknown>,
  path: string,
): string | undefined {
  const result = path.split(".").reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === "object" && acc !== null) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);

  return typeof result === "string" ? result : undefined;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Inicializa com o idioma detectado no HTML (setado pelo script inline no layout)
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof document !== "undefined") {
      const htmlLocale = document.documentElement.getAttribute(
        "data-locale",
      ) as Locale | null;
      if (htmlLocale && htmlLocale in locales) return htmlLocale;

      const langAttr = document.documentElement.lang as Locale | null;
      if (langAttr && langAttr in locales) return langAttr;
    }
    return defaultLocale;
  });

  const [isReady, setIsReady] = useState(false);

  // Sincroniza com localStorage/cookie após montagem
  useEffect(() => {
    const savedLocal = localStorage.getItem(
      "portfolio-locale",
    ) as Locale | null;
    const savedCookie = getCookie("portfolio-locale") as Locale | null;
    const saved = savedLocal || savedCookie;

    if (saved && saved in locales && saved !== locale) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
      document.documentElement.setAttribute("data-locale", saved);
    }

    if (!savedCookie || savedCookie !== (saved || locale)) {
      setCookie("portfolio-locale", saved || locale);
    }

    setIsReady(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setLocale = useCallback((newLocale: Locale) => {
    if (!(newLocale in locales)) {
      console.warn(`[i18n] Invalid locale: "${newLocale}"`);
      return;
    }
    setLocaleState(newLocale);
    localStorage.setItem("portfolio-locale", newLocale);
    setCookie("portfolio-locale", newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.setAttribute("data-locale", newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(
        locales[locale] as unknown as Record<string, unknown>,
        key,
      );

      if (value === undefined) {
        // Em desenvolvimento, loga o aviso. Em produção, retorna string vazia
        if (process.env.NODE_ENV === "development") {
          console.warn(
            `[i18n] Missing translation: "${key}" in locale "${locale}"`,
          );
        }
        return "";
      }

      return value;
    },
    [locale],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      isReady,
    }),
    [locale, setLocale, t, isReady],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

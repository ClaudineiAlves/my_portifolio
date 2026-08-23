"use client";

import { useState, useEffect, useRef } from "react";
import { Accessibility, Type, Contrast, Moon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type AccessibilitySettings = {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
};

export default function AccessibilityToggle() {
  const { t } = useLanguage();
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
  });

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fecha ao tocar/clicar fora — no mobile o painel ficava preso aberto
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: Event) => {
      if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Carregar configurações do localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("accessibility-settings");
      if (saved) {
        setSettings(JSON.parse(saved));
      }
    } catch {
      // Ignora erro
    }
  }, []);

  // Aplicar configurações ao documento
  useEffect(() => {
    const { highContrast, largeText, reducedMotion } = settings;

    // Alto contraste
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }

    // Texto grande
    if (largeText) {
      document.documentElement.classList.add("large-text");
    } else {
      document.documentElement.classList.remove("large-text");
    }

    // Redução de motion
    if (reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }

    // Salvar no localStorage
    localStorage.setItem("accessibility-settings", JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div ref={containerRef} className="fixed bottom-24 right-6 z-50">
      {/* Botão principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-500 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        aria-label={t("accessibility.toggle_label")}
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Menu de opções */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 bg-bg-secondary border border-bg-tertiary rounded-2xl shadow-xl p-4 min-w-[220px] space-y-3">
          <h3 className="text-sm font-bold text-content-primary mb-2">
            {t("accessibility.title")}
          </h3>

          {/* Alto contraste */}
          <button
            onClick={() => toggleSetting("highContrast")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
              settings.highContrast
                ? "bg-primary-500/20 text-primary-400"
                : "hover:bg-bg-tertiary text-content-secondary"
            }`}
            aria-pressed={settings.highContrast}
          >
            <Contrast className="w-5 h-5" />
            <span className="text-sm">{t("accessibility.high_contrast")}</span>
          </button>

          {/* Texto grande */}
          <button
            onClick={() => toggleSetting("largeText")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
              settings.largeText
                ? "bg-primary-500/20 text-primary-400"
                : "hover:bg-bg-tertiary text-content-secondary"
            }`}
            aria-pressed={settings.largeText}
          >
            <Type className="w-5 h-5" />
            <span className="text-sm">{t("accessibility.large_text")}</span>
          </button>

          {/* Reduzir motion */}
          <button
            onClick={() => toggleSetting("reducedMotion")}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
              settings.reducedMotion
                ? "bg-primary-500/20 text-primary-400"
                : "hover:bg-bg-tertiary text-content-secondary"
            }`}
            aria-pressed={settings.reducedMotion}
          >
            <Moon className="w-5 h-5" />
            <span className="text-sm">{t("accessibility.reduced_motion")}</span>
          </button>
        </div>
      )}
    </div>
  );
}

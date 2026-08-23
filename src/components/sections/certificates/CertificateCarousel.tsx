// src/components/certificates/CertificateCarousel.tsx
"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CertificateCard from "./CertificateCard";
import { Certificate } from "./types";

interface CertificateCarouselProps {
  certificates: Certificate[];
}

export default function CertificateCarousel({
  certificates,
}: CertificateCarouselProps) {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Verifica se pode scrollar (para habilitar/desabilitar botões)
  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px tolerance

      // Card ativo — no mobile os pontinhos são o único indicador de posição
      const step = scrollWidth / Math.max(certificates.length, 1);
      setActiveIndex(
        Math.min(
          certificates.length - 1,
          Math.max(0, Math.round(scrollLeft / step)),
        ),
      );
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Checa após animação
      setTimeout(checkScrollability, 300);
    }
  };

  // Se tem poucos certificados, não mostra controles
  const showControls = certificates.length > 2;

  return (
    <div className="relative group">
      {/* Botão Esquerda — escondido no mobile, onde a navegação é por swipe */}
      {showControls && (
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 -translate-x-1/2
            ${
              canScrollLeft
                ? "bg-primary-600/90 hover:bg-primary-600 text-white opacity-0 group-hover:opacity-100 hover:shadow-glow-md"
                : "bg-bg-tertiary text-content-subtle opacity-0 cursor-not-allowed"
            }`}
          aria-label={t("certificates.carousel_prev")}
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Container do Carrossel - SEM REPETIÇÃO */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {certificates.map((certificate, index) => (
          <div
            key={certificate.id} // ID único, sem índice repetido
            // No mobile o card acompanha a viewport (e deixa o próximo "espiar",
            // sinalizando que dá para arrastar) em vez de fixar 320px.
            className="flex-shrink-0 w-[82vw] max-w-[320px] md:w-[380px] md:max-w-none snap-center"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <CertificateCard certificate={certificate} />
          </div>
        ))}
      </div>

      {/* Botão Direita */}
      {showControls && (
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 translate-x-1/2
            ${
              canScrollRight
                ? "bg-primary-600/90 hover:bg-primary-600 text-white opacity-0 group-hover:opacity-100 hover:shadow-glow-md"
                : "bg-bg-tertiary text-content-subtle opacity-0 cursor-not-allowed"
            }`}
          aria-label={t("certificates.carousel_next")}
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Gradientes nas laterais — no mobile cobriam boa parte do card */}
      <div className="hidden md:block absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-bg-secondary to-transparent pointer-events-none z-[5]" />
      <div className="hidden md:block absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-bg-secondary to-transparent pointer-events-none z-[5]" />

      {/* Indicador de progresso visual */}
      {showControls && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5">
          {certificates.map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-bg-tertiary data-[active=true]:bg-primary-500 data-[active=true]:w-4 transition-all"
              data-active={index === activeIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}

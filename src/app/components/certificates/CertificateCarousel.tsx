// src/app/components/certificates/CertificateCarousel.tsx
"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CertificateCard from "./CertificateCard";
import { Certificate } from "./types";

interface CertificateCarouselProps {
  certificates: Certificate[];
}

export default function CertificateCarousel({
  certificates,
}: CertificateCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Verifica se pode scrollar (para habilitar/desabilitar botões)
  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px tolerance
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
      {/* Botão Esquerda */}
      {showControls && (
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 -translate-x-1/2 
            ${
              canScrollLeft
                ? "bg-primary-600/90 hover:bg-primary-600 text-white opacity-0 group-hover:opacity-100 hover:shadow-glow-md"
                : "bg-bg-tertiary text-content-subtle opacity-0 cursor-not-allowed"
            }`}
          aria-label="Scroll para esquerda"
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
            className="flex-shrink-0 w-[320px] md:w-[380px] snap-center"
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
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all duration-300 translate-x-1/2 
            ${
              canScrollRight
                ? "bg-primary-600/90 hover:bg-primary-600 text-white opacity-0 group-hover:opacity-100 hover:shadow-glow-md"
                : "bg-bg-tertiary text-content-subtle opacity-0 cursor-not-allowed"
            }`}
          aria-label="Scroll para direita"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Gradientes nas laterais */}
      <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-bg-secondary to-transparent pointer-events-none z-[5]" />
      <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-bg-secondary to-transparent pointer-events-none z-[5]" />

      {/* Indicador de progresso visual */}
      {showControls && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
          {certificates.map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-bg-tertiary data-[active=true]:bg-primary-500 transition-colors"
              data-active={index === 0} // Simplificado, pode ser melhorado com estado
            />
          ))}
        </div>
      )}
    </div>
  );
}

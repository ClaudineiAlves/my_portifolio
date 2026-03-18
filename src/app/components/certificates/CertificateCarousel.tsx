// src/app/components/certificates/CertificateCarousel.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
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
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicar certificados para loop infinito
  const duplicatedCertificates = [...certificates, ...certificates];

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll infinito
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && !isHovered && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth / 2; // Metade por causa da duplicação

        // Se chegou no meio (fim dos originais), volta pro início suavemente
        if (scrollLeft >= maxScroll - clientWidth - 50) {
          scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
        } else {
          scrollRef.current.scrollBy({ left: 1, behavior: "auto" });
        }
      }
    }, 30); // Velocidade do scroll

    return () => clearInterval(interval);
  }, [isPaused, isHovered]);

  // Verificar posição do scroll
  useEffect(() => {
    const handleScroll = () => checkScrollability();
    const currentRef = scrollRef.current;

    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      checkScrollability();
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Botão Play/Pause */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="absolute -top-12 right-0 z-10 p-2 rounded-full bg-red-600/20 hover:bg-red-600/40 text-red-500 transition-all"
        title={isPaused ? "Retomar" : "Pausar"}
      >
        {isPaused ? <Play size={18} /> : <Pause size={18} />}
      </button>

      {/* Botão Esquerda */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-red-600/90 hover:bg-red-600 text-white shadow-lg transition-all duration-300 -translate-x-1/2 opacity-0 group-hover:opacity-100 ${!canScrollLeft && "hidden"}`}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Container do Carrossel */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {duplicatedCertificates.map((certificate, index) => (
          <motion.div
            key={`${certificate.id}-${index}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: (index % certificates.length) * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[320px] md:w-[380px]"
          >
            <CertificateCard certificate={certificate} />
          </motion.div>
        ))}
      </div>

      {/* Botão Direita */}
      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-red-600/90 hover:bg-red-600 text-white shadow-lg transition-all duration-300 translate-x-1/2 opacity-0 group-hover:opacity-100 ${!canScrollRight && "hidden"}`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Gradientes nas laterais */}
      <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  );
}

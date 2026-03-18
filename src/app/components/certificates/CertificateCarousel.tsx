// src/app/components/certificates/CertificateCarousel.tsx
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CertificateCard from "./CertificateCard";
import { Certificate } from "./types";

interface CertificateCarouselProps {
  certificates: Certificate[];
  onSelectCertificate: (cert: Certificate) => void;
}

export default function CertificateCarousel({ 
  certificates, 
  onSelectCertificate 
}: CertificateCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
      setTimeout(checkScrollability, 300);
    }
  };

  return (
    <div className="relative group">
      {/* Botão Esquerda */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-red-600/90 hover:bg-red-600 text-white shadow-lg transition-all duration-300 -translate-x-1/2 opacity-0 group-hover:opacity-100 ${!canScrollLeft && 'hidden'}`}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Container do Carrossel */}
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[320px] md:w-[380px]"
          >
            <CertificateCard 
              certificate={certificate} 
              onClick={() => onSelectCertificate(certificate)}
            />
          </motion.div>
        ))}
      </div>

      {/* Botão Direita */}
      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-red-600/90 hover:bg-red-600 text-white shadow-lg transition-all duration-300 translate-x-1/2 opacity-0 group-hover:opacity-100 ${!canScrollRight && 'hidden'}`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Gradientes nas laterais */}
      <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  );
}
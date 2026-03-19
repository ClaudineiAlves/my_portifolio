// src/app/components/certificates/CertificateCarousel.tsx
"use client";

import { useState, useRef, useEffect } from "react";
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
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>();

  // Duplicar certificados para loop infinito visual
  const displayCertificates = [
    ...certificates,
    ...certificates,
    ...certificates,
  ];

  // Auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = scrollContainer.scrollLeft;
    const speed = 0.5; // pixels por frame

    const animate = () => {
      if (!isPaused && !isHovered && scrollContainer) {
        scrollPos += speed;

        // Reset suave quando chega no final do primeiro set
        const singleSetWidth = scrollContainer.scrollWidth / 3;
        if (scrollPos >= singleSetWidth * 2) {
          scrollPos = singleSetWidth;
          scrollContainer.scrollLeft = scrollPos;
        } else {
          scrollContainer.scrollLeft = scrollPos;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isHovered, certificates.length]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-red-600/90 hover:bg-red-600 text-white shadow-lg transition-all duration-300 -translate-x-1/2 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Container do Carrossel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {displayCertificates.map((certificate, index) => (
          <div
            key={`${certificate.id}-${index}`}
            className="flex-shrink-0 w-[320px] md:w-[380px] animate-fade-in"
            style={{
              animationDelay: `${(index % certificates.length) * 100}ms`,
            }}
          >
            <CertificateCard certificate={certificate} />
          </div>
        ))}
      </div>

      {/* Botão Direita */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-red-600/90 hover:bg-red-600 text-white shadow-lg transition-all duration-300 translate-x-1/2 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Gradientes nas laterais */}
      <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  );
}

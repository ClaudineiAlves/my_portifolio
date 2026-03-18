// src/app/components/certificates/page.tsx
"use client";

import SectionReveal from "../SectionReveal";
import CertificateCarousel from "./CertificateCarousel";
import { certificates } from "./data";
import { Award, Sparkles } from "lucide-react";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-20 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
              <Award size={18} className="text-red-500" />
              <span className="text-red-400 text-sm font-medium">
                Qualificações
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Meus <span className="text-red-600">Certificados</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Certificações e cursos que comprovam minha expertise contínua em
              tecnologia e ciência de dados.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">
                {certificates.length}+
              </div>
              <div className="text-sm text-gray-400">Certificações</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">
                {certificates.reduce(
                  (acc, cert) => acc + parseInt(cert.hours || "0"),
                  0,
                )}
                h
              </div>
              <div className="text-sm text-gray-400">Horas de estudo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">
                {new Set(certificates.flatMap((c) => c.tags)).size}+
              </div>
              <div className="text-sm text-gray-400">Tecnologias</div>
            </div>
          </div>
        </SectionReveal>

        {/* Carrossel Auto-play */}
        <SectionReveal delay={0.2}>
          <CertificateCarousel certificates={certificates} />
        </SectionReveal>
      </div>
    </section>
  );
}

// src/app/components/certificates/page.tsx
"use client";

import SectionReveal from "../SectionReveal";
import CertificateCarousel from "./CertificateCarousel";
import { useCertificates } from "@/hooks/useTranslatedData";
import { Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Certificates() {
  const { t } = useLanguage();
  const certificates = useCertificates(); // dados já traduzidos

  return (
    <section
      id="certificates"
      className="py-20 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
              <Award size={18} className="text-red-500" />
              <span className="text-red-400 text-sm font-medium">
                {t("certificates.section_label")}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t("certificates.title_word1")}{" "}
              <span className="text-red-600">
                {t("certificates.title_word2")}
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {t("certificates.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">
                {certificates.length}+
              </div>
              <div className="text-sm text-gray-400">
                {t("certificates.stat_certifications")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">
                {certificates.reduce(
                  (acc, cert) => acc + parseInt(cert.hours || "0"),
                  0,
                )}
                h
              </div>
              <div className="text-sm text-gray-400">
                {t("certificates.stat_hours")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">
                {new Set(certificates.flatMap((c) => c.tags)).size}+
              </div>
              <div className="text-sm text-gray-400">
                {t("certificates.stat_technologies")}
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <CertificateCarousel certificates={certificates} />
        </SectionReveal>
      </div>
    </section>
  );
}

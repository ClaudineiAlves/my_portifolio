"use client";

import { Award, Clock, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCertificates } from "@/hooks/useTranslatedData";
import RevealText from "@/components/RevealText";
import CertificateCarousel from "./CertificateCarousel";

// Componente reutilizável para Stats (evita repetição)
interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  delay?: number;
}

function StatCard({ icon, value, label, delay = 0 }: StatCardProps) {
  return (
    <RevealText delay={delay}>
      <div className="group h-full text-center p-4 sm:p-6 rounded-2xl bg-bg-secondary/50 border border-bg-tertiary hover:border-primary-500/30 hover:shadow-glow-sm transition-all duration-300 sm:min-w-[140px]">
        <div className="flex justify-center mb-3 text-primary-500 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="text-headline font-bold text-content-primary font-variable group-hover:text-primary-400 transition-colors">
          {value}
        </div>
        <div className="text-caption text-content-subtle mt-1">{label}</div>
      </div>
    </RevealText>
  );
}

export default function Certificates() {
  const { t } = useLanguage();
  const certificates = useCertificates();

  // Cálculos memoizados para evitar re-computação
  const totalHours = certificates.reduce(
    (acc, cert) => acc + parseInt(cert.hours || "0"),
    0,
  );

  const uniqueTechnologies = new Set(certificates.flatMap((c) => c.tags)).size;

  const statsData = [
    {
      icon: <Award size={24} />,
      value: `${certificates.length}+`,
      label: t("certificates.stat_certifications"),
      delay: 100,
    },
    {
      icon: <Clock size={24} />,
      value: `${totalHours}h`,
      label: t("certificates.stat_hours"),
      delay: 200,
    },
    {
      icon: <Layers size={24} />,
      value: `${uniqueTechnologies}+`,
      label: t("certificates.stat_technologies"),
      delay: 300,
    },
  ];

  return (
    <section
      id="certificates"
      className="py-24 px-4 md:px-8 lg:px-16 bg-bg-secondary/30 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealText>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <Award size={18} className="text-primary-400" />
              <span className="text-caption text-primary-400">
                {t("certificates.section_label")}
              </span>
            </div>
          </RevealText>

          <RevealText delay={100}>
            <h2 className="text-headline font-bold text-content-primary mb-4">
              {t("certificates.title_word1")}{" "}
              <span className="title-gradient">
                {t("certificates.title_word2")}
              </span>
            </h2>
          </RevealText>

          <RevealText delay={200}>
            <p className="text-body-large text-content-secondary max-w-2xl mx-auto">
              {t("certificates.subtitle")}
            </p>
          </RevealText>
        </div>

        {/* Stats Grid - usando componente reutilizável */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Carousel */}
        <RevealText delay={400}>
          <div className="relative">
            <CertificateCarousel certificates={certificates} />
          </div>
        </RevealText>
      </div>
    </section>
  );
}

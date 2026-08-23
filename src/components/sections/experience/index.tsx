"use client";

import { experiences } from "@/../utils/Data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import { Calendar, Building2, ChevronRight } from "lucide-react";
import RevealText from "@/components/RevealText";
import { useLanguage } from "@/contexts/LanguageContext";

function Experience() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="relative z-50 py-24 lg:py-48 overflow-hidden"
    >
      {/* Decorative Background Blur - cores refinadas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header com linhas decorativas */}
      <div className="flex justify-center mb-20 lg:mb-32">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-primary-600"></span>
          <RevealText>
            <span className="bg-bg-primary border border-primary-600/30 w-fit text-content-primary p-3 px-8 text-2xl font-bold rounded-full shadow-glow-sm">
              {t("experience.title") || "Professional Journey"}
            </span>
          </RevealText>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-primary-600"></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Central Timeline Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-600 via-primary-900 to-transparent opacity-30" />

        <div className="flex flex-col gap-16 lg:gap-24">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              <RevealText
                direction={index % 2 === 0 ? "right" : "left"}
                delay={index * 100}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 rounded-xl bg-bg-primary border-2 border-primary-600 flex items-center justify-center z-10 shadow-glow-sm">
                    <BsPersonWorkspace className="text-primary-600 w-5 h-5" />
                  </div>

                  {/* Date Badge */}
                  <div
                    className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                  >
                    <div className="bg-bg-secondary/50 backdrop-blur-sm border border-bg-tertiary px-4 py-2 rounded-full flex items-center gap-2 text-body-small text-content-secondary font-medium hover:border-primary-500/30 transition-colors">
                      <Calendar className="w-4 h-4 text-primary-500" />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-left"}`}
                  >
                    <div className="group relative p-8 rounded-3xl border border-bg-tertiary bg-bg-secondary/50 backdrop-blur-md hover:border-primary-500/30 transition-all duration-500 shadow-card hover:shadow-glow-sm">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-subheadline font-bold bg-clip-text text-transparent bg-gradient-to-r from-content-primary to-content-secondary">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary-500 font-semibold text-body">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>

                        <div className="space-y-3 mt-2">
                          {exp.details?.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex gap-3 items-start group/item"
                            >
                              <ChevronRight className="w-4 h-4 text-primary-600 mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                              <p className="text-body-small text-content-muted leading-relaxed group-hover/item:text-content-secondary transition-colors">
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Animated Glow Border (Hover) */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-600/10 via-transparent to-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </RevealText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

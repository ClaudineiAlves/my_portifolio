"use client";

import { useProjects } from "@/hooks/useTranslatedData";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./project-card";
import { useLanguage } from "@/contexts/LanguageContext";
import RevealText from "../RevealText";

const Projects = () => {
  const { t } = useLanguage();
  const projectsData = useProjects();
  const displayedProjects = projectsData.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative z-50 py-24 lg:py-48 overflow-hidden"
    >
      {/* Background glow refinado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Header com linhas decorativas */}
      <div className="flex justify-center mb-20 lg:mb-32">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-primary-600"></span>
          <RevealText>
            <span className="bg-bg-primary border border-primary-600/30 w-fit text-content-primary p-3 px-8 text-2xl font-bold rounded-full shadow-glow-sm">
              {t("projects.heading")}
            </span>
          </RevealText>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-primary-600"></span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-12 lg:gap-20">
          {/* Texto introdutório */}
          <div className="text-center">
            <RevealText delay={100}>
              <p className="text-caption text-primary-400 mb-4">
                {t("projects.section_label")}
              </p>
            </RevealText>

            <RevealText delay={200}>
              <h2 className="text-headline font-bold text-content-primary leading-tight">
                {t("projects.title_word1")}{" "}
                <span className="title-gradient">
                  {t("projects.title_word2")}
                </span>
              </h2>
            </RevealText>

            <RevealText delay={300}>
              <p className="mt-6 max-w-2xl text-body-large text-content-secondary leading-relaxed mx-auto">
                {t("projects.subtitle")}
              </p>
            </RevealText>
          </div>

          {/* Grid de Projetos */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {displayedProjects.map((project, index) => (
              <RevealText key={project.id} delay={400 + index * 100}>
                <ProjectCard project={project} />
              </RevealText>
            ))}
          </div>

          {/* Botão Ver Todos */}
          <RevealText delay={700}>
            <Link href="/projects" className="group mt-8">
              <button className="btn-primary flex items-center gap-2 group/btn">
                <span className="relative flex items-center gap-2">
                  {t("projects.view_all")}
                  <MoveUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </span>
              </button>
            </Link>
          </RevealText>
        </div>
      </div>
    </section>
  );
};

export default Projects;

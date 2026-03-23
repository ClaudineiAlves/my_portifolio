"use client";

import { skillsData } from "@/../utils/Data/skills";
import { getSkillIcon, getSkillColor, SkillIcon } from "@/../utils/skill-icons";
import Marquee from "react-fast-marquee";
import SectionReveal from "../SectionReveal";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

// Componente que renderiza SVG ou Icon
const SkillIconRender = ({ iconData }: { iconData: SkillIcon }) => {
  if (iconData.type === "svg") {
    return (
      <Image
        src={iconData.path}
        alt="Skill"
        width={32}
        height={32}
        className="w-8 h-8 object-contain"
      />
    );
  }
  const IconComponent = iconData.component;
  return <IconComponent className="w-8 h-8" />;
};

const SkillItem = ({
  skill,
  technologyLabel,
}: {
  skill: string;
  technologyLabel: string;
}) => {
  const iconData = getSkillIcon(skill);
  const color = getSkillColor(skill);
  const isSvg = iconData.type === "svg";

  return (
    <div className="mx-4 my-4 group">
      <div className="relative px-8 py-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] flex items-center gap-4 shadow-xl">
        <div
          className="text-3xl transition-all duration-500 group-hover:scale-110"
          style={{
            filter: `drop-shadow(0 0 8px ${color}40)`,
            color: isSvg ? undefined : color,
          }}
        >
          <SkillIconRender iconData={iconData} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-wide uppercase group-hover:text-white transition-colors">
            {skill}
          </span>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">
            {technologyLabel}
          </span>
        </div>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-500 pointer-events-none blur-xl"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};

function Skills() {
  const { t } = useLanguage();

  const firstHalf = skillsData.slice(0, Math.ceil(skillsData.length / 2));
  const secondHalf = skillsData.slice(Math.ceil(skillsData.length / 2));

  // Label "Technology" também pode ser traduzido para cada card
  const technologyLabel = t("skills.technology_label");

  return (
    <div id="skills" className="relative z-50 py-24 lg:py-48 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex flex-col items-center mb-16 lg:mb-24">
          <SectionReveal direction="down">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-red-500">
                <span className="w-8 h-[1px] bg-red-500/50"></span>
                <span className="text-xs font-bold uppercase tracking-[0.5em]">
                  {t("skills.section_label")}
                </span>
                <span className="w-8 h-[1px] bg-red-500/50"></span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter text-center">
                {t("skills.title_word1")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  {t("skills.title_word2")}
                </span>
              </h2>
            </div>
          </SectionReveal>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 relative">
          <SectionReveal direction="right" delay={0.2}>
            <Marquee speed={40} gradient={false} pauseOnHover={true}>
              {firstHalf.map((skill, index) => (
                <SkillItem
                  key={`first-${index}`}
                  skill={skill}
                  technologyLabel={technologyLabel}
                />
              ))}
            </Marquee>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.4}>
            <Marquee
              speed={35}
              gradient={false}
              pauseOnHover={true}
              direction="right"
            >
              {secondHalf.map((skill, index) => (
                <SkillItem
                  key={`second-${index}`}
                  skill={skill}
                  technologyLabel={technologyLabel}
                />
              ))}
            </Marquee>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}

export default Skills;

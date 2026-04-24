// src/hooks/useTranslatedData.ts
import { useLanguage } from "../contexts/LanguageContext";

// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface EducationItem {
  id: number;
  title: string;
  duration: string;
  institution: string;
  description: string[];
  details: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  institution: string;
  date: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  hours: string;
}

export interface ProjectItem {
  id: number;
  name: string;
  description: string;
  role: string;
  tools: string[];
  code: string;
  demo: string;
  date: string;
  images: string[];
  videos: string[];
  highlights: string[];
  challenges: string[];
}

export interface PersonalTranslated {
  designation: string;
  description: string;
  designationAlternateWords: string[];
}

// ─── Personal ────────────────────────────────────────────────────────────────

export function usePersonalData(): PersonalTranslated {
  const { t } = useLanguage();

  return {
    designation: t("personal.designation"),
    description: t("personal.description"),
    designationAlternateWords: [
      t("personal.alt_word_1"),
      t("personal.alt_word_2"),
      t("personal.alt_word_3"),
      t("personal.alt_word_4"),
      t("personal.alt_word_5"),
      t("personal.alt_word_6"),
    ],
  };
}

// ─── Education ───────────────────────────────────────────────────────────────

export function useEducations(): EducationItem[] {
  const { t } = useLanguage();

  return [
    {
      id: 1,
      title: t("education.items.1.title"),
      duration: t("education.items.1.duration"),
      institution:
        "Pontifícia Universidade Católica de Campinas - PUC-Campinas",
      description: [
        t("education.items.1.desc_1"),
        t("education.items.1.desc_2"),
      ],
      details: [
        t("education.items.1.detail_1"),
        t("education.items.1.detail_2"),
        t("education.items.1.detail_3"),
        t("education.items.1.detail_4"),
        t("education.items.1.detail_5"),
        t("education.items.1.detail_6"),
        t("education.items.1.detail_7"),
        t("education.items.1.detail_8"),
        t("education.items.1.detail_9"),
      ],
    },
    {
      id: 2,
      title: t("education.items.2.title"),
      duration: t("education.items.2.duration"),
      institution: "Escola Salesiana São José - CPDB",
      description: [
        t("education.items.2.desc_1"),
        t("education.items.2.desc_2"),
      ],
      details: [
        t("education.items.2.detail_1"),
        t("education.items.2.detail_2"),
        t("education.items.2.detail_3"),
        t("education.items.2.detail_4"),
        t("education.items.2.detail_5"),
        t("education.items.2.detail_6"),
        t("education.items.2.detail_7"),
        t("education.items.2.detail_8"),
      ],
    },
  ];
}

// ─── Certificates ────────────────────────────────────────────────────────────

export function useCertificates(): CertificateItem[] {
  const { t } = useLanguage();

  return [
    {
      id: "1",
      title: t("certificates.items.1.title"),
      institution: t("certificates.items.1.institution"),
      date: "2026",
      description: t("certificates.items.1.description"),
      image: "/certificates/dsa-python-fundamentos.jpg",
      link: "https://www.datascienceacademy.com.br/course/fundamentos-de-linguagem-python-do-basico-a-aplicacoes-de-ia",
      tags: ["Python", "Data Science", "Machine Learning", "IA"],
      hours: "96h",
    },
    /*
    {
      id: "2",
      title: t("certificates.items.2.title"),
      institution: t("certificates.items.2.institution"),
      date: "2026",
      description: t("certificates.items.2.description"),
      image: "/certificates/cert-1.jpg",
      link: "https://skills.yourlearning.ibm.com/activity/PLAN-DA328525E6FB",
      tags: ["Data Science", "IBM", "Analytics", "AI"],
      hours: "40h",
    },
    */
    /*
    {
      id: "3",
      title: t("certificates.items.3.title"),
      institution: t("certificates.items.3.institution"),
      date: "2026",
      description: t("certificates.items.3.description"),
      image: "/certificates/cert-2.jpg",
      link: "https://www.coursera.org/specializations/machine-learning-introduction",
      tags: ["Machine Learning", "Python", "AI", "Deep Learning"],
      hours: "80h",
    },
    */
  ];
}

// ─── Projects ────────────────────────────────────────────────────────────────

export function useProjects(): ProjectItem[] {
  const { t } = useLanguage();

  return Array.from({ length: 7 }, (_, i) => {
    const n = (i + 1).toString();
    return {
      id: i + 1,
      name: t(`projects.items.${n}.name`),
      description: t(`projects.items.${n}.description`),
      role: t(`projects.items.${n}.role`),
      tools: ["Tecnologia 1", "Tecnologia 2", "Tecnologia 3", "Tecnologia 4"],
      code: "https://github.com/seu-usuario/seu-projeto",
      demo: "https://link-do-deploy.com",
      date: "AAAA-MM-DD",
      images: [],
      videos: [],
      highlights: [
        t(`projects.items.${n}.highlight_1`),
        t(`projects.items.${n}.highlight_2`),
        t(`projects.items.${n}.highlight_3`),
      ],
      challenges: [
        t(`projects.items.${n}.challenge_1`),
        t(`projects.items.${n}.challenge_2`),
      ],
    };
  });
}

// src/app/components/certificates/data.ts
import { Certificate } from "./types";

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Fundamentos de Linguagem Python para Análise de Dados e IA",
    institution: "Data Science Academy",
    date: "2026",
    description: "Curso completo de Python abordando desde conceitos básicos até aplicações em análise de dados, machine learning e inteligência artificial.",
    image: "/certificates/python-dsa.jpg",
    link: "https://www.datascienceacademy.com.br/course/fundamentos-de-linguagem-python-do-basico-a-aplicacoes-de-ia",
    tags: ["Python", "Data Science", "Machine Learning", "IA"],
    hours: "60h"
  },
  {
    id: "2",
    title: "Data Science Foundations",
    institution: "IBM SkillsBuild",
    date: "2026",
    description: "Formação em fundamentos de ciência de dados, incluindo análise de dados, pensamento analítico, visualização e conceitos introdutórios de IA.",
    image: "/certificates/ibm-ds.jpg",
    link: "https://skills.yourlearning.ibm.com/activity/PLAN-DA328525E6FB?focuslmsId=ALM-COURSE_4058918",
    tags: ["Data Science", "IBM", "Analytics", "AI"],
    hours: "40h"
  },
  {
    id: "3",
    title: "Machine Learning Specialization",
    institution: "Coursera",
    date: "2026",
    description: "Especialização em Machine Learning cobrindo algoritmos supervisionados e não supervisionados, redes neurais e melhores práticas em IA.",
    image: "/certificates/ml-coursera.jpg",
    link: "https://www.coursera.org/specializations/machine-learning-introduction",
    tags: ["Machine Learning", "Python", "AI", "Deep Learning"],
    hours: "80h"
  }
];
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiFigma,
  SiBootstrap,
  SiMui,
  SiCanva,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFreelancer,
  SiSupabase,
  SiDjango,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiDocker,
  SiAmazonwebservices,
  SiGooglecloud,
  SiUnity,
  SiSqlite,
  SiPostgresql,
  SiOpenjdk,
} from "react-icons/si";
import { IconType } from "react-icons";

// CAMINHOS DOS SVGS PERSONALIZADOS (strings, não imports)
const SVG_PATHS = {
  python: "/svg/skills/python.svg",
  java: "/svg/skills/java.svg",
  flask: "/svg/skills/flask.svg",
  seaborn: "/svg/skills/seaborn.svg",
  linux: "/svg/skills/linux.svg",
} as const;

// Tipo unificado: SVG ou React-Icon
export type SkillIcon = 
  | { type: "svg"; path: string }
  | { type: "icon"; component: IconType };

export const getSkillIcon = (skill: string): SkillIcon => {
  const skillLower = skill.toLowerCase().replace(/[-\s]/g, "");

  // SKILLS COM SVG PERSONALIZADO
  switch (skillLower) {
    case "python":
      return { type: "svg", path: SVG_PATHS.python };
    case "java":
      return { type: "svg", path: SVG_PATHS.java };
    case "flask":
      return { type: "svg", path: SVG_PATHS.flask };
    case "seaborn":
      return { type: "svg", path: SVG_PATHS.seaborn };
    case "linux":
      return { type: "svg", path: SVG_PATHS.linux };
  }

  // SKILLS COM REACT-ICONS
  switch (skillLower) {
    case "html":
    case "html5":
      return { type: "icon", component: SiHtml5 };
    case "css":
    case "css3":
      return { type: "icon", component: SiCss3 };
    case "javascript":
    case "js":
      return { type: "icon", component: SiJavascript };
    case "typescript":
    case "ts":
      return { type: "icon", component: SiTypescript };
    case "react":
      return { type: "icon", component: SiReact };
    case "nextjs":
    case "next.js":
      return { type: "icon", component: SiNextdotjs };
    case "tailwind":
    case "tailwindcss":
      return { type: "icon", component: SiTailwindcss };
    case "nodejs":
    case "node.js":
      return { type: "icon", component: SiNodedotjs };
    case "bootstrap":
      return { type: "icon", component: SiBootstrap };
    case "mui":
    case "materialui":
      return { type: "icon", component: SiMui };
    case "mongodb":
      return { type: "icon", component: SiMongodb };
    case "mysql":
      return { type: "icon", component: SiMysql };
    case "firebase":
      return { type: "icon", component: SiFirebase };
    case "sqlite":
      return { type: "icon", component: SiSqlite };
    case "postgresql":
    case "postgres":
      return { type: "icon", component: SiPostgresql };
    case "supabase":
      return { type: "icon", component: SiSupabase };
    case "django":
      return { type: "icon", component: SiDjango };
    case "pandas":
      return { type: "icon", component: SiPandas };
    case "numpy":
      return { type: "icon", component: SiNumpy };
    case "matplotlib":
      return { type: "icon", component: SiNumpy };
    case "scikitlearn":
    case "sklearn":
      return { type: "icon", component: SiScikitlearn };
    case "tensorflow":
      return { type: "icon", component: SiTensorflow };
    case "keras":
      return { type: "icon", component: SiKeras };
    case "pytorch":
      return { type: "icon", component: SiPytorch };
    case "docker":
      return { type: "icon", component: SiDocker };
    case "aws":
    case "amazonwebservices":
      return { type: "icon", component: SiAmazonwebservices };
    case "azure":
      return { type: "icon", component: SiOpenjdk };
    case "googlecloud":
    case "gcp":
      return { type: "icon", component: SiGooglecloud };
    case "git":
      return { type: "icon", component: SiGit };
    case "figma":
      return { type: "icon", component: SiFigma };
    case "canva":
      return { type: "icon", component: SiCanva };
    case "illustrator":
      return { type: "icon", component: SiAdobeillustrator };
    case "photoshop":
      return { type: "icon", component: SiAdobephotoshop };
    case "unity":
      return { type: "icon", component: SiUnity };
    default:
      return { type: "icon", component: SiFreelancer };
  }
};

// CORES OFICIAIS (para glow effects e hover)
export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase().replace(/[-\s]/g, "");
  
  switch (skillLower) {
    case "html":
    case "html5":
      return "#E34F26";
    case "css":
    case "css3":
      return "#1572B6";
    case "javascript":
    case "js":
      return "#F7DF1E";
    case "typescript":
    case "ts":
      return "#3178C6";
    case "react":
      return "#61DAFB";
    case "nextjs":
    case "next.js":
      return "#000000";
    case "tailwind":
    case "tailwindcss":
      return "#06B6D4";
    case "nodejs":
    case "node.js":
      return "#339933";
    case "bootstrap":
      return "#7952B3";
    case "mui":
    case "materialui":
      return "#007FFF";
    case "mongodb":
      return "#47A248";
    case "mysql":
      return "#4479A1";
    case "firebase":
      return "#FFCA28";
    case "sqlite":
      return "#003B57";
    case "postgresql":
    case "postgres":
      return "#4169E1";
    case "python":
      return "#3776AB";
    case "django":
      return "#092E20";
    case "flask":
      return "#000000";
    case "pandas":
      return "#150458";
    case "numpy":
      return "#013243";
    case "matplotlib":
      return "#11557C";
    case "seaborn":
      return "#4C72B0";
    case "scikitlearn":
    case "sklearn":
      return "#F7931E";
    case "tensorflow":
      return "#FF6F00";
    case "keras":
      return "#D00000";
    case "pytorch":
      return "#EE4C2C";
    case "docker":
      return "#2496ED";
    case "aws":
    case "amazonwebservices":
      return "#FF9900";
    case "azure":
      return "#0078D4";
    case "googlecloud":
    case "gcp":
      return "#4285F4";
    case "linux":
      return "#FCC624";
    case "git":
      return "#F05032";
    case "figma":
      return "#F24E1E";
    case "canva":
      return "#00C4CC";
    case "illustrator":
      return "#FF9A00";
    case "photoshop":
      return "#31A8FF";
    case "unity":
      return "#FFFFFF";
    case "java":
      return "#007396";
    case "supabase":
      return "#3ECF8E";
    default:
      return "#888888";
  }
};
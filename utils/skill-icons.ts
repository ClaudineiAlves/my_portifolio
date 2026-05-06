import {
  SiHtml5,
  SiCss,
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
  SiGooglecloud,
  SiUnity,
  SiSqlite,
  SiPostgresql,
  SiOpenjdk,
  SiAws,
} from "react-icons/si";
import { IconType } from "react-icons";

const SVG_PATHS = {
  python: "/svg/skills/python.svg",
  java: "/svg/skills/java.svg",
  flask: "/svg/skills/flask.svg",
  seaborn: "/svg/skills/seaborn.svg",
  linux: "/svg/skills/linux.svg",
  illustrator: "/svg/skills/illustrator.svg",
  photoshop: "/svg/skills/photoshop.svg",
  matplotlib: "/svg/skills/matplotlib.svg",
  azure: "/svg/skills/azure.svg", // ← adicionar
} as const;

export type SkillIcon =
  | { type: "svg"; path: string }
  | { type: "icon"; component: IconType };

export const getSkillIcon = (skill: string): SkillIcon => {
  const skillLower = skill.toLowerCase().replace(/[-\s]/g, "");

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
    case "illustrator":
      return { type: "svg", path: SVG_PATHS.illustrator };
    case "photoshop":
      return { type: "svg", path: SVG_PATHS.photoshop };
    case "matplotlib":
      return { type: "svg", path: SVG_PATHS.matplotlib }; // ← SVG próprio
  }

  switch (skillLower) {
    case "html":
    case "html5":
      return { type: "icon", component: SiHtml5 };
    case "css":
    case "css3":
      return { type: "icon", component: SiCss };
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
      return { type: "icon", component: SiAws };
    case "azure":
    case "microsoftazure":
      return { type: "svg", path: SVG_PATHS.azure }; // ← SVG customizado
    case "googlecloud":
    case "gcp":
      return { type: "icon", component: SiGooglecloud };
    case "git":
      return { type: "icon", component: SiGit };
    case "figma":
      return { type: "icon", component: SiFigma };
    case "canva":
      return { type: "icon", component: SiCanva };
    case "unity":
      return { type: "icon", component: SiUnity };
    case "java":
    case "openjdk":
      return { type: "icon", component: SiOpenjdk };
    default:
      return { type: "icon", component: SiFreelancer };
  }
};

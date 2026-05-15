export const projectsData = [
  {
    id: 1,
    name: "Portfólio Pessoal",
    description:
      "Portfólio pessoal moderno e responsivo com suporte bilíngue (EN/PT), tema escuro, animações suaves e formulário de contato seguro com EmailJS e reCAPTCHA v3.",

    tools: [
      "Next.js 14",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "EmailJS",
      "reCAPTCHA v3",
      "Vercel",
    ],

    role: "Full-Stack Developer",

    code: "https://github.com/ClaudineiAlves/my_portifolio",

    demo: "https://claudineiportifolio.vercel.app",

    date: "2026-05-11",

    images: [
      //"/projects/portfolio/preview-home.png",
      //"/projects/portfolio/preview-contact.png",
    ],

    videos: [],

    highlights: [
      "Sistema i18n customizado com React Context API — suporte EN/PT sem bibliotecas externas.",
      "Tema escuro com CSS variables e Tailwind CSS para estilização consistente e manutenível.",
      "Formulário de contato com EmailJS (server-side) e reCAPTCHA v3 para proteção contra spam.",
    ],

    challenges: [
      "Implementar resolução de chaves aninhadas em dot-notation para o sistema i18n sem overhead de bibliotecas como next-intl.",
      "Otimizar o Lighthouse Score com lazy loading, pré-carregamento de fontes e animações eficientes.",
    ],
  },
  {
    id: 2,
    name: "Transparência BR API",
    description:
      "API REST async que agrega e expõe dados de transparência do governo federal brasileiro, consumindo o Portal da Transparência (CGU). Oferece endpoints para cartões corporativos, viagens a serviço, contratos e licitações, com paginação, filtros e cache em banco de dados PostgreSQL.",

    tools: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "httpx",
      "Docker",
      "Railway",
    ],

    role: "Backend Developer",

    code: "https://github.com/ClaudineiAlves/transparenciabr-api",

    demo: "",

    date: "2026-05-14",

    images: [],

    videos: [],

    highlights: [
      "Arquitetura async end-to-end com FastAPI + asyncpg + SQLAlchemy 2, garantindo alto throughput sem bloqueio de I/O.",
      "Cliente HTTP com retry automático em 429 (rate limit) para consumo estável da API do Portal da Transparência.",
      "Endpoints versionados (/v1/*) com validação de parâmetros via Pydantic e documentação interativa automática (Swagger/ReDoc).",
    ],

    challenges: [
      "Lidar com os limites e inconsistências da API pública do Portal da Transparência (CGU), implementando retry e tratamento de erros robusto.",
      "Modelar migrações de banco com Alembic em ambiente async, garantindo compatibilidade entre SQLAlchemy 2 e asyncpg.",
    ],
  },
  {
    id: 3,
    name: "Nome do Projeto",
    description:
      "Breve descrição do projeto. Explique qual problema ele resolve, quais são as principais funcionalidades e qual tecnologia foi utilizada para desenvolvê-lo.",

    tools: ["Tecnologia 1", "Tecnologia 2", "Tecnologia 3", "Tecnologia 4"],

    role: "Seu papel no projeto (ex: Full-Stack Developer, Frontend Developer)",

    code: "https://github.com/seu-usuario/seu-projeto",

    demo: "https://link-do-deploy.com",

    date: "AAAA-MM-DD",

    images: [
      //"/projects/nome-do-projeto/imagem-1.png",
      //"/projects/nome-do-projeto/imagem-2.png",
    ],

    videos: [
      //"/projects/nome-do-projeto/demo-video.mp4"
    ],

    highlights: [
      "Funcionalidade ou característica importante do projeto.",
      "Outro destaque relevante da implementação.",
      "Tecnologia ou arquitetura interessante utilizada.",
    ],

    challenges: [
      "Principal desafio técnico enfrentado durante o desenvolvimento.",
      "Problema de arquitetura, performance ou integração que precisou ser resolvido.",
    ],
  },
  {
    id: 4,
    name: "Nome do Projeto",
    description:
      "Breve descrição do projeto. Explique qual problema ele resolve, quais são as principais funcionalidades e qual tecnologia foi utilizada para desenvolvê-lo.",

    tools: ["Tecnologia 1", "Tecnologia 2", "Tecnologia 3", "Tecnologia 4"],

    role: "Seu papel no projeto (ex: Full-Stack Developer, Frontend Developer)",

    code: "https://github.com/seu-usuario/seu-projeto",

    demo: "https://link-do-deploy.com",

    date: "AAAA-MM-DD",

    images: [
      //"/projects/nome-do-projeto/imagem-1.png",
      //"/projects/nome-do-projeto/imagem-2.png",
    ],

    videos: [
      //"/projects/nome-do-projeto/demo-video.mp4"
    ],

    highlights: [
      "Funcionalidade ou característica importante do projeto.",
      "Outro destaque relevante da implementação.",
      "Tecnologia ou arquitetura interessante utilizada.",
    ],

    challenges: [
      "Principal desafio técnico enfrentado durante o desenvolvimento.",
      "Problema de arquitetura, performance ou integração que precisou ser resolvido.",
    ],
  },
  {
    id: 5,
    name: "Nome do Projeto",
    description:
      "Breve descrição do projeto. Explique qual problema ele resolve, quais são as principais funcionalidades e qual tecnologia foi utilizada para desenvolvê-lo.",

    tools: ["Tecnologia 1", "Tecnologia 2", "Tecnologia 3", "Tecnologia 4"],

    role: "Seu papel no projeto (ex: Full-Stack Developer, Frontend Developer)",

    code: "https://github.com/seu-usuario/seu-projeto",

    demo: "https://link-do-deploy.com",

    date: "AAAA-MM-DD",

    images: [
      //"/projects/nome-do-projeto/imagem-1.png",
      //"/projects/nome-do-projeto/imagem-2.png",
    ],

    videos: [
      //"/projects/nome-do-projeto/demo-video.mp4"
    ],

    highlights: [
      "Funcionalidade ou característica importante do projeto.",
      "Outro destaque relevante da implementação.",
      "Tecnologia ou arquitetura interessante utilizada.",
    ],

    challenges: [
      "Principal desafio técnico enfrentado durante o desenvolvimento.",
      "Problema de arquitetura, performance ou integração que precisou ser resolvido.",
    ],
  },
  {
    id: 6,
    name: "Nome do Projeto",
    description:
      "Breve descrição do projeto. Explique qual problema ele resolve, quais são as principais funcionalidades e qual tecnologia foi utilizada para desenvolvê-lo.",

    tools: ["Tecnologia 1", "Tecnologia 2", "Tecnologia 3", "Tecnologia 4"],

    role: "Seu papel no projeto (ex: Full-Stack Developer, Frontend Developer)",

    code: "https://github.com/seu-usuario/seu-projeto",

    demo: "https://link-do-deploy.com",

    date: "AAAA-MM-DD",

    images: [
      //"/projects/nome-do-projeto/imagem-1.png",
      //"/projects/nome-do-projeto/imagem-2.png",
    ],

    videos: [
      //"/projects/nome-do-projeto/demo-video.mp4"
    ],

    highlights: [
      "Funcionalidade ou característica importante do projeto.",
      "Outro destaque relevante da implementação.",
      "Tecnologia ou arquitetura interessante utilizada.",
    ],

    challenges: [
      "Principal desafio técnico enfrentado durante o desenvolvimento.",
      "Problema de arquitetura, performance ou integração que precisou ser resolvido.",
    ],
  },
  {
    id: 7,
    name: "Nome do Projeto",
    description:
      "Breve descrição do projeto. Explique qual problema ele resolve, quais são as principais funcionalidades e qual tecnologia foi utilizada para desenvolvê-lo.",

    tools: ["Tecnologia 1", "Tecnologia 2", "Tecnologia 3", "Tecnologia 4"],

    role: "Seu papel no projeto (ex: Full-Stack Developer, Frontend Developer)",

    code: "https://github.com/seu-usuario/seu-projeto",

    demo: "https://link-do-deploy.com",

    date: "AAAA-MM-DD",

    images: [
      //"/projects/nome-do-projeto/imagem-1.png",
      //"/projects/nome-do-projeto/imagem-2.png",
    ],

    videos: [
      //"/projects/nome-do-projeto/demo-video.mp4"
    ],

    highlights: [
      "Funcionalidade ou característica importante do projeto.",
      "Outro destaque relevante da implementação.",
      "Tecnologia ou arquitetura interessante utilizada.",
    ],

    challenges: [
      "Principal desafio técnico enfrentado durante o desenvolvimento.",
      "Problema de arquitetura, performance ou integração que precisou ser resolvido.",
    ],
  },
];

import type {
  ProjectFilter,
  ProjectItem,
  SkillCategory,
} from "./portfolioData";
import type { SiteLanguage } from "./siteLanguage";

export const siteCopy = {
  en: {
    nav: {
      home: "Home",
      about: "About me",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      previewCv: "Preview CV",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      portuguese: "Portuguese",
      english: "English",
    },
    hero: {
      nameLine: "I'm Marlene Condesso",
      intro: "I'm a",
      roles: ["Frontend Developer", "Web Developer", "React Developer"],
      contactButton: "Get In Touch",
      resumeButton: "View Resume",
    },
    about: {
      title: "About Me",
      yearsLabel: "Year",
      experienceLabel: "Experience",
      growth: "Professional Growth",
      hireMe: "Hire Me",
      infoCards: {
        birthdayLabel: "Birthday",
        birthdayValue: "07.12.1997",
        studyLabel: "Study",
        studyValue: "University of Porto",
        interestLabel: "Interest",
        interestValue: "Music, Travel, Games",
        locationLabel: "Location",
        locationValue: "Porto, Portugal",
      },
      paragraphs: {
        introLead: "Hello! I am ",
        introName: "Marlene Condesso",
        introMiddle: ", a ",
        introRole: "Junior Developer",
        introEnd:
          " based in Porto, Portugal, at the beginning of my professional journey and highly motivated to grow.",
        experienceLead: "I have gained hands-on experience through ",
        experienceHighlight: "two six-month internships",
        experienceMiddle: " where I worked with technologies such as ",
        experienceTechOne: "React",
        experienceTechTwo: "TypeScript",
        experienceTechThree: "C#",
        experienceEnd:
          ". I know there is still a great deal for me to learn, and that is exactly what motivates me every day.",
        growthLead:
          "Technology is constantly evolving, and I want to evolve with it. I am looking for the ",
        growthHighlight: "right opportunity",
        growthMiddle:
          " to take my first meaningful steps in the industry, one that allows me to learn, make mistakes, grow, and demonstrate that ",
        growthEmphasis:
          "a strong commitment to becoming an excellent professional",
        growthEnd:
          " is just as valuable as the experience I am still building.",
        closing:
          "I am determined to keep moving forward until I achieve that goal.",
      },
    },
    experience: {
      title: "Experience",
      itArea: "IT area",
      otherAreas: "Other areas",
      company: "Company",
      toolkit: "Toolkit",
    },
    skills: {
      title: "Technical Skills",
      proficiency: "Proficiency",
      categories: {
        All: "All",
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Database",
        Tools: "Tools",
      },
    },
    projects: {
      title: "Projects",
      hoverDetails: "Hover to see details",
      code: "Code",
      demo: "Demo",
      littleExercises: "Little Exercises",
      filters: {
        All: "All",
        React: "React",
        "Next.js": "Next.js",
        Typescript: "TypeScript",
        "C#": "C#",
        Razor: "Razor",
        MongoDB: "MongoDB",
        Vite: "Vite",
        Javascript: "JavaScript",
      },
    },
    contact: {
      title: "SAY HI!",
      description:
        "I'm currently looking for opportunities and meaningful challenges that allow me to grow in this field and strengthen my skills. My inbox is always open, and I will do my best to get back to you.",
      email: "Email",
      downloadCv: "Download CV",
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre mim",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contacto",
      previewCv: "Ver CV",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      portuguese: "Português",
      english: "Inglês",
    },
    hero: {
      nameLine: "Sou a Marlene Condesso",
      intro: "Sou",
      roles: [
        "Desenvolvedora Frontend",
        "Desenvolvedora Web",
        "Desenvolvedora React",
      ],
      contactButton: "Entrar em contacto",
      resumeButton: "Ver CV",
    },
    about: {
      title: "Sobre Mim",
      yearsLabel: "Ano",
      experienceLabel: "Experiência",
      growth: "Crescimento Profissional",
      hireMe: "Contacta-me",
      infoCards: {
        birthdayLabel: "Data de nascimento",
        birthdayValue: "07.12.1997",
        studyLabel: "Formação",
        studyValue: "Universidade do Porto",
        interestLabel: "Interesses",
        interestValue: "Música, Viagens, Jogos",
        locationLabel: "Localização",
        locationValue: "Porto, Portugal",
      },
      paragraphs: {
        introLead: "Olá! Sou a ",
        introName: "Marlene Condesso",
        introMiddle: ", uma ",
        introRole: "Junior Developer",
        introEnd:
          " baseada no Porto, Portugal, ainda no início da minha jornada profissional e com uma forte motivação para crescer.",
        experienceLead: "Ganhei experiência prática através de ",
        experienceHighlight: "dois estágios de seis meses",
        experienceMiddle: " onde trabalhei com tecnologias como ",
        experienceTechOne: "React",
        experienceTechTwo: "TypeScript",
        experienceTechThree: "C#",
        experienceEnd:
          ". Sei que ainda tenho muito para aprender, e é precisamente isso que me motiva todos os dias.",
        growthLead:
          "A tecnologia está em constante evolução, e eu quero evoluir com ela. Procuro a ",
        growthHighlight: "oportunidade certa",
        growthMiddle:
          " para dar os meus primeiros passos sólidos na área, uma oportunidade que me permita aprender, errar, crescer e demonstrar que ",
        growthEmphasis:
          "uma forte vontade de me tornar uma excelente profissional",
        growthEnd:
          " vale tanto quanto a experiência que continuo a construir.",
        closing:
          "Estou determinada a continuar a evoluir até alcançar esse objetivo.",
      },
    },
    experience: {
      title: "Experiência",
      itArea: "Área de IT",
      otherAreas: "Outras áreas",
      company: "Empresa",
      toolkit: "Tecnologias",
    },
    skills: {
      title: "Competências Técnicas",
      proficiency: "Proficiência",
      categories: {
        All: "Todas",
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Base de Dados",
        Tools: "Ferramentas",
      },
    },
    projects: {
      title: "Projetos",
      hoverDetails: "Passe para ver detalhes",
      code: "Código",
      demo: "Ver projeto",
      littleExercises: "Pequenos Exercícios",
      filters: {
        All: "Todos",
        React: "React",
        "Next.js": "Next.js",
        Typescript: "TypeScript",
        "C#": "C#",
        Razor: "Razor",
        MongoDB: "MongoDB",
        Vite: "Vite",
        Javascript: "JavaScript",
      },
    },
    contact: {
      title: "OLÁ!",
      description:
        "Neste momento procuro oportunidades e desafios relevantes que me permitam crescer nesta área e reforçar as minhas competências. A minha caixa de entrada está sempre aberta e farei o possível para responder.",
      email: "Email",
      downloadCv: "Descarregar CV",
      rights: "Todos os direitos reservados.",
    },
  },
} as const;

const projectTranslations: Record<
  SiteLanguage,
  Record<string, { title: string; description: string; eyebrow: string }>
> = {
  en: {},
  pt: {
    "domus-unify": {
      title: "Domus Unify Web",
      description:
        "Uma plataforma web orientada para famílias, criada para centralizar a organização doméstica, o onboarding e o acesso seguro a contas através de uma experiência simples e em várias etapas.",
      eyebrow: "Plataforma Familiar",
    },
    "heart-game": {
      title: "Heart Game Web",
      description:
        "Uma experiência web interativa com tema romântico que combina um cartão digital com memórias, linha temporal, galeria, momentos de quiz e conteúdos privados com um toque lúdico.",
      eyebrow: "Presente Interativo",
    },
    spidergame: {
      title: "Spider Game Web",
      description:
        "Uma experiência de Spider Solitaire no browser com níveis de dificuldade selecionáveis, controlos intuitivos e acompanhamento em tempo real das sequências completas.",
      eyebrow: "Jogo de Cartas",
    },
    sudoku: {
      title: "Sudoku Game Web",
      description:
        "Uma aplicação web de Sudoku com vários níveis de dificuldade e um fluxo de jogo focado, pensado para sessões rápidas, acessíveis e envolventes.",
      eyebrow: "Jogo de Lógica",
    },
    netflix: {
      title: "Netflix Page Web",
      description:
        "Uma interface inspirada na Netflix com ecrãs de autenticação, visual escuro polido e uma experiência desenhada para navegação centrada em conteúdo.",
      eyebrow: "Interface de Streaming",
    },
    todo: {
      title: "Todo Web",
      description:
        "Uma aplicação de gestão de tarefas focada na produtividade do dia a dia, com fluxos claros de criação, edição e remoção numa interface simples e prática.",
      eyebrow: "Produtividade",
    },
    "project-management": {
      title: "Project Management",
      description:
        "Um dashboard leve de gestão de projetos que permite criar projetos, mudar rapidamente de contexto e organizar trabalho através de um layout claro em dois painéis.",
      eyebrow: "Mini Produto",
    },
    "tic-tac-toe": {
      title: "Tic Tac Game Web",
      description:
        "Um jogo de Tic-Tac-Toe com modos multijogador e contra o computador, perfis de jogador editáveis e uma interface limpa orientada para partidas rápidas.",
      eyebrow: "Jogo",
    },
    "news-home": {
      title: "News Home Page",
      description:
        "Uma landing page editorial responsiva que combina artigos em destaque, conteúdos em tendência e cartões de ranking com forte hierarquia visual e tipografia cuidada.",
      eyebrow: "Desafio Frontend",
    },
    "qr-code": {
      title: "QR Code Component",
      description:
        "Um componente minimalista de cartão com QR code, focado em espaçamento, tipografia e alinhamento responsivo, recriado a partir de um desafio Frontend Mentor.",
      eyebrow: "Desafio Frontend",
    },
    "result-summary": {
      title: "Result Summary Component",
      description:
        "Uma interface de resumo de resultados que apresenta pontuação, métricas por categoria e estados de call-to-action através de um layout compacto e orientado a componentes.",
      eyebrow: "Desafio Frontend",
    },
  },
};

const experienceContent: Record<
  SiteLanguage,
  Record<
    string,
    {
      title: string;
      period: string;
      position: string;
      description: string;
      taskTitle: string;
      tasks: string[];
    }
  >
> = {
  en: {
    n4it: {
      title: "N4IT Software",
      period: "Mar 2022 - Jul 2022",
      position: "Web Developer - Intern",
      description:
        "Internship carried out as part of the Professional Higher Technical Course in Agile Software Development, focused on implementing an internal portal for the company to manage employees, equipment, vacations, and schedules.",
      taskTitle: "Tasks:",
      tasks: [
        "Requirements gathering, analysis, and solution design.",
        "Sprint planning.",
        "Web frontend development with React.",
        "Backend development with .NET.",
      ],
    },
    kaizen: {
      title: "Kaizen Tech",
      period: "May 2025 - Nov 2025",
      position: "Full Stack Developer - Intern",
      description:
        "Internship carried out through IEFP in a business context focused on replicating factory-floor data in software, including KPIs, machine start-ups, and production reporting.",
      taskTitle: "Tasks:",
      tasks: [
        "Development of C# pages and functionalities using Parsec components.",
        "Creation of shop floor interfaces for dashboards, recipe management, OEE monitoring, machine start and stop, production checks, and material supply.",
        "Integration with SQL databases to support production processes and industrial monitoring.",
      ],
    },
     confetil: {
      title: "Confetil",
      period: "Jan 2025 - April 2025",
      position: "Textile Operator",
      description: "",
      taskTitle: "Main responsibilities:",
      tasks: [
        "Work in the cutting area.",
        "Support for the confection area.",
      ],
    },
    ruga: {
      title: "RUGA",
      period: "Jan 2024 - Jan 2025",
      position: "Textile Operator",
      description: "",
      taskTitle: "Main responsibilities:",
      tasks: [
        "Applying pins and hangtags to textile pieces.",
        "Identifying potential anomalies in textile pieces.",
        "Cleaning textile pieces.",
        "Folding textile pieces.",
      ],
    },
    dolores: {
      title: "Dolores Hipólito",
      period: "Oct 2019 - Oct 2020",
      position: "Textile Operator",
      description: "",
      taskTitle: "Main responsibilities:",
      tasks: [
        "Counting and packing finished work.",
        "Detecting potential anomalies in textile pieces.",
        "Operating textile machines.",
      ],
    },
    fm: {
      title: "FM Têxteis",
      period: "Jan 2017 - Jan 2019",
      position: "Textile Operator",
      description: "",
      taskTitle: "Main responsibilities:",
      tasks: [
        "Work in the cutting area.",
        "Textile packaging and finishing.",
        "Support for the confection area.",
        "Packing and removing guides from finished textile work.",
      ],
    },
    esposende: {
      title: "Esposende 2000",
      period: "Apr 2016 - Jul 2016",
      position: "Activity Organization Assistant",
      description:
        "Professional internship carried out as part of the Environmental Management technical course.",
      taskTitle: "Examples of activities:",
      tasks: ["Trails.", "Walks.", "BTT races."],
    },
    bombeiros: {
      title: "Bombeiros de Fão",
      period: "May 2015 - Jul 2015",
      position: "Forest Safety Assistant",
      description:
        "Professional internship carried out as part of the Environmental Management technical course.",
      taskTitle: "Tasks:",
      tasks: [
        "Identification of fire hydrants and water points.",
        "Marking georeferenced information related to identified fire hydrants and water points.",
        "Patrolling forest areas at risk of fire.",
      ],
    },
  },
  pt: {
    n4it: {
      title: "N4IT Software",
      period: "Mar 2022 - Jul 2022",
      position: "Web Developer - Estagiária",
      description:
        "Estágio realizado no âmbito do CTeSP em Desenvolvimento Ágil de Software, focado na implementação de um portal interno para a empresa gerir colaboradores, equipamentos, férias e horários.",
      taskTitle: "Tarefas:",
      tasks: [
        "Levantamento de requisitos, análise e desenho da solução.",
        "Planeamento de sprints.",
        "Desenvolvimento frontend web com React.",
        "Desenvolvimento backend com .NET.",
      ],
    },
    kaizen: {
      title: "Kaizen Tech",
      period: "Mai 2025 - Nov 2025",
      position: "Full Stack Developer - Estagiária",
      description:
        "Estágio realizado através do IEFP num contexto empresarial focado na replicação, em software, de dados do chão de fábrica, incluindo KPIs, arranques de máquinas e reporting de produção.",
      taskTitle: "Tarefas:",
      tasks: [
        "Desenvolvimento de páginas e funcionalidades em C# com componentes Parsec.",
        "Criação de interfaces de shop floor para dashboards, gestão de receitas, monitorização de OEE, arranque e paragem de máquinas, controlo de produção e abastecimento de material.",
        "Integração com bases de dados SQL para suportar processos produtivos e monitorização industrial.",
      ],
    },
    confetil: {
      title: "Confetil",
      period: "Jan 2025 - April 2025",
      position: "Textile Operator",
      description: "",
      taskTitle: "Main responsibilities:",
      tasks: [
        "Trabalho na secção de corte.",
        "Apoio à secção de confeção.",
      ],
    },
    ruga: {
      title: "RUGA",
      period: "Jan 2024 - Jan 2025",
      position: "Operadora Têxtil",
      description: "",
      taskTitle: "Principais responsabilidades:",
      tasks: [
        "Aplicação de alfinetes e etiquetas em peças têxteis.",
        "Identificação de possíveis anomalias nas peças.",
        "Limpeza de peças têxteis.",
        "Dobragem de peças têxteis.",
      ],
    },
    dolores: {
      title: "Dolores Hipólito",
      period: "Out 2019 - Out 2020",
      position: "Operadora Têxtil",
      description: "",
      taskTitle: "Principais responsabilidades:",
      tasks: [
        "Contagem e embalamento de trabalho finalizado.",
        "Deteção de possíveis anomalias em peças têxteis.",
        "Operação de máquinas têxteis.",
      ],
    },
    fm: {
      title: "FM Têxteis",
      period: "Jan 2017 - Jan 2019",
      position: "Operadora Têxtil",
      description: "",
      taskTitle: "Principais responsabilidades:",
      tasks: [
        "Trabalho na secção de corte.",
        "Embalamento e acabamento têxtil.",
        "Apoio à secção de confeção.",
        "Embalamento e remoção de guias de trabalho têxtil finalizado.",
      ],
    },
    esposende: {
      title: "Esposende 2000",
      period: "Abr 2016 - Jul 2016",
      position: "Assistente de Organização de Atividades",
      description:
        "Estágio profissional realizado no âmbito do curso técnico de Gestão Ambiental.",
      taskTitle: "Exemplos de atividades:",
      tasks: ["Trilhos.", "Caminhadas.", "Provas BTT."],
    },
    bombeiros: {
      title: "Bombeiros de Fão",
      period: "Mai 2015 - Jul 2015",
      position: "Assistente de Segurança Florestal",
      description:
        "Estágio profissional realizado no âmbito do curso técnico de Gestão Ambiental.",
      taskTitle: "Tarefas:",
      tasks: [
        "Identificação de marcos de incêndio e pontos de água.",
        "Marcação de informação georreferenciada relativa aos marcos de incêndio e pontos de água identificados.",
        "Patrulhamento de zonas florestais com risco de incêndio.",
      ],
    },
  },
};

const experienceTechnologyTranslations: Record<
  SiteLanguage,
  Record<string, string>
> = {
  en: {
    Quality: "Quality",
    Cutting: "Cutting",
    Textile: "Textile",
    Packaging: "Packaging",
    Operations: "Operations",
    Packing: "Packing",
    Machines: "Machines",
    Confection: "Confection",
    Events: "Events",
    Sports: "Sports",
    Coordination: "Coordination",
    Safety: "Safety",
    "Field Work": "Field Work",
    Environment: "Environment",
  },
  pt: {
    Quality: "Qualidade",
    Cutting: "Corte",
    Textile: "Têxtil",
    Packaging: "Embalamento",
    Operations: "Operações",
    Packing: "Embalamento",
    Machines: "Máquinas",
    Confection: "Confeção",
    Events: "Eventos",
    Sports: "Desporto",
    Coordination: "Coordenação",
    Safety: "Segurança",
    "Field Work": "Trabalho de campo",
    Environment: "Ambiente",
  },
};

export function getProjectFilterLabel(
  language: SiteLanguage,
  filter: ProjectFilter,
) {
  return siteCopy[language].projects.filters[filter];
}

export function getSkillCategoryLabel(
  language: SiteLanguage,
  category: SkillCategory,
) {
  return siteCopy[language].skills.categories[category];
}

export function getLocalizedProjectCopy(
  language: SiteLanguage,
  project: ProjectItem,
) {
  const localizedProject = projectTranslations[language][project.id];

  return {
    title: localizedProject?.title ?? project.title,
    description: localizedProject?.description ?? project.description,
    eyebrow: localizedProject?.eyebrow ?? project.eyebrow,
  };
}

export function getExperienceContent(language: SiteLanguage, id: string) {
  return experienceContent[language][id] ?? experienceContent[language].n4it;
}

export function getExperienceTechnologyLabels(
  language: SiteLanguage,
  technologies: string[],
) {
  return technologies.map(
    (technology) =>
      experienceTechnologyTranslations[language][technology] ?? technology,
  );
}

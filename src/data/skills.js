import { ChevronDown } from "lucide-react";

export const skillsData = [
  {
    id: "skills-code-craft",
    title: "Hard Skills",
    icon: ChevronDown,
    items: [
      { id: "skills-front", label: "FrontEnd" },
      { id: "skills-back", label: "BackEnd" },
      { id: "skills-banco", label: "CMS & Low Code" },
      { id: "skills-cms", label: "Cloud & DevOps" },
      { id: "skills-cloud", label: "Design & UX" },
    ],
  },
  {
    id: "skills-vibe-drive",
    title: "Soft Skills",
    icon: null,
  },
];

export const fullSkillData = [
  {
    id: "skills-code-craft",
    title: "Hard Skills",
    items: [
      {
        category: "BackEnd",
        skills: [
          { id: "skills-nodejs", label: "Node.js" },
          { id: "skills-python", label: "Python" },
          { id: "skills-fastapi", label: "FastAPI" },
          { id: "skills-java", label: "Java" },
          { id: "skills-rest", label: "API REST" },
          { id: "skills-openrouter", label: "OpenRouter API" },
          { id: "skills-llm", label: "LLM Integration" },
          { id: "skills-prompt", label: "Prompt Engineering" },
          { id: "skills-mysql", label: "MySQL" },
          { id: "skills-mongodb", label: "MongoDB" },
          { id: "skills-firebase", label: "Firebase" },
          { id: "skills-restapi", label: "API REST" },
        ],
      },
      {
        category: "FrontEnd",
        skills: [
          { id: "skills-react", label: "React" },
          { id: "skills-vitejs", label: "Vite.js" },
          { id: "skills-javascript", label: "JavaScript" },
          { id: "skills-html", label: "HTML" },
          { id: "skills-css", label: "CSS" },
          { id: "skills-bootstrap", label: "Bootstrap" },
          { id: "skills-electronjs", label: "Electron.js" },
        ],
      },
      {
        category: "CMS & Low Code",
        skills: [
          { id: "skills-wordpress", label: "WordPress" },
          { id: "skills-elementor", label: "Elementor" },
          { id: "skills-canva", label: "Canva" },
        ],
      },
      {
        category: "Cloud & DevOps",
        skills: [
          { id: "skills-docker", label: "Docker" },
          { id: "skills-git", label: "Git" },
          { id: "skills-github", label: "GitHub" },
          { id: "skills-githubPages", label: "GitHub Pages" },
        ],
      },
      {
        category: "Design & UX",
        skills: [
          { id: "skills-figma", label: "Figma" },
          { id: "skills-ui", label: "UI/UX Design" },
        ],
      },
    ],
  },

  {
    id: "skills-vibe-drive",
    title: "Soft Skills",
    items: [
      {
        category: "Colaboração",
        skills: [
          { id: "colaboracao-comunicacao", label: "Comunicação Efetiva" },
          { id: "colaboracao-equipe", label: "Trabalho em Equipe" },
          { id: "liderança", label: "Liderança" },
        ],
      },
      {
        category: "Analítico",
        skills: [
          { id: "analitico-resolucao", label: "Resolução de Problemas" },
          { id: "analitico-critico", label: "Pensamento Crítico" },
        ],
      },
      {
        category: "Pessoal",
        skills: [
          { id: "pessoal-adaptabilidade", label: "Adaptabilidade" },
          { id: "pessoal-proatividade", label: "Proatividade" },
          { id: "pessoal-aprendizado", label: "Aprendizado Contínuo" },
        ],
      },
      {
        category: "Organização",
        skills: [
          { id: "organizacao-tempo", label: "Gerenciamento de Tempo" },
          {
            id: "organizacao-ageis",
            label: "Metodologias Ágeis (Scrum/Kanban)",
          },
        ],
      },
    ],
  },
];

import labSolutionImg from "../assets/project/lab-solution.png";
import labSolutionApp from "../assets/project/lab-solution-app.png";
import TaskMaster from "../assets/project/task-master.png";
import PrimeFLIX from "../assets/project/primeflix.png";
import SupportHub from "../assets/project/supporthub.png";
import Github from "../assets/project/github.png";
import DogStock from "../assets/project/dogstock.jpeg";
import Azamara from "../assets/project/azamara.jpeg";
import Rcorp from "../assets/project/rcorp.jpeg";

export const projects = [
    {
        id: 1,
        title: "Lab Solution Website",
        image: labSolutionImg,
        date: "06/2024",
        techs: ["HTML", "CSS", "JS"],
        description:
            "Website institucional criado para integrar e complementar o sistema desktop da Lab Solution. Apresenta informações da assistência técnica, serviços, localização e contato, com foco em organização, usabilidade e experiência do usuário.",
        github: "https://github.com/Luizynhoo/Lab-Solution",
        live: "https://luizynhoo.github.io/Lab-Solution/",
    },

    {
        id: 2,
        title: "Lab Solution Decktop",
        image: labSolutionApp,
        date: "06/2024",
        techs: ["ELECTRON", "CSS", "JS", "NODE.JS", "HTML", "MONGODB"],
        description:
            "Sistema desktop desenvolvido com Electron para o gerenciamento de uma assistência técnica de informática. A aplicação possui autenticação e controle de acesso, cadastro, edição e exclusão de clientes e serviços, geração de relatórios em PDF, registro de doações e persistência de dados em MongoDB. O projeto foi construído com foco em usabilidade, organização e controle operacional.",
        github: "https://github.com/Luizynhoo/Lab-Solution_APP",
        live: "",
    },

    {
        id: 3,
        title: "Task Master",
        image: TaskMaster,
        date: "09/2024",
        techs: ["REACT", "CSS", "FIREBASE"],
        description:
            "Aplicação web desenvolvida em React para gerenciamento básico de tarefas. O sistema permite criação de conta e autenticação de usuários, registro e controle de tarefas diárias, com persistência de dados utilizando Firebase. O projeto foi desenvolvido com foco em simplicidade, organização e experiência do usuário.",
        github: "https://github.com/Luizynhoo/TaskMaster",
        live: "https://taskmaster-lh.netlify.app/",
    },

    {
        id: 4,
        title: "Prime Flix",
        image: PrimeFLIX,
        date: "08/2024",
        techs: ["React", "CSS", "JavaScript", "API REST"],
        description:
            "Aplicação web desenvolvida em React que consome a API do The Movie Database (TMDB) para exibir filmes em destaque nos cinemas, com informações detalhadas, trailers e funcionalidade de salvar filmes favoritos para assistir posteriormente.",
        github: "https://github.com/Luizynhoo/Prime_Flix",
        live: "https://luiz-flix.netlify.app/",
    },
    
    {
        id: 5,
        title: "SupportHub",
        image: SupportHub,
        date: "03/2025",
        techs: ["React", "JavaScript", "CSS", "Firebase"],
        description:
            "Aplicação web desenvolvida para gerenciamento de chamados de suporte, com autenticação de usuários, controle de status, gerenciamento de clientes e integração com Firebase, oferecendo uma experiência intuitiva e responsiva.",
        github: "https://github.com/Luizynhoo/SupportHub",
        live: "",
    },
    
    {
        id: 6,
        title: "Github Repositories",
        image: Github,
        date: "11/2025",
        techs: ["React", "CSS", "JavaScript", "API REST"],
        description:
            "Aplicação web desenvolvida em React que consome a API do GitHub para listagem e visualização de repositórios, com foco em manipulação de dados e consumo de API REST.",
        github: "https://github.com/Luizynhoo/Repositorios-Github",
        live: "",
    },
    
    {
        id: 7,
        title: "Dog Stock",
        image: DogStock,
        date: "11/2025",
        techs: ["Python", "MySQL", "JavaScript", "HTML", "CSS", "API REST"],
        description:
            "Sistema web desenvolvido para gerenciamento de estoque, com foco em pequenas e médias empresas, oferecendo controle de produtos, fornecedores e movimentações, além de chatbot integrado para consulta automatizada de informações.",
        github: "https://github.com/Luizynhoo/dogstock",
        live: "",
    },  

    {
        id: 8,
        title: "RCORP Travel",
        image: Rcorp,
        date: "12/2025",
        techs: ["Vite", "JavaScript", "CSS", "Tailwind CSS"],
        description:
            "Website institucional desenvolvido para a RCORP Travel, focado na venda de cruzeiros na América Latina. O site apresenta páginas institucionais como marcas, informações dos serviços e contato, oferecendo uma navegação moderna, responsiva e alinhada à identidade da empresa. O projeto foi desenvolvido com Vite, CSS e Tailwind, priorizando performance, animações suaves e experiência do usuário.",
        github: "",
        live: "https://www.rcorptravel.com/",
    },  

    {
        id: 9,
        title: "Azamara Brasil",
        image: Azamara,
        date: "12/2025",
        techs: ["Vite", "JavaScript", "CSS", "Data Processing"],
        description:
            "Website institucional desenvolvido para a Azamara Brasil, em parceria com a R11 Travel, focado na divulgação e busca de cruzeiros. A aplicação conta com uma landing page de alto impacto visual e um motor de busca que permite filtrar cruzeiros por destino, navio e data de saída. Os resultados são exibidos em uma página dedicada, com listagem detalhada das saídas, valores, duração e informações do itinerário, utilizando dados atualizados diariamente a partir de um flat file. O fluxo de conversão é realizado via contato por e-mail para solicitação de reserva. O projeto foi desenvolvido com Vite, JavaScript e CSS, priorizando performance, usabilidade e experiência do usuário.",
        github: "",
        live: "https://azamaracruises.com.br/",
    },  
];

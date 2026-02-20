import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import SkillsPage from '../pages/SkillsPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';

export const routes = [
    { path: '/', name: 'Início', element: <HomePage />, id: 'home' },
    { path: '/sobre', name: 'Sobre', element: <AboutPage />, id: 'sobre' },
    { path: '/skills', name: 'Skills', element: <SkillsPage />, id: 'skills' },
    { path: '/projetos', name: 'Projetos', element: <ProjectsPage />, id: 'projects' },
    { path: '/contato', name: 'Contato', element: <ContactPage />, id: 'contato' }
];

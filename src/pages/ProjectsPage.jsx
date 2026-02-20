import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/sections/projectsSection.css";
import { ProjectCard } from "../components/ui/ProjectCard";
import { ProjectModal } from "../components/ui/ProjectModal";
import { projects } from "../data/projects";

const ProjectsPage = () => {
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleNextClick = () => {
        navigate('/contato');
    };

    return (
        <section id="projects" className="section-projects">

            <div className="projects-scroll-container">
                <div className="projects-title">
                    <h2>Meus Projetos</h2>
                </div>
                
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />

            <div className="scroll-hint" onClick={handleNextClick}>
                → Proxima Sessão
            </div>
        </section>
    );
}

export default ProjectsPage;

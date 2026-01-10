import "../../styles/sections/projectsSection.css";
import { useState } from "react";
import { ProjectCard } from "../ui/ProjectCard";
import { ProjectModal } from "../ui/ProjectModal";
import { projects } from "../../data/projects";

const ProjectsSection = ({ goToNextSection }) => {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section-projects">

            <div className="projects-scroll-container">
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


            <div className="scroll-hint" onClick={goToNextSection}>
                → Proxima Sessão
            </div>
        </section>
    );
}

export default ProjectsSection;
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import "../styles/sections/projectsSection.css";
import { ProjectCard } from "../components/ui/ProjectCard";
import { ProjectModal } from "../components/ui/ProjectModal";
import { projects } from "../data/projects";
import {
    pageVariants,
    containerVariants,
    titleZoom,
    fadeInUp,
} from "../utils/Animation/homeAnimations";

const ProjectsPage = () => {
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleNextClick = () => {
        navigate('/contato');
    };

    return (
        <motion.section
            id="projects"
            className="section-projects"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >

            <div className="projects-scroll-container">
                <motion.div
                    className="projects-title"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2 variants={titleZoom} initial="hidden" animate="show">Meus Projetos</motion.h2>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </motion.div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />

            <motion.div
                className="scroll-hint"
                onClick={handleNextClick}
                animate={{ y: [0, -8, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                }}
            >
                → Proxima Sessão
            </motion.div>
        </motion.section>
    );
}

export default ProjectsPage; 

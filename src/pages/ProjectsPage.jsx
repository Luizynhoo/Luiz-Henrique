import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import "../styles/sections/projectsSection.css";
import { ProjectCard } from "../components/ui/ProjectCard";
import { ProjectModal } from "../components/ui/ProjectModal";
import { projects } from "../data/projects";
import {
    createPageTransition,
    createTitleZoom,
    createFadeInUp,
    createFloat,
    createStaggerAnimation,
} from "../utils/Animation/gsapAnimations";

const ProjectsPage = () => {
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState(null);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const gridRef = useRef(null);


    useEffect(() => {
        if (sectionRef.current) {
            createPageTransition(sectionRef.current, "forward");
        }

        if (titleRef.current) {
            gsap.to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                delay: 0.3,
            });
            gsap.set(titleRef.current, { y: -30, opacity: 0 });
        }

        if (gridRef.current) {
            const cards = gridRef.current.querySelectorAll('[data-card]');
            const timeline = gsap.timeline({ delay: 0.5 });

            cards.forEach((card, index) => {
                gsap.set(card, {
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
                });

                timeline.to(
                    card,
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                    },
                    index * 0.1
                );
            });
        }

        return () => {
            gsap.killTweensOf([titleRef.current, gridRef.current]);
        };
    }, []);

    return (
        <section id="projects" className="section-projects" ref={sectionRef}>
            <div className="projects-scroll-container">
                <div className="projects-title" ref={titleRef}>
                    <h2>Meus Projetos</h2>
                </div>

                <div className="projects-grid" ref={gridRef}>
                    {projects.map((project) => (
                        <div key={project.id} data-card>
                            <ProjectCard
                                project={project}
                                onClick={setSelectedProject}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}

export default ProjectsPage; 

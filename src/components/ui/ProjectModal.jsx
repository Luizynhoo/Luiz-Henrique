import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../styles/components/project-modal.css";

export function ProjectModal({ project, onClose }) {
    const backdropRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (project && backdropRef.current && contentRef.current) {
            gsap.set([backdropRef.current, contentRef.current], { opacity: 0 });
            gsap.set(contentRef.current, { scale: 0.9 });

            const timeline = gsap.timeline();
            
            timeline.to(backdropRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
            }, 0);

            timeline.to(contentRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)",
            }, 0);
        } else if (backdropRef.current && contentRef.current) {
            const timeline = gsap.timeline();

            timeline.to(contentRef.current, {
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
                ease: "power2.in",
            }, 0);

            timeline.to(backdropRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
            }, 0);
        }
    }, [project]);

    if (!project) return null;

    return (
        <div
            className="modal-backdrop"
            ref={backdropRef}
            onClick={onClose}
        >
            <div
                className="modal-content"
                ref={contentRef}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>×</button>

                <img src={project.image} alt={project.title} className="modal-image" />
                <div className="conteudo">
                    <div className="modal-text">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>

                    <div className="modal-actions">
                        {project.github && <a href={project.github}>GitHub</a>}
                        {project.live && <a href={project.live}>Ver projeto</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}
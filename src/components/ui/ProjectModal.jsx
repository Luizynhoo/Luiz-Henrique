import "../../styles/components/project-modal.css";

export function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="modal-actions">
                    {project.github && <a href={project.github}>GitHub</a>}
                    {project.live && <a href={project.live}>Ver projeto</a>}
                </div>
            </div>
        </div>
    )
}
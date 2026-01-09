import '../../styles/components/project-card.css';

export function ProjectCard({ project, onClick }) {
    return (
        <article className="project-card" onClick={() => onClick(project)}>
            <img src={project.image} alt={project.title} />

            <div className="overlay">
                <h3>{project.title}</h3>

                <div className="techs">
                    {project.techs.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
            </div>
        </article>
    )
}
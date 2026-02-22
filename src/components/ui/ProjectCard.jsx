import { motion } from 'framer-motion';
import {
    cardReveal,
    cardHover,
} from '../../utils/Animation/homeAnimations';
import '../../styles/components/project-card.css';

export function ProjectCard({ project, onClick }) {
    return (
        <motion.article
            className="project-card"
            onClick={() => onClick(project)}
            variants={cardReveal}
            whileHover={cardHover}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <img src={project.image} alt={project.title} />

            <div className="overlay">
                <h3>{project.title}</h3>

                <div className="techs">
                    {project.techs.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
            </div>
        </motion.article>
    )
}
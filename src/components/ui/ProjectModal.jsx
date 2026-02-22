import { motion, AnimatePresence } from "framer-motion";
import "../../styles/components/project-modal.css";

export function ProjectModal({ project, onClose }) {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="modal-backdrop"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
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
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
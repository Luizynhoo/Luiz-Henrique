import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { skillsData, fullSkillData } from "../data/skills";
import "../styles/sections/skillsSection.css";
import {
    pageVariants,
    listContainer,
    listItem,
    titleZoom,
    fadeInUp,
} from "../utils/Animation/homeAnimations";

const SkillsPage = () => {
    const navigate = useNavigate();
    const [activeGroup, setActiveGroup] = useState("skills-code-craft");
    const [activeCategory, setActiveCategory] = useState(null);

    const handleNextClick = () => {
        navigate('/projetos');
    };

    const selectedGroup = fullSkillData.find(
        (g) => g.id === activeGroup
    );

    const visibleCategories = activeCategory
        ? selectedGroup.items.filter(item => item.category === activeCategory)
        : selectedGroup.items;

    return (
        <motion.section
            id="skills"
            className="skills-section"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="skills-layout">

                <motion.aside
                    className="skills-toc"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <ul>
                        {skillsData.map((group) => (
                            <li key={group.id} className="has-sub">

                                <div className="title">
                                    <a
                                        onClick={() => {
                                            setActiveGroup(group.id);
                                            setActiveCategory(null);
                                        }}
                                        className={activeGroup === group.id ? "active" : ""}
                                    >
                                        <span>{group.title}</span>
                                        {group.icon && (
                                            <group.icon
                                                className={`chevron ${activeGroup === group.id ? "expanded" : ""
                                                    }`}
                                                size={18}
                                            />
                                        )}
                                    </a>
                                </div>

                                {group.items && (
                                    <div
                                        className={`submenu-wrapper ${group.id === activeGroup ? "open" : ""
                                            }`}
                                    >
                                        <ul className="sub">
                                            {group.items.map((item) => (
                                                <li key={item.id}>
                                                    <a
                                                        onClick={() => setActiveCategory(item.label)}
                                                        className={activeCategory === item.label ? "active" : ""}
                                                    >
                                                        {item.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}


                            </li>
                        ))}
                    </ul>
                </motion.aside>

                <motion.div
                    className={`skills-content ${activeGroup === "skills-code-craft" ? "theme-blue" : "theme-purple"
                        }`}
                    key={`content-${activeGroup}`}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h2
                        key={`title-${selectedGroup.id}`}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="show"
                    >
                        {selectedGroup.title}
                    </motion.h2>

                    <motion.div
                        key={`${activeGroup}-${activeCategory}`}
                        className="skill-items"
                        variants={listContainer}
                        initial="hidden"
                        animate="show"
                    >
                        {visibleCategories.map((item) => (
                            <motion.div
                                key={item.category}
                                className="skill-category"
                                variants={listItem}
                            >

                                <h3>{item.category}</h3>

                                <ul>
                                    {item.skills.map((skill) => (
                                        <li key={skill.id}>{skill.label}</li>
                                    ))}
                                </ul>

                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>

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
};

export default SkillsPage;

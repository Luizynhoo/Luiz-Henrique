import { act, useState } from "react";
import { skillsData, fullSkillData } from "../../data/skills";
import "../../styles/sections/skillsSection.css";

const SkillsSection = ({ goToNextSection }) => {
    const [activeGroup, setActiveGroup] = useState("skills-code-craft");
    const [activeCategory, setActiveCategory] = useState(null);

    const selectedGroup = fullSkillData.find(
        (g) => g.id === activeGroup
    );

    const visibleCategories = activeCategory
        ? selectedGroup.items.filter(item => item.category === activeCategory)
        : selectedGroup.items;

    return (
        <section id="skills" className="skills-section">
            <div className="skills-layout">

                {/* MENU LATERAL */}
                <aside className="skills-toc">
                    <ul>
                        {skillsData.map((group) => (
                            <li key={group.id} className="has-sub">

                                {/* GRUPO */}
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

                                {/* SUBCATEGORIAS */}
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
                </aside>

                {/* CONTEÚDO PRINCIPAL */}
                <div className={`skills-content ${activeGroup === "skills-code-craft" ? "theme-blue" : "theme-purple"
                    }`}>
                    <h2>{selectedGroup.title}</h2>

                    <div className="skill-items">
                        {visibleCategories.map((item) => (
                            <div key={item.category} className="skill-category">

                                <h3>{item.category}</h3>

                                <ul>
                                    {item.skills.map((skill) => (
                                        <li key={skill.id}>{skill.label}</li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="scroll-hint" onClick={goToNextSection}>
                → Proxima Sessão
            </div>
        </section>
    );
};

export default SkillsSection;

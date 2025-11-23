import { useState } from "react";
import { skillsData, fullSkillData } from "../../data/skills";
import "../../styles/sections/skillsSection.css";

const SkillsSection = () => {
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
                                    >
                                        {group.title}
                                    </a>
                                </div>

                                {/* SUBCATEGORIAS */}
                                {group.items && (
                                    <ul className="sub">
                                        {group.items.map((item) => (
                                            <li key={item.id}>
                                                <a
                                                    onClick={() =>
                                                        setActiveCategory(item.label)
                                                    }
                                                >
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* CONTEÚDO PRINCIPAL */}
                <div className="skills-content">
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
        </section>
    );
};

export default SkillsSection;

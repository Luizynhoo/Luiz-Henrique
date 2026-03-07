import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { skillsData, fullSkillData } from "../data/skills";
import "../styles/sections/skillsSection.css";
import {
    createPageTransition,
    createFadeInUp,
    createFloat,
} from "../utils/Animation/gsapAnimations";

const SkillsPage = () => {
    const navigate = useNavigate();
    const [activeGroup, setActiveGroup] = useState("skills-code-craft");
    const [activeCategory, setActiveCategory] = useState(null);
    const sectionRef = useRef(null);
    const asideRef = useRef(null);
    const contentRef = useRef(null);

    const selectedGroup = fullSkillData.find(
        (g) => g.id === activeGroup
    );

    const visibleCategories = activeCategory
        ? selectedGroup.items.filter(item => item.category === activeCategory)
        : selectedGroup.items;

    useEffect(() => {
        if (sectionRef.current) {
            createPageTransition(sectionRef.current, "forward");
        }

        if (asideRef.current) {
            gsap.set(asideRef.current, { x: -50, opacity: 0 });
            gsap.to(asideRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                delay: 0.3,
            });
        }

        if (contentRef.current) {
            gsap.set(contentRef.current, { x: 50, opacity: 0 });
            gsap.to(contentRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                delay: 0.3,
            });
        }

        const skillItems = document.querySelectorAll('[data-skill-item]');
        const timeline = gsap.timeline({ delay: 0.7 });

        skillItems.forEach((item, index) => {
            gsap.set(item, {
                opacity: 0,
                x: -40,
                filter: 'blur(8px)',
            });

            timeline.to(
                item,
                {
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                    duration: 0.6,
                    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                },
                index * 0.08
            );
        });

        return () => {
            gsap.killTweensOf([asideRef.current, contentRef.current, ...skillItems]);
        };
    }, [activeGroup, activeCategory]);

    return (
        <section id="skills" className="skills-section" ref={sectionRef}>
            <div className="skills-layout">
                <aside className="skills-toc" ref={asideRef}>
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
                </aside>

                <div
                    className={`skills-content ${activeGroup === "skills-code-craft" ? "theme-blue" : "theme-purple"
                        }`}
                    ref={contentRef}
                    key={`content-${activeGroup}`}
                >
                    <h2 key={`title-${selectedGroup.id}`}>
                        {selectedGroup.title}
                    </h2>

                    <div
                        key={`${activeGroup}-${activeCategory}`}
                        className="skill-items"
                    >
                        {visibleCategories.map((item) => (
                            <div
                                key={item.category}
                                className="skill-category"
                                data-skill-item
                            >
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

export default SkillsPage;

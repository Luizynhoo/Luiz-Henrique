import { useState, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";


import { skillsData, fullSkillData } from "../data/skills";
import "../styles/sections/skillsSection.css";

import { createPageTransition } from "../utils/Animation/gsapAnimations";

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
        ? selectedGroup.items.filter(
            (item) => item.category === activeCategory
        )
        : selectedGroup.items;


    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            if (sectionRef.current) {
                createPageTransition(sectionRef.current, "forward");
            }

            if (asideRef.current) {
                gsap.fromTo(
                    asideRef.current,
                    { x: -40, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: "power2.out",
                        delay: 0.2,
                    }
                );
            }

            if (contentRef.current) {
                gsap.fromTo(
                    contentRef.current,
                    { x: 40, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: "power2.out",
                        delay: 0.2,
                    }
                );
            }

        }, sectionRef);

        return () => ctx.revert();

    }, []);

    useLayoutEffect(() => {

        if (!contentRef.current) return;

        const items = contentRef.current.querySelectorAll(".skill-category li");

        gsap.fromTo(
            items,
            {
                opacity: 0,
                y: 10
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "cubic-bezier(0.23, 1, 0.32, 1)",
                stagger: 0.04
            }
        );

    }, [visibleCategories]);


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
                                        className={
                                            activeGroup === group.id
                                                ? "active"
                                                : ""
                                        }
                                    >

                                        <span>{group.title}</span>

                                        {group.icon && (

                                            <group.icon
                                                className={`chevron ${activeGroup === group.id
                                                    ? "expanded"
                                                    : ""
                                                    }`}
                                                size={18}
                                            />

                                        )}

                                    </a>

                                </div>


                                {group.items && (

                                    <div
                                        className={`submenu-wrapper ${group.id === activeGroup
                                            ? "open"
                                            : ""
                                            }`}
                                    >

                                        <ul className="sub">

                                            {group.items.map((item) => (

                                                <li key={item.id}>

                                                    <a
                                                        onClick={() =>
                                                            setActiveCategory(
                                                                item.label
                                                            )
                                                        }
                                                        className={
                                                            activeCategory ===
                                                                item.label
                                                                ? "active"
                                                                : ""
                                                        }
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
                    className={`skills-content ${activeGroup === "skills-code-craft"
                        ? "theme-blue"
                        : "theme-purple"
                        }`}
                    ref={contentRef}
                >

                    <h2>
                        {selectedGroup.title}
                    </h2>

                    <div className="skill-items">

                        {visibleCategories.map((item) => (

                            <div
                                key={item.category}
                                className="skill-category"
                            >

                                <h3>
                                    {item.category}
                                </h3>

                                <ul>

                                    {item.skills.map((skill) => (

                                        <li key={skill.id}>
                                            {skill.label}
                                        </li>

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
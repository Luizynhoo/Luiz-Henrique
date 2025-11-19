import { useEffect } from "react";
import { skillsData } from "../../data/skills";
import "../../styles/sections/skillsSection.css"


const SkillsSection = ({ goToNextSection }) => {
    useEffect(() => {
        const sections = document.querySelectorAll(".skills-content section");
        const menuLinks = document.querySelectorAll(".skills-toc a");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        menuLinks.forEach(link =>
                            link.parentElement.classList.remove("active")
                        );

                        const activeLink = document.querySelector(
                            `.skills-toc a[href="#${entry.target.id}"]`
                        );

                        if (activeLink)
                            activeLink.parentElement.classList.add("active");
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills-section">
            <div className="skills-layout">

                <aside className="skills-toc">
                    <ul>
                        {skillsData.map((group) => (
                            <li key={group.id} className="has-sub">
                                <div className="title">
                                    <a href={`#${group.id}`}>{group.title}</a>
                                </div>
                                {group.items && (
                                    <ul className="sub">
                                        {group.items.map((item) => (
                                            <li key={item.id}>
                                                <a href={`#${item.id}`}>{item.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </aside>

            </div>
        </section>
    );
}

export default SkillsSection;
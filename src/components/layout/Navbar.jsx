import { useState, useEffect } from 'react';
import '../../styles/components/navbar.css';

const Navbar = ({ scrollRef }) => {

    const [activeSection, setActiveSection] = useState("home");

    const scrollSection = (id) => {
        const section = document.getElementById(id);
        const container = scrollRef?.current;

        if (section && container) {
            const sectionLeft = section.offsetLeft;
            container.scrollTo({
                left: sectionLeft,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const container = scrollRef?.current;
        if (!container) return;

        const handleScroll = () => {
            const viewportWidth = window.innerWidth;
            const scrollLeft = container.scrollLeft;

            const sections = ["home", "sobre", "skills", "projects", "contato"];

            for (const id of sections) {
                const section = document.getElementById(id);
                if (!section) continue;

                const left = section.offsetLeft;
                const right = left + section.offsetWidth;
                const center = scrollLeft + viewportWidth / 2;

                if (center >= left && center < right) {
                    setActiveSection(id);
                }
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [scrollRef]);

    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <ul className='navbar-links'>
                    <li className={activeSection === "home" ? "active" : ""} onClick={() => scrollSection("home")}>Início</li>
                    <li className={activeSection === "sobre" ? "active" : ""} onClick={() => scrollSection("sobre")}>Sobre</li>
                    <li className={activeSection === "skills" ? "active" : ""} onClick={() => scrollSection("skills")}>Skills</li>
                    <li className={activeSection === "projects" ? "active" : ""} onClick={() => scrollSection("projects")}>Projetos</li>
                    <li className={activeSection === "contato" ? "active" : ""} onClick={() => scrollSection("contato")}>Contato</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

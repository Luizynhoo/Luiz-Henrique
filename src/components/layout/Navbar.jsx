import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { curtainTransition } from "../../utils/Animation/gsapAnimations";
import { useIsMobile } from "../../hooks/useIsMobile";

import "../../styles/components/navbar.css";

const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const routeMap = {
            "/": "home",
            "/sobre": "sobre",
            "/skills": "skills",
            "/projetos": "projects",
            "/contato": "contato",
        };

        setActiveSection(routeMap[location.pathname] || "home");

    }, [location.pathname]);

    useEffect(() => {

    if (!isMobile) return;

    const sections = ["home", "sobre", "skills", "projetos", "contato"];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }

            });
        },
        {
            threshold: 0.6
        }
    );

    sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });

    return () => observer.disconnect();

}, [isMobile]);

    const handleNavigation = (path) => {

        if (path === location.pathname) return;

        curtainTransition(() => {
            navigate(path);
        });

    };

    const scrollToSection = (id) => {

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }

        setActiveSection(id);
        setMenuOpen(false);

    };

    const navLinks = [
        { label: "Início", path: "/", id: "home" },
        { label: "Sobre", path: "/sobre", id: "sobre" },
        { label: "Skills", path: "/skills", id: "skills" },
        { label: "Projetos", path: "/projetos", id: "projects" },
        { label: "Contato", path: "/contato", id: "contato" },
    ];

    return (

        <nav className="navbar">

            <div className="nav-container">

                {isMobile && (
                    <div className="mobile-header">

                        <button
                            className={`hamburger ${menuOpen ? "open" : ""}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                    </div>
                )}

                {/* OVERLAY */}
                {isMobile && menuOpen && (
                    <div
                        className="menu-overlay"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                )}

                <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>

                    {navLinks.map((link) => (

                        <li
                            key={link.id}
                        >

                            <button
                                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                                onClick={() =>
                                    isMobile
                                        ? scrollToSection(link.id)
                                        : handleNavigation(link.path)
                                }
                            >
                                {link.label}
                            </button>

                        </li>

                    ))}

                </ul>

                <span className="mobile-name">Luiz Henrique</span>

            </div>

        </nav>

    );

};

export default Navbar;
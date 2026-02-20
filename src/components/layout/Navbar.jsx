import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const routeMap = {
            '/': 'home',
            '/sobre': 'sobre',
            '/skills': 'skills',
            '/projetos': 'projects',
            '/contato': 'contato'
        };

        setActiveSection(routeMap[location.pathname] || 'home');
    }, [location.pathname]);

    const navLinks = [
        { label: 'Início', path: '/', id: 'home' },
        { label: 'Sobre', path: '/sobre', id: 'sobre' },
        { label: 'Skills', path: '/skills', id: 'skills' },
        { label: 'Projetos', path: '/projetos', id: 'projects' },
        { label: 'Contato', path: '/contato', id: 'contato' }
    ];

    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <ul className='navbar-links'>
                    {navLinks.map((link) => (
                        <li 
                            key={link.id}
                            className={activeSection === link.id ? "active" : ""}
                        >
                            <Link to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

import '../../styles/components/navbar.css';

const Navbar = ({ scrollRef }) => {

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

    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <ul className='navbar-links'>
                    <li onClick={() => scrollSection("home")}>Início</li>
                    <li onClick={() => scrollSection("sobre")}>Sobre</li>
                    <li onClick={() => scrollSection("skills")}>Skills</li>
                    <li onClick={() => scrollSection("projects")}>Projetos</li>
                    <li onClick={() => scrollSection("contato")}>Contato</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

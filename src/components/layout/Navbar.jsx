import '../../styles/components/navbar.css';

const Navbar = () => {

    const Navbar = () => {
        const scrollSection = (id) => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <ul className='navbar-links'>
                    <li onClick={() => scrollSection("home")}>Inicio</li>
                    <li onClick={() => scrollSection("sobre")}>Sobre</li>
                    <li onClick={() => scrollSection("skills")}>Skills</li>
                    <li onClick={() => scrollSection("projects")}>Projetos</li>
                    <li onClick={() => scrollSection("contato")}>Contato</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
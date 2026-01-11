import "../../styles/sections/homeSection.css";
import profile from "../../assets/luiz.jpg";
import { ReactTyped } from "react-typed";

const HomeSection = ({ goToNextSection }) => {

    return (
        <section id="home" className="section-home">
            <div className="home-content">
                <p className="highlight-apresentacao">Olá, sou o </p>
                <p className="highlight">Luiz Henrique</p>
                <h1 className="highlight-Dev">
                    <ReactTyped
                        strings={["Desenvolvedor Front-End"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop={false}
                        startDelay={800}
                    />
                </h1>

                <div className="home-buttons">
                    <button className="btn-primary">
                         <a href="mailto:lhenrique1804@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Entrar em Contato
                        </a>
                    </button>
                    
                    <button className="btn-secondary">Download CV</button>
                </div>
            </div>

            <div className="home-photo">
                <img src={profile} alt="Luiz" />
            </div>

            <div className="scroll-hint" onClick={goToNextSection}>
                → Proxima Sessão
            </div>

        </section>


    );
};

export default HomeSection;
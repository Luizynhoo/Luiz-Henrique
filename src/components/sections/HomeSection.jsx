import "../../styles/sections/homeSection.css";
import profile from "../../assets/luiz.jpg";
import { ReactTyped } from "react-typed";
import Footer from "../layout/Footer";

const HomeSection = () => {
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
                    <button className="btn-primary">Entrar em Contato</button>
                    <button className="btn-secondary">Download CV</button>
                </div>
            </div>

            <div className="home-photo">
                <img src={profile} alt="Luiz" />
            </div>

            <div className="scroll-hint">
                <span>→ Role para o lado</span>
            </div>

            <Footer />
        </section>


    );
};

export default HomeSection;
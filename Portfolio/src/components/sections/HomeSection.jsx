import "../../styles/sections/homeSection.css";
import profile from "../../assets/luiz.jpg";

const HomeSection = () => {
    return (
        <section id="home" className="section-home">
            <div className="home-content">
                <h1>Olá, sou <span className="highlight">Luiz Henrique</span></h1>
                <h2>Desenvolvedor Front-End</h2>    

                <div className="home-buttons">
                    <button className="btn-primary">Ver Projetos</button>
                    <button className="btn-secondary">Download CV</button>
                </div>
            </div>

            <div className="home-photo">
                <img src={profile} alt="Luiz" />
            </div>
        </section>
    );
};

export default HomeSection;
import "../../styles/sections/aboutSection.css";
import imgAbout from '../../assets/img.jpg'
import { infoAbout } from "../../data/about";

const AboutSection = ({ goToNextSection }) => {
  return (
    <section className="about-section" id="sobre">
      <div className="main-about">
        <div className="xp-container">
          <p>{infoAbout.xp}</p>
          <span>Anos de Experiência</span>

          <p>{infoAbout.projetos}</p>
          <span>Projetos Completos</span>

          <p>{infoAbout.skills}</p>
          <span>Skills</span>
        </div>
      </div>

      <div className="img-container">
        <img src={imgAbout} alt="Dev foto" />
      </div>

      <div className="tex-conteiner">
        <h2>Sobre Mim</h2>
        <p>{infoAbout.textAbout}</p>
      </div>

      <div className="scroll-hint" onClick={goToNextSection}>
        → Proxima Sessão
      </div>

    </section>
  );
};

export default AboutSection;
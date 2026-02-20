import { useNavigate } from "react-router-dom";
import "../styles/sections/aboutSection.css";
import imgAbout from "../assets/img.jpg";
import { infoAbout } from "../data/about";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/skills");
  };
  const xpTarget = parseInt(infoAbout.xp);
  const projectsTarget = parseInt(infoAbout.projetos);
  const skillsTarget = parseInt(infoAbout.skills);

  const [xp, setXp] = useState(0);
  const [projects, setProjects] = useState(0);
  const [skills, setSkills] = useState(0);

  useEffect(() => {
    const animateCounter = (target, setter, speed) => {
      let current = 0;
      const increment = Math.ceil(target / 40);

      const interval = setInterval(() => {
        current += increment;

        if (current >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(current);
        }
      }, speed);

      return interval;
    };

    const xpInterval = animateCounter(xpTarget, setXp, 30);
    const projInterval = animateCounter(projectsTarget, setProjects, 30);
    const skillInterval = animateCounter(skillsTarget, setSkills, 30);

    return () => {
      clearInterval(xpInterval);
      clearInterval(projInterval);
      clearInterval(skillInterval);
    };
  }, []);

  return (
    <motion.section
      className="about-section"
      id="sobre"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="main-about"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="xp-container">
          <div className="stat-block">
            <p>{xp}+</p>
            <span>Anos de Experiência</span>
          </div>

          <div className="stat-block">
            <p>{projects}+</p>
            <span>Projetos Completos</span>
          </div>

          <div className="stat-block">
            <p>{skills}+</p>
            <span>Skills</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="img-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="img-glow"></div>
        <img src={imgAbout} alt="Dev foto" />
      </motion.div>

      <motion.div
        className="tex-conteiner"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Sobre Mim</h2>
        <p>{infoAbout.textAbout}</p>
      </motion.div>

      <motion.div
        className="scroll-hint"
        onClick={handleNextClick}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        → PRÓXIMA SESSÃO
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;
import { useNavigate } from "react-router-dom";
import "../styles/sections/aboutSection.css";
import imgAbout from "../assets/img.jpg";
import { infoAbout } from "../data/about";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  pageVariants,
  slideInLeft,
  slideInRight,
  imageReveal,
  statBlock,
  containerVariants,
  textRevealUp,
  fadeInUp,
} from "../utils/Animation/homeAnimations";

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
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="main-about"
        variants={slideInLeft}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="xp-container"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="stat-block"
            variants={statBlock}
            whileHover={{ scale: 1.05 }}
          >
            <p>{xp}+</p>
            <span>Anos de Experiência</span>
          </motion.div>

          <motion.div
            className="stat-block"
            variants={statBlock}
            whileHover={{ scale: 1.05 }}
          >
            <p>{projects}+</p>
            <span>Projetos Completos</span>
          </motion.div>

          <motion.div
            className="stat-block"
            variants={statBlock}
            whileHover={{ scale: 1.05 }}
          >
            <p>{skills}+</p>
            <span>Skills</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="img-container"
        variants={imageReveal}
        initial="hidden"
        animate="show"
        whileHover={{ scale: 1.05 }}
      >
        <div className="img-glow"></div>
        <img src={imgAbout} alt="Dev foto" />
      </motion.div>

      <motion.div
        className="tex-conteiner"
        variants={slideInRight}
        initial="hidden"
        animate="show"
      >
        <motion.h2 variants={fadeInUp}>Sobre Mim</motion.h2>
        <motion.p variants={fadeInUp}>{infoAbout.textAbout}</motion.p>
      </motion.div>

      <motion.div
        className="scroll-hint"
        onClick={handleNextClick}
        animate={{ y: [0, -8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        → PRÓXIMA SESSÃO
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;
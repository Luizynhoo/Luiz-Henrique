import { useNavigate } from "react-router-dom";
import "../styles/sections/homeSection.css";
import profile from "../assets/luiz.jpg";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import {
  pageVariants,
  containerVariants,
  textRevealUp,
  titleZoom,
  imageReveal,
  buttonReveal,
  buttonHover,
  buttonTap,
} from "../utils/Animation/homeAnimations";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/sobre");
  };

  return (
    <motion.section
      id="home"
      className="section-home"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="home-content"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="highlight-apresentacao"
          variants={textRevealUp}
        >
          SYSTEM INITIALIZED...
        </motion.p>

        <motion.p
          className="highlight"
          variants={titleZoom}
        >
          Luiz Henrique
        </motion.p>

        <motion.h1
          className="highlight-Dev"
          variants={titleZoom}
        >
          <ReactTyped
            strings={["Front-End Developer", "UI Engineer", "Creative Coder"]}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </motion.h1>

        <motion.div
          className="home-buttons"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.button
            className="btn-primary"
            variants={buttonReveal}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            <a
              href="mailto:lhenrique1804@gmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Entrar em Contato
            </a>
          </motion.button>

          <motion.button
            className="btn-secondary"
            variants={buttonReveal}
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Download CV
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="home-photo"
        variants={imageReveal}
        initial="hidden"
        animate="show"
        whileHover={{
          scale: 1.05,
          rotate: 1,
        }}
      >
        <div className="photo-glow" />
        <img src={profile} alt="Luiz" />
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

export default HomePage;
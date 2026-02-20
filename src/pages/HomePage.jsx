import { useNavigate } from "react-router-dom";
import "../styles/sections/homeSection.css";
import profile from "../assets/luiz.jpg";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import {
  pageVariants,
  containerVariants,
  textReveal,
  imageReveal,
  buttonReveal,
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
          variants={textReveal}
        >
          SYSTEM INITIALIZED...
        </motion.p>

        <motion.p
          className="highlight"
          variants={textReveal}
        >
          Luiz Henrique
        </motion.p>

        <motion.h1
          className="highlight-Dev"
          variants={textReveal}
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
          variants={buttonReveal}
        >
          <button className="btn-primary">
            <a
              href="mailto:lhenrique1804@gmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Entrar em Contato
            </a>
          </button>

          <button className="btn-secondary">
            Download CV
          </button>
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
        }}
      >
        → PRÓXIMA SESSÃO
      </motion.div>
    </motion.section>
  );
};

export default HomePage;
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import "../styles/sections/homeSection.css";
import profile from "../assets/luiz.jpg";
import { ReactTyped } from "react-typed";
import gsap from "gsap";
import {
  createPageTransition,
  createTextRevealUp,
  createTitleZoom,
  createImageReveal,
  createButtonReveal,
  createButtonHover,
  createButtonHoverOut,
  createFloat,
} from "../utils/Animation/gsapAnimations";
import { useGsapHover } from "../hooks/useGsapAnimation";


const HomePage = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const nomeRef = useRef(null);
  const tituloRef = useRef(null);
  const botao1Ref = useRef(null);
  const botao2Ref = useRef(null);
  const photoRef = useRef(null);

  const photoHover = useGsapHover({
    scale: 1.05,
    rotate: 1,
  });

  useEffect(() => {

    return () => {

      gsap.killTweensOf([
        nomeRef.current,
        tituloRef.current,
        botao1Ref.current,
        botao2Ref.current,
        photoRef.current,
      ]);
    };
  }, []);

  const handleButtonHover = (ref) => {
    if (ref.current) {
      createButtonHover(ref.current);
    }
  };

  const handleButtonHoverOut = (ref) => {
    if (ref.current) {
      createButtonHoverOut(ref.current);
    }
  };

  return (
    <section id="home" className="section-home" ref={sectionRef} style={{ opacity: 1, visibility: 'visible' }}>
      <div className="home-content" ref={contentRef} style={{ opacity: 1, visibility: 'visible' }}>

        <p className="highlight" ref={nomeRef} style={{ opacity: 1, visibility: 'visible' }}>
          Luiz Henrique
        </p>

        <h1 className="highlight-Dev" ref={tituloRef} style={{ opacity: 1, visibility: 'visible' }}>
          <ReactTyped
            strings={["Front-End Developer", "UI Engineer", "Creative Coder"]}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </h1>

        <div className="home-buttons">
          <button
            ref={botao1Ref}
            className="btn-primary"
            onMouseEnter={() => handleButtonHover(botao1Ref)}
            onMouseLeave={() => handleButtonHoverOut(botao1Ref)}
            style={{ opacity: 1, visibility: 'visible' }}
          >
            <a
              href="mailto:lhenrique1804@gmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Entrar em Contato
            </a>
          </button>

          <a
            href={`${import.meta.env.BASE_URL}/cv/Luiz-Henrique-Developer-CV.pdf`}
            download="Luiz-Henrique-Developer-CV.pdf"
            ref={botao2Ref}
            className="btn-secondary"
            onMouseEnter={() => handleButtonHover(botao2Ref)}
            onMouseLeave={() => handleButtonHoverOut(botao2Ref)}
            style={{ opacity: 1, visibility: "visible" }}
          >
            Download CV
          </a>
        </div>
      </div>

      <div
        className="home-photo"
        ref={photoRef}
        {...photoHover}
        style={{ opacity: 1, visibility: 'visible' }}
      >
        <div className="photo-glow" />
        <img src={profile} alt="Luiz" />
      </div>

    </section>
  );
};

export default HomePage;
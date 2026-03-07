import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import "../styles/sections/aboutSection.css";
import imgAbout from "../assets/img.jpg";
import { infoAbout } from "../data/about";
import gsap from 'gsap';
import {
  createPageTransition,
  createSlideInLeft,
  createSlideInRight,
  createImageReveal,
  createStatBlock,
  createFadeInUp,
  createFloat,
} from "../utils/Animation/gsapAnimations";

const AboutPage = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const mainAboutRef = useRef(null);
  const imgContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const statRefs = [useRef(null), useRef(null), useRef(null)];

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

  useEffect(() => {
    if (sectionRef.current) {
      createPageTransition(sectionRef.current, "forward");
    }

    if (mainAboutRef.current) {
      createSlideInLeft(mainAboutRef.current, 0.2);
    }

    const timeline = gsap.timeline({ delay: 0.5 });
    statRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.set(ref.current, {
          scale: 0.6,
          opacity: 0,
          rotate: -10,
        });

        timeline.to(
          ref.current,
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 0.8,
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
          },
          index * 0.2
        );
      }
    });

    if (imgContainerRef.current) {
      createImageReveal(imgContainerRef.current, 0.3);
    }

    if (textContainerRef.current) {
      createSlideInRight(textContainerRef.current, 0.2);
    }

    return () => {
      gsap.killTweensOf([
        mainAboutRef.current,
        imgContainerRef.current,
        textContainerRef.current,
        ...statRefs.map(ref => ref.current),
      ]);
    };
  }, []);

  const handleStatHover = (ref) => {
    if (ref.current) {
      gsap.to(ref.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleStatHoverOut = (ref) => {
    if (ref.current) {
      gsap.to(ref.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <section className="about-section" id="sobre" ref={sectionRef}>
      <div className="main-about" ref={mainAboutRef}>
        <div className="xp-container">
          <div
            className="stat-block"
            ref={statRefs[0]}
            onMouseEnter={() => handleStatHover(statRefs[0])}
            onMouseLeave={() => handleStatHoverOut(statRefs[0])}
          >
            <p>{xp}+</p>
            <span>Anos de Experiência</span>
          </div>

          <div
            className="stat-block"
            ref={statRefs[1]}
            onMouseEnter={() => handleStatHover(statRefs[1])}
            onMouseLeave={() => handleStatHoverOut(statRefs[1])}
          >
            <p>{projects}+</p>
            <span>Projetos Completos</span>
          </div>

          <div
            className="stat-block"
            ref={statRefs[2]}
            onMouseEnter={() => handleStatHover(statRefs[2])}
            onMouseLeave={() => handleStatHoverOut(statRefs[2])}
          >
            <p>{skills}+</p>
            <span>Skills</span>
          </div>
        </div>
      </div>

      <div className="img-container" ref={imgContainerRef}>
        <div className="img-glow"></div>
        <img src={imgAbout} alt="Dev foto" />
      </div>

      <div className="tex-conteiner" ref={textContainerRef}>
        <h2>Sobre Mim</h2>
        <p>{infoAbout.textAbout}</p>
      </div>
    </section>
  );
};

export default AboutPage;
import { useRef, useEffect } from "react";
import gsap from "gsap";

const SplashScreen = ({ onComplete }) => {

  const splashRef = useRef(null);
  const lhRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline();

    tl.fromTo(
      lhRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
        filter: "blur(6px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out"
      }
    )

    .fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 0.8,
        y: 0,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.6"
    );

  }, []);

  const handleClick = () => {

    const tl = gsap.timeline({
      onComplete: onComplete
    });

    tl.to(lhRef.current, {
      scale: 1.08,
      opacity: 0,
      filter: "blur(8px)",
      duration: 0.9,
      ease: "power2.inOut"
    })

    .to(textRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: "power1.out"
    }, "-=0.7")

    .to(splashRef.current, {
      opacity: 0,
      filter: "blur(6px)",
      duration: 1,
      ease: "power2.inOut"
    }, "-=0.5");

  };

  return (

    <div
      ref={splashRef}
      onClick={handleClick}
      style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(135deg,#1a1a1a,#000)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10000,
        cursor: "pointer"
      }}
    >

      <div
        ref={lhRef}
        style={{
          fontSize: "14rem",
          fontWeight: 700,
          color: "var(--cor1-)",
          textShadow: "0 0 25px var(--cor1-)",
          letterSpacing: "10px"
        }}
      >
        LH
      </div>

      <div
        ref={textRef}
        style={{
          fontSize: "1.3rem",
          color: "#fff",
          opacity: 0.8
        }}
      >
        Clique para entrar
      </div>

    </div>

  );

};

export default SplashScreen;
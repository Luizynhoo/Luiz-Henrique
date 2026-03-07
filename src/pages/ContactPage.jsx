import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { socialLinks } from "../data/socialLinks";
import "../styles/sections/ContactSection.css";
import {
  createPageTransition,
  createTitleZoom,
  createCardReveal,
  createCardHover,
  createCardHoverOut,
} from "../utils/Animation/gsapAnimations";

const ContactPage = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        if (sectionRef.current) {
            createPageTransition(sectionRef.current, "forward");
        }

        if (titleRef.current) {
            createTitleZoom(titleRef.current, 0.3);
        }
        
        const timeline = gsap.timeline({ delay: 0.5 });
        cardRefs.forEach((ref, index) => {
            if (ref.current) {
                gsap.set(ref.current, {
                    y: 80,
                    opacity: 0,
                    scale: 0.85,
                    filter: 'blur(10px)',
                });

                timeline.to(
                    ref.current,
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                        duration: 0.7,
                        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                    },
                    index * 0.15
                );
            }
        });

        return () => {
            gsap.killTweensOf([titleRef.current, ...cardRefs.map(ref => ref.current)]);
        };
    }, []);

    const handleCardHover = (ref) => {
        if (ref.current) {
            createCardHover(ref.current);
        }
    };

    const handleCardHoverOut = (ref) => {
        if (ref.current) {
            createCardHoverOut(ref.current);
        }
    };

    const contactLinkss = socialLinks;

    return (
        <section
            id="contato"
            className="section contact-section"
            ref={sectionRef}
        >
            <h2
                className="contact-title"
                ref={titleRef}
            >
                Contatos
            </h2>

            <div className="contact-container">
                <div className="contact-grid">
                    {contactLinkss.map((link, index) => {
                        const IconComponent = link.icon;
                        return (
                            <a
                                key={index}
                                href={link.href}
                                className="contact-card"
                                ref={cardRefs[index]}
                                target={link.target}
                                rel={link.target ? "noreferrer" : undefined}
                                onMouseEnter={() => handleCardHover(cardRefs[index])}
                                onMouseLeave={() => handleCardHoverOut(cardRefs[index])}
                            >
                                <div className="contact-icon">
                                    <IconComponent />
                                </div>
                                <h3>{link.title}</h3>
                                <span>{link.text}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactPage;

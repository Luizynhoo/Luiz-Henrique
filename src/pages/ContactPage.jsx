import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/sections/ContactSection.css";
import {
  pageVariants,
  cardReveal,
  cardHover,
  containerVariants,
  titleZoom,
  fadeInUp,
} from "../utils/Animation/homeAnimations";

const ContactPage = () => {
    return (
        <motion.section
            id="contato"
            className="section contact-section"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.h2
                className="contact-title"
                variants={titleZoom}
                initial="hidden"
                animate="show"
            >
                Contatos
            </motion.h2>

            <div className="contact-container">
                <motion.div
                    className="contact-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.a
                        href="mailto:lhenrique1804@gmail.com"
                        className="contact-card"
                        variants={cardReveal}
                        whileHover={cardHover}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="contact-icon">
                            <Mail />
                        </div>
                        <h3>E-mail</h3>
                        <span>lhenrique1804@gmail.com</span>
                    </motion.a>

                    <motion.a
                        href="tel:+5511940056624"
                        className="contact-card"
                        variants={cardReveal}
                        whileHover={cardHover}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="contact-icon">
                            <Phone />
                        </div>
                        <h3>Telefone</h3>
                        <span>(11) 94005-6624</span>
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/luiz-henrique-silva-costa-8a683b222/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                        variants={cardReveal}
                        whileHover={cardHover}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="contact-icon">
                            <Linkedin />
                        </div>
                        <h3>LinkedIn</h3>
                        <span>@luiz-henrique-silva-costa</span>
                    </motion.a>

                    <motion.a
                        href="https://github.com/Luizynhoo"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                        variants={cardReveal}
                        whileHover={cardHover}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="contact-icon">
                            <Github />
                        </div>
                        <h3>Github</h3>
                        <span>@Luizynhoo</span>
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ContactPage;

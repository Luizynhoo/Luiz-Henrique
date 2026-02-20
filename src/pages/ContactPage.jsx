import { Mail, Phone, Linkedin, Github } from "lucide-react";
import "../styles/sections/ContactSection.css";

const ContactPage = () => {
    return (
        <section id="contato" className="section contact-section">
            <h2 className="contact-title">Contatos</h2>

            <div className="contact-container">
                <div className="contact-grid">
                    <a href="mailto:lhenrique1804@gmail.com" className="contact-card">
                        <div className="contact-icon">
                            <Mail />
                        </div>
                        <h3>E-mail</h3>
                        <span>lhenrique1804@gmail.com</span>
                    </a>

                    <a href="tel:+5511940056624" className="contact-card">
                        <div className="contact-icon">
                            <Phone />
                        </div>
                        <h3>Telefone</h3>
                        <span>(11) 94005-6624</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/luiz-henrique-silva-costa-8a683b222/"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >
                        <div className="contact-icon">
                            <Linkedin />
                        </div>
                        <h3>LinkedIn</h3>
                        <span>@luiz-henrique-silva-costa</span>
                    </a>

                    <a
                        href="https://github.com/Luizynhoo"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >
                        <div className="contact-icon">
                            <Github />
                        </div>
                        <h3>Github</h3>
                        <span>@Luizynhoo</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;

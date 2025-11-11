import "../../styles/components/footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>

      <div className="footer-line"></div>
    </footer>
  );
};

export default Footer;

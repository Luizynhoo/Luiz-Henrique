import Navbar from "../components/layout/Navbar";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import MobileFooter from "../components/layout/footer";

import "../styles/global.css";

const MobileScrollPage = () => {

    return (

        <div className="mobile-scroll-container">

            <Navbar />

            <section id="home">
                <HomePage />
            </section>

            <section id="sobre">
                <AboutPage />
            </section>

            <section id="skills">
                <SkillsPage />
            </section>



            <section id="projetos">
                <h2 className="projetos-title">Meus Projetos</h2>

                <ProjectsPage />
            </section>

            <section id="contato">
                <ContactPage />
            </section>

            <section id="footer">
                <MobileFooter />
            </section>

        </div>

    );

};

export default MobileScrollPage;
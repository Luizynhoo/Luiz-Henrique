import Navbar from "../components/layout/Navbar";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";

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
                <ProjectsPage />
            </section>

            <section id="contato">
                <ContactPage />
            </section>

        </div>

    );

};

export default MobileScrollPage;
import "../../styles/sections/homeSection.css";
import profile from "../../assets/luiz.jpg";
import { ReactTyped } from "react-typed";

const HomeSection = () => {

    const goToNextSection = () => {
        const container = scrollRef.current;
        if (!container) return;


        const sections = Array.from(container.children);

        const currentScroll = container.scrollLeft;

        const currentIndex = sections.findIndex(sec => {
            return sec.offsetLeft <= currentScroll + 10 &&
                sec.offsetLeft + sec.offsetWidth > currentScroll + 10;
        });

        const nextIndex = currentIndex + 1;

        if (nextIndex < sections.length) {
            container.scrollTo({
                left: sections[nextIndex].offsetLeft,
                behavior: "smooth"
            });
        }
    };


    return (
        <section id="home" className="section-home">
            <div className="home-content">
                <p className="highlight-apresentacao">Olá, sou o </p>
                <p className="highlight">Luiz Henrique</p>
                <h1 className="highlight-Dev">
                    <ReactTyped
                        strings={["Desenvolvedor Front-End"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop={false}
                        startDelay={800}
                    />
                </h1>

                <div className="home-buttons">
                    <button className="btn-primary">Entrar em Contato</button>
                    <button className="btn-secondary">Download CV</button>
                </div>
            </div>

            <div className="home-photo">
                <img src={profile} alt="Luiz" />
            </div>

            <div className="scroll-hint">
                <a href="#sobre">→ Proxima Sessão</a>
            </div>

        </section>


    );
};

export default HomeSection;
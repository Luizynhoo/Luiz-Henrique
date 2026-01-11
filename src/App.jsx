import { useRef } from 'react';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';
import { useCustomCursor } from './hooks/useCustomCursor.js';


import Navbar from './components/layout/Navbar';

import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection.jsx';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';

import './styles/global.css';

function App() {
  const scrollRef = useRef(null);
  useHorizontalScroll(scrollRef);
  useCustomCursor();

  const sections = ["home", "sobre", "skills", "projetos", "contato"];

const goToNextSection = () => {
  const container = scrollRef.current;
  if (!container) return;

  const sections = Array.from(container.children);

  const currentScroll = container.scrollLeft;

  const currentIndex = sections.findIndex((sec) => {
    return (
      sec.offsetLeft <= currentScroll + 10 &&
      sec.offsetLeft + sec.offsetWidth > currentScroll + 10
    );
  });

  const nextIndex = currentIndex + 1;

  if (nextIndex < sections.length) {
    container.scrollTo({
      left: sections[nextIndex].offsetLeft,
      behavior: "smooth",
    });
  }
};

  return (
    <div className="app-container">
      <Navbar scrollRef={scrollRef} />

      <div ref={scrollRef} className="horizontal-container">
        <HomeSection goToNextSection={goToNextSection} />
        <AboutSection goToNextSection={goToNextSection}/>
        <SkillsSection goToNextSection={goToNextSection}/>
        <ProjectsSection goToNextSection={goToNextSection}/>
        <ContactSection />
      </div>
    </div>
  );
}


export default App;
import { useRef } from 'react';
import { useHorizontalScroll } from './hooks/useHorizontalScroll';
import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";
import HomeSection from './components/sections/HomeSection';
// import AboutSection from './components/sections/AboutSection';
// import SkillsSection from './components/sections/SkillsSection';
// import ProjectsSection from './components/sections/ProjectsSection';
// import ContactSection from './components/sections/ContactSection';
import './styles/global.css';

function App() {
  const scrollRef = useRef(null);
  useHorizontalScroll(scrollRef);

  return (
    <div className="app-container">
      <Navbar /> 
      
      <div ref={scrollRef} className="horizontal-container">
        <HomeSection />
        {/* <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection /> */}
        
      </div>
    </div>
  );  
}

export default App;
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCustomCursor } from "./hooks/useCustomCursor.js";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import SplashScreen from "./components/ui/SplashScreen";
import MobileScrollPage from "./pages/MobileScrollPage";
import { useIsMobile } from "./hooks/useIsMobile.js";
import "./styles/global.css";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre" element={<AboutPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projetos" element={<ProjectsPage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

function App() {
  const [splashShown, setSplashShown] = useState(false);
  useCustomCursor();

  const isMobile = useIsMobile();

  const handleSplashComplete = () => {
    setSplashShown(true);
  };

  if (!splashShown) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (isMobile) {
    return (
      <Router>
        <MobileScrollPage />
      </Router>
    );
  }

  return (
    <Router>
      <div className="curtain"></div>
      <div className="app-container">
        <Navbar />
        <div className="page-container">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;

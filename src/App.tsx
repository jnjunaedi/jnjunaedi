import AboutSection from "./components/AboutSection";
import CertificationSection from './components/CertificationSection';
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";

function App() {
  return (
    <div className="max-w-2xl mx-auto">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <SkillSection />
      <EducationSection />
      <CertificationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

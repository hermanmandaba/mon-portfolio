import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import ProjectsSection from "./components/ProjectsSection";


export default function Home() {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

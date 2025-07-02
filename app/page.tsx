import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { Navigation } from "./components/Navigation";
import PricingSection from "./components/PricingSection";
import ProjectsSection from "./components/ProjectsSection";
import ScrollToTop from "./components/ScrollToTop";
import ServicesSection from "./components/ServicesSection";




export default function Home() {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      <ScrollToTop />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

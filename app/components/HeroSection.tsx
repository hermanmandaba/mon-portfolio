"use client"

import Link from "next/link";
import { Button } from "./ui/Button";
import { translations } from "../utils/translations";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  } 
  const { language } = useLanguage();
  const t = translations[language].hero;


  return (
    <section id="home" className="min-h-screen bg-[#0F1629] flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-50 right-20 w-96 h-96 bg-[#E6C659] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins text-white mb-6">
            {t.title.split(' ')[0]} <span className="text-[#D4AF37]">{t.title.split(' ')[1]}</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-inter">
           {t.subtitle}
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
            {t.description} 
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center py-2 space-y-4 md:space-y-0 md:space-x-4">
            <Link href="#contact">
          <Button 
            onClick={scrollToContact}
            className="bg-[#D4AF37] hover:bg-[#E6C659] text-[#0F1629] font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/25 cursor-pointer"
          >
            {t.cta}
          </Button>
          </Link>

          <Link href="#projects">
          <Button 
            onClick={scrollToProjects}
            className="bg-[#0F1629] border borde-[#D4AF37]  text-[#D4AF37] font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/25 cursor-pointer"
          >
            {t.ctaProjects}
          </Button>
          </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
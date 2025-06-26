"use client"

/* eslint-disable react/no-unescaped-entities */
import { Button } from "./ui/Button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-[#0F1629] flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#E6C659] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-[#D4AF37] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins text-white mb-6">
            Hermann <span className="text-[#D4AF37]">Mandaba</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-inter">
            Frontend Web Developer
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Specializing in React, Next.js, and pixel-perfect implementations.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-[#D4AF37] hover:bg-[#E6C659] text-[#0F1629] font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#D4AF37] hover:shadow-opacity-25 cursor-pointer"
          >
            Let's Work Together
          </Button>
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
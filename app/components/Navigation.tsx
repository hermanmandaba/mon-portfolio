/* eslint-disable react/no-unescaped-entities */
'use client';

import {  useState } from 'react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from 'next/link';

export const Navigation = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0F1629]/90  backdrop-blur-md z-50 border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="https://mon-portfolio-psi-ten.vercel.app/">
            <div className="flex items-center">
              <span className="text-2xl font-bold font-poppins text-[#D4AF37]">HM</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white cursor-pointer hover:text-[#D4AF37] transition-colors duration-200 font-inter">
              home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white cursor-pointer hover:text-[#D4AF37] transition-colors duration-200 font-inter">
              about
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-white cursor-pointer hover:text-[#D4AF37] transition-colors duration-200 font-inter">
              projects
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white cursor-pointer hover:text-[#D4AF37] transition-colors duration-200 font-inter">
              services
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-white cursor-pointer hover:text-[#D4AF37] transition-colors duration-200 font-inter">
              pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white cursor-pointer hover:text-[#D4AF37] transition-colors duration-200 font-inter">
              contact
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
          <Link href="#contact">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-[#D4AF37] hover:bg-[#E6C659] text-[#0F1629] font-semibold px-6 py-2 rounded-lg transition-all duration-200 cursor-pointer"
            >
              Let's Work Together
            </Button>
          </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle mobile menu'
          >
            <AnimatePresence mode='wait' initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl"
                >
                  <HiOutlineX />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl"
                >
                  <HiOutlineMenu />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col items-center justify-center space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#D4AF37] transition-colors duration-200 font-inter text-left">
                home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#D4AF37] transition-colors duration-200 font-inter text-left">
                about
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-[#D4AF37] transition-colors duration-200 font-inter text-left">
                projects
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#D4AF37] transition-colors duration-200 font-inter text-left">
                services
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-[#D4AF37] transition-colors duration-200 font-inter text-left">
                pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#D4AF37] transition-colors duration-200 font-inter text-left">
                contact
              </button>
              <Link href="#contact">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#D4AF37] hover:bg-[#E6C659] text-[#0F1629] font-semibold px-6 py-2 rounded-lg transition-all duration-200 w-fit"
                >
                  Let's Work Together
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


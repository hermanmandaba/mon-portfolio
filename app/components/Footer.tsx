import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1A2332] border-t border-[#D4AF37]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold font-poppins text-[#D4AF37] mr-4">HM</span>
              <div>
                <p className="text-white font-semibold font-poppins">Hermann Mandaba</p>
                <p className="text-gray-400 font-inter">Frontend Web Developer</p>
              </div>
            </div>
            <p className="text-gray-400 font-inter">
              Crafting exceptional digital experiences
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <Link
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <Linkedin size={24} />
              </Link>
            </div>
            <p className="text-gray-400 text-sm font-inter">
              © 2025 Hermann Mandaba. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
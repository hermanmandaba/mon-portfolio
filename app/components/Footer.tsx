'use client'
import Link from 'next/link';
import { FaFacebook, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { SiInstagram } from 'react-icons/si';
import { SlSocialLinkedin } from 'react-icons/sl';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';


const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  return (
    <footer className="bg-[#1A2332] border-t border-[#D4AF37]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
            <Link href="https://mon-portfolio-psi-ten.vercel.app/">
              <span className="text-3xl font-bold font-poppins text-[#D4AF37] mr-4">HM</span>
              </Link>
              <div>
                <p className="text-white font-semibold font-poppins">Hermann Mandaba</p>
                <p className="text-gray-400 font-inter">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-400 font-inter">
              {t.slogan}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <Link
                href="https://github.com/hermanmandaba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <FiGithub size={24} />
              </Link>
              <Link
                target="_blank" 
                href="https://www.linkedin.com/in/herman-mandaba-547121371/" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <SlSocialLinkedin size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=yln7cmk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <SiInstagram size={24} />
              </Link>
              <Link
                href="https://x.com/HermanMandaba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <FaXTwitter size={24} />
              </Link>
              <Link
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
              >
                <FaTiktok size={24} />
              </Link>
            </div>
            <p className="text-gray-400 text-sm font-inter">
              © 2025 Hermann Mandaba. {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
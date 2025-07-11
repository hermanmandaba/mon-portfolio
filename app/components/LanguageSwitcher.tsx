'use client';

import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  // Détermine la langue alternative
  const otherLocale = language === 'fr' ? 'en' : 'fr';

  const handleToggle = () => {
    setLanguage(otherLocale);
  };

  return (
    <button
      onClick={handleToggle}
      className="px-3 py-1 rounded cursor-pointer bg-[#0F1629] hover:bg-gray-100 text-[#D4AF37] font-bold border border-[#D4AF37] transition"
      aria-label={`Switch to ${otherLocale.toUpperCase()}`}
    >
      {otherLocale.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
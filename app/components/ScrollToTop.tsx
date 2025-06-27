'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // facultatif, nécessite `lucide-react`

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const footer = document.getElementById('footer');

      if (footer) {
        const footerTop = footer.offsetTop;
        setShowButton(scrollPosition >= footerTop);
      } else {
        // Affiche le bouton après 600px de scroll si pas de footer
        setShowButton(window.scrollY > 600);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-[#D4AF37] text-[#0F1629] cursor-pointer p-3 rounded-full shadow-lg hover:bg-[#D4AF37] hover:font-700 transition"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
};

export default ScrollToTop;

'use client';

import { usePathname, useRouter } from 'next/navigation';
import i18nConfig from '../lib/i18nConfig';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1];
  const { locales } = i18nConfig;

  const otherLocale = currentLocale === 'fr' ? 'en' : 'fr';

  const handleChangeLanguage = () => {
    const segments = pathname.split('/');
    if (locales.includes(segments[1])) {
      segments[1] = otherLocale;
    } else {
      segments.splice(1, 0, otherLocale);
    }
    const newPathname = segments.join('/') || '/';
    router.push(newPathname);
    console.log('newPathname:', newPathname);

  };

  return (
    <button
      onClick={handleChangeLanguage}
      className="inline-flex items-center justify-center cursor-pointer gap-2 px-4 py-2 text-sm font-medium text-white hover:text-[#0F1629] bg-gray-800 rounded hover:bg-[#D4AF37]"
    >
      {otherLocale.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;

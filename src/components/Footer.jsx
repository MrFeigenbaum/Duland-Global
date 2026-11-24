import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Footer = ({ setCurrentView }) => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#082919] text-emerald-100/70 border-t border-emerald-950/80 py-5 font-sans">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-[13px]">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1 text-center md:text-left">
          <span className="font-serif font-bold text-white tracking-wide">Duland Global Kft.</span>
          <span className="text-emerald-700 hidden sm:inline">•</span>
          <span>1065 Budapest, Révay köz 4., Hungary</span>
          <span className="text-emerald-700 hidden sm:inline">•</span>
          <span>{t.common.allRightsReserved}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-emerald-200/80 text-xs sm:text-[13px] font-medium">
          <button onClick={() => setCurrentView('home')} className="hover:text-white transition-colors cursor-pointer py-1">
            {t.nav.home}
          </button>
          <button onClick={() => setCurrentView('about')} className="hover:text-white transition-colors cursor-pointer py-1">
            {t.nav.about}
          </button>
          <button onClick={() => setCurrentView('investments')} className="hover:text-white transition-colors cursor-pointer py-1">
            {t.nav.investments}
          </button>
          <button onClick={() => setCurrentView('approach')} className="hover:text-white transition-colors cursor-pointer py-1">
            {t.nav.approach}
          </button>
          <button onClick={() => setCurrentView('contact')} className="hover:text-white transition-colors cursor-pointer py-1">
            {t.nav.contact}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
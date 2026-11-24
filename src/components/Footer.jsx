import React from 'react';

export const Footer = ({ setCurrentView }) => {
  return (
    <footer className="w-full bg-[#082919] text-emerald-100/70 border-t border-emerald-950/80 py-4 font-sans text-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
        <div>
          <span className="font-serif font-bold text-white tracking-wide">Duland Global Kft.</span>
          <span className="mx-2 text-emerald-700">•</span>
          <span>Budapest, Hungary</span>
          <span className="mx-2 text-emerald-700">•</span>
          <span>All rights reserved</span>
        </div>
        <div className="flex items-center gap-4 text-emerald-200/80">
          <button onClick={() => setCurrentView('home')} className="hover:text-white transition-colors cursor-pointer">
            Home
          </button>
          <button onClick={() => setCurrentView('about')} className="hover:text-white transition-colors cursor-pointer">
            About Us
          </button>
          <button onClick={() => setCurrentView('investments')} className="hover:text-white transition-colors cursor-pointer">
            Our Investments
          </button>
          <button onClick={() => setCurrentView('approach')} className="hover:text-white transition-colors cursor-pointer">
            Investment Approach
          </button>
          <button onClick={() => setCurrentView('contact')} className="hover:text-white transition-colors cursor-pointer">
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
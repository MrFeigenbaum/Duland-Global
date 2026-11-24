import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header = ({ currentView, setCurrentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'investments', label: 'Our Investments' },
    { id: 'approach', label: 'Investment Approach' },
    { id: 'contact', label: 'Contact' },
  ];

  const languages = [
    { code: 'EN', name: 'English (EN)' },
    { code: 'HU', name: 'Magyar (HU)' },
    { code: 'DE', name: 'Deutsch (DE)' },
    { code: 'UZ', name: "O'zbek (UZ)" },
  ];

  // Precision SVG Flags (renders crisply on Windows, Mac, and mobile without relying on OS emoji support)
  const renderFlag = (code) => {
    switch (code) {
      case 'EN':
        return (
          <svg className="w-4 h-2.5 rounded-2xs shrink-0 shadow-2xs overflow-hidden" viewBox="0 0 60 30" fill="none">
            <rect width="60" height="30" fill="#012169" />
            <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
            <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="4" />
            <path d="M30 0 v30 M0 15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30 0 v30 M0 15 h60" stroke="#C8102E" strokeWidth="6" />
          </svg>
        );
      case 'HU':
        return (
          <svg className="w-4 h-2.5 rounded-2xs shrink-0 shadow-2xs overflow-hidden" viewBox="0 0 60 36">
            <rect width="60" height="12" y="0" fill="#CE2939" />
            <rect width="60" height="12" y="12" fill="#FFFFFF" />
            <rect width="60" height="12" y="24" fill="#477050" />
            <rect width="60" height="36" fill="none" stroke="#000" strokeOpacity="0.15" strokeWidth="1" />
          </svg>
        );
      case 'DE':
        return (
          <svg className="w-4 h-2.5 rounded-2xs shrink-0 shadow-2xs overflow-hidden" viewBox="0 0 60 36">
            <rect width="60" height="12" y="0" fill="#000000" />
            <rect width="60" height="12" y="12" fill="#DD0000" />
            <rect width="60" height="12" y="24" fill="#FFCE00" />
            <rect width="60" height="36" fill="none" stroke="#000" strokeOpacity="0.15" strokeWidth="1" />
          </svg>
        );
      case 'UZ':
        return (
          <svg className="w-4 h-2.5 rounded-2xs shrink-0 shadow-2xs overflow-hidden" viewBox="0 0 60 30">
            <rect width="60" height="10" y="0" fill="#0099B5" />
            <rect width="60" height="1" y="9.5" fill="#CE1126" />
            <rect width="60" height="10" y="10" fill="#FFFFFF" />
            <rect width="60" height="1" y="19.5" fill="#CE1126" />
            <rect width="60" height="10" y="20" fill="#1EB53A" />
            <circle cx="8" cy="5" r="3" fill="#FFFFFF" />
            <circle cx="9.2" cy="5" r="2.5" fill="#0099B5" />
            <rect width="60" height="30" fill="none" stroke="#000" strokeOpacity="0.15" strokeWidth="1" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleNavClick = (id) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b3b24] text-white shadow-md">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-16 relative flex items-center justify-between">
        
        {/* Brand Logo in Elegant Serif (Left) */}
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer flex items-center z-10"
        >
          <span className="font-serif text-2xl sm:text-[26px] font-bold tracking-tight text-white select-none">
            Duland Global
          </span>
        </div>

        {/* Desktop Navigation (Perfect Center Placement) */}
        <nav className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-[13px] tracking-wide transition-all py-1 cursor-pointer font-medium ${
                  isActive 
                    ? 'text-white border-b-2 border-white pb-0.5' 
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Language Selector Desktop & Mobile Menu Trigger */}
        <div className="flex items-center gap-3 z-10">
          
          {/* Language Selector Desktop */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/15 hover:bg-black/25 text-[13px] font-medium text-white/95 hover:text-white transition-colors cursor-pointer border border-white/10"
            >
              {renderFlag(currentLang)}
              <span>{currentLang}</span>
              <ChevronDown className="w-3.5 h-3.5 text-white/70" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-[#092e1c] border border-emerald-800/80 rounded-md shadow-2xl overflow-hidden z-50 py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs transition-colors cursor-pointer ${
                      currentLang === lang.code ? 'bg-[#0b3b24] text-white font-bold' : 'text-slate-200 hover:bg-[#0e4229]'
                    }`}
                  >
                    {renderFlag(lang.code)}
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Header Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2.5">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 text-xs font-medium text-white/95 px-2 py-1 bg-black/25 rounded border border-white/15 cursor-pointer"
            >
              {renderFlag(currentLang)}
              <span>{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-white/80" />
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-white hover:bg-black/20 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#092e1c] border-t border-emerald-900/60 px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2 text-sm rounded transition-all cursor-pointer ${
                  isActive ? 'bg-[#0b3b24] text-white font-bold' : 'text-slate-200 hover:bg-black/20'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          {/* Mobile Menu Language Selection */}
          <div className="pt-3 mt-2 border-t border-emerald-800/60 flex items-center gap-2 px-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  currentLang === lang.code 
                    ? 'bg-[#0b3b24] text-white border border-emerald-500/50 shadow-xs' 
                    : 'text-slate-300 hover:text-white bg-black/20'
                }`}
              >
                {renderFlag(lang.code)}
                <span>{lang.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

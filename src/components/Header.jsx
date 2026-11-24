import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Header = ({ currentView, setCurrentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const dropdownRef = useRef(null);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'investments', label: t.nav.investments },
    { id: 'approach', label: t.nav.approach },
    { id: 'contact', label: t.nav.contact },
  ];

  const languages = [
    { code: 'EN', name: 'English (EN)' },
    { code: 'HU', name: 'Magyar (HU)' },
    { code: 'DE', name: 'Deutsch (DE)' },
    { code: 'UZ', name: "O'zbek (UZ)" },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    if (langDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [langDropdownOpen]);

  // Precision SVG Flags
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

  const selectLanguage = (code) => {
    setLang(code);
    setLangDropdownOpen(false);
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

        {/* Desktop Navigation (Center Placement with Cool Underline Effect) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 absolute left-1/2 -translate-x-1/2 shrink-0">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative group py-2 text-[14px] font-medium tracking-wide whitespace-nowrap cursor-pointer transition-colors duration-200 select-none ${
                  isActive 
                    ? 'text-white font-semibold' 
                    : 'text-white/85 hover:text-white'
                }`}
              >
                <span>{link.label}</span>

                {/* Cool Animated Underline Effect */}
                {isActive ? (
                  /* Active Link: Default Lime/Emerald (#22c55e), on Hover turns to Bright Amber/Gold (#facc15) */
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] rounded-full bg-[#22c55e] group-hover:bg-[#facc15] transition-colors duration-300 shadow-[0_1px_8px_rgba(34,197,94,0.5)] group-hover:shadow-[0_1px_8px_rgba(250,204,21,0.6)]"></span>
                ) : (
                  /* Inactive Link: Cool expand-from-center underline on hover */
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-emerald-400 group-hover:w-full transition-all duration-300 ease-out shadow-[0_1px_6px_rgba(52,211,153,0.4)]"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Language Selector Desktop & Mobile Controls */}
        <div className="flex items-center gap-2 sm:gap-3 z-10" ref={dropdownRef}>
          
          {/* Universal Language Trigger (Desktop + Mobile touch-friendly) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              aria-label="Select language"
              className="flex items-center gap-1.5 px-3 py-1.5 min-h-[40px] rounded-lg bg-black/20 hover:bg-black/30 active:bg-black/40 text-xs sm:text-[13px] font-medium text-white transition-colors cursor-pointer border border-white/15 select-none"
            >
              {renderFlag(lang)}
              <span className="font-semibold">{lang}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-white/80 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown Menu (Universal for Desktop & Mobile) */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-[#092e1c] border border-emerald-700/80 rounded-xl shadow-2xl overflow-hidden z-50 py-1 animate-fadeIn backdrop-blur-md">
                <div className="px-3 py-1.5 border-b border-emerald-900/60 text-[10px] font-bold tracking-wider uppercase text-emerald-300">
                  Select Language
                </div>
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => selectLanguage(item.code)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-[13px] transition-colors cursor-pointer text-left ${
                      lang === item.code ? 'bg-[#0e482c] text-white font-bold' : 'text-slate-200 hover:bg-[#0c3822] active:bg-[#072617]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {renderFlag(item.code)}
                      <span>{item.name}</span>
                    </div>
                    {lang === item.code && <Check className="w-3.5 h-3.5 text-[#22c55e]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 min-h-[40px] min-w-[40px] rounded-lg text-white hover:bg-black/20 active:bg-black/30 transition-colors cursor-pointer flex items-center justify-center border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#092e1c] border-t border-emerald-900/80 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3.5 py-2.5 min-h-[44px] text-sm rounded-lg transition-all cursor-pointer flex items-center justify-between ${
                    isActive ? 'bg-[#0b3b24] text-white font-bold border-l-4 border-[#22c55e]' : 'text-slate-200 hover:bg-black/20'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>}
                </button>
              );
            })}
          </nav>

          {/* Quick Language Selector Inside Mobile Menu */}
          <div className="pt-4 mt-2 border-t border-emerald-800/60">
            <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block px-1 mb-2">
              Language / Nyelv / Sprache / Til:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLang(item.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 min-h-[42px] rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    lang === item.code 
                      ? 'bg-[#0b3b24] text-white border border-[#22c55e] shadow-xs' 
                      : 'text-slate-300 hover:text-white bg-black/25 border border-white/5'
                  }`}
                >
                  {renderFlag(item.code)}
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

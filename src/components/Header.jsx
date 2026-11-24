import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Check, Globe } from 'lucide-react';
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
    { code: 'EN', name: 'English', region: 'International' },
    { code: 'HU', name: 'Magyar', region: 'Magyarország' },
    { code: 'DE', name: 'Deutsch', region: 'DACH / Europa' },
    { code: 'UZ', name: "O‘zbekcha", region: "O‘zbekiston" },
  ];

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLangDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    if (langDropdownOpen || mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [langDropdownOpen, mobileMenuOpen]);

  // Precision SVG Flags
  const renderFlag = (code, sizeClass = 'w-5 h-3.5') => {
    switch (code) {
      case 'EN':
        return (
          <svg className={`${sizeClass} rounded-[3px] shrink-0 ring-1 ring-white/25 overflow-hidden shadow-xs`} viewBox="0 0 60 30" fill="none">
            <rect width="60" height="30" fill="#012169" />
            <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
            <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="4" />
            <path d="M30 0 v30 M0 15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30 0 v30 M0 15 h60" stroke="#C8102E" strokeWidth="6" />
          </svg>
        );
      case 'HU':
        return (
          <svg className={`${sizeClass} rounded-[3px] shrink-0 ring-1 ring-white/25 overflow-hidden shadow-xs`} viewBox="0 0 60 36">
            <rect width="60" height="12" y="0" fill="#CE2939" />
            <rect width="60" height="12" y="12" fill="#FFFFFF" />
            <rect width="60" height="12" y="24" fill="#477050" />
          </svg>
        );
      case 'DE':
        return (
          <svg className={`${sizeClass} rounded-[3px] shrink-0 ring-1 ring-white/25 overflow-hidden shadow-xs`} viewBox="0 0 60 36">
            <rect width="60" height="12" y="0" fill="#000000" />
            <rect width="60" height="12" y="12" fill="#DD0000" />
            <rect width="60" height="12" y="24" fill="#FFCE00" />
          </svg>
        );
      case 'UZ':
        return (
          <svg className={`${sizeClass} rounded-[3px] shrink-0 ring-1 ring-white/25 overflow-hidden shadow-xs`} viewBox="0 0 60 30">
            <rect width="60" height="10" y="0" fill="#0099B5" />
            <rect width="60" height="1" y="9.5" fill="#CE1126" />
            <rect width="60" height="10" y="10" fill="#FFFFFF" />
            <rect width="60" height="1" y="19.5" fill="#CE1126" />
            <rect width="60" height="10" y="20" fill="#1EB53A" />
            <circle cx="8" cy="5" r="3" fill="#FFFFFF" />
            <circle cx="9.2" cy="5" r="2.5" fill="#0099B5" />
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
    <header className="sticky top-0 z-50 w-full bg-[#0b3b24]/95 backdrop-blur-md text-white shadow-md border-b border-emerald-900/50">
      <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Brand Logo in Elegant Serif (Left) */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="cursor-pointer flex items-center shrink-0 text-left focus:outline-none group"
        >
          <span className="font-serif text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-white select-none whitespace-nowrap group-hover:text-emerald-100 transition-colors">
            Duland Global
          </span>
        </button>

        {/* Desktop Navigation (Collision-Free Flex Center Placement with Cool Underline Effect) */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-7 flex-1 min-w-0">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`relative group py-2 text-[13px] xl:text-[14px] font-medium tracking-wide whitespace-nowrap cursor-pointer transition-colors duration-200 select-none ${
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

        {/* Right Section: Redesigned Glass Language Pill & Mobile Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0" ref={dropdownRef}>
          
          {/* Redesigned Language Switcher Pill */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdownOpen((prev) => !prev)}
              aria-label="Select language"
              aria-expanded={langDropdownOpen}
              aria-haspopup="listbox"
              className={`flex items-center gap-2 px-2.5 sm:px-3.5 py-1.5 min-h-[40px] rounded-full backdrop-blur-md text-xs sm:text-[13px] font-medium text-white transition-all duration-200 cursor-pointer border select-none ${
                langDropdownOpen
                  ? 'bg-white/20 border-emerald-400/70 shadow-[0_0_16px_rgba(34,197,94,0.25)]'
                  : 'bg-white/10 hover:bg-white/15 active:bg-white/20 border-white/20 hover:border-emerald-400/60'
              }`}
            >
              <Globe className="hidden xs:block sm:block w-3.5 h-3.5 text-emerald-300 shrink-0" />
              {renderFlag(lang)}
              <span className="font-semibold tracking-wider">{lang}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-emerald-200/90 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Elevated Floating Glass Dropdown */}
            {langDropdownOpen && (
              <div
                role="listbox"
                aria-label="Available languages"
                className="absolute right-0 mt-2.5 w-60 bg-[#062214]/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] p-1.5 z-50 animate-dropdownIn"
              >
                <div className="flex items-center gap-2 px-3 py-2 mb-1 border-b border-emerald-800/60 text-[10px] font-bold tracking-widest uppercase text-emerald-300/90">
                  <Globe className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>{t.common.languageRegion}</span>
                </div>
                <div className="space-y-1">
                  {languages.map((item) => {
                    const isSelected = lang === item.code;
                    return (
                      <button
                        key={item.code}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => selectLanguage(item.code)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-150 cursor-pointer text-left ${
                          isSelected
                            ? 'bg-gradient-to-r from-emerald-500/25 to-emerald-600/15 border border-emerald-400/40 text-white shadow-xs'
                            : 'text-slate-200 hover:bg-white/10 active:bg-white/15 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {renderFlag(item.code, 'w-5 h-3.5')}
                          <div>
                            <span className="block text-xs sm:text-[13px] font-semibold leading-tight text-white">
                              {item.name}
                            </span>
                            <span className="block text-[10px] text-emerald-200/70 leading-tight mt-0.5">
                              {item.region}
                            </span>
                          </div>
                        </div>
                        {isSelected ? (
                          <span className="w-5 h-5 rounded-full bg-[#22c55e] text-[#041a0f] flex items-center justify-center shrink-0 shadow-xs">
                            <Check className="w-3 h-3 stroke-[2.75]" />
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono font-semibold text-emerald-300/50">
                            {item.code}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 min-h-[40px] min-w-[40px] rounded-full bg-white/10 hover:bg-white/15 active:bg-white/25 text-white transition-colors cursor-pointer flex items-center justify-center border border-white/15"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#062214]/98 backdrop-blur-xl border-t border-emerald-800/70 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-3.5 py-2.5 min-h-[44px] text-sm rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0b3b24] text-white font-bold border-l-4 border-[#22c55e] shadow-xs'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>}
                </button>
              );
            })}
          </nav>

          {/* Redesigned Mobile Language Selector Grid */}
          <div className="pt-4 mt-2 border-t border-emerald-800/60">
            <div className="flex items-center gap-1.5 px-1 mb-2.5">
              <Globe className="w-3.5 h-3.5 text-[#22c55e]" />
              <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                Language / Nyelv / Sprache / Til
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((item) => {
                const isSelected = lang === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLang(item.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between gap-2 px-3 py-2.5 min-h-[46px] rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'bg-gradient-to-r from-emerald-500/25 to-[#0b3b24] text-white border border-[#22c55e]/80 shadow-xs'
                        : 'text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {renderFlag(item.code, 'w-4 h-3')}
                      <div className="min-w-0">
                        <span className="block truncate leading-tight">{item.name}</span>
                        <span className="block text-[10px] font-normal text-emerald-200/70 truncate">
                          {item.code}
                        </span>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="w-4 h-4 rounded-full bg-[#22c55e] text-[#041a0f] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

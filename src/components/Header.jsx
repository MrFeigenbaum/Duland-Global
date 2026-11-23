import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

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

  const languages = ['EN', 'HU', 'DE', 'UZ'];

  const handleNavClick = (id) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#006400] text-white shadow-md border-b border-emerald-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo in Elegant Serif */}
        <div 
          onClick={() => handleNavClick('home')}
          className="cursor-pointer group flex items-center gap-2"
        >
          <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm group-hover:text-emerald-200 transition-colors">
            Duland Global
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 cursor-pointer ${
                  isActive 
                    ? 'text-white font-bold' 
                    : 'text-emerald-100/90 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Language Selector & Mobile Trigger */}
        <div className="flex items-center gap-4">
          
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/15 hover:bg-black/25 text-xs font-semibold tracking-wider text-emerald-100 transition-colors border border-emerald-700/50"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-300" />
              <span>{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-emerald-300" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-[#004d00] border border-emerald-700 rounded-xl shadow-xl overflow-hidden z-50 py-1">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setCurrentLang(lang);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                      currentLang === lang ? 'bg-emerald-600/40 text-white font-bold' : 'text-emerald-100 hover:bg-emerald-700/30'
                    }`}
                  >
                    {lang === 'EN' && 'English'}
                    {lang === 'HU' && 'Magyar'}
                    {lang === 'DE' && 'Deutsch'}
                    {lang === 'UZ' && "O'zbek"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-emerald-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#004d00] border-t border-emerald-800/80 px-4 pt-4 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive ? 'bg-[#006400] text-white font-bold shadow' : 'text-emerald-100 hover:bg-emerald-900/40'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
export default Header;

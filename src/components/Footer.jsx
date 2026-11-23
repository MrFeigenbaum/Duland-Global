import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

export const Footer = ({ setCurrentView }) => {
  const handleNav = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#003800] text-slate-300 border-t border-emerald-900/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <span className="font-serif text-3xl font-extrabold text-white tracking-tight">
              Duland Global
            </span>
            <p className="mt-4 text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              An international investment holding company focused on building and managing a diversified portfolio of real assets, real estate properties, and strategic financial investments.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-900/40 border border-emerald-700/40 text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>A Duman Capital Group Company</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-base mb-4 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('investments')} className="hover:text-white transition-colors">
                  Our Investments
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('approach')} className="hover:text-white transition-colors">
                  Investment Approach
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Asset Classes */}
          <div>
            <h4 className="text-white font-serif font-bold text-base mb-4 tracking-wide">
              Asset Classes
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('investments')}>
                Residential Properties
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('investments')}>
                Office Properties
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('investments')}>
                Industrial & Logistics
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('investments')}>
                Land & Development
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNav('investments')}>
                Financial Investments
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-serif font-bold text-base mb-4 tracking-wide">
              Registered Office
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Budapest, Hungary</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+36 1 700 0000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@dulandglobal.com" className="hover:text-white transition-colors">
                  info@dulandglobal.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/70 gap-4">
          <div>
            © {new Date().getFullYear()} Duland Global Kft. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Corporate Governance</span>
            <span>Privacy Policy</span>
            <span>Terms of Cooperation</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;

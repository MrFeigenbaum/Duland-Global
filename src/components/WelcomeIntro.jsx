import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import SITE_CONFIG from '../config/siteConfig';

export const WelcomeIntro = ({ onComplete }) => {
  const { t } = useLanguage();
  const [stage, setStage] = useState('initial'); // 'initial', 'appear', 'fadeout'

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const enterTimer = setTimeout(() => {
      setStage('appear');
    }, prefersReducedMotion ? 10 : 50);

    const exitTimer = setTimeout(() => {
      handleExit();
    }, prefersReducedMotion ? 600 : 2400);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  const handleExit = () => {
    setStage('fadeout');
    try {
      sessionStorage.setItem(SITE_CONFIG.introSessionKey, 'true');
    } catch {
      // Ignore storage errors in restricted environments
    }
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 550);
  };

  return (
    <div 
      onClick={handleExit}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#041a0f] via-[#072617] to-[#0b3b24] text-white cursor-pointer select-none transition-all duration-500 ${
        stage === 'fadeout' ? 'opacity-0 scale-102 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.18),transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg">
        
        {/* Animated Brand Emblem */}
        <div 
          className={`relative w-24 h-24 mb-7 flex items-center justify-center transition-all duration-1000 ${
            stage === 'appear' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-pulse"></div>
          <div className="absolute -inset-2 rounded-full border border-emerald-500/10 animate-ping"></div>

          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0f4d30] via-[#0b3b24] to-[#041a0f] border-2 border-emerald-400/60 flex items-center justify-center shadow-2xl">
            <span className="font-serif text-2xl font-bold tracking-widest text-emerald-200">
              {SITE_CONFIG.brandMonogram}
            </span>
          </div>
        </div>

        {/* Brand Name with Staggered Fade */}
        <h1 
          className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.25em] text-white uppercase mb-3 transition-all duration-1000 delay-200 ${
            stage === 'appear' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {SITE_CONFIG.brandName}
        </h1>

        {/* Corporate Subtitle */}
        <div 
          className={`flex items-center gap-2 transition-all duration-1000 delay-400 ${
            stage === 'appear' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="h-[1px] w-6 bg-[#22c55e]"></span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-emerald-300 uppercase">
            {t.intro.subtitle}
          </span>
          <span className="h-[1px] w-6 bg-[#22c55e]"></span>
        </div>

        {/* Elegant Animated Progress Line */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full mt-10 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r from-emerald-400 to-[#22c55e] rounded-full transition-all duration-[2200ms] ease-out ${
              stage === 'appear' ? 'w-full' : 'w-0'
            }`}
          ></div>
        </div>

        {/* Click to Enter Prompt */}
        <span 
          className={`text-[10px] uppercase tracking-widest text-slate-400 mt-5 transition-opacity duration-700 delay-700 ${
            stage === 'appear' ? 'opacity-70 hover:opacity-100' : 'opacity-0'
          }`}
        >
          {t.intro.clickToEnter}
        </span>

      </div>
    </div>
  );
};

export default WelcomeIntro;

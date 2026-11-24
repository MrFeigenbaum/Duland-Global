import React from 'react';
import { useLanguage } from '../LanguageContext';

export const LoadingScreen = ({ text }) => {
  const { t } = useLanguage();
  const displayText = text || t.common.loading;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#072617] text-white transition-opacity duration-500">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Animated Emblem */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#22c55e] border-r-emerald-300 animate-spin"></div>
          
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0b3b24] to-[#041a0f] border border-emerald-500/40 flex items-center justify-center shadow-lg">
            <span className="font-serif text-xl font-bold tracking-wider text-white">DG</span>
          </div>
        </div>

        {/* Brand Name */}
        <h2 className="font-serif text-2xl font-bold tracking-widest text-white uppercase mb-1">
          Duland Global
        </h2>
        <span className="text-[11px] font-semibold tracking-widest text-emerald-300 uppercase block mb-4">
          {t.common.holdingTagline}
        </span>

        {/* Dynamic / translated Loading text */}
        <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
          <span>{displayText}</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

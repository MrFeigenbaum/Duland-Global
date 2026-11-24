import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const AssetDetailModal = ({ asset, onClose, onContactClick }) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (!asset) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [asset, onClose]);

  if (!asset) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="asset-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-scaleUp"
      >
        
        {/* Header Image */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900 shrink-0">
          <img 
            src={asset.image} 
            alt={asset.title}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
            onError={(e) => { if (asset.fallbackImage) e.target.src = asset.fallbackImage; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
          
          <button 
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 sm:left-6 sm:right-6 text-white">
            <span className="text-xs font-sans uppercase tracking-widest text-emerald-400 font-semibold">
              Asset Class Profile
            </span>
            <h3 id="asset-modal-title" className="font-serif text-xl sm:text-2xl font-bold mt-1 text-white">
              {asset.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-5">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {asset.longDesc || asset.desc}
          </p>

          <div className="bg-[#f0f6f2] rounded-2xl p-4 sm:p-5 border border-emerald-900/10 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#0b3b24] font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0b3b24] shrink-0" />
              <span>Investment Criteria & Focus</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0b3b24] shrink-0 mt-0.5" />
                <span>Prime micro-locations with strong macroeconomic fundamentals</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0b3b24] shrink-0 mt-0.5" />
                <span>Long-term cash flow predictability and capital preservation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0b3b24] shrink-0 mt-0.5" />
                <span>Modern environmental standards, energy efficiency, and sustainability</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 min-h-[42px] rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onContactClick) onContactClick();
              }}
              className="px-5 py-2.5 min-h-[42px] rounded-xl text-xs sm:text-sm font-semibold bg-[#0b3b24] hover:bg-[#072617] text-white shadow-xs transition-colors cursor-pointer"
            >
              {t.common.contactUs}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AssetDetailModal;

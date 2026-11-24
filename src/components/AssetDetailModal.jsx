import React from 'react';
import { X, CheckCircle2, Building, Building2, Factory, Tractor, TrendingUp, ShieldCheck } from 'lucide-react';

export const AssetDetailModal = ({ asset, onClose, onContactClick }) => {
  if (!asset) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp">
        
        {/* Header Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-900">
          <img 
            src={asset.image} 
            alt={asset.title}
            className="w-full h-full object-cover"
            onError={(e) => { if (asset.fallbackImage) e.target.src = asset.fallbackImage; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-5 right-5 text-white">
            <span className="text-[10px] font-sans uppercase tracking-widest text-emerald-400 font-semibold">
              Asset Class Profile
            </span>
            <h3 className="font-serif text-xl font-bold mt-0.5">
              {asset.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {asset.longDesc || asset.desc}
          </p>

          <div className="bg-[#f0f6f2] rounded-xl p-4 border border-emerald-900/10">
            <h4 className="text-[11px] uppercase tracking-wider text-[#0b3b24] font-bold mb-2.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0b3b24]" />
              <span>Investment Criteria & Focus</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0b3b24] shrink-0" />
                <span>Prime micro-locations with strong macroeconomic fundamentals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0b3b24] shrink-0" />
                <span>Long-term cash flow predictability and capital preservation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0b3b24] shrink-0" />
                <span>Modern environmental standards, energy efficiency, and sustainability</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onContactClick) onContactClick();
              }}
              className="px-5 py-2 rounded-lg text-xs font-semibold bg-[#0b3b24] hover:bg-[#072617] text-white shadow-xs transition-colors cursor-pointer"
            >
              Inquire About Partnerships
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AssetDetailModal;
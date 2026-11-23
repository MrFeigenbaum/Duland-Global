import React from 'react';
import { X, CheckCircle2, Building, Building2, Factory, Trees, TrendingUp, ShieldCheck } from 'lucide-react';

export const AssetDetailModal = ({ asset, onClose, onContactClick }) => {
  if (!asset) return null;

  const getIcon = (type) => {
    switch (type) {
      case 'residential': return <Building className="w-6 h-6 text-emerald-600" />;
      case 'office': return <Building2 className="w-6 h-6 text-emerald-600" />;
      case 'industrial': return <Factory className="w-6 h-6 text-emerald-600" />;
      case 'land': return <Trees className="w-6 h-6 text-emerald-600" />;
      default: return <TrendingUp className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-scaleUp">
        
        {/* Header Image */}
        <div className="relative h-60 w-full overflow-hidden">
          <img 
            src={asset.image} 
            alt={asset.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Asset Class Profile
            </span>
            <h3 className="font-serif text-2xl font-bold mt-1">
              {asset.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {asset.longDesc || asset.desc}
          </p>

          <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Investment Criteria & Focus</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Prime micro-locations with strong macroeconomic fundamentals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Long-term cash flow predictability and capital preservation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Modern environmental standards, energy efficiency, and sustainability</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="px-6 py-2.5 rounded-xl text-sm font-bold bg-[#006400] hover:bg-[#004d00] text-white shadow-md transition-colors"
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

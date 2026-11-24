import React, { useState } from 'react';
import { 
  Building, 
  Building2, 
  Factory, 
  Tractor,
  Coins, 
  Layers, 
  BarChart2, 
  ShieldCheck, 
  Leaf,
  Binoculars,
  ArrowRight,
  FileText,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const InvestmentsPage = ({ setSelectedAsset, setCurrentView }) => {
  const { t } = useLanguage();
  const [showFullStatement, setShowFullStatement] = useState(false);

  const assetPortfolio = [
    {
      id: 'residential',
      title: t.assets.residential.title,
      icon: Building,
      image: '/assets/hq_exact_prop_residential.webp',
      fallbackImage: '/assets/prop_residential.webp',
      desc: t.assets.residential.desc,
    },
    {
      id: 'office',
      title: t.assets.office.title,
      icon: Building2,
      image: '/assets/hq_exact_prop_office.webp',
      fallbackImage: '/assets/prop_office.webp',
      desc: t.assets.office.desc,
    },
    {
      id: 'industrial',
      title: t.assets.industrial.title,
      icon: Factory,
      image: '/assets/hq_exact_prop_industrial.webp',
      fallbackImage: '/assets/prop_industrial.webp',
      desc: t.assets.industrial.desc,
    },
    {
      id: 'land',
      title: t.assets.land.title,
      icon: Tractor,
      image: '/assets/hq_exact_prop_land.webp',
      fallbackImage: '/assets/prop_land.webp',
      desc: t.assets.land.desc,
    }
  ];

  const principleIcons = [Binoculars, Layers, BarChart2, ShieldCheck, Leaf];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER */}
      <section className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_investments_skyline_4k.webp" 
          alt="Our Investments"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.src = '/assets/banner_investments_3mix.webp'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 sm:via-40% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-start gap-3 sm:gap-4 mb-2">
              <span className="w-1.5 h-16 sm:h-20 bg-[#22c55e] shrink-0 mt-1 rounded-xs"></span>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  {t.investments.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-100 mt-2 font-normal tracking-wide">
                  {t.investments.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUILDING LONG-TERM VALUE - STRUCTURED EDITORIAL DESIGN */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
            
            {/* Left Title Column (No awkward line breaks) */}
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
                {t.investments.buildingValueTitle}
              </h2>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-3 mb-5"></div>
              
              <div className="p-4 rounded-xl bg-[#f0f6f2] border border-emerald-900/10 text-slate-700">
                <span className="text-xs font-bold text-[#0b3b24] uppercase tracking-wider block mb-1">
                  Disciplined Strategy
                </span>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Focusing on fundamental asset quality, diversified market exposure, and continuous post-acquisition value creation.
                </p>
              </div>
            </div>

            {/* Right Content Column: Executive Lead & Strategic Drivers */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-emerald-50/30 to-white border border-slate-200 text-slate-900 font-medium leading-relaxed border-l-4 border-l-[#22c55e] shadow-2xs">
                <p className="text-base sm:text-lg leading-relaxed">{t.investments.p1}</p>
              </div>

              {/* 3 Strategic Value Drivers Grid */}
              {t.investments.drivers && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {t.investments.drivers.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-2xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-serif text-lg font-bold text-[#22c55e] block mb-1">
                          {item.num}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-slate-900 mb-2 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Collapsible Complete Strategy Accordion */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                <button
                  onClick={() => setShowFullStatement(!showFullStatement)}
                  className="w-full px-5 py-3.5 flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#0b3b24]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      {showFullStatement ? t.investments.hideFullStatement : t.investments.readFullStatement}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600">
                    {showFullStatement ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {showFullStatement && (
                  <div className="p-6 bg-white border-t border-slate-200 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p className="p-3 rounded-lg bg-emerald-50/50 text-slate-800 font-medium">{t.investments.p1}</p>
                    <p>{t.investments.p2}</p>
                    <p>{t.investments.p3}</p>
                    <p>{t.investments.p4}</p>
                    <p className="font-medium text-slate-800">{t.investments.p5}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* TWO LARGE FEATURE CARDS (Real Estate vs Financial) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1: Real Estate Investments */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md flex flex-col sm:flex-row bg-[#0b3b24]">
              <div className="sm:w-1/2 h-56 sm:h-auto overflow-hidden relative bg-slate-900">
                <img 
                  src="/assets/prop_residential_4k.webp" 
                  alt={t.investments.reCardTitle} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/hq_exact_prop_residential.webp'; }}
                />
              </div>

              <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between text-white">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-3">
                    <Building className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                    {t.investments.reCardTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light">
                    {t.investments.reCardDesc}
                  </p>
                </div>

                <div className="mt-6">
                  <button 
                    onClick={() => {
                      if (setSelectedAsset) setSelectedAsset(assetPortfolio[0]);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2 min-h-[42px] rounded-full border border-white/80 text-white text-xs sm:text-sm font-semibold hover:bg-white hover:text-[#0b3b24] transition-colors cursor-pointer"
                  >
                    <span>{t.common.exploreRealEstate}</span>
                    <span className="font-bold">&gt;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Financial Investments */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md flex flex-col sm:flex-row bg-[#0b3b24]">
              <div className="sm:w-1/2 h-56 sm:h-auto overflow-hidden relative bg-slate-900">
                <img 
                  src="/assets/financial_upward_bullish_hq.webp" 
                  alt={t.investments.fiCardTitle} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/hq_exact_financial_invest.webp'; }}
                />
              </div>

              <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between text-white">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-3">
                    <Coins className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                    {t.investments.fiCardTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light">
                    {t.investments.fiCardDesc}
                  </p>
                </div>

                <div className="mt-6">
                  <button 
                    onClick={() => {
                      if (setCurrentView) setCurrentView('contact');
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2 min-h-[42px] rounded-full border border-white/80 text-white text-xs sm:text-sm font-semibold hover:bg-white hover:text-[#0b3b24] transition-colors cursor-pointer"
                  >
                    <span>{t.common.exploreFinancial}</span>
                    <span className="font-bold">&gt;</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR INVESTMENT PORTFOLIO */}
      <section className="py-14 sm:py-20 bg-[#fafcfb] border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                {t.investments.portfolioTitle}
              </h2>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-2"></div>
            </div>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              {t.investments.portfolioDesc}
            </p>
          </div>

          {/* 4 Cards in Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {assetPortfolio.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => {
                    if (setSelectedAsset) setSelectedAsset(item);
                  }}
                  className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all cursor-pointer flex flex-col bg-white"
                >
                  <div className="h-44 overflow-hidden relative bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = item.fallbackImage; }}
                    />
                  </div>

                  <div className="px-4 py-3 bg-[#0b3b24] text-white flex items-center justify-between group-hover:bg-[#072617] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <IconComp className="w-4 h-4 text-white shrink-0" />
                      <span className="text-xs sm:text-[13px] font-semibold tracking-tight">{item.title}</span>
                    </div>
                    <span className="text-xs text-white/90 font-bold">&gt;</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. INVESTMENT PRINCIPLES */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {t.investments.principlesTitle}
              </h3>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-2"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {t.investments.principles.map((pr, idx) => {
                const IconComp = principleIcons[idx % principleIcons.length];
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-10 h-10 flex items-center justify-center text-[#0b3b24] bg-emerald-50 rounded-full mb-2">
                      <IconComp className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-tight">
                      {pr}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default InvestmentsPage;

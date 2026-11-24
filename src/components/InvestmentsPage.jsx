import React, { useState, useEffect, useRef } from 'react';
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
  FileText,
  ChevronDown,
  ChevronUp,
  PieChart,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Reveal from './Reveal';
import MEDIA from '../config/media';

export const InvestmentsPage = ({ setSelectedAsset, setCurrentView }) => {
  const { t } = useLanguage();
  const [showFullStatement, setShowFullStatement] = useState(false);
  const [barsAnimated, setBarsAnimated] = useState(false);
  const [realAssetPct, setRealAssetPct] = useState(0);
  const [financialPct, setFinancialPct] = useState(0);
  const portfolioCardRef = useRef(null);

  useEffect(() => {
    let triggered = false;
    let rafId = null;

    const startAnimation = () => {
      if (triggered) return;
      triggered = true;
      setBarsAnimated(true);

      const duration = 1000;
      const startTime = performance.now();

      const animateCounts = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setRealAssetPct(Math.round(eased * 65));
        setFinancialPct(Math.round(eased * 35));
        if (progress < 1) {
          rafId = requestAnimationFrame(animateCounts);
        }
      };

      rafId = requestAnimationFrame(animateCounts);
    };

    const node = portfolioCardRef.current;
    let observer = null;

    if (node && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(node);
    }

    // Fallback in case the card is already visible on mount or IntersectionObserver is unavailable
    const fallbackTimer = setTimeout(() => {
      if (node) {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          startAnimation();
        }
      } else {
        startAnimation();
      }
    }, 250);

    return () => {
      if (observer) observer.disconnect();
      clearTimeout(fallbackTimer);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const assetPortfolio = [
    {
      id: 'residential',
      title: t.assets.residential.title,
      icon: Building,
      image: MEDIA.portfolio.residential.primary,
      fallbackImage: MEDIA.portfolio.residential.fallback,
      desc: t.assets.residential.desc,
    },
    {
      id: 'office',
      title: t.assets.office.title,
      icon: Building2,
      image: MEDIA.portfolio.office.primary,
      fallbackImage: MEDIA.portfolio.office.fallback,
      desc: t.assets.office.desc,
    },
    {
      id: 'industrial',
      title: t.assets.industrial.title,
      icon: Factory,
      image: MEDIA.portfolio.industrial.primary,
      fallbackImage: MEDIA.portfolio.industrial.fallback,
      desc: t.assets.industrial.desc,
    },
    {
      id: 'land',
      title: t.assets.land.title,
      icon: Tractor,
      image: MEDIA.portfolio.land.primary,
      fallbackImage: MEDIA.portfolio.land.fallback,
      desc: t.assets.land.desc,
    }
  ];

  const principleIcons = [Binoculars, Layers, BarChart2, ShieldCheck, Leaf];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER */}
      <section className="relative w-full h-[260px] sm:h-[340px] lg:h-[380px] 2xl:h-[420px] overflow-hidden flex items-center">
        <img 
          src={MEDIA.investments.banner} 
          alt="Our Investments"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenBurns"
          onError={(e) => { e.target.src = MEDIA.investments.bannerFallback; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 sm:via-40% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="border-l-4 sm:border-l-[5px] border-[#22c55e] pl-4 sm:pl-5 mb-2 animate-pageEnter">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {t.investments.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-100 mt-2 font-normal tracking-wide">
                {t.investments.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUILDING LONG-TERM VALUE - STRUCTURED EDITORIAL DESIGN */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section Header - Full Width, No collisions */}
          <Reveal className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-widest text-[#0b3b24] uppercase block mb-1">
              {t.investments.mandateEyebrow}
            </span>
            <div className="inline-block max-w-full">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                {t.investments.buildingValueTitle}
              </h2>
              <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
            </div>
          </Reveal>

          {/* Full-Width Lead Corporate Statement Banner */}
          <Reveal delay={60}>
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-emerald-50/30 to-white border-l-4 border-[#22c55e] border-y border-r border-slate-200 shadow-xs mb-8">
              <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed">
                {t.investments.p1}
              </p>
            </div>
          </Reveal>

          {/* Balanced Symmetrical Middle Grid: 3 Strategic Drivers (8 cols) + Target Portfolio Structure (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
            
            {/* 3 Strategic Drivers Grid */}
            {t.investments.drivers && (
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
                {t.investments.drivers.items.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 70} className="h-full">
                    <div 
                      className="h-full p-5 rounded-2xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-serif text-lg font-bold text-[#22c55e] block mb-1">
                          {item.num}
                        </span>
                        <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {/* Target Allocation Visual Balance Card - Dynamically Animated */}
            <div 
              ref={portfolioCardRef}
              className="lg:col-span-4 p-5 rounded-2xl bg-gradient-to-br from-[#0b3b24] to-[#0f4d30] text-white space-y-4 shadow-xs border border-emerald-800 flex flex-col justify-between hover:border-emerald-500 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                    {t.investments.targetPortfolio.title}
                  </span>
                  <PieChart className="w-4 h-4 text-[#22c55e] animate-pulse" />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-emerald-100">{t.investments.targetPortfolio.realAssets}</span>
                      <span className="text-white font-mono">{realAssetPct}% {t.investments.targetPortfolio.targetSuffix}</span>
                    </div>
                    <div className="w-full bg-black/40 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/10">
                      <div 
                        style={{ width: barsAnimated ? '65%' : '0%' }}
                        className="bg-[#22c55e] h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(34,197,94,0.6)] relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-emerald-100">{t.investments.targetPortfolio.financial}</span>
                      <span className="text-white font-mono">{financialPct}% {t.investments.targetPortfolio.targetSuffix}</span>
                    </div>
                    <div className="w-full bg-black/40 rounded-full h-2.5 overflow-hidden p-0.5 border border-white/10">
                      <div 
                        style={{ width: barsAnimated ? '35%' : '0%' }}
                        className="bg-emerald-300 h-full rounded-full transition-all duration-1000 ease-out delay-200 relative overflow-hidden shadow-[0_0_8px_rgba(110,231,183,0.5)]"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5 text-[11px] text-emerald-200">
                {t.investments.targetPortfolio.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition-colors">{tag}</span>
                ))}
              </div>
            </div>

          </div>

          {/* Full-Width Collapsible Complete Investment Strategy Document */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs mb-14">
            <button
              type="button"
              onClick={() => setShowFullStatement(!showFullStatement)}
              aria-expanded={showFullStatement}
              className="w-full px-5 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer text-left"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#0b3b24] shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  {showFullStatement ? t.investments.hideFullStatement : t.investments.readFullStatement}
                </span>
              </div>
              <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                {showFullStatement ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </div>
            </button>

            <div className={`grid transition-all duration-300 ease-out ${showFullStatement ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="p-6 sm:p-8 bg-white border-t border-slate-200 space-y-5">
                  
                  {/* Lead Mandate Banner */}
                  <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-emerald-50/80 via-emerald-50/30 to-white border-l-4 border-[#22c55e] border-y border-r border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b3b24] block mb-2">
                      {t.investments.strategyDocMeta?.leadLabel || 'Section I • Core Mandate'}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {t.investments.p1}
                    </p>
                  </div>

                  {/* 3 Equal-Height Structured Clause Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                    {[t.investments.p2, t.investments.p3, t.investments.p4].map((paragraph, idx) => {
                      const clause = t.investments.strategyDocMeta?.clauses?.[idx];
                      return (
                        <div
                          key={idx}
                          className="p-5 rounded-xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                                {clause?.label || `Section 0${idx + 2}`}
                              </span>
                              <span className="font-serif font-bold text-xl text-slate-300/75 select-none leading-none">
                                {clause?.num || `0${idx + 2}`}
                              </span>
                            </div>
                            {clause?.title && (
                              <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                                {clause.title}
                              </h4>
                            )}
                            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                              {paragraph}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Executive Closing Charter */}
                  <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#0b3b24] to-[#0f4d30] text-white border border-emerald-800 shadow-xs">
                    <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider block mb-1.5">
                      {t.investments.strategyDocMeta?.conclusionLabel || 'Section V • Strategic Objective'}
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-50 font-light leading-relaxed">
                      {t.investments.p5}
                    </p>
                  </div>

                  {/* Subtle Corporate Document Footer */}
                  <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-2 font-medium">
                      <MapPin className="w-4 h-4 text-[#0b3b24]" />
                      <span>{t.contact.addressLine1}, {t.contact.addressLine2}</span>
                    </div>
                    <span className="text-slate-400">{t.investments.strategyFooter}</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* TWO LARGE FEATURE CARDS (Real Estate vs Financial) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            
            {/* Card 1: Real Estate Investments */}
            <Reveal delay={60} className="h-full">
              <div className="h-full rounded-2xl overflow-hidden border border-slate-200 shadow-md flex flex-col sm:flex-row bg-[#0b3b24] group hover:shadow-lg transition-all duration-300">
                <div className="sm:w-1/2 h-56 sm:h-auto overflow-hidden relative bg-slate-900 shrink-0">
                  <img 
                    src={MEDIA.investments.realEstatePillar} 
                    alt={t.investments.reCardTitle} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = MEDIA.investments.realEstateFallback; }}
                  />
                </div>

                <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between text-white">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-3">
                      <Building className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl lg:text-[22px] font-bold text-white mb-2 sm:whitespace-nowrap">
                      {t.investments.reCardTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light">
                      {t.investments.reCardDesc}
                    </p>
                  </div>

                  <div className="mt-6">
                    <button 
                      type="button"
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
            </Reveal>

            {/* Card 2: Financial Investments */}
            <Reveal delay={140} className="h-full">
              <div className="h-full rounded-2xl overflow-hidden border border-slate-200 shadow-md flex flex-col sm:flex-row bg-[#0b3b24] group hover:shadow-lg transition-all duration-300">
                <div className="sm:w-1/2 h-56 sm:h-auto overflow-hidden relative bg-slate-900 shrink-0">
                  <img 
                    src={MEDIA.investments.financialPillar} 
                    alt={t.investments.fiCardTitle} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = MEDIA.investments.financialFallback; }}
                  />
                </div>

                <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between text-white">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-3">
                      <Coins className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl lg:text-[22px] font-bold text-white mb-2 sm:whitespace-nowrap">
                      {t.investments.fiCardTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light">
                      {t.investments.fiCardDesc}
                    </p>
                  </div>

                  <div className="mt-6">
                    <button 
                      type="button"
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
            </Reveal>

          </div>

        </div>
      </section>

      {/* 3. OUR INVESTMENT PORTFOLIO */}
      <section className="py-14 sm:py-20 bg-[#fafcfb] border-t border-slate-200">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section Header - Full Width, Matching Building Long-Term Value Style */}
          <Reveal className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-widest text-[#0b3b24] uppercase block mb-1">
              {t.investments.portfolioEyebrow}
            </span>
            <div className="inline-block max-w-full">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                {t.investments.portfolioTitle}
              </h2>
              <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
            </div>
          </Reveal>

          {/* Full-Width Lead Corporate Statement Banner */}
          <Reveal delay={60}>
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-emerald-50/30 to-white border-l-4 border-[#22c55e] border-y border-r border-slate-200 shadow-xs mb-8">
              <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed">
                {t.investments.portfolioDesc}
              </p>
            </div>
          </Reveal>

          {/* 4 Cards in Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {assetPortfolio.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Reveal key={item.id} delay={idx * 70} className="h-full">
                  <div 
                    onClick={() => {
                      if (setSelectedAsset) setSelectedAsset(item);
                    }}
                    className="group h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 border border-slate-200 transition-all duration-300 cursor-pointer flex flex-col bg-white"
                  >
                    <div className="h-44 overflow-hidden relative bg-slate-100 shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = item.fallbackImage; }}
                      />
                    </div>

                    <div className="px-4 py-3.5 bg-[#0b3b24] text-white flex items-center justify-between group-hover:bg-[#072617] transition-colors flex-1">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <IconComp className="w-4 h-4 text-white shrink-0" />
                        <span className="text-xs sm:text-[13px] font-semibold tracking-tight">{item.title}</span>
                      </div>
                      <span className="text-xs text-white/90 font-bold shrink-0 group-hover:translate-x-0.5 transition-transform">&gt;</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. INVESTMENT PRINCIPLES */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <Reveal className="lg:col-span-4">
              <div className="inline-block max-w-full">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 sm:whitespace-nowrap">
                  {t.investments.principlesTitle}
                </h3>
                <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
              </div>
            </Reveal>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-3 items-stretch">
              {t.investments.principles.map((pr, idx) => {
                const IconComp = principleIcons[idx % principleIcons.length];
                return (
                  <Reveal key={idx} delay={idx * 60} className="h-full">
                    <div className="h-full flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-200/80 min-h-[96px] justify-center hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-300 group">
                      <div className="w-9 h-9 flex items-center justify-center text-[#0b3b24] bg-emerald-50 rounded-full mb-2 group-hover:scale-110 transition-transform">
                        <IconComp className="w-4 h-4 stroke-[1.75]" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-tight">
                        {pr}
                      </span>
                    </div>
                  </Reveal>
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

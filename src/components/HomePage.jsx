import React, { useState } from 'react';
import { 
  Building, 
  Building2, 
  Factory, 
  Tractor,
  Layers, 
  Globe, 
  TrendingUp, 
  Leaf, 
  Users, 
  Search, 
  BarChart2, 
  Handshake, 
  Settings, 
  Target, 
  ShieldCheck, 
  Coins, 
  HardHat,
  Package,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const HomePage = ({ setCurrentView, setSelectedAsset }) => {
  const { t } = useLanguage();
  const [activeRegion, setActiveRegion] = useState('hungary');

  const assetClasses = [
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

  const keyFigureIcons = [Layers, Globe, TrendingUp, Leaf, Users];
  const processIcons = [Search, BarChart2, Handshake, Settings, Target];
  const whyIcons = [ShieldCheck, Coins, Leaf, Users];

  const focusCards = [
    {
      title: t.whereWeInvest.cards.dev.title,
      desc: t.whereWeInvest.cards.dev.desc,
      image: '/assets/focus_dev_crane_hq.webp',
      icon: HardHat
    },
    {
      title: t.whereWeInvest.cards.income.title,
      desc: t.whereWeInvest.cards.income.desc,
      image: '/assets/focus_warehouse_hq.webp',
      icon: Package
    },
    {
      title: t.whereWeInvest.cards.sustainable.title,
      desc: t.whereWeInvest.cards.sustainable.desc,
      image: '/assets/focus_solar_blue_hq.webp',
      icon: Leaf
    }
  ];

  const insightsImages = [
    '/assets/insight_residential_clean.webp',
    '/assets/insight_industrial_clean.webp',
    '/assets/insight_sustainable_clean.webp',
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. HERO SECTION (Grand, Cinematic & High-Res) */}
      <section className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] overflow-hidden flex items-center">
        {/* Cinematic 4K Panorama Background */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/hero_banner_cinematic_4k.webp" 
            alt="Duland Global Real Assets Portfolio" 
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.src = '/assets/hero_banner_3mix.webp'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 sm:via-40% to-black/15"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-2xl text-white">
            
            {/* Subtle Institutional Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-emerald-200 mb-4 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Title with Vertical Lime Green Accent Bar */}
            <div className="flex items-start gap-3 sm:gap-4 mb-3">
              <span className="w-1.5 h-20 sm:h-24 bg-[#22c55e] shrink-0 mt-1 rounded-xs"></span>
              <div>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.15] text-white tracking-tight drop-shadow-md">
                  {t.hero.titleLine1} <br />
                  {t.hero.titleLine2} <br />
                  {t.hero.titleLine3}
                </h1>
                
                <p className="text-sm sm:text-base text-slate-100 mt-3 font-normal tracking-wide max-w-lg leading-relaxed drop-shadow-xs">
                  {t.hero.subtitle}
                </p>

                {/* Primary CTA and Quick Asset Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button 
                    onClick={() => setCurrentView('investments')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0b3b24] hover:bg-[#072617] text-white text-sm font-semibold tracking-wide transition-all cursor-pointer shadow-lg border border-emerald-500/30 group"
                  >
                    <span>{t.common.exploreInvestments}</span>
                    <span className="text-xs font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  </button>

                  <button 
                    onClick={() => setCurrentView('approach')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-medium tracking-wide transition-colors cursor-pointer backdrop-blur-sm border border-white/20"
                  >
                    <span>{t.common.ourApproach}</span>
                  </button>
                </div>

                {/* Quick Asset Categories Row */}
                <div className="mt-8 pt-5 border-t border-white/15 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-emerald-100/90 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                    {t.hero.tags.residential}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                    {t.hero.tags.office}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                    {t.hero.tags.industrial}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
                    {t.hero.tags.land}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DIVERSIFIED INVESTMENT PLATFORM */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-sans font-bold tracking-[0.25em] text-slate-500 uppercase block mb-1">
              {t.platform.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 leading-snug">
              {t.platform.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t.platform.description}
            </p>
          </div>

          {/* 4 Asset Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {assetClasses.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => {
                    if (setSelectedAsset) setSelectedAsset(item);
                  }}
                  className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all cursor-pointer flex flex-col bg-white"
                >
                  <div className="h-40 overflow-hidden relative bg-slate-100">
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

      {/* 3. KEY FIGURES AT A GLANCE (Dark Green Mountain Band) */}
      <section className="bg-[#0b3b24] text-white py-10 border-y border-emerald-950">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                {t.keyFigures.title}
              </h3>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-2"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {t.keyFigures.items.map((title, idx) => {
                const IconComp = keyFigureIcons[idx % keyFigureIcons.length];
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-2.5">
                    <div className="w-10 h-10 flex items-center justify-center mb-2 text-emerald-300">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-white/95 leading-snug">
                      {title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHERE WE INVEST */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-4">
              <span className="text-xs font-sans font-bold tracking-widest text-[#0b3b24] uppercase block">
                {t.whereWeInvest.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1.5">
                {t.whereWeInvest.title}
              </h2>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-2 mb-4"></div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.whereWeInvest.desc}
              </p>
              <div className="mt-5">
                <button 
                  onClick={() => setCurrentView('investments')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#0b3b24] hover:bg-[#072617] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  <span>{t.common.readMore}</span>
                  <span className="text-xs font-bold">&gt;</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {focusCards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col hover:border-emerald-700/50 transition-colors">
                    <div className="h-36 overflow-hidden bg-slate-100">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-start">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComp className="w-4 h-4 text-[#0b3b24] shrink-0 stroke-[1.75]" />
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">{card.title}</h4>
                      </div>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 5. A DISCIPLINED INVESTMENT PROCESS */}
      <section className="py-14 sm:py-20 bg-[#fafcfb] border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-sans font-bold tracking-widest text-[#0b3b24] uppercase block">
              {t.process.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
              {t.process.title}
            </h2>
            <div className="w-10 h-[3px] bg-[#22c55e] mt-2 mb-3"></div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.process.desc}
            </p>
          </div>

          {/* 5 Process Steps as Modern Centered Cards in 5-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {t.process.steps.map((step, idx) => {
              const IconComp = processIcons[idx % processIcons.length];
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-sm transition-all flex flex-col items-center text-center justify-between group hover:border-emerald-300"
                >
                  <div className="w-full flex justify-between items-center mb-3">
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Step {idx + 1}
                    </span>
                  </div>
                  
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-[#0b3b24] flex items-center justify-center mb-3.5 mx-auto group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  <span className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug whitespace-nowrap text-center block mb-1">
                    {step.title}
                  </span>

                  <span className="text-[11px] text-slate-500 leading-relaxed text-center line-clamp-2">
                    {step.desc}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. WHY DULAND GLOBAL */}
      <section className="py-12 bg-[#f0f6f2] border-t border-b border-emerald-900/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {t.whyUs.title}
              </h3>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-2 mb-3"></div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm">
                {t.whyUs.desc}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t.whyUs.pillars.map((title, idx) => {
                const IconComp = whyIcons[idx % whyIcons.length];
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-3 bg-white/70 rounded-xl border border-emerald-900/10 shadow-2xs">
                    <div className="w-10 h-10 flex items-center justify-center text-[#0b3b24] mb-2 bg-emerald-50 rounded-full">
                      <IconComp className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                      {title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 7. LATEST INSIGHTS & REDESIGNED OUR PRESENCE MODULE */}
      <section className="py-14 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Latest Insights (6 Cols) */}
            <div className="lg:col-span-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    {t.insights.title}
                  </h3>
                  <div className="w-10 h-[3px] bg-[#22c55e] mt-1.5"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {t.insights.items.map((article, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs flex flex-col group cursor-pointer hover:border-[#0b3b24] transition-all hover:shadow-sm"
                  >
                    <div className="h-28 overflow-hidden bg-slate-100 relative">
                      <img 
                        src={insightsImages[idx % insightsImages.length]} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-3 flex flex-col justify-between flex-1">
                      <h4 className="font-semibold text-xs sm:text-[13px] text-slate-900 group-hover:text-[#0b3b24] transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                        <span>{article.date}</span>
                        <span className="font-bold text-xs group-hover:text-[#0b3b24] transition-colors">&gt;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Institutional Market Intelligence Banner (Harmonizes height with Our Presence) */}
              <div className="mt-4 p-4 rounded-2xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[#0b3b24] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-snug">
                      Institutional Research & Market Intelligence
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Macro real estate dynamics and capital allocation reports
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setCurrentView('approach')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#0b3b24] text-[#0b3b24] text-xs font-semibold transition-colors cursor-pointer shrink-0 shadow-2xs"
                >
                  <span className="whitespace-nowrap">View Methodology</span>
                  <span className="font-bold">&gt;</span>
                </button>
              </div>
            </div>

            {/* Redesigned Executive "Our Presence" Module (6 Cols) */}
            <div className="lg:col-span-6">
              <div className="mb-4">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {t.presence.title}
                </h3>
                <div className="w-10 h-[3px] bg-[#22c55e] mt-1.5"></div>
              </div>

              {/* Master Presence Card */}
              <div className="bg-[#fafcfb] rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-4">
                
                {/* Modern Pill Switcher */}
                <div className="grid grid-cols-3 gap-1.5 bg-slate-100/90 p-1 rounded-xl text-xs sm:text-[13px] font-semibold text-slate-600">
                  <button 
                    type="button"
                    onClick={() => setActiveRegion('hungary')}
                    className={`py-2 px-2.5 rounded-lg transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                      activeRegion === 'hungary' 
                        ? 'bg-[#0b3b24] text-white shadow-xs font-bold' 
                        : 'hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                    <span>{t.presence.tabs.hungary}</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setActiveRegion('europe')}
                    className={`py-2 px-2.5 rounded-lg transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                      activeRegion === 'europe' 
                        ? 'bg-[#0b3b24] text-white shadow-xs font-bold' 
                        : 'hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span>{t.presence.tabs.europe}</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setActiveRegion('asia')}
                    className={`py-2 px-2.5 rounded-lg transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                      activeRegion === 'asia' 
                        ? 'bg-[#0b3b24] text-white shadow-xs font-bold' 
                        : 'hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                    <span>{t.presence.tabs.asia}</span>
                  </button>
                </div>

                {/* Regional Details Card with Dynamic Content */}
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
                  {activeRegion === 'hungary' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-[#0b3b24] flex items-center justify-center">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-sm sm:text-base text-slate-900 block">
                              {t.presence.hungary.name}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              {t.presence.hungary.address}
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] font-semibold text-[#0b3b24] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          {t.presence.hungary.badge}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t.presence.hungary.desc}
                      </p>

                      <div className="pt-1 flex flex-wrap items-center gap-2">
                        {t.presence.hungary.tags.map((tag, i) => (
                          <span key={i} className="text-[11px] font-semibold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeRegion === 'europe' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-[#0b3b24] flex items-center justify-center">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-sm sm:text-base text-slate-900 block">
                              {t.presence.europe.name}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              Key Central & Southern European Metropolitan Hubs
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          {t.presence.europe.badge}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t.presence.europe.desc}
                      </p>

                      <div className="pt-1 flex flex-wrap items-center gap-2">
                        {t.presence.europe.tags.map((tag, i) => (
                          <span key={i} className="text-[11px] font-semibold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeRegion === 'asia' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-[#0b3b24] flex items-center justify-center">
                            <Factory className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-sm sm:text-base text-slate-900 block">
                              {t.presence.asia.name}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              Industrial Trade Corridors & Production Infrastructure
                            </span>
                          </div>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          {t.presence.asia.badge}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {t.presence.asia.desc}
                      </p>

                      <div className="pt-1 flex flex-wrap items-center gap-2">
                        {t.presence.asia.tags.map((tag, i) => (
                          <span key={i} className="text-[11px] font-semibold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                  <p className="text-xs text-slate-600 leading-relaxed text-center sm:text-left">
                    {t.presence.desc}
                  </p>
                  <button 
                    onClick={() => setCurrentView('contact')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0b3b24] hover:bg-[#072617] text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-colors cursor-pointer shrink-0 shadow-xs"
                  >
                    <span>{t.common.contactUs}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;

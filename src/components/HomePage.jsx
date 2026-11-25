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
import Reveal from './Reveal';
import MEDIA from '../config/media';

export const HomePage = ({ setCurrentView, setSelectedAsset }) => {
  const { t } = useLanguage();
  const [activeRegion, setActiveRegion] = useState('hungary');

  const assetClasses = [
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

  const keyFigureIcons = [Layers, Globe, TrendingUp, Leaf, Users];
  const processIcons = [Search, BarChart2, Handshake, Settings, Target];
  const whyIcons = [ShieldCheck, Coins, Leaf, Users];

  const focusCards = [
    {
      title: t.whereWeInvest.cards.dev.title,
      desc: t.whereWeInvest.cards.dev.desc,
      image: MEDIA.focus.development,
      icon: HardHat
    },
    {
      title: t.whereWeInvest.cards.income.title,
      desc: t.whereWeInvest.cards.income.desc,
      image: MEDIA.focus.logistics,
      icon: Package
    },
    {
      title: t.whereWeInvest.cards.sustainable.title,
      desc: t.whereWeInvest.cards.sustainable.desc,
      image: MEDIA.focus.sustainable,
      icon: Leaf
    }
  ];

  const insightsImages = MEDIA.insights;

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. HERO SECTION (Grand, Cinematic & High-Res) */}
      <section className="relative w-full min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] 2xl:min-h-[650px] overflow-hidden flex items-center">
        {/* Cinematic 8K/4K Responsive Panorama Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <picture className="w-full h-full block">
            <source srcSet={MEDIA.hero.primary8k} media="(min-width: 1920px)" type="image/webp" />
            <source srcSet={MEDIA.hero.primary} type="image/webp" />
            <img 
              src={MEDIA.hero.primary} 
              alt="Duland Global Real Assets Portfolio" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover object-center animate-kenBurns"
              onError={(e) => { e.target.src = MEDIA.hero.fallback; }}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 sm:via-40% to-black/15"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-2xl text-white">
            
            {/* Subtle Institutional Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-emerald-200 mb-4 uppercase animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Title with Vertical Lime Green Accent Bar - 100% of Entire Multi-Line Heading Height */}
            <h1 className="border-l-4 sm:border-l-[6px] border-[#22c55e] pl-4 sm:pl-5 font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.15] text-white tracking-tight drop-shadow-md mb-3 animate-pageEnter">
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
                type="button"
                onClick={() => setCurrentView('investments')}
                className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-md bg-[#0b3b24] hover:bg-[#072617] text-white text-sm font-semibold tracking-wide transition-all cursor-pointer shadow-lg border border-emerald-500/30 group"
              >
                <span>{t.common.exploreInvestments}</span>
                <span className="text-xs font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
              </button>

              <button 
                type="button"
                onClick={() => setCurrentView('approach')}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-md bg-white/10 hover:bg-white/20 text-white text-sm font-medium tracking-wide transition-colors cursor-pointer backdrop-blur-sm border border-white/20"
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
      </section>

      {/* 2. DIVERSIFIED INVESTMENT PLATFORM */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-sans font-bold tracking-[0.25em] text-slate-500 uppercase block mb-1">
              {t.platform.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 leading-snug">
              {t.platform.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t.platform.description}
            </p>
          </Reveal>

          {/* 4 Asset Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {assetClasses.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Reveal key={item.id} delay={idx * 70} className="h-full">
                  <div 
                    onClick={() => {
                      if (setSelectedAsset) setSelectedAsset(item);
                    }}
                    className="group h-full rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 border border-slate-200 transition-all duration-300 cursor-pointer flex flex-col bg-white"
                  >
                    <div className="h-40 sm:h-44 overflow-hidden relative bg-slate-100 shrink-0">
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

      {/* 3. KEY FIGURES AT A GLANCE (Dark Green Mountain Band) */}
      <section className="bg-[#0b3b24] text-white py-10 border-y border-emerald-950">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <Reveal className="lg:col-span-3">
              <div className="inline-block max-w-full">
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                  {t.keyFigures.title}
                </h3>
                <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
              </div>
            </Reveal>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {t.keyFigures.items.map((title, idx) => {
                const IconComp = keyFigureIcons[idx % keyFigureIcons.length];
                return (
                  <Reveal key={idx} delay={idx * 60}>
                    <div className="flex flex-col items-center text-center p-2.5 group">
                      <div className="w-10 h-10 flex items-center justify-center mb-2 text-emerald-300 group-hover:scale-110 transition-transform duration-300">
                        <IconComp className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-medium text-white/95 leading-snug">
                        {title}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHERE WE INVEST */}
      <section className="py-12 sm:py-16 bg-white cv-auto">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <Reveal className="lg:col-span-4 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-sans font-bold tracking-widest text-[#0b3b24] uppercase block">
                  {t.whereWeInvest.eyebrow}
                </span>
                <div className="inline-block max-w-full mt-1.5 mb-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    {t.whereWeInvest.title}
                  </h2>
                  <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {t.whereWeInvest.desc}
                </p>
              </div>
              <div className="mt-6 pt-2">
                <button 
                  type="button"
                  onClick={() => setCurrentView('investments')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[42px] rounded-lg bg-[#0b3b24] hover:bg-[#072617] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs group"
                >
                  <span>{t.common.readMore}</span>
                  <span className="text-xs font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                </button>
              </div>
            </Reveal>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
              {focusCards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <Reveal key={idx} delay={idx * 80} className="h-full">
                    <div className="h-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col hover:border-emerald-700/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
                      <div className="h-36 sm:h-40 overflow-hidden bg-slate-100 shrink-0">
                        <img
                          src={card.image}
                          alt={card.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
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
                  </Reveal>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 5. A DISCIPLINED INVESTMENT PROCESS */}
      <section className="py-14 sm:py-20 bg-[#fafcfb] border-t border-slate-200 cv-auto">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal className="max-w-3xl mb-10">
            <span className="text-xs font-sans font-bold tracking-widest text-[#0b3b24] uppercase block">
              {t.process.eyebrow}
            </span>
            <div className="inline-block max-w-full mt-1 mb-3">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                {t.process.title}
              </h2>
              <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.process.desc}
            </p>
          </Reveal>

          {/* 5 Process Steps as Modern Centered Cards in 5-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
            {t.process.steps.map((step, idx) => {
              const IconComp = processIcons[idx % processIcons.length];
              return (
                <Reveal key={idx} delay={idx * 70} className="h-full">
                  <div 
                    className="h-full bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between group hover:border-emerald-300"
                  >
                    <div className="w-full flex justify-between items-center mb-3">
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 shadow-2xs">
                        {t.process.stepLabel} {idx + 1}
                      </span>
                      <span className="font-serif font-bold text-xl sm:text-2xl text-slate-300/75 select-none leading-none">
                        0{idx + 1}
                      </span>
                    </div>
                    
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-[#0b3b24] flex items-center justify-center mb-3.5 mx-auto group-hover:scale-105 transition-transform duration-300">
                      <IconComp className="w-5 h-5 stroke-[1.75]" />
                    </div>

                    <span className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug sm:whitespace-nowrap text-center block mb-1">
                      {step.title}
                    </span>

                    <span className="text-[11px] text-slate-500 leading-relaxed text-center line-clamp-2">
                      {step.desc}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. WHY DULAND GLOBAL */}
      <section className="py-12 bg-[#f0f6f2] border-t border-b border-emerald-900/10 cv-auto">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <Reveal className="lg:col-span-4">
              <div className="inline-block max-w-full mb-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  {t.whyUs.title}
                </h3>
                <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm">
                {t.whyUs.desc}
              </p>
            </Reveal>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 items-stretch">
              {t.whyUs.pillars.map((title, idx) => {
                const IconComp = whyIcons[idx % whyIcons.length];
                return (
                  <Reveal key={idx} delay={idx * 70} className="h-full">
                    <div className="h-full flex flex-col items-center justify-center text-center p-3.5 bg-white/80 rounded-xl border border-emerald-900/10 shadow-2xs hover:shadow-sm hover:-translate-y-1 transition-all duration-300 group">
                      <div className="w-10 h-10 flex items-center justify-center text-[#0b3b24] mb-2 bg-emerald-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <IconComp className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                        {title}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 7. LATEST INSIGHTS & REDESIGNED OUR PRESENCE MODULE */}
      <section className="py-14 bg-white cv-auto">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Latest Insights (6 Cols) */}
            <Reveal className="lg:col-span-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-block max-w-full">
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    {t.insights.title}
                  </h3>
                  <div className="w-full h-[3px] bg-[#22c55e] mt-1.5 rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-between gap-4">
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
                  {t.insights.items.map((article, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setCurrentView('approach')}
                      className="h-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs flex flex-col group cursor-pointer hover:border-[#0b3b24] transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    >
                      <div className="h-32 sm:h-36 overflow-hidden bg-slate-100 relative shrink-0">
                        <img 
                          src={insightsImages[idx % insightsImages.length]} 
                          alt={article.title} 
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div className="p-3.5 flex flex-col justify-between flex-1">
                        <h4 className="font-semibold text-xs sm:text-[13px] text-slate-900 group-hover:text-[#0b3b24] transition-colors leading-snug line-clamp-3">
                          {article.title}
                        </h4>
                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                          <span>{article.date}</span>
                          <span className="font-bold text-xs group-hover:text-[#0b3b24] group-hover:translate-x-0.5 transition-all">&gt;</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Institutional Market Intelligence Banner (Flush with Our Presence Bottom) */}
                <div className="p-4 rounded-2xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[#0b3b24] flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-[13px] font-bold text-slate-900 block leading-snug">
                        {t.insights.researchTitle}
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        {t.insights.researchDesc}
                      </span>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setCurrentView('approach')}
                    className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[38px] rounded-lg bg-white border border-slate-200 hover:border-[#0b3b24] text-[#0b3b24] text-xs font-semibold transition-colors cursor-pointer shrink-0 shadow-2xs"
                  >
                    <span className="whitespace-nowrap">{t.insights.viewMethodology}</span>
                    <span className="font-bold">&gt;</span>
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Redesigned Executive "Our Presence" Module (6 Cols) */}
            <Reveal delay={100} className="lg:col-span-6 flex flex-col h-full">
              <div className="mb-4">
                <div className="inline-block max-w-full">
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    {t.presence.title}
                  </h3>
                  <div className="w-full h-[3px] bg-[#22c55e] mt-1.5 rounded-full"></div>
                </div>
              </div>

              {/* Master Presence Card */}
              <div className="flex-1 bg-[#fafcfb] rounded-2xl border border-slate-200/90 p-5 shadow-sm flex flex-col justify-between space-y-4">
                
                {/* Modern Pill Switcher */}
                <div className="grid grid-cols-3 gap-1.5 bg-slate-100/90 p-1 rounded-xl text-[11px] sm:text-xs font-semibold text-slate-600">
                  <button 
                    type="button"
                    onClick={() => setActiveRegion('hungary')}
                    className={`py-2 px-2 rounded-lg transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                      activeRegion === 'hungary' 
                        ? 'bg-[#0b3b24] text-white shadow-xs font-bold' 
                        : 'hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#22c55e] shrink-0"></span>
                    <span className="truncate">{t.presence.tabs.hungary}</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setActiveRegion('europe')}
                    className={`py-2 px-2 rounded-lg transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                      activeRegion === 'europe' 
                        ? 'bg-[#0b3b24] text-white shadow-xs font-bold' 
                        : 'hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                    <span className="truncate">{t.presence.tabs.europe}</span>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setActiveRegion('asia')}
                    className={`py-2 px-2 rounded-lg transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                      activeRegion === 'asia' 
                        ? 'bg-[#0b3b24] text-white shadow-xs font-bold' 
                        : 'hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-700 shrink-0"></span>
                    <span className="truncate">{t.presence.tabs.asia}</span>
                  </button>
                </div>

                {/* Regional Details Card with Dynamic Content */}
                <div className="flex-1 p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
                  {activeRegion === 'hungary' && (
                    <div className="space-y-3 animate-fadeIn flex-1 flex flex-col justify-between">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-[#0b3b24] flex items-center justify-center shrink-0">
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
                    <div className="space-y-3 animate-fadeIn flex-1 flex flex-col justify-between">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-[#0b3b24] flex items-center justify-center shrink-0">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-sm sm:text-base text-slate-900 block">
                              {t.presence.europe.name}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              {t.presence.europe.subline}
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
                    <div className="space-y-3 animate-fadeIn flex-1 flex flex-col justify-between">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 text-[#0b3b24] flex items-center justify-center shrink-0">
                            <Factory className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-sm sm:text-base text-slate-900 block">
                              {t.presence.asia.name}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              {t.presence.asia.subline}
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
                    type="button"
                    onClick={() => setCurrentView('contact')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[38px] rounded-lg bg-[#0b3b24] hover:bg-[#072617] text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-colors cursor-pointer shrink-0 shadow-xs group"
                  >
                    <span>{t.common.contactUs}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>

            </Reveal>

          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;

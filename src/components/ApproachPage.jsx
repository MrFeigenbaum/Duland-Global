import React, { useState } from 'react';
import { 
  Search, 
  BarChart2, 
  Handshake, 
  Settings, 
  Target, 
  Leaf, 
  Layers, 
  ShieldCheck, 
  Users,
  CircleDot,
  FileText,
  ChevronDown,
  ChevronUp,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Reveal from './Reveal';

export const ApproachPage = ({ setCurrentView }) => {
  const { t } = useLanguage();
  const [showFullStatement, setShowFullStatement] = useState(false);

  const processIcons = [Search, BarChart2, Handshake, Settings, Target];
  const principleIcons = [Leaf, Layers, CircleDot, ShieldCheck, Users, Leaf];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER */}
      <section className="relative w-full h-[260px] sm:h-[340px] lg:h-[380px] 2xl:h-[420px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_approach_architecture_4k.webp" 
          alt="Investment Approach"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center animate-kenBurns"
          onError={(e) => { e.target.src = '/assets/banner_approach_architecture_4k.jpg'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 sm:via-40% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="border-l-4 sm:border-l-[5px] border-[#22c55e] pl-4 sm:pl-5 mb-2 animate-pageEnter">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {t.approach.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-100 mt-2 font-normal tracking-wide">
                {t.approach.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR INVESTMENT PHILOSOPHY - STRUCTURED EDITORIAL DESIGN */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section Header - Full Width, No collisions */}
          <Reveal className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-widest text-[#0b3b24] uppercase block mb-1">
              Strategic Foundation
            </span>
            <div className="inline-block max-w-full">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                {t.approach.philosophyTitle}
              </h2>
              <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
            </div>
          </Reveal>

          {/* Full-Width Lead Philosophical Block */}
          <Reveal delay={60}>
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-emerald-50/30 to-white border-l-4 border-[#22c55e] border-y border-r border-slate-200 shadow-xs mb-8">
              <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed">
                {t.approach.p1}
              </p>
            </div>
          </Reveal>

          {/* Balanced Symmetrical Middle Grid: 4-Quadrant Matrix (8 cols) + Risk Governance Protocol (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
            
            {/* 4-Quadrant Philosophy Matrix in 8 cols */}
            {t.approach.matrix && (
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                {t.approach.matrix.items.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 70} className="h-full">
                    <div 
                      className="h-full p-5 rounded-2xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-serif text-base font-bold text-[#22c55e] block mb-1">
                          {item.num}
                        </span>
                        <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">
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

            {/* Risk Governance & Core Tenet Column in 4 cols - Centered Cards with Left-Aligned Natural Content */}
            <Reveal delay={120} className="lg:col-span-4 flex flex-col gap-4 justify-between h-full">
              
              <div className="p-5 rounded-2xl bg-[#fafcfb] border border-slate-200 text-slate-800 shadow-2xs flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3.5">
                  <ShieldCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
                  <span className="text-xs font-bold text-[#0b3b24] uppercase tracking-wider">
                    Risk Governance Protocol
                  </span>
                </div>
                
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs text-left hover:border-emerald-200 transition-colors">
                    <strong className="text-slate-800 block text-xs mb-0.5">Underwriting Rigor</strong>
                    <span className="text-slate-600 text-[11px] leading-relaxed block">
                      In-depth cash-flow sensitivity &amp; multi-scenario stress testing.
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs text-left hover:border-emerald-200 transition-colors">
                    <strong className="text-slate-800 block text-xs mb-0.5">Moderate Leverage</strong>
                    <span className="text-slate-600 text-[11px] leading-relaxed block">
                      Strict debt caps &amp; strong interest coverage buffers.
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs text-left hover:border-emerald-200 transition-colors">
                    <strong className="text-slate-800 block text-xs mb-0.5">Liquidity Reserves</strong>
                    <span className="text-slate-600 text-[11px] leading-relaxed block">
                      Preserving capital agility to withstand downturns.
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f0f6f2] border border-emerald-900/10 text-slate-700 text-left">
                <span className="text-xs font-bold text-[#0b3b24] uppercase tracking-wider block mb-1">
                  Core Tenet
                </span>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Patience, independent research, and prudent risk governance across full economic cycles.
                </p>
              </div>

            </Reveal>

          </div>

          {/* Full-Width Collapsible Complete Philosophy Manifesto */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs mb-4">
            <button
              type="button"
              onClick={() => setShowFullStatement(!showFullStatement)}
              aria-expanded={showFullStatement}
              className="w-full px-5 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer text-left"
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#0b3b24] shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  {showFullStatement ? t.approach.hideFullStatement : t.approach.readFullStatement}
                </span>
              </div>
              <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                {showFullStatement ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </div>
            </button>

            <div className={`grid transition-all duration-300 ease-out ${showFullStatement ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="p-6 sm:p-8 bg-white border-t border-slate-200 space-y-5">
                  
                  {/* Article I Preamble Banner */}
                  <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-emerald-50/80 via-emerald-50/30 to-white border-l-4 border-[#22c55e] border-y border-r border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0b3b24] block mb-2">
                      {t.approach.manifestoMeta?.preambleLabel || 'Article I • Foundational Philosophy'}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                      {t.approach.p1}
                    </p>
                  </div>

                  {/* Symmetrical 2-Column 6-Article Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                    {[
                      t.approach.p2,
                      t.approach.p3,
                      t.approach.p4,
                      t.approach.p5,
                      t.approach.p6,
                      t.approach.p7,
                    ].map((paragraph, idx) => {
                      const art = t.approach.manifestoMeta?.articles?.[idx];
                      return (
                        <div
                          key={idx}
                          className="p-5 rounded-xl bg-[#fafcfb] border border-slate-200/90 hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-start"
                        >
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                              {art?.label || `Article 0${idx + 2}`}
                            </span>
                            <span className="font-serif font-bold text-xl text-slate-300/75 select-none leading-none">
                              {art?.num || `0${idx + 2}`}
                            </span>
                          </div>
                          {art?.title && (
                            <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                              {art.title}
                            </h4>
                          )}
                          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                            {paragraph}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Article VIII Closing Charter */}
                  <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#0b3b24] to-[#0f4d30] text-white border border-emerald-800 shadow-xs">
                    <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider block mb-1.5">
                      {t.approach.manifestoMeta?.conclusionLabel || 'Article VIII • Resilient Holding Ambition'}
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-50 font-light leading-relaxed">
                      {t.approach.p8}
                    </p>
                  </div>

                  {/* Subtle Corporate Document Footer */}
                  <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-2 font-medium">
                      <MapPin className="w-4 h-4 text-[#0b3b24]" />
                      <span>1065 Budapest, Révay köz 4., Hungary</span>
                    </div>
                    <span className="text-slate-400">Duland Global Kft. • Philosophy Manifesto</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR INVESTMENT PROCESS */}
      <section className="py-14 sm:py-20 bg-[#fafcfb] border-t border-slate-200">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal className="mb-10">
            <div className="inline-block max-w-full">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                {t.approach.processTitle}
              </h2>
              <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
            {t.process.steps.map((step, idx) => {
              const IconComp = processIcons[idx % processIcons.length];
              return (
                <Reveal key={idx} delay={idx * 70} className="h-full">
                  <div 
                    className="h-full bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 transition-all duration-300 relative group flex flex-col items-center text-center justify-between"
                  >
                    <div className="w-full flex justify-between items-center mb-3">
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 shadow-2xs">
                        Step {idx + 1}
                      </span>
                      <span className="font-serif font-bold text-xl sm:text-2xl text-slate-300/75 select-none leading-none">
                        0{idx + 1}
                      </span>
                    </div>
                    
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0b3b24] flex items-center justify-center mb-3 mx-auto group-hover:scale-105 transition-transform duration-300">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    <h3 className="font-serif text-xs sm:text-[13px] lg:text-sm font-bold text-slate-900 mb-2 sm:whitespace-nowrap text-center">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed text-center">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. GUIDING PRINCIPLES */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            <Reveal className="lg:col-span-4 flex flex-col justify-between h-full">
              <div>
                <div className="inline-block max-w-full mb-4">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
                    {t.approach.principlesTitle}
                  </h2>
                  <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {t.approach.principlesDesc || 'Our core operating principles guide our long-term capital allocation.'}
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex-1 min-h-[220px] relative">
                <img 
                  src="/assets/zen_stones_4k.webp" 
                  alt="Balance & Principles"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/ref_zen_stones.webp'; }}
                />
              </div>
            </Reveal>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {t.approach.principles.map((pr, idx) => {
                const IconComp = principleIcons[idx % principleIcons.length];
                const title = typeof pr === 'object' && pr?.title ? pr.title : pr;
                const desc = typeof pr === 'object' && pr?.desc ? pr.desc : '';
                return (
                  <Reveal key={idx} delay={idx * 60} className="h-full">
                    <div 
                      className="h-full p-5 rounded-2xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-center group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0b3b24] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <IconComp className="w-4 h-4 stroke-[2]" />
                        </div>
                        <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900">
                          {title}
                        </h4>
                      </div>
                      {desc ? (
                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-11">
                          {desc}
                        </p>
                      ) : null}
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

export default ApproachPage;

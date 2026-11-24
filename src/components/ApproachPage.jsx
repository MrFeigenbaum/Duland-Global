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
  ChevronUp
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const ApproachPage = ({ setCurrentView }) => {
  const { t } = useLanguage();
  const [showFullStatement, setShowFullStatement] = useState(false);

  const processIcons = [Search, BarChart2, Handshake, Settings, Target];
  const principleIcons = [Leaf, Layers, CircleDot, ShieldCheck, Users, Leaf];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER */}
      <section className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_approach_strategic_vision.webp" 
          alt="Investment Approach"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.src = '/assets/banner_corporate.webp'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 sm:via-40% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-start gap-3 sm:gap-4 mb-2">
              <span className="w-1.5 h-16 sm:h-20 bg-[#22c55e] shrink-0 mt-1 rounded-xs"></span>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  {t.approach.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-100 mt-2 font-normal tracking-wide">
                  {t.approach.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR INVESTMENT PHILOSOPHY - STRUCTURED EDITORIAL DESIGN */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            
            {/* Left Title Column */}
            <div className="lg:col-span-4">
              <span className="text-xs font-bold tracking-widest text-[#0b3b24] uppercase block mb-1">
                Strategic Foundation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
                {t.approach.philosophyTitle}
              </h2>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-3 mb-5"></div>
              
              <div className="p-5 rounded-2xl bg-[#fafcfb] border border-slate-200 text-slate-700 space-y-2 shadow-2xs">
                <span className="text-xs font-bold text-[#0b3b24] uppercase tracking-wider block">
                  Core Tenet
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Patience, independent research, and prudent risk governance across full economic cycles.
                </p>
              </div>
            </div>

            {/* Right: Lead Statement, 4-Quadrant Matrix & Collapsible Accordion */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Lead Philosophical Block */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-emerald-50/30 to-white border border-slate-200 text-slate-900 font-medium leading-relaxed border-l-4 border-l-[#22c55e] shadow-2xs">
                <p className="text-base sm:text-lg leading-relaxed">{t.approach.p1}</p>
              </div>

              {/* 4-Quadrant Philosophy Matrix */}
              {t.approach.matrix && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.approach.matrix.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-2xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors"
                    >
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
                  ))}
                </div>
              )}

              {/* Collapsible Complete Philosophy Manifesto */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                <button
                  onClick={() => setShowFullStatement(!showFullStatement)}
                  className="w-full px-5 py-3.5 flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#0b3b24]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      {showFullStatement ? t.approach.hideFullStatement : t.approach.readFullStatement}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600">
                    {showFullStatement ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {showFullStatement && (
                  <div className="p-6 bg-white border-t border-slate-200 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p className="p-3 rounded-lg bg-emerald-50/50 text-slate-800 font-medium">{t.approach.p1}</p>
                    <p>{t.approach.p2}</p>
                    <p>{t.approach.p3}</p>
                    <p>{t.approach.p4}</p>
                    <p>{t.approach.p5}</p>
                    <p>{t.approach.p6}</p>
                    <p>{t.approach.p7}</p>
                    <div className="p-4 rounded-xl bg-[#0b3b24] text-white">
                      <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
                        Resilient Holding Ambition
                      </span>
                      <p className="text-xs sm:text-sm text-emerald-50 font-light leading-relaxed">
                        {t.approach.p8}
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR INVESTMENT PROCESS */}
      <section className="py-14 sm:py-20 bg-[#fafcfb] border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              {t.approach.processTitle}
            </h2>
            <div className="w-12 h-[3px] bg-[#22c55e] mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {t.process.steps.map((step, idx) => {
              const IconComp = processIcons[idx % processIcons.length];
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow relative group flex flex-col justify-between"
                >
                  <div className="absolute top-4 right-4 text-slate-200 font-serif font-bold text-3xl group-hover:text-emerald-100 transition-colors">
                    0{idx + 1}
                  </div>
                  
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0b3b24] flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. GUIDING PRINCIPLES */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
                {t.approach.principlesTitle}
              </h2>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-2 mb-4"></div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {t.approach.principlesDesc || 'Our core operating principles guide our long-term capital allocation.'}
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-52 sm:h-64">
                <img 
                  src="/assets/zen_stones_4k.webp" 
                  alt="Balance & Principles"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/ref_zen_stones.webp'; }}
                />
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.approach.principles.map((pr, idx) => {
                const IconComp = principleIcons[idx % principleIcons.length];
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0b3b24] flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4 stroke-[2]" />
                      </div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900">
                        {pr.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed pl-11">
                      {pr.desc}
                    </p>
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

export default ApproachPage;

import React from 'react';
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
  CircleDot
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const ApproachPage = ({ setCurrentView }) => {
  const { t } = useLanguage();

  const processIcons = [Search, BarChart2, Handshake, Settings, Target];
  const principleIcons = [Leaf, Layers, CircleDot, ShieldCheck, Users, Leaf];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER */}
      <section className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_approach_binoculars_4k.webp" 
          alt="Investment Approach"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.src = '/assets/banner_approach_sunset.webp'; }}
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
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-6">
            
            {/* Left Title Column (No awkward line breaks) */}
            <div className="lg:col-span-4">
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

            {/* Right 8 Paragraphs with Comfortable Typography & Structural Rhythm */}
            <div className="lg:col-span-8 space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
              
              {/* Lead Philosophical Block */}
              <div className="p-5 rounded-2xl bg-[#f0f6f2] border border-emerald-900/10 text-slate-900 font-medium leading-relaxed border-l-4 border-l-[#22c55e]">
                {t.approach.p1}
              </div>

              <p>
                {t.approach.p2}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-bold text-[#0b3b24] uppercase tracking-wider block mb-1">
                    Independent Research
                  </span>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {t.approach.p3}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-bold text-[#0b3b24] uppercase tracking-wider block mb-1">
                    Multi-Market Diversification
                  </span>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {t.approach.p4}
                  </p>
                </div>
              </div>

              <p>
                {t.approach.p5}
              </p>
              
              <p>
                {t.approach.p6}
              </p>

              <p>
                {t.approach.p7}
              </p>

              <div className="p-5 rounded-2xl bg-[#0b3b24] text-white mt-4 shadow-sm">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
                  Resilient Holding Ambition
                </span>
                <p className="text-xs sm:text-sm text-emerald-50 font-light leading-relaxed">
                  {t.approach.p8}
                </p>
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

          {/* 5 Process Steps with Connected Arrows */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {t.process.steps.map((step, idx) => {
              const IconComp = processIcons[idx % processIcons.length];
              return (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center p-3 flex-1 w-full max-w-[220px] bg-white rounded-2xl border border-slate-200/90 shadow-2xs">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-[#0b3b24] flex items-center justify-center mb-3 shadow-xs">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1.5 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {idx < t.process.steps.length - 1 && (
                    <div className="hidden md:flex text-slate-400 text-sm font-semibold px-1">
                      →
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. OUR GUIDING PRINCIPLES */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {t.approach.principlesTitle}
              </h3>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-2"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-6 gap-3">
              {t.approach.principles.map((gp, idx) => {
                const IconComp = principleIcons[idx % principleIcons.length];
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-10 h-10 flex items-center justify-center text-[#0b3b24] bg-emerald-50 rounded-full mb-2">
                      <IconComp className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-tight">
                      {gp}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 5. RISK MANAGEMENT & LONG-TERM VALUE (3-Column Layout with Center Zen Stones) */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Risk Management */}
            <div className="lg:col-span-4 bg-[#0b3b24] text-white p-7 sm:p-9 rounded-2xl flex flex-col justify-center shadow-md">
              <h3 className="font-serif text-2xl font-bold text-white">
                {t.approach.riskTitle}
              </h3>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-3 mb-5"></div>
              
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light">
                {t.approach.riskDesc}
              </p>
            </div>

            {/* Center Column: Zen Stones Photo */}
            <div className="lg:col-span-4 h-64 sm:h-80 lg:h-auto min-h-[260px] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <img 
                src="/assets/ref_zen_stones.webp" 
                alt="Balance and Stability"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = '/assets/zen_stones_4k.webp'; }}
              />
            </div>

            {/* Right Column: Long-Term Value */}
            <div className="lg:col-span-4 bg-[#0b3b24] text-white p-7 sm:p-9 rounded-2xl flex flex-col justify-center shadow-md">
              <h3 className="font-serif text-2xl font-bold text-white">
                {t.approach.valueTitle}
              </h3>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-3 mb-5"></div>
              
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light">
                {t.approach.valueDesc}
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ApproachPage;

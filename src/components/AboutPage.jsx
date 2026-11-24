import React from 'react';
import { 
  Building2, 
  Coins, 
  TrendingUp, 
  Leaf, 
  Handshake, 
  Target, 
  Scale, 
  Users,
  Compass,
  ShieldCheck,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const AboutPage = ({ setCurrentView }) => {
  const { t } = useLanguage();

  const focusIcons = [Building2, Coins, TrendingUp, Leaf];
  const valueIcons = [Handshake, Target, Scale, Leaf, Users];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER */}
      <section className="relative w-full h-[280px] sm:h-[340px] lg:h-[380px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_about_headquarters_4k.webp" 
          alt="About Duland Global"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.src = '/assets/banner_about_3mix.webp'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 sm:via-40% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-start gap-3 sm:gap-4 mb-2">
              <span className="w-1.5 h-16 sm:h-20 bg-[#22c55e] shrink-0 mt-1 rounded-xs"></span>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  {t.about.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-100 mt-2 font-normal tracking-wide">
                  {t.about.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE - ELEGANT EDITORIAL STRUCTURE */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              {t.about.whoWeAreTitle}
            </h2>
            <div className="w-12 h-[3px] bg-[#22c55e] mt-2 mb-4"></div>
          </div>

          {/* Lead Corporate Statement */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-emerald-50/30 to-transparent border-l-4 border-[#22c55e] border-y border-r border-slate-200/60 mb-10 shadow-2xs">
            <p className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed">
              {t.about.p1}
            </p>
          </div>

          {/* Split Content: Two Pillars & Context */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Pillar 1 & 2 Callout Box */}
              <div className="p-6 rounded-2xl bg-[#fafcfb] border border-slate-200 shadow-2xs space-y-3">
                <span className="text-xs font-bold text-[#0b3b24] tracking-wider uppercase flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#22c55e]" />
                  Dual Investment Foundation
                </span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {t.about.p2}
                </p>
              </div>

              {/* Tangible Real Estate Scope */}
              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  {t.about.p3}
                </p>
                <p>
                  {t.about.p4}
                </p>
              </div>

              {/* Discipline & Long-Term Philosophy */}
              <div className="border-t border-slate-200/80 pt-5 space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  {t.about.p5}
                </p>
                <p>
                  {t.about.p6}
                </p>
                <div className="p-4 rounded-xl bg-[#0b3b24] text-white mt-4 shadow-sm">
                  <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
                    Long-Term Ambition
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-50 font-light leading-relaxed">
                    {t.about.p7}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Visual Card (5 Cols, Sticky) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-72 sm:h-80 lg:h-[380px]">
                <img 
                  src="/assets/ref_about_hills.webp" 
                  alt="Duland Global Who We Are"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/who_we_are_hills_4k.webp'; }}
                />
              </div>

              {/* Registered Holding Badge */}
              <div className="p-5 rounded-2xl bg-[#f0f6f2] border border-emerald-900/10 text-slate-700 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0b3b24]" />
                  <span className="text-xs font-bold text-[#0b3b24] uppercase tracking-wider">
                    {t.about.holdingBadge}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  {t.about.holdingDesc}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
                  <span className="px-2.5 py-1 rounded bg-white border border-slate-200">1065 Budapest</span>
                  <span className="px-2.5 py-1 rounded bg-white border border-slate-200">Hungary</span>
                  <span className="px-2.5 py-1 rounded bg-white border border-slate-200">Corporate Holding</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR FOCUS */}
      <section className="py-12 bg-[#fafcfb] border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {t.about.ourFocusTitle}
              </h3>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-2"></div>
            </div>

            <div className="lg:col-span-9">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-5 shadow-xs">
                {t.about.focusAreas.map((area, idx) => {
                  const IconComp = focusIcons[idx % focusIcons.length];
                  return (
                    <div key={idx} className="flex flex-col items-center text-center p-2.5">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0b3b24] flex items-center justify-center mb-3">
                        <IconComp className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        {area}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR COMMITMENT (50/50 Split Walkway & Dark Green Box) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            
            {/* Left Image: Walkway */}
            <div className="lg:col-span-6 h-72 sm:h-96 lg:h-auto min-h-[300px]">
              <img 
                src="/assets/ref_about_walkway.webp" 
                alt="Our Commitment"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = '/assets/commitment_walkway_4k.webp'; }}
              />
            </div>

            {/* Right Green Box */}
            <div className="lg:col-span-6 bg-[#0b3b24] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {t.about.commitmentTitle}
              </h3>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-3 mb-5"></div>
              
              <p className="text-sm sm:text-base text-emerald-50 leading-relaxed font-light">
                {t.about.commitmentDesc}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. OUR VALUES */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {t.about.valuesTitle}
              </h3>
              <div className="w-12 h-[3px] bg-[#22c55e] mt-2"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {t.about.values.map((val, idx) => {
                const IconComp = valueIcons[idx % valueIcons.length];
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#0b3b24] mb-2.5">
                      <IconComp className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                      {val}
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

export default AboutPage;

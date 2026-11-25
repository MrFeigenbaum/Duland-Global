import React, { useState } from 'react';
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
  MapPin,
  ChevronDown,
  ChevronUp,
  FileText
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Reveal from './Reveal';
import MEDIA from '../config/media';

export const AboutPage = ({ setCurrentView }) => {
  const { t } = useLanguage();
  const [showFullStatement, setShowFullStatement] = useState(false);

  const focusIcons = [Building2, Coins, TrendingUp, Leaf];
  const valueIcons = [Handshake, Target, Scale, Leaf, Users];
  const principleIcons = [ShieldCheck, Compass, Scale];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER */}
      <section className="relative w-full h-[260px] sm:h-[340px] lg:h-[380px] 2xl:h-[460px] min-[2100px]:h-[520px] overflow-hidden flex items-center">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet={MEDIA.about.banner8k} media="(min-width: 1920px)" type="image/webp" />
          <source srcSet={MEDIA.about.banner} type="image/webp" />
          <img 
            src={MEDIA.about.banner} 
            alt="About Duland Global"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center animate-kenBurns"
            onError={(e) => { e.target.src = MEDIA.about.bannerFallback; }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/58 via-black/28 sm:via-45% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="border-l-4 sm:border-l-[5px] border-[#22c55e] pl-4 sm:pl-5 mb-2 animate-pageEnter">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white banner-title-shadow">
                {t.about.title}
              </h1>
              <p className="text-sm sm:text-base text-white mt-2 font-normal tracking-wide banner-subtitle-shadow">
                {t.about.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE - MODERN INSTITUTIONAL ARCHITECTURE */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <Reveal className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-widest text-[#0b3b24] uppercase block mb-1">
              {t.about.profileEyebrow}
            </span>
            <div className="inline-block max-w-full">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                {t.about.whoWeAreTitle}
              </h2>
              <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
            </div>
          </Reveal>

          {/* Lead Corporate Statement Banner */}
          <Reveal delay={60}>
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-emerald-50/30 to-white border-l-4 border-[#22c55e] border-y border-r border-slate-200 shadow-xs mb-10">
              <p className="text-base sm:text-lg lg:text-xl text-slate-900 font-medium leading-relaxed">
                {t.about.p1}
              </p>
            </div>
          </Reveal>

          {/* Key Metric Strip */}
          {t.about.stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 items-stretch">
              {t.about.stats.map((stat, idx) => (
                <Reveal key={idx} delay={idx * 70} className="h-full">
                  <div 
                    className="h-full p-5 rounded-2xl bg-[#fafcfb] border border-slate-200/90 shadow-2xs hover:border-emerald-300 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="flex items-baseline gap-1.5 mb-1 flex-wrap">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0b3b24] tracking-tight whitespace-nowrap">
                        {stat.value}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#22c55e] uppercase tracking-wider whitespace-nowrap">
                        {stat.unit}
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* DUAL PILLARS INTERACTIVE CARDS */}
          {t.about.dualPillars && (
            <div className="mb-14">
              <Reveal className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-[#22c55e]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0b3b24]">
                  {t.about.dualPillars.badge}
                </h3>
              </Reveal>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                
                {/* Pillar 01: Real Estate */}
                <Reveal delay={60} className="h-full">
                  <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 uppercase tracking-wider">
                          {t.about.dualPillars.p1.tag}
                        </span>
                        <span className="font-serif text-2xl font-bold text-slate-300">
                          {t.about.dualPillars.p1.num}
                        </span>
                      </div>

                      <h4 className="font-serif text-lg sm:text-xl lg:text-[22px] font-bold text-slate-900 mb-3 flex items-center gap-2.5 sm:whitespace-nowrap">
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b3b24] shrink-0" />
                        <span>{t.about.dualPillars.p1.title}</span>
                      </h4>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {t.about.dualPillars.p1.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                        {t.about.dualPillars.p1.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 text-xs font-medium text-slate-700 sm:whitespace-nowrap">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="italic">{t.about.dualPillars.p1.takeaway}</span>
                    </div>
                  </div>
                </Reveal>

                {/* Pillar 02: Financial Portfolio */}
                <Reveal delay={140} className="h-full">
                  <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 uppercase tracking-wider">
                          {t.about.dualPillars.p2.tag}
                        </span>
                        <span className="font-serif text-2xl font-bold text-slate-300">
                          {t.about.dualPillars.p2.num}
                        </span>
                      </div>

                      <h4 className="font-serif text-lg sm:text-xl lg:text-[22px] font-bold text-slate-900 mb-3 flex items-center gap-2.5 sm:whitespace-nowrap">
                        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b3b24] shrink-0" />
                        <span>{t.about.dualPillars.p2.title}</span>
                      </h4>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {t.about.dualPillars.p2.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                        {t.about.dualPillars.p2.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 text-xs font-medium text-slate-700 sm:whitespace-nowrap">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="italic">{t.about.dualPillars.p2.takeaway}</span>
                    </div>
                  </div>
                </Reveal>

              </div>
            </div>
          )}

          {/* 3 CORE STRATEGIC PRINCIPLES */}
          {t.about.corePrinciples && (
            <div className="mb-12">
              <Reveal>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                  {t.about.corePrinciples.title}
                </h3>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {t.about.corePrinciples.items.map((item, idx) => {
                  const Icon = principleIcons[idx % principleIcons.length];
                  return (
                    <Reveal key={idx} delay={idx * 80} className="h-full">
                      <div 
                        className="h-full p-6 rounded-2xl bg-[#fafcfb] border border-slate-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0b3b24] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <Icon className="w-6 h-6 stroke-[1.75]" />
                          </div>
                          <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          )}

          {/* COLLAPSIBLE COMPLETE CORPORATE STATEMENT WITH SMOOTH ACCORDION */}
          <div className="mt-8 rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
            <button
              type="button"
              onClick={() => setShowFullStatement(!showFullStatement)}
              aria-expanded={showFullStatement}
              className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#0b3b24] shrink-0" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                  {showFullStatement ? t.about.hideFullStatement : t.about.readFullStatement}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-300">
                {showFullStatement ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            <div className={`grid transition-all duration-300 ease-out ${showFullStatement ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="p-6 sm:p-8 bg-white border-t border-slate-200 space-y-6">
                  {t.about.statementArticles ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {t.about.statementArticles.map((art, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[11px] font-bold text-[#22c55e] uppercase tracking-wider">
                              {art.label}
                            </span>
                            <span className="text-xs font-semibold text-slate-900">
                              • {art.title}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {art.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <p>{t.about.p1}</p>
                      <p>{t.about.p2}</p>
                      <p>{t.about.p3}</p>
                      <p>{t.about.p4}</p>
                      <p>{t.about.p5}</p>
                      <p>{t.about.p6}</p>
                      <p>{t.about.p7}</p>
                    </div>
                  )}

                  {/* Registered Headquarters Footnote */}
                  <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-2 font-medium">
                      <MapPin className="w-4 h-4 text-[#0b3b24]" />
                      <span>{t.contact.addressLine1}, {t.contact.addressLine2}</span>
                    </div>
                    <span className="text-slate-400">{t.about.statementFooter}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR FOCUS */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <Reveal className="lg:col-span-3">
              <div className="inline-block max-w-full">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  {t.about.ourFocusTitle}
                </h3>
                <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
              </div>
            </Reveal>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3 items-stretch">
              {t.about.focusAreas.map((area, idx) => {
                const IconComp = focusIcons[idx % focusIcons.length];
                return (
                  <Reveal key={idx} delay={idx * 60} className="h-full">
                    <div className="h-full flex flex-col items-center justify-center text-center p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#0b3b24] mb-2.5 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                        {area}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR COMMITMENT (50/50 Split Walkway & Dark Green Box) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-md border border-slate-200 items-stretch">
              
              {/* Left Image: Walkway */}
              <div className="lg:col-span-6 h-64 sm:h-80 lg:h-full lg:min-h-[340px] relative overflow-hidden">
                <img 
                  src={MEDIA.about.commitment} 
                  alt="Our Commitment"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = MEDIA.about.commitmentFallback; }}
                />
              </div>

              {/* Right Green Box */}
              <div className="lg:col-span-6 bg-[#0b3b24] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-block max-w-full mb-5 self-start">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {t.about.commitmentTitle}
                  </h3>
                  <div className="w-full h-[3px] bg-[#22c55e] mt-3 rounded-full"></div>
                </div>
                
                <p className="text-sm sm:text-base text-emerald-50 leading-relaxed font-light">
                  {t.about.commitmentDesc}
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* 5. OUR VALUES */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-[1280px] 2xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <Reveal className="lg:col-span-3">
              <div className="inline-block max-w-full">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  {t.about.valuesTitle}
                </h3>
                <div className="w-full h-[3px] bg-[#22c55e] mt-2 rounded-full"></div>
              </div>
            </Reveal>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-5 gap-3 items-stretch">
              {t.about.values.map((val, idx) => {
                const IconComp = valueIcons[idx % valueIcons.length];
                return (
                  <Reveal key={idx} delay={idx * 60} className="h-full">
                    <div className="h-full flex flex-col items-center justify-center text-center p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-[#0b3b24] mb-2.5 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                        {val}
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

export default AboutPage;

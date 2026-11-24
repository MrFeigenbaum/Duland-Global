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

export const ApproachPage = ({ setCurrentView }) => {
  const processSteps = [
    {
      step: 1,
      title: 'Identify Opportunities',
      desc: 'We continuously screen attractive investment opportunities across markets.',
      icon: Search
    },
    {
      step: 2,
      title: 'Evaluate & Analyze',
      desc: 'We conduct financial, commercial and risk analysis to assess long-term value.',
      icon: BarChart2
    },
    {
      step: 3,
      title: 'Invest & Structure',
      desc: 'We structure investments with a focus on value creation and risk control.',
      icon: Handshake
    },
    {
      step: 4,
      title: 'Manage & Grow',
      desc: 'We actively manage our investments to improve performance and asset value.',
      icon: Settings
    },
    {
      step: 5,
      title: 'Create Lasting Value',
      desc: 'We aim for stable returns, capital growth and long-term, sustainable value.',
      icon: Target
    }
  ];

  const guidingPrinciples = [
    { title: 'Long-Term Perspective', icon: Leaf },
    { title: 'Value Creation', icon: Layers },
    { title: 'Diversification', icon: CircleDot },
    { title: 'Prudent Risk Management', icon: ShieldCheck },
    { title: 'Responsible Investment', icon: Users },
    { title: 'Sustainability', icon: Leaf }
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER: Matching Reference Image 4 */}
      <section className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_approach_binoculars_4k.webp" 
          alt="Investment Approach"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.src = '/assets/banner_approach_sunset.webp'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 sm:via-40% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-start gap-3 sm:gap-4 mb-2">
              <span className="w-1.5 h-14 sm:h-16 bg-[#22c55e] shrink-0 mt-1"></span>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Investment Approach
                </h1>
                <p className="text-xs sm:text-sm text-slate-100 mt-2 font-normal tracking-wide">
                  A Disciplined, Long-Term and Value-Oriented Investment Approach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR INVESTMENT PHILOSOPHY */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Our Investment <br /> Philosophy
              </h2>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-2"></div>
            </div>

            <div className="lg:col-span-8 space-y-3 text-slate-600 text-xs sm:text-[13px] leading-relaxed">
              <p>
                At Duland Global, we take a long-term, disciplined and opportunity-driven approach to investing. We focus on creating sustainable value by combining the stability of real assets with the growth potential of carefully selected financial investments.
              </p>
              <p>
                Our decisions are based on in-depth analysis, sound risk management and a clear focus on long-term returns rather than short-term market movements.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR INVESTMENT PROCESS */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Our Investment Process
            </h2>
            <div className="w-10 h-[3px] bg-[#22c55e] mt-2"></div>
          </div>

          {/* 5 Process Steps with Connected Arrows */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <React.Fragment key={step.step}>
                  <div className="flex flex-col items-center text-center p-2 flex-1 w-full max-w-[200px]">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-[#0b3b24] flex items-center justify-center mb-3 shadow-xs">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <h4 className="font-bold text-xs text-slate-900 mb-1 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {step.desc}
                    </p>
                  </div>
                  {idx < processSteps.length - 1 && (
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
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                Our Guiding <br /> Principles
              </h3>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-1.5"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-6 gap-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {guidingPrinciples.map((gp, idx) => {
                const IconComp = gp.icon;
                return (
                  <div key={idx} className={`flex flex-col items-center text-center p-2 ${idx > 0 ? 'sm:pl-2' : ''}`}>
                    <div className="w-8 h-8 flex items-center justify-center text-[#0b3b24] mb-2">
                      <IconComp className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-900 leading-tight">
                      {gp.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 5. RISK MANAGEMENT & LONG-TERM VALUE (3-Column Layout with Center Zen Stones) */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Risk Management */}
            <div className="lg:col-span-4 bg-[#0b3b24] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-center">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Risk Management
              </h3>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-2 mb-4"></div>
              
              <p className="text-xs text-emerald-100/90 leading-relaxed font-light">
                We take a prudent and balanced approach to risk, assessing market, operational and financial factors for every investment. Our goal is to protect capital, ensure portfolio resilience and maintain long-term financial stability.
              </p>
            </div>

            {/* Center Column: Zen Stones Photo */}
            <div className="lg:col-span-4 h-64 sm:h-72 lg:h-auto min-h-[240px] rounded-2xl overflow-hidden shadow-xs border border-slate-200">
              <img 
                src="/assets/ref_zen_stones.webp" 
                alt="Balance and Stability"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = '/assets/zen_stones_4k.webp'; }}
              />
            </div>

            {/* Right Column: Long-Term Value */}
            <div className="lg:col-span-4 bg-[#0b3b24] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-center">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Long-Term Value
              </h3>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-2 mb-4"></div>
              
              <p className="text-xs text-emerald-100/90 leading-relaxed font-light">
                We focus on investments that generate sustainable income, support asset growth and create lasting value for the long term, while contributing to the economic and environmental development of the regions in which we invest.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ApproachPage;
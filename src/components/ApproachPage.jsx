import React from 'react';
import { 
  Search, 
  BarChart3, 
  Handshake, 
  Settings, 
  Target, 
  Leaf, 
  Layers, 
  ShieldCheck, 
  Users 
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
      icon: BarChart3
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
    { title: 'Diversification', icon: Layers },
    { title: 'Prudent Risk Management', icon: ShieldCheck },
    { title: 'Responsible Investment', icon: Users },
    { title: 'Sustainability', icon: Leaf }
  ];

  return (
    <div className="w-full">
      
      {/* 1. TOP BANNER: Binoculars Overlooking Sunset Mountains */}
      <section className="relative w-full h-[320px] sm:h-[380px] overflow-hidden flex items-center">
        <img 
          src="/assets/binoculars_mountains.webp" 
          alt="Investment Approach"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-10 sm:h-12 bg-[#22c55e] rounded-full"></span>
              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
                Investment Approach
              </h1>
            </div>
            <p className="text-base sm:text-lg text-slate-200 mt-2 pl-5 font-light">
              A Disciplined, Long-Term and Value-Oriented Investment Approach
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR INVESTMENT PHILOSOPHY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Our Investment <br /> Philosophy
              </h2>
              <div className="w-16 h-1 bg-[#006400] mt-3 rounded-full"></div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
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
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our Investment Process
            </h2>
            <div className="w-16 h-1 bg-[#006400] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.step} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-[#006400] transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#006400] flex items-center justify-center mb-4 group-hover:bg-[#006400] group-hover:text-white transition-colors shadow-sm">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-slate-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. GUIDING PRINCIPLES */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Our Guiding Principles
              </h3>
              <div className="w-12 h-1 bg-[#006400] mt-2 rounded-full"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {guidingPrinciples.map((gp, idx) => {
                const IconComp = gp.icon;
                return (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col items-center text-center">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-[#006400] flex items-center justify-center mb-2">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[11.5px] font-bold text-slate-800 leading-tight">
                      {gp.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 5. RISK MANAGEMENT VS LONG-TERM VALUE (With Zen Stone Center Image) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Card: Risk Management */}
            <div className="lg:col-span-4 bg-[#004d00] text-white p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col justify-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Risk Management
              </h3>
              <div className="w-12 h-1 bg-[#22c55e] mb-5 rounded-full"></div>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                We take a prudent and balanced approach to risk, assessing market, operational and financial factors for every investment. Our goal is to protect capital, ensure portfolio resilience and maintain long-term financial stability.
              </p>
            </div>

            {/* Center Image: Balanced Zen Stones in Nature */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden shadow-lg h-72 lg:h-auto min-h-[260px]">
              <img 
                src="/assets/zen_stones_balance.webp" 
                alt="Balance and Resilience"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Card: Long-Term Value */}
            <div className="lg:col-span-4 bg-[#004d00] text-white p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col justify-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Long-Term Value
              </h3>
              <div className="w-12 h-1 bg-[#22c55e] mb-5 rounded-full"></div>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
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

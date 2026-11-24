import React from 'react';
import { 
  Building2, 
  Coins, 
  TrendingUp, 
  Leaf, 
  Handshake, 
  Target, 
  Scale, 
  Users 
} from 'lucide-react';

export const AboutPage = ({ setCurrentView }) => {
  const focusAreas = [
    { title: 'Real Estate Investments', icon: Building2 },
    { title: 'Financial Investments', icon: Coins },
    { title: 'Value Creation', icon: TrendingUp },
    { title: 'Sustainable Development', icon: Leaf },
  ];

  const values = [
    { title: 'Trust', icon: Handshake },
    { title: 'Discipline', icon: Target },
    { title: 'Responsibility', icon: Scale },
    { title: 'Sustainability', icon: Leaf },
    { title: 'Partnership', icon: Users },
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER: Matching Reference Image 2 */}
      <section className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_about_headquarters_4k.webp" 
          alt="About Duland Global"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.src = '/assets/banner_about_3mix.webp'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 sm:via-40% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-start gap-3 sm:gap-4 mb-2">
              <span className="w-1.5 h-14 sm:h-16 bg-[#22c55e] shrink-0 mt-1"></span>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  About Us
                </h1>
                <p className="text-xs sm:text-sm text-slate-100 mt-2 font-normal tracking-wide">
                  A Global Investment Holding for Real Assets and Sustainable Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Who We Are
              </h2>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-2 mb-4"></div>
              
              <div className="space-y-3.5 text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                <p>
                  Duland Global is an international investment holding company focused on building and managing a diversified portfolio of real assets and financial investments.
                </p>
                <p>
                  We invest in high-potential opportunities across different markets and asset classes, with a long-term perspective, a disciplined approach and a commitment to creating lasting value.
                </p>
              </div>
            </div>

            {/* Right Landscape Image: Rolling Green Hills Sunset */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 h-56 sm:h-64">
                <img 
                  src="/assets/ref_about_hills.webp" 
                  alt="Duland Global Who We Are"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/who_we_are_hills_4k.webp'; }}
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR FOCUS */}
      <section className="py-10 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                Our Focus
              </h3>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-1.5"></div>
            </div>

            <div className="lg:col-span-9">
              <div className="bg-[#eef5f1] border border-emerald-900/10 rounded-xl p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-emerald-900/10">
                {focusAreas.map((area, idx) => {
                  const IconComp = area.icon;
                  return (
                    <div key={idx} className={`flex flex-col items-center text-center p-2 ${idx > 0 ? 'sm:pl-4' : ''}`}>
                      <div className="w-10 h-10 flex items-center justify-center text-[#0b3b24] mb-2">
                        <IconComp className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="text-xs font-semibold text-slate-900 leading-tight">
                        {area.title}
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
      <section className="py-10 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            
            {/* Left Image: Walkway */}
            <div className="lg:col-span-6 h-64 sm:h-80 lg:h-auto min-h-[260px]">
              <img 
                src="/assets/ref_about_walkway.webp" 
                alt="Our Commitment"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = '/assets/commitment_walkway_4k.webp'; }}
              />
            </div>

            {/* Right Green Box */}
            <div className="lg:col-span-6 bg-[#0b3b24] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Our Commitment
              </h3>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-2 mb-4"></div>
              
              <p className="text-xs sm:text-[13px] text-emerald-50 leading-relaxed font-light">
                We aim to generate stable returns, support sustainable growth and contribute to the development of the regions in which we invest. We believe in building long-term partnerships based on trust, transparency and shared value.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. OUR VALUES */}
      <section className="py-12 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                Our Values
              </h3>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-1.5"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-5 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {values.map((v, idx) => {
                const IconComp = v.icon;
                return (
                  <div key={idx} className={`flex flex-col items-center text-center p-2 ${idx > 0 ? 'sm:pl-3' : ''}`}>
                    <div className="w-9 h-9 flex items-center justify-center text-[#0b3b24] mb-2">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-semibold text-slate-900 leading-tight">
                      {v.title}
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
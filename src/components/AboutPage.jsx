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
    <div className="w-full">
      
      {/* 1. TOP BANNER: 3-Image Mix with Shadow Transforms */}
      <section className="relative w-full h-[320px] sm:h-[380px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_about_3mix.webp" 
          alt="About Duland Global"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-10 sm:h-12 bg-[#22c55e] rounded-full"></span>
              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
                About Us
              </h1>
            </div>
            <p className="text-base sm:text-lg text-slate-200 mt-2 pl-5 font-light">
              A Global Investment Holding for Real Assets and Sustainable Growth
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
                Who We Are
              </h2>
              <div className="w-16 h-1 bg-[#006400] mt-3 mb-6 rounded-full"></div>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Duland Global is an international investment holding company focused on building and managing a diversified portfolio of real assets and financial investments.
                </p>
                <p>
                  We invest in high-potential opportunities across different markets and asset classes, with a long-term perspective, a disciplined approach and a commitment to creating lasting value.
                </p>
                <p>
                  Operating as an integral member of the Duman Capital group of companies, Duland Global combines deep commercial expertise with strategic agility, positioning capital across Central Europe, the Mediterranean, and Central Asia.
                </p>
              </div>
            </div>

            {/* Right Landscape Image: Rolling Golden Hills 4K */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <img 
                  src="/assets/who_we_are_hills_4k.webp" 
                  alt="Duland Global Landscape"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR FOCUS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900">
                Our Focus
              </h3>
              <div className="w-12 h-1 bg-[#006400] mt-2 rounded-full"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {focusAreas.map((area, idx) => {
                const IconComp = area.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-[#006400] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006400] flex items-center justify-center mb-3 group-hover:bg-[#006400] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {area.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR COMMITMENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            
            {/* Left Image: Modern Residential Pedestrian Walkway 4K */}
            <div className="lg:col-span-6 h-80 lg:h-auto min-h-[320px]">
              <img 
                src="/assets/commitment_walkway_4k.webp" 
                alt="Our Commitment to Sustainable Communities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Green Box */}
            <div className="lg:col-span-6 bg-[#004d00] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                Our Commitment
              </h3>
              <div className="w-12 h-1 bg-[#22c55e] mt-3 mb-6 rounded-full"></div>
              
              <div className="space-y-4 text-emerald-100 text-sm sm:text-base leading-relaxed">
                <p>
                  We aim to generate stable returns, support sustainable growth and contribute to the development of the regions in which we invest.
                </p>
                <p>
                  We believe in building long-term partnerships based on trust, transparency and shared value.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. OUR VALUES */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900">
                Our Values
              </h3>
              <div className="w-12 h-1 bg-[#006400] mt-2 rounded-full"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {values.map((val, idx) => {
                const IconComp = val.icon;
                return (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-[#006400] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006400] flex items-center justify-center mb-3 group-hover:bg-[#006400] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {val.title}
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

import React from 'react';
import { 
  Building, 
  Building2, 
  Factory, 
  Trees, 
  ChevronRight, 
  Layers, 
  Globe, 
  TrendingUp, 
  Leaf, 
  Users, 
  Search, 
  BarChart3, 
  Handshake, 
  Settings, 
  Target, 
  ShieldCheck, 
  Coins, 
  ArrowRight,
  MapPin,
  Calendar
} from 'lucide-react';

export const HomePage = ({ setCurrentView, setSelectedAsset }) => {
  const assetClasses = [
    {
      id: 'residential',
      title: 'Residential Properties',
      icon: Building,
      image: '/assets/prop_residential_4k.webp',
      desc: 'High-quality urban and suburban residential living assets developed for sustainable yields.',
      longDesc: 'Our residential real estate strategy centers on urban multifamily developments, premium suburban complexes, and high-occupancy properties in thriving economic hubs across Europe and regional gateways.'
    },
    {
      id: 'office',
      title: 'Office Properties',
      icon: Building2,
      image: '/assets/prop_office_4k.webp',
      desc: 'Prime modern commercial office complexes offering energy-efficient workplaces and steady occupancy.',
      longDesc: 'Duland Global invests in contemporary office buildings equipped with smart building infrastructure, renewable energy systems, and institutional-quality lease covenants.'
    },
    {
      id: 'industrial',
      title: 'Industrial & Production Assets',
      icon: Factory,
      image: '/assets/prop_industrial_4k.webp',
      desc: 'Strategic manufacturing, logistics, and high-bay distribution facilities connected to trade corridors.',
      longDesc: 'Capitalizing on the expansion of European and Central Asian supply corridors, our industrial portfolio targets strategic warehouses, distribution hubs, and production facilities.'
    },
    {
      id: 'land',
      title: 'Land Investments & Development',
      icon: Trees,
      image: '/assets/prop_land_4k.webp',
      desc: 'High-potential agricultural, commercial, and mixed-use land parcels positioned for future value enhancement.',
      longDesc: 'We identify undervalued, strategically located parcels undergoing infrastructure upgrades, adding value through zoning optimization, utilities installation, and phased development.'
    }
  ];

  const keyFigures = [
    { title: 'Multiple Asset Classes', icon: Layers },
    { title: 'Multi-Country Presence', icon: Globe },
    { title: 'Long-Term Value Creation', icon: TrendingUp },
    { title: 'Sustainable Investments', icon: Leaf },
    { title: 'Professional Management', icon: Users },
  ];

  const focusCards = [
    {
      title: 'Development Projects',
      desc: 'Value creation through new and mixed-use developments.',
      image: '/assets/dev_crane.webp',
      icon: Factory
    },
    {
      title: 'Income-Generating Assets',
      desc: 'Stable and predictable returns from high-quality properties.',
      image: '/assets/dev_warehouse_unique.webp',
      icon: Building2
    },
    {
      title: 'Sustainable Investments',
      desc: 'Long-term assets with environmental and economic value.',
      image: '/assets/dev_solar_4k.webp',
      icon: Leaf
    }
  ];

  const processSteps = [
    { step: 1, title: 'Identify Opportunities', icon: Search },
    { step: 2, title: 'Evaluate & Structure', icon: BarChart3 },
    { step: 3, title: 'Invest & Develop', icon: Handshake },
    { step: 4, title: 'Manage & Grow', icon: Settings },
    { step: 5, title: 'Create Lasting Value', icon: Target }
  ];

  const whyPillars = [
    { title: 'Experience in Real Assets', icon: ShieldCheck },
    { title: 'Diversified Portfolio', icon: Coins },
    { title: 'Long-Term Perspective', icon: Leaf },
    { title: 'Trusted Partnerships', icon: Users }
  ];

  const insights = [
    {
      title: 'Real Estate Market Outlook 2026',
      date: 'Nov 15, 2026',
      image: '/assets/insight_residential_4k.webp'
    },
    {
      title: 'Industrial Assets: A Growing Opportunity',
      date: 'Nov 08, 2026',
      image: '/assets/insight_industrial_4k.webp'
    },
    {
      title: 'Sustainable Investments for the Future',
      date: 'Oct 30, 2026',
      image: '/assets/insight_sustainable_4k.webp'
    }
  ];

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[580px] sm:h-[640px] lg:h-[720px] overflow-hidden flex items-center">
        {/* Background Image: Razor-Sharp 4K Real Assets Architecture */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/hero_banner_real_assets_4k.webp" 
            alt="Duland Global Real Assets Portfolio" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle darkened gradient on left side for crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 sm:via-40% to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            
            {/* Title with Green Accent Bar */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <span className="w-1.5 h-16 sm:h-20 bg-[#22c55e] rounded-full shrink-0 mt-1"></span>
              <div>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-white tracking-tight">
                  Investing in Real Assets for Lasting Value
                </h1>
              </div>
            </div>

            <p className="text-base sm:text-xl text-slate-200 mt-4 font-light leading-relaxed pl-5 sm:pl-6">
              Real Estate & Financial Investments Across Borders
            </p>

            <div className="mt-8 pl-5 sm:pl-6">
              <button 
                onClick={() => setCurrentView('investments')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#006400] hover:bg-[#004d00] text-white text-sm font-bold tracking-wide shadow-lg hover:shadow-emerald-900/40 transition-all border border-emerald-500/30 group cursor-pointer"
              >
                <span>Explore Our Investments</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DIVERSIFIED INVESTMENT PLATFORM */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#006400] uppercase">
              DULAND GLOBAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              A Diversified Investment Platform
            </h2>
            <div className="w-16 h-1 bg-[#006400] mx-auto mt-4 rounded-full"></div>
            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
              We invest in a balanced portfolio of real estate assets and financial instruments, focusing on properties, land development, residential and commercial projects to create sustainable, long-term value.
            </p>
          </div>

          {/* 4 Asset Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assetClasses.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => setSelectedAsset(item)}
                  className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl border border-slate-200 transition-all cursor-pointer flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-4 bg-[#004d00] text-white flex items-center justify-between group-hover:bg-[#006400] transition-colors">
                    <div className="flex items-center gap-2.5">
                      <IconComp className="w-5 h-5 text-emerald-300 shrink-0" />
                      <span className="text-sm font-bold tracking-tight">{item.title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. KEY FIGURES AT A GLANCE (Dark Green Band) */}
      <section className="bg-[#004d00] text-white py-12 border-y border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-bold leading-tight">
                Key Figures <br className="hidden sm:inline" /> at a Glance
              </h3>
              <div className="w-12 h-1 bg-[#22c55e] mt-3 rounded-full"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {keyFigures.map((fig, idx) => {
                const IconComp = fig.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                      <IconComp className="w-6 h-6 text-emerald-300" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-100 leading-snug">
                      {fig.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHERE WE INVEST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-4">
              <span className="text-xs font-mono font-bold tracking-wider text-[#006400] uppercase">
                OUR INVESTMENT FOCUS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Where We Invest
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                We build and manage a diversified portfolio across key real assets, combining stable income with long-term growth potential.
              </p>
              <div className="mt-6">
                <button 
                  onClick={() => setCurrentView('investments')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#006400] text-white text-xs font-bold hover:bg-[#004d00] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {focusCards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div key={idx} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-40 overflow-hidden">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-[#006400] mb-2">
                        <IconComp className="w-4 h-4 shrink-0" />
                        <h4 className="font-bold text-sm text-slate-900">{card.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 5. A DISCIPLINED INVESTMENT PROCESS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image: Boardroom (Col 5) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-[380px] sm:h-[420px]">
                <img 
                  src="/assets/boardroom_globe_4k.webp" 
                  alt="Boardroom Decision Making and Strategy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Flow: Content + 5 Process Step Badges (Col 7) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-[#006400] uppercase">
                  OUR APPROACH
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                  A Disciplined Investment Process
                </h2>
                <div className="w-16 h-1 bg-[#006400] mt-3 mb-4 rounded-full"></div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We follow a structured and long-term approach to identify, evaluate, develop and manage investment opportunities.
                </p>
              </div>

              {/* 5 Steps in Row with Connected Arrows */}
              <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 sm:gap-3">
                {processSteps.map((step, idx) => {
                  const IconComp = step.icon;
                  return (
                    <React.Fragment key={step.step}>
                      <div className="flex flex-col items-center text-center p-2 group flex-1">
                        <div className="w-12 h-12 rounded-full border-2 border-[#006400] bg-white flex items-center justify-center text-[#006400] shadow-sm group-hover:bg-[#006400] group-hover:text-white transition-all">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-800 mt-2 leading-tight">
                          {step.title}
                        </span>
                      </div>
                      {idx < processSteps.length - 1 && (
                        <div className="hidden sm:flex items-center text-slate-300">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. WHY DULAND GLOBAL */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900">
                Why Duland Global
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                A reliable and long-term investment partner with a focus on real assets, financial discipline and sustainable growth.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {whyPillars.map((p, idx) => {
                const IconComp = p.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 text-[#006400] flex items-center justify-center mb-3">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">
                      {p.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 7. LATEST INSIGHTS & OUR PRESENCE */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Latest Insights (7 Cols) */}
            <div className="lg:col-span-7">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                Latest Insights
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {insights.map((article, idx) => (
                  <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group cursor-pointer hover:border-[#006400] transition-colors">
                    <div className="h-32 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <h4 className="font-bold text-xs text-slate-900 group-hover:text-[#006400] transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                        <span>{article.date}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Presence (5 Cols) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Our Presence
                </h3>
                <div className="w-12 h-1 bg-[#006400] mt-2 mb-4 rounded-full"></div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A growing investment platform with a presence across selected markets in Europe and Asia.
                </p>
              </div>

              {/* Graphical World Map / Region Hubs */}
              <div className="my-6 p-5 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-slate-50 border border-slate-200">
                <div className="flex flex-col gap-3 text-xs text-slate-700 font-medium">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#006400] ring-4 ring-emerald-100"></span>
                      <span className="font-bold text-slate-900">Hungary</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#006400] bg-emerald-50 px-2 py-0.5 rounded">Registered Office</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-emerald-100"></span>
                      <span className="font-bold text-slate-900">Central & Southern Europe</span>
                    </div>
                    <span className="text-[11px] text-slate-500">Real Estate Assets</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-lime-600 ring-4 ring-lime-100"></span>
                      <span className="font-bold text-slate-900">Central Asia</span>
                    </div>
                    <span className="text-[11px] text-slate-500">Logistics & Trade</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setCurrentView('contact')}
                className="w-full py-2.5 rounded-lg border border-[#006400] text-[#006400] hover:bg-[#006400] hover:text-white text-xs font-bold tracking-wide transition-colors cursor-pointer"
              >
                Our Regions & Contact &gt;
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;

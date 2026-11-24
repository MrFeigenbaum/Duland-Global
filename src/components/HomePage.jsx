import React from 'react';
import { 
  Building, 
  Building2, 
  Factory, 
  Tractor,
  Layers, 
  Globe, 
  TrendingUp, 
  Leaf, 
  Users, 
  Search, 
  BarChart2, 
  Handshake, 
  Settings, 
  Target, 
  ShieldCheck, 
  Coins, 
  ChevronRight,
  HardHat,
  Package,
  MapPin,
  Sparkles
} from 'lucide-react';

export const HomePage = ({ setCurrentView, setSelectedAsset }) => {
  const [activeRegion, setActiveRegion] = React.useState('hungary');

  const assetClasses = [
    {
      id: 'residential',
      title: 'Residential Properties',
      icon: Building,
      image: '/assets/hq_exact_prop_residential.webp',
      fallbackImage: '/assets/prop_residential.webp',
      desc: 'High-quality urban and suburban residential living assets developed for sustainable yields.'
    },
    {
      id: 'office',
      title: 'Office Properties',
      icon: Building2,
      image: '/assets/hq_exact_prop_office.webp',
      fallbackImage: '/assets/prop_office.webp',
      desc: 'Prime modern commercial office complexes offering energy-efficient workplaces and steady occupancy.'
    },
    {
      id: 'industrial',
      title: 'Industrial & Production Assets',
      icon: Factory,
      image: '/assets/hq_exact_prop_industrial.webp',
      fallbackImage: '/assets/prop_industrial.webp',
      desc: 'Modern production plant, factory, and logistics facility held as key real estate capital assets on the corporate balance sheet.'
    },
    {
      id: 'land',
      title: 'Land Investments & Development',
      icon: Tractor,
      image: '/assets/hq_exact_prop_land.webp',
      fallbackImage: '/assets/prop_land.webp',
      desc: 'High-potential agricultural, commercial, and mixed-use land parcels positioned for future value enhancement.'
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
      image: '/assets/ref_dev_crane.webp',
      icon: HardHat
    },
    {
      title: 'Income-Generating Assets',
      desc: 'Stable and predictable returns from high-quality properties.',
      image: '/assets/ref_dev_warehouse.webp',
      icon: Package
    },
    {
      title: 'Sustainable Investments',
      desc: 'Long-term assets with environmental and economic value.',
      image: '/assets/ref_dev_solar.webp',
      icon: Leaf
    }
  ];

  const processSteps = [
    { step: 1, title: 'Identify Opportunities', icon: Search },
    { step: 2, title: 'Evaluate & Structure', icon: BarChart2 },
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
      image: '/assets/insight_residential_clean.webp'
    },
    {
      title: 'Industrial Assets: A Growing Opportunity',
      date: 'Nov 08, 2026',
      image: '/assets/insight_industrial_clean.webp'
    },
    {
      title: 'Sustainable Investments for the Future',
      date: 'Oct 30, 2026',
      image: '/assets/insight_sustainable_clean.webp'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. REDESIGNED HERO SECTION (Grand, Cinematic & High-Res) */}
      <section className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] overflow-hidden flex items-center">
        {/* Cinematic 4K Panorama Background */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/assets/hero_banner_cinematic_4k.webp" 
            alt="Duland Global Real Assets Portfolio" 
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.src = '/assets/hero_banner_3mix.webp'; }}
          />
          {/* Subtle multi-stage darkened gradient for maximum text contrast and elegance */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 sm:via-40% to-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-2xl text-white">
            
            {/* Subtle Institutional Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-wider text-emerald-200 mb-4 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
              <span>International Investment Holding</span>
            </div>

            {/* Title with Vertical Lime Green Accent Bar */}
            <div className="flex items-start gap-3 sm:gap-4 mb-3">
              <span className="w-1.5 h-20 sm:h-24 bg-[#22c55e] shrink-0 mt-1 rounded-xs"></span>
              <div>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.12] text-white tracking-tight drop-shadow-md">
                  Investing in <br />
                  Real Assets <br />
                  for Lasting Value
                </h1>
                
                <p className="text-xs sm:text-base text-slate-100 mt-3 font-normal tracking-wide max-w-lg leading-relaxed drop-shadow-xs">
                  Real Estate & Financial Investments Across Borders
                </p>

                {/* Primary CTA and Quick Asset Badges */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button 
                    onClick={() => setCurrentView('investments')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#0b3b24] hover:bg-[#072617] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer shadow-lg border border-emerald-500/30 group"
                  >
                    <span>Explore Our Investments</span>
                    <span className="text-xs font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  </button>

                  <button 
                    onClick={() => setCurrentView('approach')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer backdrop-blur-sm border border-white/20"
                  >
                    <span>Our Approach</span>
                  </button>
                </div>

                {/* Quick Asset Categories Row */}
                <div className="mt-8 pt-5 border-t border-white/15 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-emerald-100/80">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#22c55e]"></span>
                    Residential Living
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#22c55e]"></span>
                    Prime Office Parks
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#22c55e]"></span>
                    Production Plants
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#22c55e]"></span>
                    Strategic Land Banks
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DIVERSIFIED INVESTMENT PLATFORM */}
      <section className="py-12 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-slate-500 uppercase block">
              D U L A N D &nbsp; G L O B A L
            </span>
            <h2 className="font-serif text-2xl sm:text-[30px] font-bold text-slate-900 mt-1">
              A Diversified Investment Platform
            </h2>
            <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We invest in a balanced portfolio of real estate assets and financial instruments, focusing on properties, land development, residential and commercial projects to create sustainable, long-term value.
            </p>
          </div>

          {/* 4 Asset Cards (Industrial Shows Plant Exterior) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {assetClasses.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => {
                    if (setSelectedAsset) setSelectedAsset(item);
                  }}
                  className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all cursor-pointer flex flex-col bg-white"
                >
                  <div className="h-36 overflow-hidden relative bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = item.fallbackImage; }}
                    />
                  </div>

                  <div className="px-3.5 py-2.5 bg-[#0b3b24] text-white flex items-center justify-between group-hover:bg-[#072617] transition-colors">
                    <div className="flex items-center gap-2">
                      <IconComp className="w-4 h-4 text-white shrink-0" />
                      <span className="text-xs font-semibold tracking-tight">{item.title}</span>
                    </div>
                    <span className="text-xs text-white/90 font-bold">&gt;</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. KEY FIGURES AT A GLANCE (Dark Green Mountain Band) */}
      <section className="bg-[#0b3b24] text-white py-8 border-y border-emerald-950">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                Key Figures <br /> at a Glance
              </h3>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-2"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {keyFigures.map((fig, idx) => {
                const IconComp = fig.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-2">
                    <div className="w-10 h-10 flex items-center justify-center mb-1.5 text-white">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-medium text-white/95 leading-tight">
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
      <section className="py-12 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-4">
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#0b3b24] uppercase block">
                OUR INVESTMENT FOCUS
              </span>
              <h2 className="font-serif text-2xl sm:text-[28px] font-bold text-slate-900 mt-1">
                Where We Invest
              </h2>
              <p className="mt-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                We build and manage a diversified portfolio across key real assets, combining stable income with long-term growth potential.
              </p>
              <div className="mt-4">
                <button 
                  onClick={() => setCurrentView('investments')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#0b3b24] hover:bg-[#072617] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <span className="text-xs font-bold">&gt;</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {focusCards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                    <div className="h-32 overflow-hidden bg-slate-100">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-3.5 flex-1 flex flex-col justify-start">
                      <div className="flex items-center gap-2 mb-1.5">
                        <IconComp className="w-4 h-4 text-[#0b3b24] shrink-0 stroke-[1.75]" />
                        <h4 className="font-bold text-xs text-slate-900 leading-tight">{card.title}</h4>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
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
      <section className="py-12 bg-[#fafcfb] border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image: Boardroom Globe */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 h-64 sm:h-72">
                <img 
                  src="/assets/ref_boardroom_globe.webp" 
                  alt="A Disciplined Investment Process" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/boardroom_globe_4k.webp'; }}
                />
              </div>
            </div>

            {/* Right: Flow Process */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div>
                <span className="text-[10px] font-sans font-bold tracking-widest text-[#0b3b24] uppercase block">
                  OUR APPROACH
                </span>
                <h2 className="font-serif text-2xl sm:text-[28px] font-bold text-slate-900 mt-1">
                  A Disciplined Investment Process
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-2">
                  We follow a structured and long-term approach to identify, evaluate, develop and manage investment opportunities.
                </p>
              </div>

              {/* 5 Steps in Row with Connected Arrows Exactly Like Reference */}
              <div className="mt-8 flex items-center justify-between gap-1 overflow-x-auto pb-2">
                {processSteps.map((step, idx) => {
                  const IconComp = step.icon;
                  return (
                    <React.Fragment key={step.step}>
                      <div className="flex flex-col items-center text-center px-1 flex-1 min-w-[70px]">
                        <div className="w-11 h-11 rounded-full bg-emerald-50 border border-emerald-200 text-[#0b3b24] flex items-center justify-center shadow-xs">
                          <IconComp className="w-5 h-5 stroke-[1.75]" />
                        </div>
                        <span className="text-[10px] font-medium text-slate-800 mt-2 leading-tight">
                          {step.title}
                        </span>
                      </div>
                      {idx < processSteps.length - 1 && (
                        <div className="text-slate-400 text-xs font-semibold px-0.5 shrink-0">
                          →
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
      <section className="py-10 bg-[#f0f6f2] border-t border-b border-emerald-900/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                Why Duland Global
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed max-w-sm">
                A reliable and long-term investment partner with a focus on real assets, financial discipline and sustainable growth.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {whyPillars.map((p, idx) => {
                const IconComp = p.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-2">
                    <div className="w-9 h-9 flex items-center justify-center text-[#0b3b24] mb-1.5">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-medium text-slate-800 leading-tight">
                      {p.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 7. LATEST INSIGHTS & OUR PRESENCE (Clean High-Res Images & Realistic Vector Map) */}
      <section className="py-12 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Latest Insights (7 Cols - Clean, Beautiful, No-Text Photos) */}
            <div className="lg:col-span-7">
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Latest Insights
              </h3>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-1.5 mb-4"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {insights.map((article, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-xs flex flex-col group cursor-pointer hover:border-[#0b3b24] transition-all hover:shadow-sm"
                  >
                    <div className="h-28 overflow-hidden bg-slate-100 relative">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-3 flex flex-col justify-between flex-1">
                      <h4 className="font-semibold text-xs text-slate-900 group-hover:text-[#0b3b24] transition-colors leading-snug line-clamp-2">
                        {article.title}
                      </h4>
                      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                        <span>{article.date}</span>
                        <span className="font-bold text-xs group-hover:text-[#0b3b24] transition-colors">&gt;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Presence (5 Cols - Interactive Regional Footprint) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Our Presence
                </h3>
                <div className="w-10 h-[3px] bg-[#22c55e] mt-1.5 mb-4"></div>
              </div>

              {/* Interactive Regional Footprint Module */}
              <div className="bg-[#fafcfb] rounded-xl border border-slate-200 p-4 shadow-xs">
                
                {/* Region Selector Pills */}
                <div className="grid grid-cols-3 gap-1.5 mb-3.5 bg-slate-100 p-1 rounded-lg text-[11px] font-semibold text-slate-600">
                  <button 
                    onClick={() => setActiveRegion('hungary')}
                    className={`py-1.5 px-2 rounded-md transition-all cursor-pointer text-center ${
                      activeRegion === 'hungary' 
                        ? 'bg-[#0b3b24] text-white shadow-xs' 
                        : 'hover:text-slate-900'
                    }`}
                  >
                    Budapest (HQ)
                  </button>
                  <button 
                    onClick={() => setActiveRegion('europe')}
                    className={`py-1.5 px-2 rounded-md transition-all cursor-pointer text-center ${
                      activeRegion === 'europe' 
                        ? 'bg-[#0b3b24] text-white shadow-xs' 
                        : 'hover:text-slate-900'
                    }`}
                  >
                    Central Europe
                  </button>
                  <button 
                    onClick={() => setActiveRegion('asia')}
                    className={`py-1.5 px-2 rounded-md transition-all cursor-pointer text-center ${
                      activeRegion === 'asia' 
                        ? 'bg-[#0b3b24] text-white shadow-xs' 
                        : 'hover:text-slate-900'
                    }`}
                  >
                    Central Asia
                  </button>
                </div>

                {/* Regional Details Card */}
                <div className="p-3.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs space-y-2">
                  {activeRegion === 'hungary' && (
                    <div className="space-y-1.5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                          Budapest, Hungary
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-[#0b3b24] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          Corporate Headquarters
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Registered office, central treasury, governance, and institutional asset management hub overseeing investments across Europe.
                      </p>
                      <div className="pt-1.5 flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                        <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">Holding HQ</span>
                        <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">Financial Treasury</span>
                      </div>
                    </div>
                  )}

                  {activeRegion === 'europe' && (
                    <div className="space-y-1.5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#0b3b24]"></span>
                          Central & Southern Europe
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          Active Asset Portfolio
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Core income-generating assets, modern multifamily residential communities, and prime energy-efficient commercial office properties.
                      </p>
                      <div className="pt-1.5 flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                        <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">Residential Living</span>
                        <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">Office Complexes</span>
                      </div>
                    </div>
                  )}

                  {activeRegion === 'asia' && (
                    <div className="space-y-1.5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                          Central Asian Corridors
                        </span>
                        <span className="text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                          Logistics & Industry
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Cross-border trade corridors, modern industrial production plant facilities, and intermodal freight distribution infrastructure.
                      </p>
                      <div className="pt-1.5 flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                        <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">Production Plants</span>
                        <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-200">Trade Infrastructure</span>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Presence Action Button */}
              <div className="mt-3.5 flex items-center justify-between gap-2">
                <p className="text-xs text-slate-600 leading-relaxed max-w-[280px]">
                  A growing investment platform with a presence across selected markets in Europe and Asia.
                </p>
                <button 
                  onClick={() => setCurrentView('contact')}
                  className="px-3.5 py-1.5 rounded-md border border-[#0b3b24] text-[#0b3b24] hover:bg-[#0b3b24] hover:text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer shrink-0 ml-2"
                >
                  Our Regions &gt;
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
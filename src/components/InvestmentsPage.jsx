import React from 'react';
import { 
  Building, 
  Building2, 
  Factory, 
  Tractor,
  Coins, 
  Layers, 
  BarChart2, 
  ShieldCheck, 
  Leaf,
  Binoculars
} from 'lucide-react';

export const InvestmentsPage = ({ setSelectedAsset, setCurrentView }) => {
  const assetPortfolio = [
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
      title: 'Industrial Assets',
      icon: Factory,
      image: '/assets/hq_exact_prop_industrial.webp',
      fallbackImage: '/assets/prop_industrial.webp',
      desc: 'Modern factory production plant and industrial facilities held as tangible fixed real assets on the balance sheet.'
    },
    {
      id: 'land',
      title: 'Land & Development',
      icon: Tractor,
      image: '/assets/hq_exact_prop_land.webp',
      fallbackImage: '/assets/prop_land.webp',
      desc: 'High-potential agricultural, commercial, and mixed-use land parcels positioned for future value enhancement.'
    }
  ];

  const principles = [
    { title: 'Opportunity Focus', icon: Binoculars },
    { title: 'Diversification', icon: Layers },
    { title: 'Sustainable Returns', icon: BarChart2 },
    { title: 'Risk Management', icon: ShieldCheck },
    { title: 'Long-Term Perspective', icon: Leaf },
  ];

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. TOP BANNER: Matching Reference Image 3 */}
      <section className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_investments_skyline_4k.webp" 
          alt="Our Investments"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.target.src = '/assets/banner_investments_3mix.webp'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 sm:via-40% to-transparent"></div>
        
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-start gap-3 sm:gap-4 mb-2">
              <span className="w-1.5 h-14 sm:h-16 bg-[#22c55e] shrink-0 mt-1"></span>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Our Investments
                </h1>
                <p className="text-xs sm:text-sm text-slate-100 mt-2 font-normal tracking-wide">
                  A Diversified Portfolio for Sustainable, Long-Term Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUILDING LONG-TERM VALUE */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Building <br /> Long-Term <br /> Value
              </h2>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-2"></div>
            </div>

            <div className="lg:col-span-8 space-y-3 text-slate-600 text-xs sm:text-[13px] leading-relaxed">
              <p>
                At Duland Global, we invest in a diversified portfolio of real assets and financial instruments, aiming to generate stable returns, preserve capital and create lasting value across different markets.
              </p>
              <p>
                Our investments are built on a long-term perspective, a disciplined approach and a focus on high-potential opportunities.
              </p>
            </div>
          </div>

          {/* TWO LARGE FEATURE CARDS (Real Estate vs Financial) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Card 1: Real Estate Investments */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col sm:flex-row bg-[#0b3b24]">
              <div className="sm:w-1/2 h-52 sm:h-auto overflow-hidden relative bg-slate-900">
                <img 
                  src="/assets/ref_inv_real_estate.webp" 
                  alt="Real Estate Investments" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/prop_residential_4k.webp'; }}
                />
              </div>

              <div className="sm:w-1/2 p-6 flex flex-col justify-between text-white">
                <div>
                  <div className="w-9 h-9 flex items-center justify-center text-emerald-300 mb-2">
                    <Building className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    Real Estate Investments
                  </h3>
                  <p className="text-xs text-emerald-100/90 leading-relaxed font-light">
                    Acquisition, development and long-term management of income-generating real estate assets.
                  </p>
                </div>

                <div className="mt-5">
                  <button 
                    onClick={() => {
                      if (setSelectedAsset) setSelectedAsset(assetPortfolio[0]);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/80 text-white text-xs font-semibold hover:bg-white hover:text-[#0b3b24] transition-colors cursor-pointer"
                  >
                    <span>Explore Real Estate</span>
                    <span className="font-bold">&gt;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Financial Investments */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col sm:flex-row bg-[#0b3b24]">
              <div className="sm:w-1/2 h-52 sm:h-auto overflow-hidden relative bg-slate-900">
                <img 
                  src="/assets/financial_upward_bullish_hq.webp" 
                  alt="Financial Investments" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/hq_exact_financial_invest.webp'; }}
                />
              </div>

              <div className="sm:w-1/2 p-6 flex flex-col justify-between text-white">
                <div>
                  <div className="w-9 h-9 flex items-center justify-center text-emerald-300 mb-2">
                    <Coins className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    Financial Investments
                  </h3>
                  <p className="text-xs text-emerald-100/90 leading-relaxed font-light">
                    A diversified investment portfolio focused on capital growth, income and financial stability.
                  </p>
                </div>

                <div className="mt-5">
                  <button 
                    onClick={() => {
                      if (setCurrentView) setCurrentView('contact');
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/80 text-white text-xs font-semibold hover:bg-white hover:text-[#0b3b24] transition-colors cursor-pointer"
                  >
                    <span>Explore Financial</span>
                    <span className="font-bold">&gt;</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR INVESTMENT PORTFOLIO */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Our Investment Portfolio
              </h2>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-2"></div>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 max-w-xl leading-relaxed">
              We invest across a broad range of real estate asset classes, creating a balanced and resilient portfolio with both income-generating and development opportunities.
            </p>
          </div>

          {/* 4 Cards in Row matching Reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {assetPortfolio.map((item) => {
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

      {/* 4. INVESTMENT PRINCIPLES */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                Investment Principles
              </h3>
              <div className="w-10 h-[3px] bg-[#22c55e] mt-1.5"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-5 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {principles.map((pr, idx) => {
                const IconComp = pr.icon;
                return (
                  <div key={idx} className={`flex flex-col items-center text-center p-2 ${idx > 0 ? 'sm:pl-3' : ''}`}>
                    <div className="w-9 h-9 flex items-center justify-center text-[#0b3b24] mb-2">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-semibold text-slate-900 leading-tight">
                      {pr.title}
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

export default InvestmentsPage;
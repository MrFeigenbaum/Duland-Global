import React from 'react';
import { 
  Building, 
  Building2, 
  Factory, 
  Trees, 
  Coins, 
  TrendingUp, 
  ChevronRight, 
  Binoculars, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  Leaf 
} from 'lucide-react';

export const InvestmentsPage = ({ setSelectedAsset, setCurrentView }) => {
  const assetPortfolio = [
    {
      id: 'residential',
      title: 'Residential Properties',
      icon: Building,
      image: '/assets/prop_residential_4k.webp',
      desc: 'Acquisition and development of high-yield residential communities and urban living apartments.',
      longDesc: 'Our residential real estate strategy centers on urban multifamily developments, premium suburban complexes, and high-occupancy properties in thriving economic hubs across Europe and regional gateways.'
    },
    {
      id: 'office',
      title: 'Office Properties',
      icon: Building2,
      image: '/assets/prop_office_4k.webp',
      desc: 'Prime business parks and headquarters-grade office assets with high ESG standards and tier-1 tenants.',
      longDesc: 'Duland Global invests in contemporary office buildings equipped with smart building infrastructure, renewable energy systems, and institutional-quality lease covenants.'
    },
    {
      id: 'industrial',
      title: 'Industrial Assets',
      icon: Factory,
      image: '/assets/prop_industrial_4k.webp',
      desc: 'Modern manufacturing plants, intermodal cross-docks, and logistics fulfillment infrastructure.',
      longDesc: 'Capitalizing on the expansion of European and Central Asian supply corridors, our industrial portfolio targets strategic warehouses, distribution hubs, and production facilities.'
    },
    {
      id: 'land',
      title: 'Land & Development',
      icon: Trees,
      image: '/assets/prop_land_4k.webp',
      desc: 'Zoned land banks, master-planned residential plots, and strategic commercial development acreage.',
      longDesc: 'We identify undervalued, strategically located parcels undergoing infrastructure upgrades, adding value through zoning optimization, utilities installation, and phased development.'
    }
  ];

  const principles = [
    { title: 'Opportunity Focus', icon: Binoculars },
    { title: 'Diversification', icon: Layers },
    { title: 'Sustainable Returns', icon: BarChart3 },
    { title: 'Risk Management', icon: ShieldCheck },
    { title: 'Long-Term Perspective', icon: Leaf },
  ];

  return (
    <div className="w-full">
      
      {/* 1. TOP BANNER: 3-Image Mix with Shadow Transforms */}
      <section className="relative w-full h-[320px] sm:h-[380px] overflow-hidden flex items-center">
        <img 
          src="/assets/banner_investments_3mix.webp" 
          alt="Our Investments"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-10 sm:h-12 bg-[#22c55e] rounded-full"></span>
              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight">
                Our Investments
              </h1>
            </div>
            <p className="text-base sm:text-lg text-slate-200 mt-2 pl-5 font-light">
              A Diversified Portfolio for Sustainable, Long-Term Growth
            </p>
          </div>
        </div>
      </section>

      {/* 2. BUILDING LONG-TERM VALUE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Building <br /> Long-Term Value
              </h2>
              <div className="w-16 h-1 bg-[#006400] mt-3 rounded-full"></div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                At Duland Global, we invest in a diversified portfolio of real assets and financial instruments, aiming to generate stable returns, preserve capital and create lasting value across different markets.
              </p>
              <p>
                Our investments are built on a long-term perspective, a disciplined approach and a focus on high-potential opportunities.
              </p>
            </div>
          </div>

          {/* TWO PRIMARY PILLARS (Real Estate vs Financial) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pillar 1: Real Estate 4K */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-lg flex flex-col group hover:border-[#006400] transition-all">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/assets/prop_residential_4k.webp" 
                  alt="Real Estate Investments" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 text-[#006400] backdrop-blur-sm">
                  <Building className="w-6 h-6" />
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                    Real Estate Investments
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Acquisition, development and long-term management of income-generating real estate assets across residential, office, logistics and land sectors.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <button 
                    onClick={() => setSelectedAsset(assetPortfolio[0])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#006400] text-white text-xs font-bold hover:bg-[#004d00] transition-colors cursor-pointer"
                  >
                    <span>Explore Real Estate</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pillar 2: Financial Investments (Chart + Stacked Gold Coins 4K) */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-lg flex flex-col group hover:border-[#006400] transition-all">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/assets/financial_invest_4k.webp" 
                  alt="Financial Investments" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 text-[#006400] backdrop-blur-sm">
                  <Coins className="w-6 h-6" />
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                    Financial Investments
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A diversified investment portfolio focused on capital growth, income generation, structured yields and financial stability across institutional assets.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <button 
                    onClick={() => setCurrentView('approach')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#006400] text-white text-xs font-bold hover:bg-[#004d00] transition-colors cursor-pointer"
                  >
                    <span>Explore Financial</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR INVESTMENT PORTFOLIO */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-3xl font-extrabold text-slate-900 leading-tight">
                Our Investment <br /> Portfolio
              </h2>
              <div className="w-16 h-1 bg-[#006400] mt-3 rounded-full"></div>
            </div>
            <div className="lg:col-span-8 text-slate-600 text-sm sm:text-base leading-relaxed">
              We invest across a broad range of real estate asset classes, creating a balanced and resilient portfolio with both income-generating and development opportunities.
            </div>
          </div>

          {/* 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assetPortfolio.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => setSelectedAsset(item)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col group"
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
                    <div className="flex items-center gap-2">
                      <IconComp className="w-4 h-4 text-emerald-300" />
                      <span className="text-xs sm:text-sm font-bold tracking-tight">{item.title}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. INVESTMENT PRINCIPLES */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Investment Principles
              </h3>
              <div className="w-12 h-1 bg-[#006400] mt-2 rounded-full"></div>
            </div>

            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {principles.map((pr, idx) => {
                const IconComp = pr.icon;
                return (
                  <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#006400] flex items-center justify-center mb-2">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">
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

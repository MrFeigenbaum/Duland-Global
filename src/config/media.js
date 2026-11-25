export const MEDIA_VERSION = '20261125v4';
const v = (path) => `${path}?v=${MEDIA_VERSION}`;

export const MEDIA = {
  hero: {
    primary8k: v('/assets/hero_banner_cinematic_8k.webp'),
    primary: v('/assets/hero_banner_cinematic_4k.webp'),
    fallback: v('/assets/hero_banner_3mix.webp'),
  },
  portfolio: {
    residential: {
      primary: v('/assets/hq_exact_prop_residential.webp'),
      fallback: v('/assets/prop_residential.webp'),
    },
    office: {
      primary: v('/assets/hq_exact_prop_office.webp'),
      fallback: v('/assets/prop_office.webp'),
    },
    industrial: {
      primary: v('/assets/hq_exact_prop_industrial.webp'),
      fallback: v('/assets/prop_industrial.webp'),
    },
    land: {
      primary: v('/assets/hq_exact_prop_land.webp'),
      fallback: v('/assets/prop_land.webp'),
    },
  },
  focus: {
    development: v('/assets/focus_dev_crane_hq.webp'),
    logistics: v('/assets/focus_warehouse_hq.webp'),
    sustainable: v('/assets/focus_solar_blue_hq.webp'),
  },
  insights: [
    v('/assets/insight_residential_clean.webp'),
    v('/assets/insight_industrial_clean.webp'),
    v('/assets/insight_sustainable_clean.webp'),
  ],
  about: {
    banner8k: v('/assets/banner_about_headquarters_8k.webp'),
    banner: v('/assets/banner_about_headquarters_4k.webp'),
    bannerFallback: v('/assets/banner_about_3mix.webp'),
    commitment: v('/assets/ref_about_walkway.webp'),
    commitmentFallback: v('/assets/commitment_walkway_4k.webp'),
  },
  investments: {
    banner8k: v('/assets/banner_investments_skyline_8k.webp'),
    banner: v('/assets/banner_investments_skyline_4k.webp'),
    bannerFallback: v('/assets/banner_investments_3mix.webp'),
    realEstatePillar: v('/assets/prop_residential_4k.webp'),
    realEstateFallback: v('/assets/hq_exact_prop_residential.webp'),
    financialPillar: v('/assets/financial_markets_institutional_4k.webp'),
    financialFallback: v('/assets/financial_markets_institutional_4k.jpg'),
  },
  approach: {
    banner8k: v('/assets/banner_approach_architecture_8k.webp'),
    banner: v('/assets/banner_approach_architecture_4k.webp'),
    bannerFallback: v('/assets/banner_approach_architecture_4k.jpg'),
    coreTenet: v('/assets/zen_stones_4k.webp'),
    coreTenetFallback: v('/assets/ref_zen_stones.webp'),
  },
  contact: {
    banner8k: v('/assets/banner_contact_terrace_8k.webp'),
    banner: v('/assets/banner_contact_terrace_4k.webp'),
    bannerFallback: v('/assets/banner_contact_3mix.webp'),
    desk: v('/assets/ref_contact_desk.webp'),
    deskFallback: v('/assets/contact_desk_4k.webp'),
  },
};

export default MEDIA;

import { ServiceEnum } from "@shared/enum/service.enum";

export interface IServicesData {
  title: string;
  description: string;
  slug: string;
  src: string;
  serviceType: ServiceEnum;
}

export const SERVICES_DATA: Array<IServicesData> = [
  {
    slug: "crafting-disctinctive-identities",
    title: "Crafting Distinctive Identities",
    description:
      "Our brand management services are designed to help businesses stand out in the crowded marketplace. We work closely with you to define and refine your brand identity, ensuring it aligns seamlessly with your values and resonates with your target audience.",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710066163/tycoon-awards/services/Crafting_Distinctive_Identities_zdttif.webp",
    serviceType: ServiceEnum.BRAND_MGMT_SERVICE,
  },
  {
    slug: "brand-strategy-developments",
    title: "Brand Strategy Development",
    description:
      "Building a successful brand requires a well-defined strategy. We assist in developing comprehensive brand strategies that encompass everything from visual elements to messaging, fostering a cohesive and memorable brand experience.",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710066164/tycoon-awards/services/Brand_Strategy_Development_gsnuc3.webp",
    serviceType: ServiceEnum.BRAND_MGMT_SERVICE,
  },
  {
    slug: "brand-positionin",
    title: "Brand Positioning",
    description:
      "Discovering the right market positioning is crucial. We analyze market trends, consumer behavior, and competitor landscapes to position your brand effectively, ensuring it occupies a unique and valuable space in the minds of your audience.",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710066163/tycoon-awards/services/Brand_Positioning_zhmduv.webp",
    serviceType: ServiceEnum.BRAND_MGMT_SERVICE,
  },
  {
    slug: "consistent-branding-across-platforms",
    title: "Consistent Branding Across Platforms",
    description:
      "Consistency is key to brand recognition. We ensure that your brand is represented consistently across all platforms, from your website and social media to marketing collateral, reinforcing a strong and unified brand presence.",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710066163/tycoon-awards/services/Consistent_Branding_Across_Platforms_ntqnvo.webp",
    serviceType: ServiceEnum.BRAND_MGMT_SERVICE,
  },
  {
    slug: "comprehensive-market-analysis",
    title: "Comprehensive Market Analysis",
    description:
      "Our  provide id-challengesn-depth insights into your industry, competition, and target audience. We conduct thorough analyses to identify opportunities and challenges, helping you make informed decisions.",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710066163/tycoon-awards/services/Comprehensive_Market_Analysis_joifie.webp",
    serviceType: ServiceEnum.MARKET_RESEARCH_SERVICE,
  },
  {
    slug: "consumer-behavior-studies",
    title: "Consumer Behavior Studies",
    description:
      "Understanding your audience is fundamental to success. We delve into consumer behavior, preferences, and trends, allowing you to tailor your products or services to meet the evolving needs of your customers.",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710066163/tycoon-awards/services/Consumer_Behavior_Studies_gpqbwf.webp",
    serviceType: ServiceEnum.MARKET_RESEARCH_SERVICE,
  },
  {
    slug: "competitor-analysis",
    title: "Competitor Analysis",
    description:
      "Stay ahead of the competition with our detailed competitor analysis. We identify strengths, weaknesses, and opportunities in the market, enabling you to refine your strategies and gain a competitive edge.",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710066163/tycoon-awards/services/Competitor_Analysis_gt6jqd.webp",
    serviceType: ServiceEnum.MARKET_RESEARCH_SERVICE,
  },
  {
    slug: "trend-identification-and-forecasting",
    title: "Trend Identification and Forecasting",
    description:
      "Partner with us for trend identification, forecasting, and tailored brand management. Elevate your brand in today's dynamic business landscape. Gain insights to capitalize on emerging opportunities and thrive in the market.",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710066163/tycoon-awards/services/Trend_Identification_and_Forecasting_negyd4.webp",
    serviceType: ServiceEnum.MARKET_RESEARCH_SERVICE,
  },
];

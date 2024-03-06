import { FALSE } from "sass";

export interface UnlockOpportunities {
  title: string;
  description: string;
  isFull: boolean;
  link?: string;
}

export const UNLOCK_OPPORTUNITIES_DATA: Array<UnlockOpportunities> = [
  {
    title: "Cost-Free Entry Across All Sectors and Categories",
    description:
      "Understanding the financial constraints faced by small business owners, entrepreneurs, and larger organizations, we've eliminated upfront entry fees ranging from 1000 Rs to over 5000 Rs per category. At Tycoons Of Asia Awards India, all your entries come at no cost.",
    isFull: true,
  },
  {
    title: "Pay Only Upon Victory",
    description:
      "Why invest in entry fees with no guaranteed return? With us, you only pay a fee if you clinch an award. It's a straightforward and fair approach – pay an Award Acceptance Fee only when you emerge victorious, and relish a host of exclusive benefits.",
    isFull: false,
  },
  {
    title: "Comprehensive Publicity Package",
    description:
      "As a winner or finalist, bask in the glory of credible industry recognition and publicity. Benefit from national press releases, features on Google and Yahoo! News, content marketing, and detailed case studies that amplify your success.",
    isFull: false,
  },
  {
    title: "Strategic Social Marketing",
    description:
      "Harness the power of social media for your business. We proudly announce your achievements on various social platforms and maintain regular engagement with you and your followers to maximize your digital presence.",
    isFull: false,
  },
  {
    title: "Exclusive Interviews and PR Opportunities",
    description:
      "Elevate your standing in the industry through quality, in-depth content featuring your team. Become a trusted voice in your sector as we highlight the achievements and success of your business or enterprise through interviews and PR initiatives.",
    isFull: false,
  },
  {
    title: "Join a Community of Success",
    description:
      "Hundreds of SMEs, enterprise companies, and entrepreneurs have already discovered the unparalleled benefits of our business awards. Seize the opportunity – ENTER AWARDS NOW and embark on a journey to elevate your business profile. (CTA)",
    isFull: true,
    link: "/nomination",
  },
];

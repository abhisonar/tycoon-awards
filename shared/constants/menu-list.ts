import {
  RouteLabelEnum,
  RouteLinkEnum,
  SubRouteLabelEnum,
  SubRouteLinkEnum,
} from "@shared/enum/route.enum";
import { IMainMenu } from "../interface/base/IMainMenu";

export const MAIN_MENUS: IMainMenu[] = [
  {
    label: RouteLabelEnum.HOME,
    link: RouteLinkEnum.HOME,
    hasSubMenu: false,
  },
  {
    label: RouteLabelEnum.ABOUT_US,
    link: RouteLinkEnum.ABOUT_US,
    hasSubMenu: false,
  },
  // {
  //   label: RouteLabelEnum.GALLERY,
  //   link: RouteLinkEnum.GALLERY,
  //   hasSubMenu: false,
  // },
  {
    label: RouteLabelEnum.SERVICES,
    link: RouteLinkEnum.SERVICES,
    hasSubMenu: true,
    subMenus: [
      {
        label: SubRouteLabelEnum.MARKET_RESEARCH,
        link: SubRouteLinkEnum.MARKET_RESEARCH,
      },
      {
        label: SubRouteLabelEnum.BRAND_MGMT,
        link: SubRouteLinkEnum.BRAND_MGMT,
      },
    ],
  },
  {
    label: RouteLabelEnum.CATEGORY,
    link: RouteLinkEnum.CATEGORY,
    hasSubMenu: false,
  },
  {
    label: RouteLabelEnum.NOMINATION,
    link: RouteLinkEnum.NOMINATION,
    hasSubMenu: false,
  },
  {
    label: RouteLabelEnum.SPONSORSHIP,
    link: RouteLinkEnum.SPONSORSHIP,
    hasSubMenu: false,
  },
  // {
  //   label: RouteLabelEnum.MEDIA,
  //   link: RouteLinkEnum.MEDIA,
  //   hasSubMenu: false,
  // }
  {
    label: RouteLabelEnum.CONTACT_US,
    link: RouteLinkEnum.CONTACT_US,
    hasSubMenu: false,
  },
];

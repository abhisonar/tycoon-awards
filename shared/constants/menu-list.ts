import { IMainMenu } from "../interface/base/IMainMenu";

export enum RouteLinkEnum {
  HOME = "/",
  SERVICES = "/services",
  OUR_PROJECT = "/our-project",
  ABOUT_US = "/about-us",
  CONTACT_US = "/contact-us",
}

export const MAIN_MENUS: IMainMenu[] = [
  {
    label: "HOME",
    link: RouteLinkEnum.HOME,
    hasSubMenu: false,
  },
  // {
  //   label: "OUR PROJECT",
  //   link: RouteLinkEnum.OUR_PROJECT,
  //   subLink: "#our-project",
  //   hasSubMenu: false,
  //   subMenus: [
  //     { label: "Our Clients", link: "/our-clients" },
  //     { label: "Client Testimonials", link: "/testimonials" },
  //   ],
  // },
  {
    label: "SERVICES",
    link: RouteLinkEnum.SERVICES,
    subLink: `#services`,
    hasSubMenu: false,
  },
  {
    label: "ABOUT US",
    link: RouteLinkEnum.ABOUT_US,
    subLink: `#about-us`,
    hasSubMenu: false,
  },
  // {
  //   label: "CONTACT",
  //   link: RouteLinkEnum.CONTACT_US,
  //   subLink: `#contact-us`,
  //   hasSubMenu: false,
  // },
];

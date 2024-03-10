"use client";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { MAIN_MENUS } from "@shared/constants/menu-list";
import "./navbar.component.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPathName = usePathname();
  return (
    <div className="navbar h-[80px] flex items-center justify-between w-full">
      <div className="flex justify-center items-center w-[200px] ml-4">
        <img
          src="/assets/logo-horizontal.png"
          alt="tycoon-awards-logo"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="relative flex h-9 w-9 mr-5 lg:hidden">
        <span className="animate-ping absolute h-full w-full rounded-full bg-primary-default opacity-20"></span>
        <span
          className="relative flex justify-center items-center rounded-full h-9 w-9 p-4 bg-primary-default"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <CloseRoundedIcon className="text-white" fontSize="medium" />
          ) : (
            <MenuRoundedIcon className="text-white" fontSize="medium" />
          )}
        </span>
      </span>
      <div className={`menu-list ${isMenuOpen ? "menu-open" : ""}`}>
        {MAIN_MENUS.map((menu) => (
          <Link
            href={menu.link}
            className={currentPathName === menu.link ? "link-active" : ""}
            onClick={() => setIsMenuOpen(false)}
            key={menu.label}>
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarComponent;

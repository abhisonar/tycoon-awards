"use client";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { MAIN_MENUS } from "@shared/constants/menu-list";
import "./navbar.component.scss";
import Image from "next/image";
import Link from "next/link";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar h-[80px] flex items-center justify-between px-4">
      <div className="flex justify-center items-center w-[100px]">
        <Image
          src={`/assets/logo.png`}
          alt="tycoon-awards-logo"
          className="w-full h-full object-cover"
          width={100}
          height={130}
        />
      </div>
      <span className="relative flex h-9 w-9 mr-3 lg:hidden">
        <span className="animate-ping absolute h-full w-full rounded-full bg-black opacity-20"></span>
        <span
          className="relative flex justify-center items-center rounded-full h-9 w-9 p-4 bg-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <CloseRoundedIcon color="primary" fontSize="medium" />
          ) : (
            <MenuRoundedIcon color="primary" fontSize="medium" />
          )}
        </span>
      </span>
      <div className={`menu-list ${isMenuOpen ? "menu-open" : ""}`}>
        {MAIN_MENUS.map((menu) => (
          <Link href={menu.link} onClick={() => setIsMenuOpen(false)} key={menu.label}>
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarComponent;

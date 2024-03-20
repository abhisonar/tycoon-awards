"use client";
import React, { useEffect, useState } from "react";
import PageLayout from "./page-layout/page-layout.component";
import UiLoader from "@ui/ui-loader/ui-loader";
import FooterComponent from "./footer/footer.component";
import NavbarComponent from "./navbar/navbar.component";
interface ILayout {
  children?: React.ReactNode;
}

const LayoutComponent: React.FC<ILayout> = ({ children }) => {
  const [layoutLoading, setLayoutLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLayoutLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {/* {layoutLoading ? (
        <UiLoader />
      ) : ( */}
      <div className="app-layout min-h-screen relative">
        <NavbarComponent />
        <PageLayout>{children}</PageLayout>
        <FooterComponent />
      </div>
      {/* )} */}
    </>
  );
};
export default LayoutComponent;

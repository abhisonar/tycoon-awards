import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const AboutUsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"About Us"}
      posterSrc="https://res.cloudinary.com/marathiudyojak/image/upload/v1710096798/tycoon-awards/headers/About_Us_rxpwda.webp"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "About Us", link: "/about-us" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default AboutUsLayout;

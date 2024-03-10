import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const SponsorshipLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Sponsorship"}
      posterSrc="https://res.cloudinary.com/marathiudyojak/image/upload/v1710096799/tycoon-awards/headers/Sponsorship_pwmdg0.webp"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Sponsorship", link: "/sponsorship" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default SponsorshipLayout;

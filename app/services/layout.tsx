import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Services"}
      posterSrc="https://res.cloudinary.com/marathiudyojak/image/upload/v1710096798/tycoon-awards/headers/Market_Research_u1s3ey.webp"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Services", link: "/services" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default ServicesLayout;

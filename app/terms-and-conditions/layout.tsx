import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const TermsAndConditionsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Terms And Conditions"}
      posterSrc="https://res.cloudinary.com/marathiudyojak/image/upload/v1710097128/tycoon-awards/headers/award_ovwswq.webp"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Terms and Conditions", link: "/terms-and-conditions" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default TermsAndConditionsLayout;

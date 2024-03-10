import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const PrivacyPolicyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Privacy Policy"}
      posterSrc="https://res.cloudinary.com/marathiudyojak/image/upload/v1710097128/tycoon-awards/headers/award_ovwswq.webp"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Privacy Policy", link: "/privacy-policy" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default PrivacyPolicyLayout;

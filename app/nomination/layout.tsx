import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const NominationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Nomination"}
      posterSrc="https://res.cloudinary.com/marathiudyojak/image/upload/v1710096798/tycoon-awards/headers/Nomination_3_phxw0q.webp"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Nomination", link: "/nomination" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default NominationLayout;

import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const NominationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Nomination"}
      posterSrc="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2021/04/OLC-Awards-Thumbnail-1200x800.jpg"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Nomination", link: "/nomination" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default NominationLayout;

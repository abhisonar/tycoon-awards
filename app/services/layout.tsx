import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Services"}
      posterSrc="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2021/04/OLC-Awards-Thumbnail-1200x800.jpg"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Services", link: "/services" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default ServicesLayout;

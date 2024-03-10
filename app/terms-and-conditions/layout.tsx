import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const TermsAndConditionsLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <InfoLayoutComponent
      title={"Terms And Conditions"}
      posterSrc="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2021/04/OLC-Awards-Thumbnail-1200x800.jpg"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Terms and Conditions", link: "/terms-and-conditions" },
      ]}
    >
      {children}
    </InfoLayoutComponent>
  );
};

export default TermsAndConditionsLayout;

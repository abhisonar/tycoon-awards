import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Category"}
      posterSrc="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2021/04/OLC-Awards-Thumbnail-1200x800.jpg"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Category", link: "/category" },
      ]}
    >
      {children}
    </InfoLayoutComponent>
  );
};

export default CategoryLayout;

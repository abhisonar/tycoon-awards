import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const CategoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Category"}
      posterSrc="https://res.cloudinary.com/marathiudyojak/image/upload/v1710096798/tycoon-awards/headers/Category_shfst6.webp"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Category", link: "/category" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default CategoryLayout;

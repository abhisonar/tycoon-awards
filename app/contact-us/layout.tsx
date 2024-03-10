import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const ContactUsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Contact Us"}
      posterSrc="https://res.cloudinary.com/marathiudyojak/image/upload/v1710096798/tycoon-awards/headers/Contact_us_2_vm7yyt.webp"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Contact Us", link: "/contact-us" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default ContactUsLayout;

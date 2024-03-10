import { WHO_ARE_WE } from "@shared/data/about-us/who-are-we.data";
import React from "react";
import WhoAreWeComponent from "./(who-are-we)/who-are-we.component";
import MissionComponent from "./(mission)/mission.component";
import WhyChooseUsComponent from "./(why-choose-us)/why-choose-us.component";

const AboutUsComponent = () => {
  return (
    <div>
      <WhoAreWeComponent />
      <MissionComponent />
      <WhyChooseUsComponent />
    </div>
  );
};

export default AboutUsComponent;

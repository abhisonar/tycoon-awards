import React from "react";
import MissionComponent from "./(mission)/mission.component";
import WhyChooseUsComponent from "./(why-choose-us)/why-choose-us.component";

const AboutUsComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="h-fit p-3 bg-black text-primary-default text-center font-bold text-md lg:text-lg">
        Tycoons Of Asia Awards is a distinguished initiative dedicated to recognizing and honoring
        exemplary businesses across industries. With a commitment to promoting excellence, we have
        been at the forefront of acknowledging outstanding achievements since 2021.
      </div>
      <MissionComponent />
      <WhyChooseUsComponent />
    </div>
  );
};

export default AboutUsComponent;

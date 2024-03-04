import UpcomingEventComponent from "./(upcoming-event)/upcoming-event.component";
import HeroSectionComponent from "./(hero-section)/hero-section.component";
import React from "react";
import SelectionProcessComponent from "./(selection-process)/selection-process.component";
import Divider from "@mui/material/Divider";

const HomePage = () => {
  return (
    <div>
      <HeroSectionComponent />
      <UpcomingEventComponent />
      <SelectionProcessComponent />
    </div>
  );
};

export default HomePage;

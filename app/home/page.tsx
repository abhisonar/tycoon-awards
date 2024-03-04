import UpcomingEventComponent from "./(upcoming-event)/upcoming-event.component";
import HeroSectionComponent from "./(hero-section)/hero-section.component";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSectionComponent />
      <UpcomingEventComponent />
    </div>
  );
};

export default HomePage;

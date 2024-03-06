import UpcomingEventComponent from "./(upcoming-event)/upcoming-event.component";
import HeroSectionComponent from "./(hero-section)/hero-section.component";
import React from "react";
import SelectionProcessComponent from "./(selection-process)/selection-process.component";
import Divider from "@mui/material/Divider";
import UnlockSucessReasonComponent from "./(unlock-success-reason-section)/unlock-success-reason.component";
import MediaCoverageComponent from "./(media-coverage)/media-coverage.component";
import ExcellenceAwardsComponent from "./(excellence-awards)/excellence=awards.component";
import UnlockOpportunitiesComponent from "./(unlock-opportunities)/unlock-opportunities.component";

const HomePage = () => {
  return (
    <div>
      <HeroSectionComponent />
      <UpcomingEventComponent />
      <SelectionProcessComponent />
      <UnlockOpportunitiesComponent />
      <ExcellenceAwardsComponent />
      <UnlockSucessReasonComponent />
      <MediaCoverageComponent />
    </div>
  );
};

export default HomePage;

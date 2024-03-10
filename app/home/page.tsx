"use client";
import UpcomingEventComponent from "./(upcoming-event)/upcoming-event.component";
import HeroSectionComponent from "./(hero-section)/hero-section.component";
import React, { useState, useEffect } from "react";
import SelectionProcessComponent from "./(selection-process)/selection-process.component";
import Divider from "@mui/material/Divider";
import UnlockSucessReasonComponent from "./(unlock-success-reason-section)/unlock-success-reason.component";
import MediaCoverageComponent from "./(media-coverage)/media-coverage.component";
import ExcellenceAwardsComponent from "./(excellence-awards)/excellence-awards.component";
import UnlockOpportunitiesComponent from "./(unlock-opportunities)/unlock-opportunities.component";
import FaqSectionComponent from "./(faq-section)/faq-section.component";
import { getNextUpcomingEvent } from "@shared/services/event.service";
import { IEvent } from "@shared/data/event.data";

const HomePage = () => {
  const [upcomingEvent, setUpcomingEvent] = useState<IEvent | undefined>(undefined);

  useEffect(() => {
    getUpcomingEvent();
  }, []);

  const getUpcomingEvent = () => {
    setUpcomingEvent(getNextUpcomingEvent());
  };
  return (
    <div>
      <HeroSectionComponent eventDetail={upcomingEvent as IEvent} />
      <UpcomingEventComponent eventDetail={upcomingEvent as IEvent} />
      <SelectionProcessComponent />
      <UnlockOpportunitiesComponent />
      <ExcellenceAwardsComponent />
      <UnlockSucessReasonComponent />
      <MediaCoverageComponent />
      <FaqSectionComponent />
    </div>
  );
};

export default HomePage;

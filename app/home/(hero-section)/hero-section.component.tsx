"use client";
import { IEvent } from "@shared/data/event.data";
import { getNextUpcomingEvent } from "@shared/services/event.service";
import UiButton from "@ui/ui-button/ui-button.component";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroSectionComponent = () => {
  const [upcomingEvent, setUpcomingEvent] = useState<IEvent | undefined>(undefined);

  useEffect(() => {
    getUpcomingEvent();
  }, []);

  const getUpcomingEvent = () => {
    setUpcomingEvent(getNextUpcomingEvent());
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] z-0 relative">
      <img
        src={upcomingEvent?.posterSrc}
        alt="hero-img"
        className="w-full h-full object-cover w-full"
        loading="lazy"
      />
      <div className="absolute bottom-0 flex flex-col lg:flex-row gap-5 w-full px-11 py-16 justify-center bg-gradient-to-t from-darkBlack to-transparent">
        <UiButton variant="outlined" className="!bg-black !px-14" clicked={() => {}} size="large">
          <span>Event Details</span>
        </UiButton>
        <Link href={"/nomination"}>
          <UiButton
            variant="contained"
            color="primary"
            className="!px-14"
            clicked={() => {}}
            size="large">
            <span className="text-white">Nominate Now</span>
          </UiButton>
        </Link>
      </div>
    </div>
  );
};

export default HeroSectionComponent;

"use client";
import React, { useEffect, useState } from "react";
import { getNextUpcomingEvent } from "@shared/services/event.service";
import { IEvent } from "@shared/data/event.data";
const UpcomingEventComponent = () => {
  const [upcomingEvent, setUpcomingEvent] = useState<IEvent | undefined>(undefined);

  useEffect(() => {
    getUpcomingEvent();
  }, []);

  const getUpcomingEvent = () => {
    setUpcomingEvent(getNextUpcomingEvent());
  };
  return (
    <div className="w-full bg-white">
      <img src={`/assets/hero/layered-waves.svg`} className="w-full h-[60px] lg:h-[100px]" alt="" />
      <div className="flex flex-col gap-4 lg:flex-row justify-between p-4">
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-col gap-3">
            <h2 className="text-center lg:text-left font-bold text-sm    ">-- Upcoming Event --</h2>
            <h1 className="font-bold text-center text-xl md:text-2xl lg:text-3xl  lg:text-left">
              {upcomingEvent?.title}, {upcomingEvent?.address?.city}
            </h1>
          </div>
          <p className="text-center text-sm lg:text-lg  lg:text-left lg:w-2/3">
            {upcomingEvent?.description}
          </p>
        </div>
        <img src={upcomingEvent?.posterSrc} className="max-h-[350px] rounded-md" alt="" />
      </div>
    </div>
  );
};

export default UpcomingEventComponent;

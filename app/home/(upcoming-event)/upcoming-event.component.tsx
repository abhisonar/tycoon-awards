"use client";
import React, { useEffect, useState } from "react";
import { getNextUpcomingEvent } from "@shared/services/event.service";
import { IEvent, IEventAddress } from "@shared/data/event.data";
import { getAddress } from "@shared/function/address.function";
const UpcomingEventComponent = () => {
  const [upcomingEvent, setUpcomingEvent] = useState<IEvent | undefined>(undefined);

  useEffect(() => {
    getUpcomingEvent();
  }, []);

  const getUpcomingEvent = () => {
    setUpcomingEvent(getNextUpcomingEvent());
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate;
  }
  return (
    <div className="w-full bg-white">
      <img src={`/assets/hero/layered-waves.svg`} className="w-full h-[60px] lg:h-[100px]" alt="" />
      <div className="flex flex-col gap-4 lg:flex-row justify-between p-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <h2 className="text-center lg:text-left font-bold text-sm    ">-- Upcoming Event --</h2>
            <h1 className="font-bold text-center text-xl md:text-2xl lg:text-3xl  lg:text-left">
              {upcomingEvent?.title}, {upcomingEvent?.address?.city}
            </h1>
          </div>
          <p className="text-center text-sm lg:text-lg  lg:text-left lg:w-2/3">
            {upcomingEvent?.description}
          </p>
          <span className="text-center text-sm lg:text-lg  lg:text-left lg:w-2/3">
            Chief Guest:{" "}
            <span className="font-bold text-primary-darker">{upcomingEvent?.chiefGuestName}</span>
          </span>
          <span className="text-center text-sm lg:text-lg  lg:text-left lg:w-2/3">
            Date:{" "}
            <span className="font-bold text-primary-darker">
              {formatDate(upcomingEvent?.date as string)}
            </span>
          </span>
          <span className="text-center text-sm lg:text-lg  lg:text-left lg:w-2/3">
            Vanue:{" "}
            <span className="font-bold text-primary-darker">
              {getAddress(upcomingEvent?.address as IEventAddress)}
            </span>
          </span>
        </div>
        <img src={upcomingEvent?.posterSrc} className="max-h-[350px] rounded-md" alt="" />
      </div>
    </div>
  );
};

export default UpcomingEventComponent;

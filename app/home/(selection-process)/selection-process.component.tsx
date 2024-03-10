"use client";
import { IEvent } from "@shared/data/event.data";
import { getNextUpcomingEvent } from "@shared/services/event.service";
import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import { SELECTION_PROCESS_DATA } from "@shared/data/selection-process.data";

const SelectionProcessComponent = () => {
  const [upcomingEvent, setUpcomingEvent] = useState<IEvent | undefined>(undefined);

  useEffect(() => {
    getUpcomingEvent();
  }, []);

  const getUpcomingEvent = () => {
    setUpcomingEvent(getNextUpcomingEvent());
  };
  return (
    <div className="flex flex-col pt-4 items-center gap-4 bg-white">
      <h2 className="text-center text-[.7rem] font-semibold md:text-md lg:text-xl pb-1 border-b-2 border-b-primary-darker w-fit">
        {upcomingEvent?.title}, {upcomingEvent?.address?.city}
      </h2>
      <h1 className="text-center text-lg font-bold md:text-xl lg:text-2xl">Selection Process</h1>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap w-full p-3 gap-3">
        {SELECTION_PROCESS_DATA.map((item, index) => (
          <div
            key={item.title}
            className="group flex flex-col p-3 bg-white w-full md:basis-[45%]  lg:basis-[30%] shadow-md overflow-hidden">
            <img
              src={item.src}
              alt=""
              className="h-[170px] lg:h-[200px] object-contain group-hover:scale-110 transition-all duration-300"
            />
            <h3 className="text-lg font-bold text-center text-primary-default">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectionProcessComponent;

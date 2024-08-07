"use client";
import React, { useEffect, useState } from "react";
import { getNextUpcomingEvent } from "@shared/services/event.service";
import { IEvent, IEventAddress } from "@shared/data/event.data";
import { getAddress } from "@shared/function/address.function";

interface IUpcomingEvent {
  eventDetail: IEvent;
  eventDetails: Array<IEvent>;
  isDialogView?: boolean;
}

const UpcomingEventComponent: React.FC<IUpcomingEvent> = ({
  eventDetail,
  eventDetails,
  isDialogView = false,
}) => {
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
      {!isDialogView && (
          <h2 className="text-center lg:text-left font-bold text-sm px-4 py-2">
            -- Upcoming Event --
          </h2>
      )}
      {
        eventDetails?.map(eventDetail => (
            <div
                key={eventDetail.title}
                className={`flex flex-col gap-4 lg:flex-row justify-between p-4 ${
                    !isDialogView ? "lg:flex-row" : "lg:flex-col"
                }`}>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold text-center text-xl md:text-2xl lg:text-3xl  lg:text-left">
                    {eventDetail?.title}, {eventDetail?.address?.city}
                  </h1>
                </div>
                <p
                    className={`text-center text-sm lg:text-lg  lg:text-left ${
                        !isDialogView ? "lg:w-2/3" : ""
                    }`}>
                  {eventDetail?.description}
                </p>
                <span
                    className={`text-center text-sm lg:text-lg  lg:text-left ${
                        !isDialogView ? "lg:w-2/3" : ""
                    }`}>
            Chief Guest:{" "}
                  <span className="font-bold text-primary-darker">{eventDetail?.chiefGuestName}</span>
          </span>
                <span
                    className={`text-center text-sm lg:text-lg  lg:text-left ${
                        !isDialogView ? "lg:w-2/3" : ""
                    }`}>
            Date:{" "}
                  <span className="font-bold text-primary-darker">
              {eventDetail?.date && formatDate(eventDetail?.date as string)}
            </span>
          </span>
                <span
                    className={`text-center text-sm lg:text-lg  lg:text-left ${
                        !isDialogView ? "lg:w-2/3" : ""
                    }`}>
            Venue:{" "}
                  <span className="font-bold text-primary-darker">
              {getAddress(eventDetail?.address as IEventAddress)}
            </span>
          </span>
              </div>
              <img src={eventDetail?.posterSrc1} className="max-h-[350px] rounded-md" alt=""/>
            </div>
        ))
      }
    </div>
  );
};

export default UpcomingEventComponent;

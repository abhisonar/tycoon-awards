"use client";
import UpcomingEventComponent from "@app/home/(upcoming-event)/upcoming-event.component";
import CountdownTimerComponent from "@shared/components/CountdownTimer/count-down-time";
import { IEvent } from "@shared/data/event.data";
import { getNextUpcomingEvent } from "@shared/services/event.service";
import UiButton from "@ui/ui-button/ui-button.component";
import UiDialog from "@ui/ui-dialog/ui-dialog.component";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IHero {
  eventDetail: IEvent;
}

const HeroSectionComponent: React.FC<IHero> = ({ eventDetail }) => {
  const [isEvetDialogOpen, setIsEvetDialogOpen] = useState(false);

  return (
    <div className="min-w-full min-h-full z-0 relative">
      <div className="flex flex-col min-w-full min-h-full lg:min-h-screen">
        <img
          src={eventDetail?.posterSrc}
          alt="hero-img"
          className="w-full h-full object-fill w-full"
          loading="lazy"
        />
        <img
          src={`/assets/hero/layered-waves.svg`}
          className="w-full h-[60px] lg:h-[100px]"
          alt=""
        />
      </div>

      <div className="flex flex-col w-full lg:absolute lg:bottom-[0px]  bg-gradient-radial lg:from-darkBlack to-transparent justify-center items-center">
        <div className="flex flex-col md:flex-row gap-5 w-full px-4 lg:px-20 py-4 lg:py-10 justify-center items-center">
          <div className="basis-[50%] w-full lg:!basis-[30%] flex justify-center items-center">
            <UiButton
              variant="outlined"
              className="!bg-black !px-4 sm:!px-10 !py-2 w-full md:!py-4"
              clicked={() => setIsEvetDialogOpen(!isEvetDialogOpen)}
              size="large">
              <span className="text-[.7rem] sm:text-sm">Event Details</span>
            </UiButton>
          </div>
          <Link
            href={"/nomination"}
            className="basis-[50%] w-full lg:!basis-[30%] flex justify-center items-center">
            <UiButton
              variant="contained"
              color="primary"
              className="!px-7 sm:!px-10 !py-2 w-full md:!py-4"
              clicked={() => {}}
              size="large">
              <span className="text-white text-[.7rem] sm:text-sm">Nominate Now</span>
            </UiButton>
          </Link>
        </div>
        {eventDetail && eventDetail?.date && (
          <div className="w-full md:w-[70%] lg:w-[60%]">
            <CountdownTimerComponent date={eventDetail?.date} />
          </div>
        )}
        <UiDialog
          dialogTitle={"Event Detail"}
          isFullScreen={false}
          setDialogOpen={setIsEvetDialogOpen}
          dialogContent={<UpcomingEventComponent eventDetail={eventDetail} isDialogView={true} />}
          dialogOpen={isEvetDialogOpen}></UiDialog>
      </div>
    </div>
  );
};

export default HeroSectionComponent;

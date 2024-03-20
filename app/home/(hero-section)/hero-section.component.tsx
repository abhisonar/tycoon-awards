"use client";
import UpcomingEventComponent from "@app/home/(upcoming-event)/upcoming-event.component";
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

      <div className="flex lg:flex-row lg:absolute lg:bottom-[0px] gap-5 w-full px-4 lg:px-20 py-4 lg:py-16 justify-center bg-gradient-radial lg:from-darkBlack to-transparent">
        <UiButton
          variant="outlined"
          className="!bg-black !px-7 sm:!px-10 !py-3 !basis-[50%] lg:!basis-[20%]"
          clicked={() => setIsEvetDialogOpen(!isEvetDialogOpen)}
          size="large">
          <span className="text-[.7rem] sm:text-sm">Event Details</span>
        </UiButton>
        <Link href={"/nomination"} className="basis-[50%] w-full lg:!basis-[20%]">
          <UiButton
            variant="contained"
            color="primary"
            className="!px-7 sm:!px-10 !py-3 !w-full"
            clicked={() => {}}
            size="large">
            <span className="text-white text-[.7rem] sm:text-sm">Nominate Now</span>
          </UiButton>
        </Link>
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

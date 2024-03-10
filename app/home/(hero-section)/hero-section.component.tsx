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
    <div className="w-full h-[calc(100vh-80px)] z-0 relative">
      <img
        src={eventDetail?.posterSrc}
        alt="hero-img"
        className="w-full h-full object-cover w-full"
        loading="lazy"
      />
      <div className="absolute bottom-0 flex flex-col lg:flex-row gap-5 w-full px-11 py-16 justify-center bg-gradient-to-t from-darkBlack to-transparent">
        <UiButton
          variant="outlined"
          className="!bg-black !px-14"
          clicked={() => setIsEvetDialogOpen(!isEvetDialogOpen)}
          size="large">
          <span>Event Details</span>
        </UiButton>
        <Link href={"/nomination"}>
          <UiButton
            variant="contained"
            color="primary"
            className="!px-14 !w-full"
            clicked={() => {}}
            size="large">
            <span className="text-white">Nominate Now</span>
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

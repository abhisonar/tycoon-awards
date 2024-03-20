"use client";

import { NumberBox } from "./number-box";
import React, { useState, useEffect, FC } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

interface ICountdownTimer {
  date: string;
}

const CountdownTimerComponent: FC<ICountdownTimer> = ({ date }) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    let daysFlip = false;
    let hoursFlip = false;
    let minutesFlip = false;
    let secondsFlip = true;
    return (
      <div className="rounded-lg mt-2 bg-gradient-radial lg:from-white   from-darkBlack to-transparent">
        <div className="grid grid-cols-4 gap-4 py-2 px-2 md:flex md:items-center md:justify-between md:mt-2 rounded-xl md:px-4 md:py-2 ">
          <NumberBox num={days} unit="Days" flip={daysFlip} />
          <span className=" hidden text-5xl  md:inline-block md:text-7xl font-normal text-gray-50 ">
            :
          </span>
          <NumberBox num={hours} unit="Hours" flip={hoursFlip} />
          <span className="hidden text-5xl  md:inline-block md:text-7xl font-normal text-gray-50 ">
            :
          </span>
          <NumberBox num={minutes} unit="Minutes" flip={minutesFlip} />
          <span className="hidden text-5xl  md:inline-block md:text-7xl font-normal text-gray-50 ">
            :
          </span>
          <NumberBox num={seconds} unit="Seconds" flip={secondsFlip} />
        </div>
      </div>
    );
  };

  return <>{hydrated && <Countdown date={date} renderer={renderer} />}</>;
};

export default CountdownTimerComponent;

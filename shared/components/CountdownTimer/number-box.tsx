import React from 'react';

interface numProp {
  num: string | number;
  unit: string;
  flip: boolean;
}

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <div className="flex flex-col items-center px-2">
      <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-12 w-9 h-9 md:w-11 md:h-11 lg:w-14 lg:h-14 text-2xl md:text-4xl mt-4 ">
        <div className="rounded-t-lg rounded-b-lg bg-primary-default w-full h-full"></div>

        <div className="text-xl absolute text-white z-10 font-bold font-redhat md:text-2xl font-mono ">
          {num}
        </div>

        <div className=" rounded-lg rounded-lg bg-primary-darker w-full h-full"></div>

        <div
          className={`absolute w-full h-1/2 top-0 rounded-lg z-5 ${
            flip ? 'animate-flip bg-blackShade1' : 'bg-transparent'
          }`}></div>
      </div>
      <p className="text-[.7rem] mt-1 font-semibold text-white md:text-md lg:text-lg">{unit}</p>
    </div>
  );
};

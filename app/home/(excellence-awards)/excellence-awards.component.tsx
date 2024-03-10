import React from "react";
import { EXCELLENCE_AWARDS_DATA, ExcellenceAwards } from "@shared/data/excellence-awards.data";

const ExcellenceAwardsComponent = () => {
  return (
    <div className="bg-white">
      <h1 className="text-center text-lg font-bold md:text-2xl lg:text-3xl gap-3 p-4">
        Excellence Awards
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap w-full p-3 gap-3 ">
        {EXCELLENCE_AWARDS_DATA.map((item) => (
          <div
            key={item.title}
            className="group flex flex-col p-3 justify-center items-center gap-4 border-4 border-primary-default w-full md:w-[12rem] h-[18rem] max-h-[16rem] hover:bg-black transition-all duration-200">
            <img src={item.src} className="max-w-[140px] max-h-[140px] object-contain" />

            <h3 className="group-hover:text-white text-sm lg:text-md font-bold text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcellenceAwardsComponent;

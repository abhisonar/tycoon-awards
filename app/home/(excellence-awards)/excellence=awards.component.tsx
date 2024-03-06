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
            className="flex flex-col p-3 justify-center items-center border-2 border-primary-default w-full md:w-[15rem] h-[18rem] max-h-[18rem]">
            <div className="w-[200px] h-[200px]  bg-white justify-center items-center rounded-full ">
              <img src={item.src} alt="" className="h-[180px] object-contain" />
            </div>
            <h3 className="text-lg font-bold text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcellenceAwardsComponent;

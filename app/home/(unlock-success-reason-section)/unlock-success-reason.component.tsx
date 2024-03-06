import React from "react";
import { SUCCESS_REASON_DATA } from "@shared/data/success-reason.data";

const UnlockSucessReasonComponent = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h1 className="text-center text-lg font-bold md:text-2xl lg:text-3xl px-3">
        Unlock Success: Top 5 Reasons to Enter Tycoons Of Asia Awards
      </h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center w-full p-3 gap-3">
        {SUCCESS_REASON_DATA.map((item, index) => (
          <div
            key={item.title}
            className={`group relative flex flex-col p-5 bg-white w-full justify-center rounded-md shadow-md items-center gap-2 lg:basis-[40%] min-h-[250px] hover:shadow-lg transition-all duration-200`}>
            <div className={`basis-[10%] flex justify-center opacity-20`}>
              <span className="bg-primary-default p-3 text-white text-center w-32 h-32 flex justify-center items-center rounded-full font-bold text-7xl transition-all duration-200 group-hover:w-44 group-hover:h-44">
                {index + 1}
              </span>
            </div>
            <div className="flex flex-col basis-[90%] absolute p-3">
              <h3 className="text-lg font-bold text-center">{item.title}</h3>
              <h4 className="text-md font-medium text-center">{item.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnlockSucessReasonComponent;

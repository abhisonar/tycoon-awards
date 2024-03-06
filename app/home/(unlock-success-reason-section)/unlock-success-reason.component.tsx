import React from "react";
import { SUCCESS_REASON_DATA } from "@shared/data/success-reason.data";

const UnlockSucessReasonComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-center text-lg font-bold md:text-xl lg:text-2xl px-3">
        Unlock Success: Top 5 Reasons to Enter Tycoons Of Asia Awards
      </h1>
      <div className="flex flex-col items-center justify-center w-full p-3 gap-3">
        {SUCCESS_REASON_DATA.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse "
            } p-5 bg-white w-full rounded-md shadow-md items-center gap-2`}>
            <div className={`basis-[10%] flex justify-center`}>
              <span className="bg-primary-default p-3 text-white text-center w-12 h-12 flex justify-center items-center rounded-full font-bold text-lg">
                {index + 1}
              </span>
            </div>
            <div className="flex flex-col basis-[90%]">
              <h3 className="text-lg font-bold text-left">{item.title}</h3>
              <h4 className="text-md font-medium text-left">{item.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnlockSucessReasonComponent;

import React from "react";
import { SUCCESS_REASON_DATA } from "@shared/data/success-reason.data";

const UnlockSucessReasonComponent = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-center text-lg font-bold md:text-xl lg:text-2xl">
        Unlock Success: Top 5 Reasons to Enter Tycoons Of Asia Awards
      </h1>
      <div className="flex flex-col items-center justify-center w-full p-3 gap-3">
        {SUCCESS_REASON_DATA.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse "
            } p-3 bg-white w-full rounded-md shadow-md items-center gap-2`}
          >
            <span className="bg-primary-default p-3 text-white text-center w-10 h-10 flex justify-center items-center rounded-full font-bold ">
              {index + 1}
            </span>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-center">{item.title}</h3>
              <h4 className="text-md font-medium text-center">
                {item.description}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnlockSucessReasonComponent;

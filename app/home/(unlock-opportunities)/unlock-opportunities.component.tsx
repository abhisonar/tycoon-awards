import { UNLOCK_OPPORTUNITIES_DATA } from "@shared/data/unlock-opportunities.data";
import Link from "next/link";
import React from "react";

const UnlockOpportunitiesComponent = () => {
  return (
    <div className="flex flex-col mt-4 items-center gap-4">
      <h2 className="text-center text-[.7rem] font-semibold md:text-md lg:text-xl pb-1 border-b-2 border-b-primary-darker w-fit"></h2>
      <h1 className="text-center text-lg font-bold md:text-xl lg:text-2xl">
        Unlocking Opportunities for Your Business
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap w-full p-5 gap-3 ">
        {UNLOCK_OPPORTUNITIES_DATA.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col p-3 bg-white w-full  shadow-md overflow-hidden ${
              item.isFull ? "md:basis-[100%] " : "md:basis-[47%] "
            }`}
          >
            <h3 className="text-lg font-bold text-center text-primary-default">
              {item.title}
            </h3>
            {item?.link ? (
              <Link href={item.link} className="text-sm text-center">
                {item.description}
              </Link>
            ) : (
              <p className="text-sm text-center">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnlockOpportunitiesComponent;

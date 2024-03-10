import React from "react";
import {
  WHY_CHOOSE_US_DATA,
  WhyChooseUs,
} from "@shared/data/about-us/why-choose-us";

const WhyChooseUsComponent = () => {
  return (
    <div>
      <h1 className="text-center text-lg font-bold md:text-xl lg:text-2xl">
        Why Choose Us?
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap w-full p-3 gap-3">
        {WHY_CHOOSE_US_DATA.map((item, index) => (
          <div
            key={item.description}
            className="group flex flex-col p-3 bg-black w-full md:basis-[45%]  lg:basis-[30%] shadow-md overflow-hidden"
          >
            <h3 className="text-md font-bold text-center text-primary-default">
              {item.description}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsComponent;

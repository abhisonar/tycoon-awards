import { FAQ_DATA } from "@shared/data/faq.data";
import UiAccordian from "@ui/ui-accordian/ui-accordian";
import React from "react";

const FaqSectionComponent = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <h1 className="text-center text-xl font-bold border-b-2 border-b-primary-darker w-fit p-2">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-3 p-3 lg:py-3 lg:px-16">
        {FAQ_DATA.map((item, index) => (
          <div key={index} className="">
            <UiAccordian
              title={
                <div className="font-bold">
                  {index + 1}. {item.title}
                </div>
              }
              detail={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSectionComponent;

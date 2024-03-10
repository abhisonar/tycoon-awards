import React from "react";

const MissionComponent = () => {
  return (
    <div className="pt-5 lg:px-10">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between">
        <div
          className="flex flex-col items-center lg:items-start gap-y-2 lg:basis-2/3"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="text-base font-bold text-warn-default lg:text-xl">
            MISSION
          </h1>
          <p className="text-sm text-justify lg:text-start lg:w-[70%]">
            To foster a culture of innovation, excellence, and ethical business
            practices by acknowledging and celebrating the achievements of
            visionary leaders and organizations.
          </p>
        </div>
        <div
          className="max-w-[350px] overflow-hidden"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <img src="#h1" alt="creativity" />
        </div>
      </div>
    </div>
  );
};

export default MissionComponent;

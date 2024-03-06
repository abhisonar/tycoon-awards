import React from "react";
import { MEDIA_COVERAGE_DATA } from "@shared/data/media-coverage.data";

const MediaCoverageComponent = () => {
  return (
    <div>
      <h1 className="text-center text-lg font-bold md:text-xl lg:text-2xl gap-3">
        Media Coverage
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap w-full p-3 gap-3 ">
        {MEDIA_COVERAGE_DATA.map((item) => (
          // eslint-disable-next-line react/jsx-key, @next/next/no-img-element, jsx-a11y/alt-text
          <img
            src={item.src}
            className="flex flex-col p-3 bg-white w-20 rounded-full md:basis-[40%] lg:basis-[20%] shadow-md h-20 "
          />
        ))}
      </div>
    </div>
  );
};

export default MediaCoverageComponent;

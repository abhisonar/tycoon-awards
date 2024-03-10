"use client";
import React from "react";
import { MEDIA_COVERAGE_DATA } from "@shared/data/media-coverage.data";
import { IImageView } from "@shared/interface/IImageView";
import CustomizeSwiper from "@shared/components/CustomizeSwiper/customize-swiper";

const MediaCoverageComponent = () => {
  const mediaCoverageImageTemplate = (data: IImageView) => {
    return (
      <img
        src={data.src}
        className="w-full h-full object-contain aspect-[3/2] mix-blend-color-burn"
      />
    );
  };
  return (
    <div>
      <h1 className="text-center text-lg font-bold md:text-xl lg:text-2xl gap-3">Media Coverage</h1>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap w-full p-3 gap-3 ">
        <CustomizeSwiper data={MEDIA_COVERAGE_DATA} templateFun={mediaCoverageImageTemplate} />
      </div>
    </div>
  );
};

export default MediaCoverageComponent;

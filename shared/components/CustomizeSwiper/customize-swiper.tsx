"use client";
import { IImageView } from "@shared/interface/IImageView";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

interface ICustomizeSwiper<T> {
  config?: SwiperOptions;
  isLinear?: boolean;
  data: T[];
  wrapperClass?: string;
  templateFun?: (data: T) => React.ReactElement;
}

const baseSwiperConfig: SwiperOptions = {
  autoplay: { delay: 0, disableOnInteraction: false },
  freeMode: true,
  grabCursor: true,
  speed: 5000,
  slidesPerView: 1,
  loop: true,
  modules: [FreeMode, Autoplay],
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    950: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
};

const CustomizeSwiper = <T,>({
  config = baseSwiperConfig,
  data = [],
  templateFun,
  wrapperClass,
}: ICustomizeSwiper<T>) => {
  return (
    <Swiper
      {...config}
      wrapperClass={`!ease-linear ${wrapperClass || ""}`}
      className="w-[96%] h-full">
      {data.map((item, index) => (
        <SwiperSlide key={index} className="!flex justify-center items-center w-full">
          {templateFun && templateFun(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomizeSwiper;

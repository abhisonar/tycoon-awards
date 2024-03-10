"use client";
import React, { useState, useEffect } from "react";
import { IImageView } from "@shared/interface/IImageView";
import UiDialog from "@ui/ui-dialog/ui-dialog.component";

import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface IImageSwiperView {
  swiperData: IImageView[] | IImageView;
  openImageSwiperDialog: boolean;
  setOpenImageSwiperDialog: (isOpen: boolean) => void;
  firstItemClassName?: string;
}

const ImageSwiperComponent: React.FC<IImageSwiperView> = ({
  swiperData,
  openImageSwiperDialog = false,
  setOpenImageSwiperDialog,
  firstItemClassName,
}) => {
  const [imageSwiperData, setImageSwiperData] = useState<IImageView[]>([]);

  const isMobileTabletView = useMediaQuery({ query: "(max-width: 700px)" });

  useEffect(() => {
    initData();
  }, [swiperData]);

  const handleImageViewDialog = (isOpen: boolean) => {
    setOpenImageSwiperDialog(isOpen);
  };

  function initData() {
    if (swiperData) {
      setImageSwiperData(!Array.isArray(swiperData) ? [swiperData] : [...swiperData]);
    } else {
      setImageSwiperData([]);
    }
  }

  const videoView = (
    src: string,
    isControls = true,
    isMuted: true,
    isAutoPlay = false,
    posterSrc?: string,
    isPreview = false
  ) => {
    return (
      <video
        controls={isControls}
        autoPlay={isAutoPlay}
        poster={posterSrc}
        muted={isMuted}
        className={`w-full ${isPreview ? firstItemClassName : ""}`}>
        <source src={src} type="video/mp4" />
      </video>
    );
  };

  const swiperView = () => {
    return (
      <div className="h-full flex justify-center items-center w-full md:w-[70%]">
        <Swiper
          navigation={!isMobileTabletView}
          modules={[Navigation, Scrollbar]}
          onSlideChange={() => null}
          onSwiper={(swiper) => null}
          className="h-full rounded-lg w-screen">
          {imageSwiperData.map((image, index) => (
            <SwiperSlide className="" key={index}>
              {!image?.isVideo ? (
                <img
                  src={image.src}
                  className="w-full h-full object-contain"
                  alt={image.title}
                  loading="lazy"
                />
              ) : (
                videoView(image.src, true, true, false)
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <>
      <div
        className={`w-full h-full rounded-md overflow-hidden`}
        onClick={() => handleImageViewDialog(true)}>
        {imageSwiperData?.length && (
          <>
            {!imageSwiperData[0]?.isVideo ? (
              <img
                src={imageSwiperData[0].src}
                className={`w-full h-full object-cover  ${firstItemClassName}`}
                alt={imageSwiperData[0].title}
              />
            ) : (
              videoView(
                imageSwiperData[0].src,
                false,
                true,
                false,
                imageSwiperData[0].posterSrc,
                true
              )
            )}
          </>
        )}
      </div>
      <UiDialog
        isImageView={true}
        isFullScreen={true}
        dialogOpen={openImageSwiperDialog}
        setDialogOpen={handleImageViewDialog}
        dialogContent={swiperView()}
        dialogContentClass="flex justify-center items-center"
      />
    </>
  );
};

export default ImageSwiperComponent;

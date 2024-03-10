import React from "react";
const WhoAreWeComponent = () => {
  return (
    <div className="relative">
      <img
        src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2021/04/OLC-Awards-Thumbnail-1200x800.jpg"
        alt="Your Image Alt Text"
        layout="responsive"
        className=" w-full h-[350px] object-fit"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center font-bold  text-md text-white p-4">
        <div className="absolute bg-black opacity-50 top-0 left-0 right-0 bottom-0"></div>
        <div className="relative z-10 text-white text-2xl font-bold "></div>
        Tycoons Of Asia Awards is a distinguished initiative dedicated to
        recognizing and honoring exemplary businesses across industries. With a
        commitment to promoting excellence, we have been at the forefront of
        acknowledging outstanding achievements since 2021.
      </div>
    </div>
  );
};

export default WhoAreWeComponent;

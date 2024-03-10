import React from "react";

interface ICategoryCard {
  title: string;
  src: string;
}

const CategoryCardComponent: React.FC<ICategoryCard> = ({ title, src }) => {
  return (
    <div className="group flex flex-col max-w-[15rem] max-h-[12rem] md:max-h-[15rem] overflow-hidden shadow-lg bg-black border-[5px] border-primary-darker">
      <div className="w-full basis-[60%] md:basis-[70%] overflow-hidden rounded-b-lg bg-white">
        <img
          src={src}
          className="w-full h-full object-contain group-hover:scale-125 transition-all duration-200"
          alt={title}
        />
      </div>
      <div className="flex justify-center items-center h-full w-full basis-[40%] md:basis-[30%]">
        <h2 className="font-bold text-sm md:text-md lg:text-lg text-center text-white m-0">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CategoryCardComponent;

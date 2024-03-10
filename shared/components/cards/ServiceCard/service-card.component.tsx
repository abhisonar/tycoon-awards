import React from "react";

interface IServiceCard {
  title: string;
  src: string;
  descriptioin: string;
}

const ServiceCardComponent: React.FC<IServiceCard> = ({ title, src, descriptioin }) => {
  return (
    <div className="group flex flex-col max-w-[28rem] min-h-[32rem] gap-3 overflow-hidden shadow-lg bg-black border-[5px] border-primary-darker">
      <div className="w-full basis-[50%] overflow-hidden rounded-b-lg">
        <img
          src={src}
          className="w-full h-full object-cover group-hover:scale-125 transition-all duration-200"
          alt={title}
        />
      </div>
      <div className="basis-[50%] p-3 flex flex-col gap-4 text-white">
        <h2 className="font-bold text-md md:text-lg lg:text-xl">{title}</h2>
        <p className="text-sm md:text-md lg:text-md">{descriptioin}</p>
      </div>
    </div>
  );
};

export default ServiceCardComponent;

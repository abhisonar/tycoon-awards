"use client";
import React from "react";
import { CATEGORY_DATA } from "@shared/data/category-data/category.data";
import ServiceCardComponent from "@shared/components/cards/ServiceCard/service-card.component";

const CategoryData = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-4 md:p-4 gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  lg:gap-x-5 md:gap-x-3 py-2 gap-y-5 ">
        {CATEGORY_DATA.map((category) => (
          <ServiceCardComponent
            key={category.title}
            title={category.title}
            src={category.src}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryData;

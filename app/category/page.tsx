"use client";
import React from "react";
import { CATEGORY_DATA } from "@shared/data/category-data/category.data";
import CategoryCardComponent from "@shared/components/cards/CategoryCard/category-card.component";

const CategoryData = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-4 md:p-4 gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  lg:gap-x-5 md:gap-x-3 py-2 gap-y-5 ">
        {CATEGORY_DATA.map((category) => (
          <CategoryCardComponent key={category.title} title={category.title} src={category.src} />
        ))}
      </div>
    </div>
  );
};

export default CategoryData;

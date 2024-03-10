import { IBreadcrumbs } from "@ui/shared-resources/interfaces/IBreadcrumbs";
import UiBreadcrumbs from "@ui/ui-breadcrumbs/ui-breadcrumbs.component";
import React from "react";
import "./info-layout.component.scss";

interface IInfoLayout {
  breadcrumbs: IBreadcrumbs[];
  title: string | null;
  children: React.ReactNode;
  posterSrc?: string;
}

const InfoLayoutComponent: React.FC<IInfoLayout> = ({
  breadcrumbs,
  title,
  children,
  posterSrc,
}) => {
  return (
    <div className="info-layout grid grid-cols-1">
      <div className="h-[300px] info-layout-header flex justify-center items-center md:justify-between">
        <div className="info-layout-banner w-full h-full hidden md:block overflow-hidden">
          <img
            src={posterSrc || `/assets/services/service-header.svg`}
            alt=""
            className="w-full h-full object-fill"
          />
        </div>
        <div className="info-layout-content flex flex-col gap-y-6 items-center md:items-start">
          <h1 className="text-2xl font-bold text-white text-center bg-primary-darker px-5 py-2 shadow-md shadow-primary-lighter">
            {title}
          </h1>
          <UiBreadcrumbs data={breadcrumbs} />
        </div>
      </div>
      <div className="px-2 md:p-[30px] mt-2 rounded-t-3xl shadow-t-md bg-white">{children}</div>
    </div>
  );
};

export default InfoLayoutComponent;

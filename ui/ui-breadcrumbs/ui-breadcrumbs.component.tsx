import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { IBreadcrumbs } from "@ui/shared-resources/interfaces/IBreadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import "./ui-breadcrumbs.component.scss";

interface IUiBreadcrumbs {
  data: IBreadcrumbs[];
}

const getRouteMatcher = (link: string | string[]): string => {
  return Array.isArray(link) ? link.join("/") : link;
};

const UiBreadcrumbs: React.FC<IUiBreadcrumbs> = ({ data }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      maxItems={2}
      separator={<NavigateNextIcon className="!text-[1rem]" color="primary" />}>
      {data &&
        data.map((item, index) => (
          <Link
            color="inherit"
            href={getRouteMatcher(item.link)}
            key={index}
            className={`!text-[.8rem] px-2 py-[2px] text-primary-default rounded-full ${
              index === data.length - 1 ? "bg-primary-darker text-white" : ""
            }`}>
            {item.label}
          </Link>
        ))}
    </Breadcrumbs>
  );
};

export default UiBreadcrumbs;

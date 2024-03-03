import React from "react";
import Chip from "@mui/material/Chip";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { IconColorEnum } from "../shared-resources/enums/utitlity.enums";

interface IUiHeaderChip {
  children?: React.ReactElement | string;
  clasName?: string;
  classRoot?: string;
  showSideBullets?: boolean;
  bulletsColor?: keyof typeof IconColorEnum;
  bulletSize?: string;
}

const UiHeaderChip: React.FC<IUiHeaderChip> = ({
  children,
  showSideBullets = true,
  classRoot,
  clasName,
  bulletsColor = "primary",
  bulletSize = "small",
}) => {
  const getSideBullet = () => {
    return (
      <div className="flex gap-1 items-center w-full">
        <FiberManualRecordIcon color={bulletsColor} style={{ fontSize: bulletSize }} />
        <div className="text-wrap">{children}</div>
        <FiberManualRecordIcon color={bulletsColor} style={{ fontSize: bulletSize }} />
      </div>
    );
  };
  return (
    <div
      className={`ui-header-chip p-[.5rem] bg-white w-fit rounded-full drop-shadow-md drop-shadow-xl ${
        clasName || ""
      }`}>
      {showSideBullets ? getSideBullet() : children}
    </div>
  );
};

export default UiHeaderChip;

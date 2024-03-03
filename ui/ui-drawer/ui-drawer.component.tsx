import React from "react";
import Drawer from "@mui/material/Drawer";
import { IDrawerAnchorEnum } from "./anchorEnum";
import "./ui-drawer.component.scss";
interface IUiDrawer {
  children: React.ReactElement;
  anchor?: keyof typeof IDrawerAnchorEnum;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  paperClassName?: string;
}
const UiDrawer: React.FC<IUiDrawer> = ({
  children,
  anchor = "right",
  isOpen = false,
  onClose = () => {},
  className,
  paperClassName,
}) => {
  return (
    <Drawer
      anchor={anchor}
      open={isOpen}
      onClose={() => onClose()}
      className={className}
      classes={{
        paper: "w-[90%] sm:w-[400px] !bg-black p-3",
      }}
    >
      {children}
    </Drawer>
  );
};

export default UiDrawer;

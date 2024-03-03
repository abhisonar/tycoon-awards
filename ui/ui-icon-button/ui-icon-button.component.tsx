import { IconButton, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import { getIcon } from "../../shared/constants/icon-registries";
import { ColorEnum } from "../shared-resources/enums/utitlity.enums";
interface IIconButton {
  icon: string;
  size: "small" | "medium" | "large";
  isDisabled: boolean;
  color: keyof typeof ColorEnum;
  clicked: () => void;
}
const UiIconButton: React.FC<IIconButton> = ({
  icon,
  size,
  isDisabled = false,
  color = "default",
  clicked,
}) => {
  const ICON = getIcon(icon as string) as OverridableComponent<
    SvgIconTypeMap<{}, "svg">
  > & {
    muiName: string;
  };
  return (
    <IconButton size={size} disabled={isDisabled} color={color}>
      <ICON />
    </IconButton>
  );
};

export default UiIconButton;

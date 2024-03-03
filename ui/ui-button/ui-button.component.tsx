"use client";

import { Button } from "@mui/material";
import React from "react";
import { ButtonColor, ButtonSize, ButtonVariant } from "./button.type";
import { ColorEnum } from "../shared-resources/enums/utitlity.enums";
interface IButtonProps {
  children?: React.ReactElement | string;
  variant: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  clicked: () => void;
  className?: string;
}

const UiButton: React.FC<IButtonProps> = ({
  children,
  variant = "text",
  size,
  color = "primary",
  clicked,
  className,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      className={`!${className}`}
      onClick={() => clicked()}>
      {children}
    </Button>
  );
};

export default UiButton;

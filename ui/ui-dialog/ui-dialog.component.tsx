"use client";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Fade from "@mui/material/Fade";
import { TransitionProps } from "@mui/material/transitions";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React, { useState } from "react";
import { DialogActions, DialogContent } from "@mui/material";

interface IUiDialog {
  dialogOpen: boolean;
  setDialogOpen: (isOpen: boolean) => void;
  dialogTitle?: React.ReactElement | string;
  dialogContent?: React.ReactElement | string;
  dialogActions?: React.ReactElement | string;
  isFullScreen?: boolean;
  isImageView?: boolean;
  dialogContentClass?: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Fade ref={ref} {...props} />;
});

const UiDialog: React.FC<IUiDialog> = ({
  dialogOpen = false,
  setDialogOpen,
  dialogTitle,
  dialogContent,
  dialogActions,
  isFullScreen = false,
  isImageView = false,
  dialogContentClass,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setDialogOpen(true);
    setOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setOpen(false);
  };
  return (
    <Dialog
      PaperProps={{ className: isImageView ? "!bg-blackOpacity" : "" }}
      fullScreen={isFullScreen}
      open={dialogOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description">
      <DialogTitle className={`flex ${dialogTitle ? "justify-between" : "justify-end"}`}>
        {dialogTitle}
        <div
          onClick={handleClose}
          className=" w-[24px] h-[24px] flex justify-center items-center p-2 rounded-full self-end bg-red-200 cursor-pointer">
          <CloseRoundedIcon color="error" fontSize="small" />
        </div>
      </DialogTitle>
      <DialogContent className={`!p-0 ${dialogContentClass}`}>{dialogContent}</DialogContent>
      <DialogActions>{dialogActions}</DialogActions>
    </Dialog>
  );
};

export default UiDialog;

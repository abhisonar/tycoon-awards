import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

interface IUiAccrodian {
  className?: string;
  title: React.ReactElement | string;
  detail: React.ReactElement | string;
}

const UiAccordian: React.FC<IUiAccrodian> = ({ className, detail, title }) => {
  return (
    <Accordion className={`${className}`}>
      <AccordionSummary expandIcon={<KeyboardArrowDownOutlinedIcon color="primary" />} classes={{}}>
        {title}
      </AccordionSummary>
      <AccordionDetails>{detail}</AccordionDetails>
    </Accordion>
  );
};

export default UiAccordian;

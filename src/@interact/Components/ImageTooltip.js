import { Tooltip } from "@mui/material";
import React from "react";

export default function ImageTooltip({ title, imgStyle, imgUrl, placement = "bottom" }) {
  return (
    <Tooltip title={title} placement={placement} arrow>
      <img style={imgStyle} alt="" src={imgUrl} />
    </Tooltip>
  );
}
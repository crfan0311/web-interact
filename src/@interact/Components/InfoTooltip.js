import { QuestionCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "@mui/material";
import React from "react";

export default function InfoTooltip({ title, placement = "bottom" }) {
  return (
    <Tooltip title={title} placement={placement} arrow>
      <QuestionCircleOutlined style={{ color: "gray", cursor: "help"}} />
    </Tooltip>
  );
}

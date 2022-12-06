import InfoTooltip from "@interact/Components/InfoTooltip";
import Div from "@jumbo/shared/Div";
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function TitleAndDesc({ title, children }) {
  return (
    <Stack direction="column" spacing={1} sx={{ width: 400 }}>
      <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
        {title}
      </Typography>
      <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
        {children}
      </Typography>
    </Stack>
  );
}

export function TitleAndDescFullWidth({ title, children, tooltipText }) {
  return (
    <Stack direction="column" spacing={1} width="100%">
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography sx={{ fontWeight: 500, fontSize: "20px" }}>
          {title}
        </Typography>
        {tooltipText ? <InfoTooltip title={tooltipText} /> : null}
      </Stack>

      <Div
        sx={{
          fontWeight: 400,
          fontSize: "14px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {children}
      </Div>
    </Stack>
  );
}

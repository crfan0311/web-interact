import { Stack, Typography } from "@mui/material";

export default function CreateCampaignItemWrapper({ children }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      {children}
    </Stack>
  );
}

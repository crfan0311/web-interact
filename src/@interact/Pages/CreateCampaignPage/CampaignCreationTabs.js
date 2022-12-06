import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTab = styled((props) => <Tab {...props} />)(
  ({ theme }) => ({
    // this uses the theme we passed to the ThemeProvider in App.js
    textTransform: "none",
    fontWeight: 400,
    fontSize: "16.21px",
    color: "DD00FF",
    "&.Mui-selected": {
      color: "#782FEE",
      //color: theme.palette.text.primary,
    },
    cursor: "default",
  })
);

export default function CampaignCreationTabs({
  selectedTabIndex,
  setSelectedTabIndex,
  TABS
}) {

  return (
    <Container
      disableGutters
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        maxWidth: 1000,
        mt: 1,
        mb: 3,
      }}
    >
      <Tabs
        value={selectedTabIndex}
        onChange={(_,index)=> {
          setSelectedTabIndex(index)
        }}
        centered={true}
        textColor="primary"
        variant="fullWidth"
        aria-label="icon label tabs example"
      >
        {Object.keys(TABS).map((tabIndex) => {
          const tab = TABS[tabIndex];
          return (<StyledTab key={tabIndex} label={tab.label} disabled={!tab.navigated} />);
        })}
      </Tabs>
    </Container>
  );
}

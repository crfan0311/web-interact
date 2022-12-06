import * as React from "react";

import { Container, Input } from "@mui/material";
import TextField from "@mui/material/TextField";

import GridContents from "./GridContents";

import DTPicker from "./DateTimePicker";
import BasicSelect from "./SelectCampaign";
// imports for tabs
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CreateIcon from "@mui/icons-material/Create"; // PENCIL BASICS
import EventIcon from "@mui/icons-material/Event"; //INTERACTION DATE PICKER
import ScheduleIcon from "@mui/icons-material/Schedule";
import InfoIcon from "@mui/icons-material/Info";
import QuizIcon from "@mui/icons-material/Quiz"; //FAQ
import PaidIcon from "@mui/icons-material/Paid";
import CampaignIcon from "@mui/icons-material/Campaign"; //MEGAPHONE FOR PROMOTION

export default function Header() {
  // logic for tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab icon={<CreateIcon />} label="BASICS" />
          <Tab icon={<EventIcon />} label="INTERACTION" />
          <Tab icon={<ScheduleIcon />} label="SCHEDULING" />
          <Tab icon={<InfoIcon />} label="CAMPAIGN INFO" />
          <Tab icon={<QuizIcon />} label="FAQ" />
          <Tab icon={<PaidIcon />} label="PAYMENT" />
          <Tab icon={<CampaignIcon />} label="PROMOTION" />
        </Tabs>
        <div
          style={{
            fontSize: 30,
            fontWeight: 800,
            paddingBottom: 10,
            paddingTop: 20,
          }}
        >
          Create a new campaign
        </div>
        {/* <div style={{ fontSize: 26, fontWeight: 400 }}>
          Title: <span style={{ color: "lightgray" }}>name your campaign</span>
        </div>

        */}

        <div style={{ fontSize: 26, fontWeight: 400 }}>
          Title:{" "}
          <span style={{ color: "lightgray" }}>
            {" "}
            <Input placeholder="name your campaign" />{" "}
            {/* figure out how to make this bigger */}
          </span>
        </div>

        <div style={{ fontSize: 26, fontWeight: 400 }}>
          Category: <BasicSelect />{" "}
        </div>

        <div style={{ fontSize: 26, fontWeight: 400 }}>
          Start date: <DTPicker />
        </div>

        <div style={{ fontSize: 26, fontWeight: 400 }}>
          Campaign duration: <DTPicker />
        </div>
      </div>
    </Container>
  );
}

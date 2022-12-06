import "./CampaignInfo.css";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { db } from "@jumbo/services/auth/firebase/firebase";
// import TableComponent from "../TableComponent/TableComponent";
// import Faq from "../Faq/Faq";
// import Comments from "../Comments/Comments";
import Supporters from "../Supporters/Supporters";
import { getDocs, collection } from "firebase/firestore";
import Comments from "../Comments/Comments";
import { StyledTab } from "@interact/Pages/CreateCampaignPage/CampaignCreationTabs";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function CampaignInfo({
  campaignData,
  comments,
  campaignId,
  bids,
  giveaways,
  isCampaignEnded,
}) {
  const [value, setValue] = React.useState(0);
  const [supporters, setSupporters] = React.useState([]);
  const [winners, setWinners] = React.useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function getSupporters() {
    let bidsItems = bids.map((bid) => {
      return { price: bid.price, ...bid.person };
    });
    let items = [...giveaways, ...bidsItems];
    items = items.sort(function (a, b) {
      return b.price - a.price;
    });
    setSupporters(items);
  }

  const getWinners = async function () {
    const giveawayWinners = await getDocs(
      collection(db, "campaigns", campaignId, "GiveawayWinners")
    );
    let giveawayWinnersList = [];
    giveawayWinners.forEach((doc) => {
      giveawayWinnersList.push(doc.data());
    });
    giveawayWinnersList = giveawayWinnersList.map((item) => {
      return { ...item.person };
    });

    const normalAuctionWinners = await getDocs(
      collection(db, "campaigns", campaignId, "normalAuctionWinners")
    );
    let normalAuctionWinnersList = [];
    normalAuctionWinners.forEach((doc) => {
      normalAuctionWinnersList.push(doc.data());
    });
    normalAuctionWinnersList = normalAuctionWinnersList.map((item) => {
      return { ...item.person };
    });

    const top3AuctionWinners = await getDocs(
      collection(db, "campaigns", campaignId, "top3AuctionWinners")
    );
    let top3AuctionWinnersList = [];
    top3AuctionWinners.forEach((doc) => {
      top3AuctionWinnersList.push(doc.data());
    });
    top3AuctionWinnersList = top3AuctionWinnersList.map((item) => {
      return { ...item.person };
    });

    let allWinners = [
      ...giveawayWinnersList,
      ...normalAuctionWinnersList,
      ...top3AuctionWinnersList,
    ];
    setWinners(allWinners);
  };

  React.useEffect(() => {
    getSupporters();
    if (isCampaignEnded) getWinners();
  }, [bids, giveaways]);

  return (
    <div className="InfoContainer">
      <br></br>
      <Box sx={{ borderTop: 1, borderBottom: 1, borderColor: "divider", color: "#782fee" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="primary"
          size="50"
        >
          <StyledTab label="Campaign info" color="inherit" />
          <StyledTab label="Comments" />
          {isCampaignEnded && <Tab label="Winners" />}
          <StyledTab label="Supporters" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {campaignData?.info?.description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Comments comments={comments} campaignId={campaignId} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Supporters supporters={supporters} campaignId={campaignId} />
      </TabPanel>

      {isCampaignEnded && (
        <TabPanel value={value} index={3}>
          <Supporters supporters={winners} campaignId={campaignId} />
        </TabPanel>
      )}
    </div>
  );
}

export default CampaignInfo;

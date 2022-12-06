import "./CampaignPage.css";
import { InfoCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  OutlinedInput,
  InputAdornment,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import moment from "moment";
import { getDateFromTimestamp } from "app/utils";
import Span from "@jumbo/shared/Span";
import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import { light } from "@mui/material/styles/createPalette";
import {localizationServices} from "app/services/localization"
import ImageTooltip from "@interact/Components/ImageTooltip";
export default function Header({ campaignData, badgeUrl }) {
  const numInteractions = Number(campaignData.numAuctionInteractions ?? 0) + Number(campaignData.numGiveawayInteractions ?? 0);

  return (
    <div className="Description">
      <Typography
        variant="h3"
        py={0}
        mb={0}
        style={{ fontSize: 30, fontWeight: 400 }}
      >
        {campaignData?.title}
      </Typography>
      <div style={badgeUrl === null ? {marginTop: "10px"} : {display: "flex", alignItems: "center", flexDirection: "row", gap: "30px", marginTop: "10px"}}>
        <Typography sx={{ color: "text.secondary", fontSize: 18 }}>
          Created by
          <span style={{ color: "#782fee", fontWeight: 600 }}>
            {campaignData?.creatorName}
          </span>
        </Typography>
        {badgeUrl && 
        <ImageTooltip
          title="Ranks correspond to the amount of money raised by the creator from all of their campaigns: Diamond $1M, Platinum $100K, Gold $10K, Silver $1K, 
          Bronze $0. The higher the rank, the higher the benefits!"
          imgStyle={{width: "45px", transform: 'translateY(-4px)', cursor: "help"}}
          imgUrl={badgeUrl}
        />
        }
      </div>
      <Divider />
      <Stack direction="column">
        <Typography py={0}>
          <Span>
            {numInteractions} interactions will be carried out from{" "}
            {getDateFromTimestamp({
              timestamp: campaignData?.interactionStartDateTime?.seconds,
            })}{" "}
            to{" "}
            {getDateFromTimestamp({
              timestamp: campaignData?.interactionEndDateTime?.seconds,
            })}
            , don't miss out!
          </Span>
          <br />
          <Span>
            Campaign ends at{" "}
            {getDateFromTimestamp({
              timestamp: campaignData?.endDateTime?.seconds,
              format: ` h:mm a [${localizationServices.getDeviceTimezone()} on] dddd, MMMM Do YYYY`,
            })}
          </Span>
        </Typography>
      </Stack>
      <br></br>
      <InteractFlashyButton
          // variant="h4"
          // m={0}
          // p={0}
          // sx={{ color: "secondary.contrastText" }}
        >
          {(()=> {
            // Return ENDS if the campaign hasn't ended, else Ended
            if (moment().isBefore(moment.unix(campaignData?.endDateTime?.seconds))) {
              return "Ends"
            }
            else {
              return "Ended"
            }
          })()}
{" "}{moment.unix(campaignData?.endDate?.seconds).toNow()}
      </InteractFlashyButton>

      {/* <Box
        sx={{
          background: "linear-gradient(173.73deg, #782FEE, #DD00FF 117.43%)",
          borderRadius: 2,
          px: 2,
          mb: 4,
        }}
      >
       
      </Box> */}
    </div>
  );
}

import { Icon } from "@iconify/react";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import { Avatar, Box, Chip, Link, Stack, Typography } from "@mui/material";
import ChipWithIconAvatar from "app/pages/components/mui/Chips/ChipWithIconAvatar";
import { formatMoney } from "app/utils";
import "./CampaignSnippet.css";
import { useEffect, useRef } from "react";
import UserCampaignStatus from "./UserCampaignStatus";

export default function CampaignSnippet(props) {
  
  const {info} = props;
    
  return (
    <JumboCardQuick noWrapper sx={{ maxWidth: 280, m: 2 }}>
      <Box sx={{ position: "relative" }}>
        <img
          alt=""
          style={{
            width: "100%",
            borderBottomWidth: 5,
            borderTopRightRadius: 11,
            borderBottomStyle: "solid",
            borderBottomColor: "#782fee",
          }}
          src="https://clips-media-assets2.twitch.tv/AT-cm%7C861811248-preview-480x272.jpg"
        />
        <Chip
          size="small"
          sx={{
            position: "absolute",
            bottom: 14,
            left: 4,
            backgroundColor: "divider",
            fontSize: 12,
          }}
          icon={<Icon icon="iconoir:warning-circled-outline" />}
          label="Limited interactions"
        />
      </Box>
      <Box sx={{ px: 1 }}>
        <UserCampaignStatus
          userGiveawayWinChance={info.winningChance}
          userAuctionPosition={info.bidPosition}
        />
      </Box>

      <Stack sx={{ p: 2 }}>
        <Typography sx={{ fontWeight: 500 }}>
          I will {info.goal} at ${formatMoney(info.goalValue)}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          by {info.endDateTime}
        </Typography>

        <br />
        <Stack direction="row" spacing={1}>
          <Avatar sx={{ width: 24, height: 24 }} />
          <Box>
            <Typography>{info.titie}</Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Created by{" "}
              <Link href="#" sx={{ color: "primary.main" }}>
              {info.username}
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </JumboCardQuick>
  );
}

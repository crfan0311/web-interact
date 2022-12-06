import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import { getDateFromTimestamp } from "app/utils";
import { db } from "@jumbo/services/auth/firebase/firebase";
import { Close, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonBase,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import SoloPage from "app/layouts/solo-page/SoloPage";
import { doc, getDoc } from "firebase/firestore";
import { httpsCallable } from "firebase/functions";
import { createCampaignURL, functions } from "../../../firebase.js";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InteractionIcon from "../../Images/interaction-icon.png";
import InteractButton from "@interact/Components/Button/InteractButton.js";
import Span from "@jumbo/shared/Span/Span.js";
import useCurrentUser from "@interact/Hooks/use-current-user.js";
import Loading from "@interact/Components/Loading/Loading.js";

export default function CampaignCreationConfirmationPage() {
  const [campaignData, setCampaignData] = useState(null);
  const [campaignImage, setCampaignImage] = useState(null);
  const { user } = useCurrentUser();
  const { campaignId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getCampaign = async () => {
      let fetchedData = (
        await getDoc(doc(db, "campaigns", campaignId))
      ).data();
      setCampaignData(fetchedData);

      const getImage = httpsCallable(functions, "getCampaignImage");

      getImage({
        title: fetchedData?.title,
        categories: fetchedData?.categories,
        creatorName: fetchedData?.creatorName,
        description: fetchedData?.description,
        thumbnailUrl: fetchedData?.campaignVideoThumbnailLink,
        startDate: getDateFromTimestamp({
          timestamp: fetchedData?.startDateTime?.seconds,
        }),
        endDate: getDateFromTimestamp({
          timestamp: fetchedData?.endDateTime?.seconds,
        }),
        goal: fetchedData?.goal,
        goalValue: fetchedData?.goalValue,
        numInteractions: JSON.stringify(
          fetchedData?.numAuctionInteractions +
          fetchedData?.numGiveawayInteractions
        ),
        campaignUrl: fetchedData?.customURL,
      })
        .then((result) => {
          setCampaignImage(result?.data?.file?.url);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    getCampaign();
  }, []);

  if (!user) return <Loading></Loading>

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        padding: 5,
        backgroundColor: "background.default",
      }}
    >
      <Box sx={{ position: "fixed", top: 10, right: 10 }}>
        <IconButton
          //disableRipple
          //disableFocusRipple
          onClick={() => navigate(`/u/`+user.name)}
        >
          <Close sx={{ color: "text.secondary" }} />
        </IconButton>
      </Box>
      <Stack
        direction="column"
        alignItems="center"
        width={"100%"}
        height={"100%"}
      >
        <Stack
          direction="column"
          alignItems="center"
          flex={1}
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: 1000 }}
        >
          <Stack
            direction="column"
            alignItems="center"
            flex={1}
            spacing={4}
            justifyContent="center"
            sx={{ maxWidth: 1000 }}
          >
            <Typography variant="h2">
              Success! Your campaign has been created!
            </Typography>
            <Typography variant="h5" sx={{ pb: 4 }}>
              Your campaign will start on{" "}
              {getDateFromTimestamp({
                timestamp: campaignData?.startDateTime?.seconds,
                format: "MMM Do, YYYY [at] h:mm a",
              })}
            </Typography>
            <Typography textAlign="center" sx={{ maxWidth: 500 }}>
              Until then, you can unsubmit and make changes to the campaign. You
              will not be able to make changes after the campaign goes live.
            </Typography>
            <img alt="interaction-icon" src={InteractionIcon} width={120} />

            <Typography textAlign="center" sx={{ maxWidth: 500 }}>
              You can now download a panel containing a summary of your campaign
              details. If on Twitch, add your campaign link{" "}
              <Span sx={{ fontWeight: 500 }}>
                https://www.interact.vip/{campaignData?.customURL}
              </Span>{" "}
              to the 'Image Links To' section when uploading a panel
            </Typography>
            <Stack direction="row" alignItems="center" spacing={4}>
              <InteractFlashyButton
                onClick={() => navigate(`/c/${(campaignData?.customURL !== "custom-campaign" && campaignData?.customURL) ?? campaignId}`)}
              >
                Go to campaign
              </InteractFlashyButton>

              <InteractButton sx={{ height: 40 }} disabled={!campaignImage}>
                {!campaignImage ? (
                  "Generating panel for download..."
                ) : (
                  <Link
                    sx={{ textDecoration: "none" }}
                    href={campaignImage}
                    download
                  >
                    Get campaign panel
                  </Link>
                )}
              </InteractButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

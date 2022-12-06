import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import InteractChip from "@interact/Components/Chips/InteractChip";
import Loading from "@interact/Components/Loading/Loading";
import {
  getDateFromTimestamp,
  getYoutubeIDFromURL,
} from "app/utils";
import { db } from "@jumbo/services/auth/firebase/firebase";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import { ExpandLess } from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  Container,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FAQAccordian from "./FAQAccordian";
import { httpsCallable } from "firebase/functions";
import { functions, publishCampaign } from "../../../firebase";
import useCurrentUser from "@interact/Hooks/use-current-user";
import { campaignServices } from "app/services/campaign";

export function CampaignSummaryItem({ label, value }) {
  return (
    <Grid item xs={12} sm={6} md={6}>
      <Typography sx={{ fontWeight: 500, fontSize: 18 }}>{label}</Typography>
      <Typography
        sx={{ fontWeight: 500, fontSize: 16, color: "text.secondary" }}
      >
        {value}
      </Typography>
    </Grid>
  );
}

export default function CampaignCreationSummaryPage() {
  const [campaignData, setCampaignData] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);
  const navigate = useNavigate();
  const { user } = useCurrentUser();
  const { campaignId } = useParams();

  useEffect(() => {
    const getCampaign = async () => {
      let fetchedData = (await getDoc(doc(db, "campaigns", campaignId))).data();

      setCampaignData(fetchedData);
    };

    getCampaign();
  }, []);

  const Swal = useSwalWrapper();

  const CAMPAIGN_SUMMARY_ITEMS = [
    { label: "Goal Value", value: `$${campaignData?.goalValue}` },
    { label: "Goal", value: campaignData?.goal },
    {
      label: "Start Date",
      value: getDateFromTimestamp({
        timestamp: campaignData?.startDateTime?.seconds,
      }),
    },
    {
      label: "End Date",
      value: getDateFromTimestamp({
        timestamp: campaignData?.endDateTime?.seconds,
      }),
    },
    { label: "Duration", value: `${campaignData?.durationDays} days` },
    {
      label: "Interaction End Date",
      value: getDateFromTimestamp({
        timestamp: campaignData?.interactionEndDateTime?.seconds,
      }),
    },
    { label: "Auction Min. Bid", value: `$${campaignData?.auctionMinBid}` },
    {
      label: "Giveaway VIP Entry Price",
      value: `$${campaignData?.giveawayVIPEntryCost}`,
    },
    {
      label: "Custom URL",
      value: `www.interact.vip/${campaignData?.customURL}`,
    },
  ];

  async function submitCampaign() {
    let overlappingCampaignDate = await campaignServices.hasOverlappingCampaign({
      userId: user.id,
      newCampaignStartDate: campaignData.startDateTime
    });

    if (overlappingCampaignDate ) {
      Swal.fire({
        icon: "error",
        text: "You already have a campaign whose interactions end on " + overlappingCampaignDate + ". Please choose a different start date.",
      });
      return;
    }
    const docRef = doc(db, "campaigns", campaignId); //this needs to be passed in programatically
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    // get conversion rate
    const getConversionRate = httpsCallable(
      functions,
      "getCurrencyConversionRate"
    );

    const conversionResponse = await getConversionRate({
      currency: campaignData?.currency,
    });

    updateDoc(docRef, { currencyExchangeRate: conversionResponse?.data ?? 1 })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
        setSubmitClicked(false);
      }); // this is updating the campaign, provided it already exists. each time a new campaign is created, we would need to run an ".add" and init the fields instead of a ".update"

    // save as campaignStatus: "scheduled"

    publishCampaign(campaignId, user.id)
      .then(() => {
        navigate(`/a/campaign-creation-confirmation/${campaignId}`);
        Toast.fire({
          icon: "success",
          title: "Campaign successfully created!",
        });
      })
      .catch((error) => {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "Failed to link server.",
        });
        setSubmitClicked(false);
      }); // this is updating the campaign, provided it already exists. each time a new campaign is created, we would need to run an ".add" and init the fields instead of a ".update"
  }

  if (!campaignData) {
    return <Loading />;
  } else {
    return (
      <Slide
        direction="left"
        timeout={1369}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100%",
            padding: 0,
            backgroundColor: "background.default",
          }}
        >
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <ButtonBase
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "text.hint",
              }}
              onClick={()=> navigate('/d/' + campaignId)}>
              <ExpandLess />
              <Typography sx={{ my: 0, py: 0 }}>Go back and edit</Typography>
            </ButtonBase>
          </Container>
          <Typography
            variant="h2"
            mt={4}
            sx={{ fontWeight: 500, alignSelf: "center" }}
          >
            Are you sure you want to submit this campaign?
          </Typography>
          <Stack
            direction="row"
            alignSelf="center"
            spacing={4}
            mt={6}
            pb={10}
            sx={{ maxWidth: 800 }}
          >
            <Stack direction="column" spacing={3} sx={{ maxWidth: 350 }}>
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                sx={{
                  bgcolor: "divider",
                  width: 350,
                  height: 180,
                  borderRadius: 2,
                  textAlign: "center",
                  overflow: "hidden",
                }}
              >
                <iframe
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={`https://www.youtube.com/embed/${getYoutubeIDFromURL(
                    campaignData?.campaignVideoLink
                  )}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Stack>

              <FAQAccordian
                data={campaignData}
                FAQAnswers={campaignData?.FAQAnswers}
                setFAQAnswers={null}
                shouldAllowEdit={false}
              />
            </Stack>
            <Stack direction="column" spacing={3}>
              <Stack spacing={2} sx={{ height: 180 }}>
                <Typography variant="h3" sx={{ fontWeight: 500 }}>
                  {campaignData?.title}
                </Typography>
                <Typography flex={1}>{campaignData?.description}</Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  {campaignData?.categories?.map((item, index) => (
                    <InteractChip label={item} key={index} />
                  ))}
                </Stack>
              </Stack>
              <Grid sx={{ width: "100%" }} container rowSpacing={3}>
                {CAMPAIGN_SUMMARY_ITEMS?.map((item, index) => (
                  <CampaignSummaryItem
                    key={index}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Grid>
            </Stack>
          </Stack>
          <Box sx={{ position: "fixed", bottom: 50, right: 50 }}>
            <InteractFlashyButton
              disabled={submitClicked}
              onClick={() => {
                setSubmitClicked(true);
                submitCampaign();
              }}
            >
              Submit ✓
            </InteractFlashyButton>
          </Box>
        </Box>
      </Slide>
    );
  }
}

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  Link,
  Modal,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CreateCampaignItemWrapper from "../CreateCampaignItemWrapper";
import TitleAndDesc from "../CampaignTitleAndDesc";
import { Add, Close } from "@mui/icons-material";
import {
	getYoutubeThumbnailURI,
  isValidHttpUrl,
  isValidYoutubeURL,
} from "app/utils/www";
import { TabNavigation } from "../TabNavigation";
import { useFormValidation } from "@interact/Hooks/use-form-validation";
import { addTrailingZerosToDollarValue } from "app/utils";

import { ThumbnailWithEdit } from "@interact/Components/Thumbnail/ThumbnailWithEdit";

const DEFAULT_VIDEO_PLACEHOLDER = "youtube.com/watch?v=";

export default function GoalVideoTab({
  data,
  setData,
  selectedTabIndex,
  setSelectedTabIndex,
}) {
  const [isScriptExampleModalOpen, setIsScriptExampleModalOpen] =
    useState(false);
  const [campaignMoneyGoal, setCampaignMoneyGoal] = useState(
    addTrailingZerosToDollarValue(data?.goalValue)
  );
  const [campaignGoal, setCampaignGoal] = useState(data?.goal);
  const [selectedVideo, setSelectedVideo] = useState(
    data?.campaignVideoLink ?? DEFAULT_VIDEO_PLACEHOLDER
  );
  const [videoThumbnailLink, setVideoThumbnailLink] = useState(
    data?.campaignVideoThumbnailLink
  );
  const [formValidationConditions, setFormValidationConditions] =
    useState(false);
  const [errors, setErrors] = useState(false);

 

  useEffect(() => {

	
		if (!data.campaignVideoThumbnailLink){
			if (isValidYoutubeURL(selectedVideo)) {
				const link = getYoutubeThumbnailURI(selectedVideo);
				setData({
					campaignVideoThumbnailLink: link,
					campaignVideoLink: selectedVideo,
				});
			} 
			else {
				setVideoThumbnailLink("incorrecturl");
			}
		}
    
  }, [selectedVideo]);

  useEffect(() => {
    setFormValidationConditions(
      campaignGoal?.length <= 50 &&
        campaignGoal?.length > 0 &&
        isValidHttpUrl(selectedVideo)
    );
  }, [campaignGoal, selectedVideo]);

  useEffect(() => {
    if (!formValidationConditions) {
      setErrors(true);
    } else {
      setErrors(false);
    }
  }, [formValidationConditions]);

  const isTabValidated = useFormValidation({
    selectedTabIndex,
    lastCompletedTabIndex: data?.lastCompletedTabIndex,
    setData,
    formValidationConditions,
  });

  return (
    <>
      <Modal open={isScriptExampleModalOpen}>
        <Box
          sx={{
            p: 3,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "background.paper",
            borderRadius: 3,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h3" sx={{ mt: 1 }}>
              Sample script:
            </Typography>

            <IconButton onClick={() => setIsScriptExampleModalOpen(false)}>
              <Close />
            </IconButton>
          </Stack>
          <Typography sx={{ mt: 2 }}>
            Come show off your legendary skills to everyone; play with me for
            ~45 minutes & let's get to know each other. Tell me about your life!
            We live in a society. There are serveral ways to get an interaction
            with me: Enter the giveaway to have a chance of getting to play with
            me 1-on-1 (50 interactions as the prize). You can enter for free or
            support my content by buying a VIP entry for $3 (25x higher chance).
            If you don’t win, your chances will be doubled in future campaigns,
            stacking up to 4x. There's also the auction. Show some love if
            you've just landed a 6-figure job because you're so goddam smart, or
            you won a LAN tournament with your godly skills. Place a bid & at
            the end of the campaign at 8pm EST on March 14th, the top 50 bids
            get an interaction. These interactions will occur first, before
            giveaway winners, and the top 3 will get 90 minutes to chat, show
            off, & game with me.
            <br></br>
            <br></br>
          </Typography>
        </Box>
      </Modal>
      <Stack direction="column" alignItems="center">
        <Typography variant="h2" sx={{ fontWeight: 500 }}>
          What's your goal for this campaign?
        </Typography>
        <Stack direction="row" alignItems="center" mt={4} sx={{ fontSize: 18 }}>
          If we raise{" "}
          <GoalInput
            value={campaignMoneyGoal}
            setValue={setCampaignMoneyGoal}
            setData={setData}
            dataField={"goalValue"}
          />
          I will
          <FormControl>
            <TextField
              sx={{ mx: 2, mt: 2, width: 400 }}
              variant="outlined"
              inputProps={{ maxLength: 50 }}
              error={campaignGoal.length == 0}
              value={campaignGoal}
              // onPaste={(e) => {
              //   const pastedValue = e.clipboardData.getData("text");
              //   console.log([
              //     'Paste',
              //     pastedValue,
              //     e.target.value
              //   ])
              //   if (isValidYoutubeURL(e.target.value)) {
              //     e.preventDefault();
              //     setSelectedVideo(pastedValue);
              //   }
              // }}
              onChange={(e) => {
                if (e.target.value.length > 0) {
                  setData({ goal: e.target.value });
                }

                setCampaignGoal(e.target.value);
              }}
              helperText="Max. 50 characters."
              placeholder={`Eat a cricket on stream`}
              fullWidth
            />
          </FormControl>
        </Stack>
      </Stack>

      <CreateCampaignItemWrapper>
        <TitleAndDesc title="Short video">
          Include a link to a YouTube video where you explain what will happen (e.g. play a game, chat in Discord), state your goal, & how fans can acquire them in the campaign.
          <br />
          <br />
          If you wish, you may replace your thumbnail on the right; otherwise we'll use the thumbanil from the video.
          <br />
          <br />
          <Button
            sx={{
              textTransform: "none",
              textAlign: "left",
              p: 0,
              textDecoration: "underline",
            }}
            onClick={() => setIsScriptExampleModalOpen(true)}
          >
            Not sure what to say? See a sample script here
          </Button>
        </TitleAndDesc>
        <Stack spacing={3} maxWidth={380}>
          {/* <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            position="relative"
            sx={{
              bgcolor: "divider",
              borderRadius: 2,
              overflow: "hidden",
              textAlign: "center",
              maxHeight: 218
            }}
          >
            
            
          </Stack> */}
          <ThumbnailWithEdit
            URI={videoThumbnailLink}
            onImageChanged={async (newURI) => {
              // Save new URI to campaign data
              await setData({
                campaignVideoThumbnailLink: newURI,
              });
              setVideoThumbnailLink(newURI);
            }}
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Video link"
            value={selectedVideo}
            error={!isValidYoutubeURL(selectedVideo)}
            onChange={(e) => {
              const nextValue = e.target.value;
              const isEmpty = !nextValue?.trim();
              setSelectedVideo(isEmpty ? DEFAULT_VIDEO_PLACEHOLDER : nextValue);
            }}
          />
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Name the video the same title as the title / goal of this campaign
          </Typography>
        </Stack>
      </CreateCampaignItemWrapper>
      {errors ? (
        <FormHelperText>Please complete all form fields.</FormHelperText>
      ) : null}
      <TabNavigation
        disableNext={!isTabValidated}
        selectedTabIndex={selectedTabIndex}
        setSelectedTabIndex={setSelectedTabIndex}
      />
    </>
  );
}

// Note - worth refactoring with BitInput from InteractionTab.js
function GoalInput({ value, setValue, setData, dataField }) {
  // These are currently the same for both auctions and giveaway. If they change,
  // pass these values in through props instead.
  const increment = 0.5;
  const minValue = 10;

  function validate(nextValue) {
    function isValidIncrement(nextIncrement) {
      if (nextIncrement % increment === 0) {
        return true;
      } else {
        return false;
      }
    }

    return (
      typeof nextValue === "number" &&
      !isNaN(nextValue) &&
      nextValue >= minValue &&
      isValidIncrement(nextValue)
    );
  }

  function handleBid(e) {
    const nextValue = Number(e.target.value);
    const isValid = validate(nextValue);
    if (!isValid) {
      setValue(addTrailingZerosToDollarValue(minValue));
    } else {
      setValue(addTrailingZerosToDollarValue(nextValue));
      setData({ [dataField]: nextValue });
    }
  }

  return (
    <FormControl>
      <OutlinedInput
        type="number"
        error={value < minValue}
        inputProps={{ step: ".50" }}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        sx={{ mx: 2, mt: 2 }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => handleBid(e)}
      />
      <FormHelperText sx={{ ml: 3 }}>
        $0.50 increments. Min. $10.00
      </FormHelperText>
    </FormControl>
  );
}

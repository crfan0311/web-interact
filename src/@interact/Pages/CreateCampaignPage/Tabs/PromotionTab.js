import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CreateCampaignItemWrapper from "../CreateCampaignItemWrapper";
import TitleAndDesc, { TitleAndDescFullWidth } from "../CampaignTitleAndDesc";
import InfoTooltip from "@interact/Components/InfoTooltip";
import { TabNavigation } from "../TabNavigation";
import { useFormValidation } from "@interact/Hooks/use-form-validation";
import { isValidHttpUrl } from "app/utils/www";
import { checkCustomURLAgainstOtherCampaigns } from "../../../../firebase";
import { INVALID_CUSTOM_URLS } from "config";

export default function PromotionTab({
  data,
  setData,
  selectedTabIndex,
  setSelectedTabIndex,
}) {
  const [discord, setDiscord] = useState(data?.socials.discord);
  const [youtube, setYoutube] = useState(data?.socials.youtube);
  const [twitch, setTwitch] = useState(data?.socials.twitch);
  const [reddit, setReddit] = useState(data?.socials.reddit);
  const [twitter, setTwitter] = useState(data?.socials.twitter);
  const [facebook, setFacebook] = useState(data?.socials.facebook);
  const [instagram, setInstagram] = useState(data?.socials.instagram);
  const [tiktok, setTiktok] = useState(data?.socials.tiktok);
  const [URL, setURL] = useState(data?.customURL);
  const [savedURL, setSavedURL] = useState(data?.savedCustomURL);
  const [shouldSaveURL, setShouldSaveURL] = useState(false);
  const [formValidationConditions, setFormValidationConditions] =
    useState(false);
  const isTabValidated = useFormValidation({
    lastCompletedTabIndex: data?.lastCompletedTabIndex,
    isLastTab: true,
    selectedTabIndex,
    setData,
    formValidationConditions,
  });
  const [errors, setErrors] = useState(false);

  const [customURLDescription, setCustomURLDescription] = useState("3 to 30 characters. Letters, numbers, and dashes only.")

  useEffect(() => {
    if (data.customURL === URL) {
      setErrors(false);
      setCustomURLDescription("3 to 30 characters; letters, numbers, and dashes only");
      setFormValidationConditions(true);
      return
    }
    checkCustomURLAgainstOtherCampaigns(URL)
      .then((campaign) => {
        if (campaign) {
          setCustomURLDescription("URL is already taken; have another go!");
          setErrors(true);
        } else {
          setErrors(false);
          setCustomURLDescription("3 to 30 characters. Letters, numbers, and dashes only.");
          setData({ customURL: URL })
        }
        setFormValidationConditions(
          campaign === undefined
        );
      })
  }, [URL]);


  function handleURLChange(e) {
    const nextValue = e.target.value;
    if (
      nextValue.match(/^[\w-]+$/) &&
      nextValue.length >= 3 &&
      nextValue.length <= 30 &&
      !INVALID_CUSTOM_URLS.includes(nextValue)
    ) {
      // here we would also check if the URL already exists in the DB.
      if (shouldSaveURL) {
        setData({
          customURL: nextValue,
          customSavedURL: nextValue,
        });
      } else {
        console.log("Allowing url save");
        setData({
          customURL: nextValue,
        });
      }
    } else {
      setErrors(true);
      setCustomURLDescription("3 to 30 characters. Letters, numbers, and dashes only.");
    }
    setURL(nextValue);
  }

  function handleURLSaveCheck(e) {
    setShouldSaveURL(e.target.checked);

    if (e.target.checked) {
      setSavedURL(URL);
      setData({ customSavedURL: URL });
    } else {
      setSavedURL("");
      setData({ customSavedURL: null });
    }
  }

  return (
    <>
      <CreateCampaignItemWrapper>
        <TitleAndDesc title="Campaign URL">
        <br />
          Select a URL for this campaign. Note that this URL won't be reserved until you press submit. Upon submitting this campaign, the inputted URL will 
          become the URL of this campaign. <br />
          <br />
          WARNING: 
          <span style={{ color: "#782fee", fontWeight: 600 }}>
          {" "}if you have an active campaign with 
          this reserved URL, it will also be replaced when you press submit.
          </span>
        </TitleAndDesc>
        <Stack alignItems="flex-end">
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h3">www.interact.vip /</Typography>
            <TextField
              variant="outlined"
              inputProps={{ maxLength: 30 }}
              helperText={customURLDescription}
              value={URL}
              error={!URL.match(/^[\w-]+$/) || URL.length < 3 || errors}
              onChange={(e) => handleURLChange(e)}
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={shouldSaveURL}
                  onChange={handleURLSaveCheck}
                />
              }
              label="Save URL for future campaigns"
            />
            <InfoTooltip title="This will override any past saved URLs, you can only reserve 1 URL at a time" />
          </Stack>
        </Stack>
      </CreateCampaignItemWrapper>
      <CreateCampaignItemWrapper>
        <TitleAndDescFullWidth title="Social links">
          <Stack
            direction="row"
            spacing={4}
            justifyContent="space-between"
            flex={1}
            width="100%"
          >
            <Stack spacing={2} flex={1} justifyContent="space-between">
              <SocialLinkTextField
                label={"Discord server link"}
                value={discord}
                setValue={setDiscord}
                data={data}
                setData={setData}
                dataField={"discord"}
              />

              <SocialLinkTextField
                label={"YouTube channel link"}
                value={youtube}
                setValue={setYoutube}
                data={data}
                setData={setData}
                dataField={"youtube"}
              />
              <SocialLinkTextField
                label={"Twitch server link"}
                value={twitch}
                setValue={setTwitch}
                data={data}
                setData={setData}
                dataField={"twitch"}
              />
              <SocialLinkTextField
                label={"SubReddit link"}
                value={reddit}
                setValue={setReddit}
                data={data}
                setData={setData}
                dataField={"reddit"}
              />
            </Stack>
            <Stack spacing={2} flex={1} justifyContent="space-between">
              <SocialLinkTextField
                label={"Twitter profile link"}
                value={twitter}
                setValue={setTwitter}
                data={data}
                setData={setData}
                dataField={"twitter"}
              />

              <SocialLinkTextField
                label={"Facebook page link"}
                value={facebook}
                setValue={setFacebook}
                data={data}
                setData={setData}
                dataField={"facebook"}
              />

              <SocialLinkTextField
                label={"Instagram page link"}
                value={instagram}
                setValue={setInstagram}
                data={data}
                setData={setData}
                dataField={"instagram"}
              />
              <SocialLinkTextField
                label={"TikTok profile link"}
                value={tiktok}
                setValue={setTiktok}
                data={data}
                setData={setData}
                dataField={"tiktok"}
              />
            </Stack>
          </Stack>
        </TitleAndDescFullWidth>
      </CreateCampaignItemWrapper>
      <TabNavigation
        disableNext={!isTabValidated}
        selectedTabIndex={selectedTabIndex}
        setSelectedTabIndex={setSelectedTabIndex}
      />
    </>
  );
}

function SocialLinkTextField({
  value,
  setValue,
  data,
  setData,
  label,
  dataField,
}) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      label={label}
      value={value}
      error={value && !isValidHttpUrl(value)}
      onChange={(e) => {
        const nextValue = e.target.value;

        setValue(nextValue);

        if (isValidHttpUrl(nextValue))
          setData({
            socials: {
              ...data?.socials,
              [dataField]: nextValue,
            },
          });
      }}
    />
  );
}

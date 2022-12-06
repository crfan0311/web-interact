import InteractButton from "@interact/Components/Button/InteractButton";
import { useFormValidation } from "@interact/Hooks/use-form-validation";
import Span from "@jumbo/shared/Span";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import { Close, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  IconButton,
  Link,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { discordServices } from "app/services/discord";
import { urlencode } from "app/utils/www";
import React, { useEffect, useState } from "react";
import TitleAndDesc from "../CampaignTitleAndDesc";
import CreateCampaignItemWrapper from "../CreateCampaignItemWrapper";
import { TabNavigation } from "../TabNavigation";




/**
 * Performs OAuth
 * Returns either `false` or the authorization data
 */
const performOAuth = () => {
  return new Promise(async (resolve, reject) =>{

    await discordServices.revokeAuthorization();


    // // Build Authorization URI
    const oAuthURI = await discordServices.generateAuthorizationURI();


    // Launch an OAuth flow in a new tab

    const windowHandle = window.open(oAuthURI, "_blank");


    // Wait for the user to authorize the app
    windowHandle.onclose = () => {
      // When the window closes, check if we have a code
      resolve(localStorage.getItem("DISCORD_LINK_STATUS"));
    }


    const authData = await discordServices.waitForAuthorization();

    if (authData) {
      // Ensure that we close the window
      windowHandle.close();

      // Only resolve if this promise has not already been resolved
      resolve(authData);
    }


    
  });
  
};





const INTERACT_METHODS = {
  NOT_LINKED: null,
  DISCORD: 'discord',
  GMEET: 'googleMeet'
}



export default function InteractMethodTab({
  data,
  setData,
  selectedTabIndex,
  setSelectedTabIndex,
  setValid
}) {
  const [title, setTitle] = useState(data?.title);
  const [description, setDescription] = useState(data?.description);
  const [categories, setCategories] = useState(data?.categories);
  const [errors, setErrors] = useState(false);
  const [formValidationConditions, setFormValidationConditions] =
    useState(false);


  const [LinkingInteraction, setLinkingInteraction] = useState(data?.interactMethod);


  /**
   * Describes the linked interaction method
   */
  const [LinkedInteractMethod, setLinkedInteractMethod] = useState(INTERACT_METHODS.NOT_LINKED);

  const isDiscordLinked = LinkedInteractMethod === INTERACT_METHODS.DISCORD;
  const isGoogleMeetLinked = LinkedInteractMethod === INTERACT_METHODS.GMEET;

  const [shouldShowProgressModal, setShouldShowProgressModal] = useState(false);

  useEffect(() => {
    setFormValidationConditions(
      LinkingInteraction === INTERACT_METHODS.GMEET || LinkingInteraction === INTERACT_METHODS.DISCORD
    );
  }, [LinkingInteraction]);

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
  
  setValid && setValid(isTabValidated);

  

  const Swal = useSwalWrapper();

  function handleGoogleMeetButton() {
    if (isGoogleMeetLinked) {
      setLinkingInteraction(null);
      setData({ interactMethod: "" });
    } else {
      setLinkedInteractMethod(INTERACT_METHODS.GMEET);
      setLinkingInteraction(INTERACT_METHODS.GMEET);
      setData({ interactMethod: INTERACT_METHODS.GMEET });
    }
  }

  function handleLinkDiscordButton() {
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
    



    setShouldShowProgressModal(true);

    performOAuth().then((authData) => {
      console.log('Received authData', authData);
      const success = !!authData;
      if (success) {
        Toast.fire({
          icon: "success",
          title: "Discord server linked successfully",
        }).then(()=> {
          setShouldShowProgressModal(false);
        });
        
        setLinkedInteractMethod(INTERACT_METHODS.DISCORD);
        setLinkingInteraction(INTERACT_METHODS.DISCORD);
        setData({ interactMethod: INTERACT_METHODS.DISCORD });
    }
    else{
      Toast.fire({
        icon: "error",
        title: "Failed to link server.",
      }).then(() => {
        setShouldShowProgressModal(false);
      });
    }


    });   
  }

  return (
    <>
      <Modal open={shouldShowProgressModal}>
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">Linking to Discord...</Typography>

          <CircularProgress sx={{ my: 4 }} />
        </Box>
      </Modal>
      <Stack direction="column" spacing={6}>
        <CreateCampaignItemWrapper>
          <TitleAndDesc title="Link your Discord server">
            Interact via Discord to play mini-games like miniputt & watch
            Youtube videos together. Through our Interact bot, 5 minutes before a
            fan's scheduled interaction, they will automatically be given a
            special role to access a private voice channel; they will
            automatically have that role removed after 15 minutes (or you can do so
            manually at an earlier time). <br></br>
            <br />
            Press 'Link your Discord Server' again to change the server. <br></br>
            <br />
            WARNING: make sure you are the owner or a super admin of this Discord server.
          </TitleAndDesc>
          <InteractButton
            onClick={handleLinkDiscordButton}
            sx={{
              width: 300,
              color: isDiscordLinked ? "primary.contrastText" : "primary.main",
            }}
            variant={isDiscordLinked ? "contained" : "outlined"}
          >
            {isDiscordLinked
              ? "Linked to Discord server ✓"
              : "Link your Discord server"}
          </InteractButton>
        </CreateCampaignItemWrapper>

        <Box sx={{ width: "100%" }}>
          <Accordion sx={{ flex: 1 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography>How do I create a Discord server?</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                See the following link:{" "}
                <Link
                  href="https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-"
                  target="_blank"
                >
                  https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-
                </Link>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ flex: 1 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography>
                  How do I add a role to my Discord server?
                </Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <ol>
                <li>
                  Click on the Server Settings menu item on your Discord server
                </li>
                <li>Click the Roles tab</li>
                <li>Click the Create role button to create a new role</li>
                <li>
                  Give your role the permission to access a private voice
                  channel (create a private voice channel first)
                </li>
              </ol>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>

      <CreateCampaignItemWrapper>
        <TitleAndDesc title="Or, use Google Meet">
          We'll automatically generate a unique link for every interaction.
        </TitleAndDesc>
        <InteractButton
          onClick={handleGoogleMeetButton}
          sx={{
            width: 300,
            color: isGoogleMeetLinked ? "primary.contrastText" : "primary.main",
          }}
          variant={isGoogleMeetLinked ? "contained" : "outlined"}
        >
          {isGoogleMeetLinked ? "Use Google Meet ✓" : "Use Google Meet"}
        </InteractButton>
      </CreateCampaignItemWrapper>

      <TabNavigation
        disableNext={!isTabValidated}
        selectedTabIndex={selectedTabIndex}
        setSelectedTabIndex={setSelectedTabIndex}
      />
    </>
  );
}

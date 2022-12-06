import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import CreateCampaignItemWrapper from "../CreateCampaignItemWrapper";
import TitleAndDesc, { TitleAndDescFullWidth } from "../CampaignTitleAndDesc";
import {
  InteractionAvailabilitySlider,
  InteractionDurationsSlider,
} from "../Sliders";
import Span from "@jumbo/shared/Span";
import InteractionIcon from "../../../Images/interaction-icon.png";
import {
  addTrailingZerosToDollarValue,
  getDateFromTimestamp,
} from "app/utils";
import { useFormValidation } from "@interact/Hooks/use-form-validation";
import { TabNavigation } from "../TabNavigation";
import { FormatUnderlined } from "@mui/icons-material";

export default function InteractionTab({
  data,
  setData,
  selectedTabIndex,
  setSelectedTabIndex,
}) {
  const [interactionAvailability, setInteractionAvailability] = useState(
    data?.creatorWeeklyAvailability
  );
  const [interactionDurations, setInteractionDurations] = useState([
    data?.interactionDurationTime,
    data?.interactionTopDurationTime,
  ]);
  const [numAuctionInteractions, setNumAuctionInteractions] = useState(
    data?.numAuctionInteractions
  );
  const [numGiveawayInteractions, setNumGiveawayInteractions] = useState(
    data?.numGiveawayInteractions
  );
  const [interactionsLimit, setInteractionsLimit] = useState(null);

  const [auctionMinBidPrice, setAuctionMinBidPrice] = useState(
    addTrailingZerosToDollarValue(data?.auctionMinBid)
  );
  const [VIPEntryCost, setVIPEntryCost] = useState(
    addTrailingZerosToDollarValue(data?.giveawayVIPEntryCost)
  );
  const [formValidationConditions, setFormValidationConditions] =
    useState(true);

  useEffect(() => {
    calcNumOfInteractions();
  }, [interactionAvailability, interactionDurations]);

  useEffect(() => {
    //due to the setup of this form inputs, it will always be valid
    // except if this is not true

    if (interactionsLimit) {
      setFormValidationConditions(
        numAuctionInteractions + numGiveawayInteractions <= interactionsLimit
      );
    }
  }, [numAuctionInteractions, numGiveawayInteractions]);

  const isTabValidated = useFormValidation({
    selectedTabIndex,
    lastCompletedTabIndex: data?.lastCompletedTabIndex,
    setData,
    formValidationConditions: formValidationConditions,
  });

  function getNumStdLengthInteractions() {
    const numStdLengthInteractions =
      numGiveawayInteractions + (numAuctionInteractions - 3); // interactions that take up std. time
    return numStdLengthInteractions;
  }

  function calcNumOfInteractions() {
    // ex: 5hrs/week * 10 weeks = 50 hrs = 3000 min
    const totMinsAvailable =
      data?.interactionWindow * interactionAvailability * 60;

    // ex: 15 min
    const LOWER = interactionDurations[0];

    // ex: 30 min
    const UPPER = interactionDurations[1];

    // 30 min * 3 interactions = 1.5hr
    const upperLimitConsumed = UPPER * 3; //interactions;

    const totMinsRemaining = totMinsAvailable - upperLimitConsumed;

    // 2610 / 15 = Rest of interactions available MAXIMUM + 3
    const totalPossibleInteractions = Math.ceil(totMinsRemaining / LOWER) + 3;

    if (totalPossibleInteractions < 3) {
      setInteractionsLimit(3);
    } else {
      setInteractionsLimit(totalPossibleInteractions);
    }
  }

  return (
    <>
      <CreateCampaignItemWrapper>
        <TitleAndDesc title="Availability calculator">
          How many hours per week would you like to spend with fans?
          <br />
          <br />
          How much time should each interaction take? The left handle sets the
          amount of time in a standard interaction. The right handle sets the
          amount of time in a premium interaction, which are awarded to the top
          3 auction winners.
        </TitleAndDesc>
        <Stack spacing={1.69} sx={{ width: 300, pt: 2.21 }}>
          <InteractionAvailabilitySlider
            data={data}
            setData={setData}
            interactionAvailability={interactionAvailability}
            setInteractionAvailability={setInteractionAvailability}
          />
          <InteractionDurationsSlider
            data={data}
            setData={setData}
            interactionDurations={interactionDurations}
            setInteractionDurations={setInteractionDurations}
          />
        </Stack>
      </CreateCampaignItemWrapper>

      <Stack
        direction="row"
        alignItems="center"
        spacing={5.69}
        sx={{
          background: "rgba(120, 47, 238, 0.1)",
          p: 3.69,
          borderRadius: 3,
          boxShadow: "0px 0px 20px rgba(120, 47, 238, 0.15)",
        }}
      >
        <img alt="interaction-icon" src={InteractionIcon} width={69} />
        <Typography
          sx={{
            color: "primary.main",
            fontWeight: 400,
            fontSize: 18,
          }}
        >
          With an average of{" "}
          <Span sx={{ fontWeight: 600}}>
            {data?.creatorWeeklyAvailability} hrs/week
          </Span>
          , you can get to know a max of{" "}
          <Span sx={{ fontWeight: 600}}>
            {interactionsLimit} fans ({interactionsLimit-3} x {data?.interactionDurationTime}{" "}
            min interactions & 3 x {data?.interactionTopDurationTime} min
            interactions)
          </Span>{" "}
            over the period of {" "}
          <Span sx={{ fontWeight: 600 }}>
            {getDateFromTimestamp({ timestamp: data?.endDateTime?.seconds })}
          </Span>{" "}
          to{" "}
          <Span sx={{ fontWeight: 600 }}>
            {getDateFromTimestamp({
              timestamp: data?.interactionEndDateTime?.seconds,
            })}
          </Span>
          <Span sx={{ fontSize:14.521}}><br />
            (Suggestion: distribute the {interactionsLimit} interactions evenly, 
          </Span>
          <Span sx={{ fontWeight: 600, fontSize:14.521 }}> {" "}
            around {(interactionsLimit/2)} each, between the auction & giveaway)
          </Span>
        </Typography>
      </Stack>

      <CreateCampaignItemWrapper>
        <TitleAndDescFullWidth title="Auction">
          I'd like to auction{" "}
          <NumInteractionsInput
            value={numAuctionInteractions}
            setValue={setNumAuctionInteractions}
            setData={setData}
            dataField={"numAuctionInteractions"}
            minValue={3}
            helpText={"Min. 3 interactions."}
            maxValue={interactionsLimit - numGiveawayInteractions}
          />
          interactions, with a minimum bid price of
          <BidInput
            value={auctionMinBidPrice}
            setValue={setAuctionMinBidPrice}
            setData={setData}
            dataField={"auctionMinBid"}
          />
        </TitleAndDescFullWidth>
      </CreateCampaignItemWrapper>
      <CreateCampaignItemWrapper>
        <TitleAndDescFullWidth
          title="Giveaway"
          tooltipText="Fans can select either a free entry or a paid VIP entry where their chance of winning is increased by 25x."
        >
          I'd like to include{" "}
          <NumInteractionsInput
            value={numGiveawayInteractions}
            setValue={setNumGiveawayInteractions}
            setData={setData}
            dataField={"numGiveawayInteractions"}
            minValue={3}
            helpText={"Min. 3 interactions."}
            maxValue={interactionsLimit - numAuctionInteractions}
          />
          interactions in the giveaway, where a VIP entry costs
          <BidInput
            value={VIPEntryCost}
            setValue={setVIPEntryCost}
            setData={setData}
            dataField={"giveawayVIPEntryCost"}
          />
        </TitleAndDescFullWidth>
      </CreateCampaignItemWrapper>
      
      <TabNavigation
        disableNext={!isTabValidated}
        selectedTabIndex={selectedTabIndex}
        setSelectedTabIndex={setSelectedTabIndex}
        customErrorMessage={`Error. Please make sure you've completed all fields and that the sum of your Giveaway + Auction interactions are less than or equal to ${interactionsLimit}.`}
      />
    </>
  );
}

function BidInput({ value, setValue, setData, dataField }) {
  // These are currently the same for both auctions and giveaway. If they change,
  // pass these values in through props instead.
  const increment = 0.5;
  const minValue = 1.5;

  // Used to update this components value as it changes,
  // while still allowing for true validation on blur
  // If not valid, default to the last setValue
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

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
    if (isValid) {
      setValue(addTrailingZerosToDollarValue(nextValue));
      setData({ [dataField]: nextValue });
    } else {
      setTempValue(addTrailingZerosToDollarValue(minValue));
    }
  }

  return (
    <FormControl>
      <OutlinedInput
        type="number"
        inputProps={{ step: ".50" }}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        sx={{ mx: 2, height: "40px" }}
        value={tempValue}
        onChange={(e) => {
          if (e.nativeEvent.inputType == "insertReplacementText") {
            // handles stepUp/arrowUp and stepDown/arrowDown
            // without this, it's possible to step above or below the min/max values
            setTempValue(e.target.value);
            handleBid(e);
          } else {
            setTempValue(e.target.value);
          }
        }}
        onBlur={(e) => handleBid(e)}
      />
      <FormHelperText sx={{ ml: 3 }}>
        $0.50 increments. Min. $1.50
      </FormHelperText>
    </FormControl>
  );
}

function NumInteractionsInput({
  value,
  setValue,
  setData,
  dataField,
  minValue = 0,
  maxValue = 0,
  helpText = " ",
}) {
  // Used to update this components value as it changes,
  // while still allowing for true validation on blur
  // If not valid, default to the last setValue
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  function validateMin(nextValue) {
    return (
      typeof nextValue === "number" &&
      !isNaN(nextValue) &&
      nextValue >= minValue
    );
  }

  function validateMax(nextValue) {
    return (
      typeof nextValue === "number" &&
      !isNaN(nextValue) &&
      nextValue <= maxValue
    );
  }

  function handleInteraction(e) {
    const nextValue = Number(e.target.value);
    const isValidMin = validateMin(nextValue);
    const isValidMax = validateMax(nextValue);

    if (isValidMin && isValidMax) {
      setValue(nextValue);
      setData({ [dataField]: nextValue });
    } else if (isValidMin && !isValidMax) {
      setTempValue(maxValue);
    } else {
      setTempValue(minValue);
    }
  }

  return (
    <FormControl>
      <OutlinedInput
        type="number"
        sx={{ mx: 2, height: "40px" }}
        value={tempValue}
        onChange={(e) => {
          // NOTE - THIS ONLY SEEMS TO WORK ON FIREFOX - need a fix for safari and chrome
          if (e.nativeEvent.inputType == "insertReplacementText") {
            // handles stepUp/arrowUp and stepDown/arrowDown
            // without this, it's possible to step above or below the min/max values
            setTempValue(e.target.value);
            handleInteraction(e);
          } else {
            setTempValue(e.target.value);
          }
        }}
        onBlur={(e) => handleInteraction(e)}
      />{" "}
      <FormHelperText sx={{ ml: 3 }}>{helpText}</FormHelperText>
    </FormControl>
  );
}

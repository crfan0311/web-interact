import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CreateCampaignItemWrapper from "../CreateCampaignItemWrapper";
import TitleAndDesc from "../CampaignTitleAndDesc";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment, { duration } from "moment";
import { SchedulingSlider } from "../Sliders";
import Span from "@jumbo/shared/Span";
import { formatMomentDate, getDateFromTimestamp } from "app/utils";
import { TabNavigation } from "../TabNavigation";
import { useFormValidation } from "@interact/Hooks/use-form-validation";
import { Timestamp } from "firebase/firestore";
import { useSelector } from "react-redux";

export default function SchedulingTab({
  data,
  setData,
  selectedTabIndex,
  setSelectedTabIndex,
}) {
  const [startDateTime, setStartDateTime] = useState(
    moment.unix(data?.startDateTime?.seconds) || moment() // convert existing timestamp value to moment if it exists, if not, create new moment
  ); //    moment.unix(data?.startDateTime)

  const [endDateTime, setEndDateTime] = useState(
    moment.unix(data?.endDateTime?.seconds) || moment() // convert existing timestamp value to moment if it exists, if not, create new moment
  ); //moment.unix(data?.endDateTime)
  const [campaignDurationDays, setCampaignDurationDays] = useState(
    data?.durationDays
  );
  const [interactionWindowDuration, setInteractionWindowDuration] = useState(
    data?.interactionWindow
  );

  const DEVICE_TIMEZONE = useSelector(
    (state) => state.localization.deviceTimezone
  );

  const [errors, setErrors] = useState(false);

  const formValidationConditions =
    typeof campaignDurationDays == "number" &&
    campaignDurationDays >= 5 &&
    campaignDurationDays <= 20 &&
    moment(startDateTime).isValid() &&
    moment(endDateTime).isValid() &&
    typeof interactionWindowDuration == "number" &&
    interactionWindowDuration > 0;

  const isTabValidated = useFormValidation({
    selectedTabIndex,
    lastCompletedTabIndex: data?.lastCompletedTabIndex,
    setData,
    formValidationConditions,
  });

  function getNextMondayFromDate(date) {
    const dayINeed = 1; // for Monday
    const day = date.isoWeekday();

    // if we haven't yet passed the day of the week that I need:
    if (day <= dayINeed) {
      // then just give me this week's instance of that day
      return moment(date)
        .isoWeekday(dayINeed)
        .set({ hour: 0, minute: 0, second: 0 }); // set at Monday 12:00 AM (00:00)
    } else {
      // otherwise, give me *next week's* instance of that same day
      return moment(date)
        .add(1, "weeks")
        .isoWeekday(dayINeed)
        .set({ hour: 0, minute: 0, second: 0 }); // set at Monday 12:00 AM (00:00)
    }
  }

  function handleSchedulingChanges({
    start,
    end,
    duration,
    windowDuration,
    action,
  }) {
    let durationDiff = null;
    let newEndDate = null;
    let interactionWindowStartDate = null;
    let interactionWindowEndDate = null;

    // If new changes contain errors, we don't write them to DB
    let doesChangeContainErrors = false;

    if (action == "updateStart") {
      //calculate days from start and end dates
      durationDiff = end?.diff(start, "days");
      const startTimestampValue = moment(start).unix();

      if (
        durationDiff >= 5 &&
        durationDiff <= 20 &&
        moment(startTimestampValue).isValid()
      ) {
        setData({
          durationDays: Number(durationDiff),
          startDateTime: Timestamp.fromMillis(startTimestampValue * 1000),
        });
      } else {
        doesChangeContainErrors = true;
      }

      setStartDateTime(start);
      setCampaignDurationDays(durationDiff);
    }

    if (action == "updateEnd") {
      //calculate days from start and end dates
      durationDiff = end?.diff(start, "days");

      const endTimestampValue = moment(end).unix();

      //calculate new interaction start date (from campaign end date)
      interactionWindowStartDate = getNextMondayFromDate(end);

      // calculate new interaction end date (from interaction start date)
      interactionWindowEndDate = moment(interactionWindowStartDate).add(
        windowDuration,
        "weeks"
      );

      const interactionTimestampValue = moment(interactionWindowEndDate).unix();
      const interactionStartTimestampValue = moment(
        interactionWindowStartDate
      ).unix();

      if (
        Number(durationDiff) >= 5 &&
        Number(durationDiff) <= 20 &&
        moment(endTimestampValue).isValid() &&
        moment(interactionTimestampValue).isValid()
      ) {
        setData({
          durationDays: Number(durationDiff),
          endDateTime: Timestamp.fromMillis(endTimestampValue * 1000),
          interactionStartDateTime: Timestamp.fromMillis(
            interactionStartTimestampValue * 1000
          ),
          interactionEndDateTime: Timestamp.fromMillis(
            interactionTimestampValue * 1000
          ),
        });
      } else {
        doesChangeContainErrors = true;
      }

      setCampaignDurationDays(durationDiff);
      setEndDateTime(end);
    }

    if (action == "updateDuration") {
      //calculate new end date from duration
      newEndDate = moment(start)?.add(duration, "days");

      //calculate new interaction start date (from campaign end date)
      interactionWindowStartDate = getNextMondayFromDate(newEndDate);

      // calculate new interaction end date (from interaction start date)
      interactionWindowEndDate = moment(interactionWindowStartDate).add(
        windowDuration,
        "weeks"
      );

      const endTimestampValue = moment(newEndDate).unix();
      const interactionTimestampValue = moment(interactionWindowEndDate).unix();
      const interactionStartTimestampValue = moment(
        interactionWindowStartDate
      ).unix();

      if (
        Number(duration) >= 5 &&
        Number(duration) <= 20 &&
        moment(endTimestampValue).isValid() &&
        moment(interactionTimestampValue).isValid()
      ) {
        setData({
          durationDays: Number(duration),
          endDateTime: Timestamp.fromMillis(endTimestampValue * 1000),
          interactionStartDateTime: Timestamp.fromMillis(
            interactionStartTimestampValue * 1000
          ),
          interactionEndDateTime: Timestamp.fromMillis(
            interactionTimestampValue * 1000
          ),
        });
      } else {
        doesChangeContainErrors = true;
      }

      setCampaignDurationDays(duration);
      setEndDateTime(newEndDate);
    }

    if (action == "updateWindow") {
      // calculate end date from interaction window
      interactionWindowEndDate = moment(getNextMondayFromDate(end)).add(
        windowDuration,
        "weeks"
      );
      const interactionTimestampValue = moment(interactionWindowEndDate).unix();

      if (
        Number(windowDuration) >= 2 &&
        Number(windowDuration) <= 20 &&
        moment(interactionTimestampValue).isValid()
      ) {
        setData({
          interactionWindow: Number(windowDuration),
          interactionEndDateTime: Timestamp.fromMillis(
            interactionTimestampValue * 1000
          ),
        });
      } else {
        doesChangeContainErrors = true;
      }

      setInteractionWindowDuration(windowDuration);
    }

    setErrors(doesChangeContainErrors);
  }

  return (
    <>
      <CreateCampaignItemWrapper>
        <TitleAndDesc title="Campaign duration">
          All times on the campaign are in {DEVICE_TIMEZONE} (your timezone).
          Set how long the campaign will be active. Enter a start date & time,
          then duration in days OR the end date & time. <br />
          <br />
          Changing the duration will recalculate the end date, and vice-versa.{" "}
          <br />
          <br />
          (You can customize your timezone in the scheduling process, when
          setting your available timeslots weekly; so can fans)
        </TitleAndDesc>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          {/* need this to use DateTimePicker. Date library used here is moment.js */}
          <Stack direction="column" alignItems="center" spacing={3}>
            <DateTimePicker
              label="Start date & time"
              InputProps={{ sx: { width: 300 } }}
              value={startDateTime}
              onChange={(newValue) => {
                if (moment(newValue).isValid()) {
                  handleSchedulingChanges({
                    start: newValue,
                    end: endDateTime,
                    action: "updateStart",
                  });
                }
              }}
              renderInput={(params) => <TextField {...params} />}
              minDateTime={moment()} // min date is current date/time
              minutesStep={15}
            />
            <Stack
              direction="row"
              alignItems="center"
              spacing={0}
              width={146.9}
            >
              <NumDurationInput
                value={campaignDurationDays}
                setValue={setCampaignDurationDays}
                setData={handleSchedulingChanges}
                minValue={5}
                maxValue={20}
                startDateTime={startDateTime}
                endDateTime={endDateTime}
                interactionWindowDuration={interactionWindowDuration}
              />
              <Typography display="block" sx={{ fontSize: 16 }}>
                days{" "}
              </Typography>
            </Stack>
            <FormControl>
              <DateTimePicker
                label="End date & time"
                InputProps={{ sx: { width: 300 } }}
                value={endDateTime}
                onChange={(newValue) =>
                  handleSchedulingChanges({
                    start: startDateTime,
                    end: newValue,
                    windowDuration: interactionWindowDuration,
                    action: "updateEnd",
                  })
                }
                renderInput={(params) => <TextField {...params} />}
                minDateTime={moment(startDateTime).add(5, "days")}
                minutesStep={15}
                maxDateTime={moment(startDateTime).add(20, "days")}
              />
              {errors ? (
                <FormHelperText>
                  Did not save - invalid selections.
                </FormHelperText>
              ) : null}
            </FormControl>
          </Stack>
        </LocalizationProvider>
      </CreateCampaignItemWrapper>
      <CreateCampaignItemWrapper>
        <TitleAndDesc title="Interaction window duration">
          Choose the number of weeks; interactions will be scheduled with fans
          for X weeks after the campaign ends. <br /> <br />
          Too many weeks = some fans will have to wait a long time, but too few
          weeks = more interactions to complete every week. Recommended: 10
          weeks.
        </TitleAndDesc>
        <Stack sx={{ width: 300 }} spacing={3}>
          <SchedulingSlider
            interactionWindowDuration={interactionWindowDuration}
            handleSchedulingChanges={handleSchedulingChanges}
            endDateTime={endDateTime}
          />
          <Typography sx={{ fontSize: 12 }}>
            Interactions will be available from{" "}
            <Span sx={{ fontWeight: 500 }}>
              {getDateFromTimestamp({
                timestamp: data?.interactionStartDateTime?.seconds,
                format: "MMM Do, YYYY h:mm a",
              })}
            </Span>{" "}
            {DEVICE_TIMEZONE} until{" "}
            <Span sx={{ fontWeight: 500 }}>
              {getDateFromTimestamp({
                timestamp: data?.interactionEndDateTime?.seconds,
                format: "MMM Do, YYYY h:mm a",
              })}
            </Span>{" "}
            {DEVICE_TIMEZONE}.
          </Typography>
        </Stack>
      </CreateCampaignItemWrapper>
      <TabNavigation
        disableNext={!isTabValidated}
        selectedTabIndex={selectedTabIndex}
        setSelectedTabIndex={setSelectedTabIndex}
      />
    </>
  );
}

function NumDurationInput({
  value,
  setValue,
  setData,
  startDateTime,
  endDateTime,
  interactionWindowDuration,
  minValue = 0,
  maxValue,
}) {
  // Used to update this components value as it changes,
  // while still allowing for true validation on blur
  // If not valid, default to the last setValue
  const [tempValue, setTempValue] = useState(value);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  function validate(nextValue) {
    return (
      typeof nextValue === "number" &&
      !isNaN(nextValue) &&
      nextValue >= minValue &&
      nextValue <= maxValue
    );
  }

  function handleInteraction(e) {
    const nextValue = Number(e.target.value);
    const isValid = validate(nextValue);

    if (isValid) {
      setValue(nextValue);

      setData({
        duration: Number(e.target.value),
        start: startDateTime,
        end: endDateTime,
        windowDuration: interactionWindowDuration,
        action: "updateDuration",
      });
    } else {
      setTempValue(value);
    }
  }

  return (
    <OutlinedInput
      type="number"
      sx={{ mx: 2, height: "40px" }}
      value={tempValue}
      onChange={(e) => {
        if (e.nativeEvent.inputType == "insertReplacementText") {
          // handles stepUp/arrowUp and stepDown/arrowDown
          // without this, it's possible to step above or below the min/max values
          setTempValue(Number(e.target.value));
          handleInteraction(e);
        } else {
          setTempValue(Number(e.target.value));
        }
      }}
      onBlur={(e) => handleInteraction(e)}
    />
  );
}

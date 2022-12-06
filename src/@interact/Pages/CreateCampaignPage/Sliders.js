import { Box, Slider } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";

export function SchedulingSlider({
  interactionWindowDuration,
  handleSchedulingChanges,
  endDateTime,
}) {
  function handleInteractionWindowChange(event, newValue) {
    handleSchedulingChanges({
      windowDuration: newValue,
      end: endDateTime,
      action: "updateWindow",
    });
  }

  const marks = [
    {
      value: 2,
      label: "2 weeks",
    },
    {
      value: 20,
      label: "20 weeks",
    },
  ];

  return (
    <Slider
      value={interactionWindowDuration}
      onChange={handleInteractionWindowChange}
      valueLabelDisplay="auto"
      step={1}
      marks={marks}
      min={2}
      max={20}
    />
  );
}

export function InteractionAvailabilitySlider({
  data,
  setData,
  interactionAvailability,
  setInteractionAvailability,
}) {
  function handleInteractionAvailabilityChange(event, newValue) {
    setInteractionAvailability(newValue);
    setData({ creatorWeeklyAvailability: newValue });
  }

  const marks = [
    {
      value: 1,
      label: "1 hour",
    },
    {
      value: 10,
      label: "10 hours",
    },
  ];

  return (
    <Slider
      value={interactionAvailability}
      valueLabelDisplay="auto"
      onChangeCommitted={handleInteractionAvailabilityChange}
      step={1}
      marks={marks}
      min={1}
      max={10}
    />
  );
}

export function InteractionDurationsSlider({
  data,
  setData,
  interactionDurations,
  setInteractionDurations,
}) {
  const marks = [
    {
      value: 15,
      label: "15 min",
    },
    {
      value: 150,
      label: "150 min",
    },
  ];

  const handleInteractionDurationChange = (event, newValue, activeThumb) => {
    // minDistance should be at LEAST 2x the min duration
    let minDistance;

    if (newValue[0] >= 75) {
      // At the midpoint, the minDuration slider cannot increase any further
      // so pin min and max duration sliders at their highest values
      setInteractionDurations([75, 150]);
      setData({ interactionDurationTime: 75, interactionTopDurationTime: 150 });
      return;
    } else {
      minDistance = 2 * newValue[0];
    }

    if (!Array.isArray(newValue)) {
      return;
    }

    // Creates a "doubling effect" of max duration value when sliding the min duration value
    // towards increase. Allows for pinning of max duration and min duration when sliding before
    // minDuration has been reached.
    if (newValue[1] - newValue[0] < minDistance) {
      const clamped = Math.max(newValue[1], minDistance);
      setInteractionDurations([newValue[0], clamped]);
      setData({
        interactionDurationTime: newValue[0],
        interactionTopDurationTime: clamped,
      });
    } else {
      setInteractionDurations(newValue);
      setData({
        interactionDurationTime: newValue[0],
        interactionTopDurationTime: newValue[1],
      });
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        max={150}
        min={15}
        marks={marks}
        value={interactionDurations}
        onChange={handleInteractionDurationChange}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
}

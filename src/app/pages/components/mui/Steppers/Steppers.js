import React from 'react';
import {Grid} from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import HorizontalNonLinearStepper from "./HorizontalNonLinearStepper";
import HorizontalLabelPositionBelowStepper from "./HorizontalLabelPositionBelowStepper";
import HorizontalStepperWithError from "./HorizontalStepperWithError";
import VerticalLinearStepper from "./VerticalLinearStepper";
import TextMobileStepper from "./TextMobileStepper";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import DotsMobileStepper from "./DotsMobileStepper";
import ProgressMobileStepper from "./ProgressMobileStepper";

const Steppers = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <HorizontalLinearStepper/>
            </Grid>
            <Grid item xs={12}>
                <HorizontalNonLinearStepper/>
            </Grid>
            <Grid item xs={12}>
                <HorizontalLabelPositionBelowStepper/>
            </Grid>
            <Grid item xs={12}>
                <HorizontalStepperWithError/>
            </Grid>
            <Grid item xs={12}>
                <VerticalLinearStepper/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextMobileStepper/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SwipeableTextMobileStepper/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <DotsMobileStepper/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ProgressMobileStepper/>
            </Grid>
        </Grid>
    );
};

export default Steppers;

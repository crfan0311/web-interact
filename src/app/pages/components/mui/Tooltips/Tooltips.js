import React from 'react';
import {Grid} from "@mui/material";
import BasicTooltip from "./BasicTooltip";
import PositionedTooltips from "./PositionedTooltips";
import ArrowTooltips from "./ArrowTooltips";
import TriggersTooltips from "./TriggersTooltips";
import ControlledTooltips from "./ControlledTooltips";
import NotInteractiveTooltips from "./NotInteractiveTooltips";
import DisabledTooltips from "./DisabledTooltips";
import TransitionsTooltips from "./TransitionsTooltips";
import FollowCursorTooltips from "./FollowCursorTooltips";
import AnchorElTooltips from "./AnchorElTooltips";
import DelayTooltips from "./DelayTooltips";
import AccessibilityTooltips from "./AccessibilityTooltips";
import AvatarTooltip from "./AvatarTooltip";

const Tooltips = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <BasicTooltip/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <AvatarTooltip/>
            </Grid>
            <Grid item xs={12}>
                <PositionedTooltips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ArrowTooltips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <TriggersTooltips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ControlledTooltips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <NotInteractiveTooltips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <DisabledTooltips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <TransitionsTooltips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <FollowCursorTooltips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <AnchorElTooltips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <DelayTooltips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <AccessibilityTooltips/>
            </Grid>

        </Grid>
    );
};

export default Tooltips;

import React from 'react';
import {Grid} from "@mui/material";
import DefaultChips from "./DefaultChips";
import OutlinedChips from "./OutlinedChips";
import ChipWithTextAvatar from "./ChipWithTextAvatar";
import ClickableChips from "./ClickableChips";
import ChipWithImageAvatar from "./ChipWithImageAvatar";
import DeletableChips from "./DeletableChips";
import ChipWithIconAvatar from "./ChipWithIconAvatar";
import ColorChips from "./ColorChips";
import ChipsArray from "./ChipsArray";
import ChipsAddRemove from "./ChipsAddRemove";

const Chips = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <DefaultChips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <OutlinedChips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ChipWithTextAvatar/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ClickableChips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ChipWithImageAvatar/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <DeletableChips/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ChipWithIconAvatar/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ColorChips/>
            </Grid>

            <Grid item xs={12}>
                <ChipsArray/>
            </Grid>
            <Grid item xs={12}>
                <ChipsAddRemove/>
            </Grid>
        </Grid>
    );
};

export default Chips;

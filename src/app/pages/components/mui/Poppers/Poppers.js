import React from 'react';
import {Grid} from "@mui/material";
import SimplePopper from "./SimplePopper";
import TransitionsPopper from "./TransitionsPopper";
import PositionedPopper from "./PositionedPopper";
import ScrollPlayground from "./ScrollPlayground";
import VirtualElementPopper from "./VirtualElementPopper";
import PopperPopupState from "./PopperPopupState";

const Poppers = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <SimplePopper/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <TransitionsPopper/>
            </Grid>
            <Grid item xs={12}>
                <PositionedPopper/>
            </Grid>
            <Grid item xs={12}>
                <ScrollPlayground/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <VirtualElementPopper/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <PopperPopupState/>
            </Grid>
        </Grid>
    );
};

export default Poppers;

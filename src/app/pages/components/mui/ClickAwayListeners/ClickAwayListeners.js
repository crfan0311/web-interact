import React from 'react';
import {Grid} from "@mui/material";
import ClickAway from "./ClickAway";
import PortalClickAway from "./PortalClickAway";
import LeadingClickAway from "./LeadingClickAway";

const ClickAwayListeners = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <ClickAway/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <LeadingClickAway/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <PortalClickAway/>
            </Grid>
        </Grid>
    );
};

export default ClickAwayListeners;

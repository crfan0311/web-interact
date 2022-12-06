import React from 'react';
import {Grid} from "@mui/material";
import BasicPopover from "./BasicPopover";
import MouseOverPopover from "./MouseOverPopover";
import AnchorPlayground from "./AnchorPlayground";

const Popovers = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <BasicPopover/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MouseOverPopover/>
            </Grid>
            <Grid item xs={12}>
                <AnchorPlayground/>
            </Grid>
        </Grid>
    );
};

export default Popovers;

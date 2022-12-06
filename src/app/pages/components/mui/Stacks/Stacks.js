import React from 'react';
import {Grid} from "@mui/material";
import BasicStack from "./BasicStack";
import DirectionStack from "./DirectionStack";
import DividerStack from "./DividerStack";
import ResponsiveStack from "./ResponsiveStack";
import InteractiveStack from "./InteractiveStack";

const Stacks = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <BasicStack/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <DirectionStack/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <DividerStack/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ResponsiveStack/>
            </Grid>
            <Grid item xs={12}>
                <InteractiveStack/>
            </Grid>
        </Grid>
    );
};

export default Stacks;

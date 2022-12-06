import React from 'react';
import {Grid} from "@mui/material";
import BasicTimeline from "./BasicTimeline";
import LeftPositionedTimeline from "./LeftPositionedTimeline";
import AlternateTimeline from "./AlternateTimeline";
import ColorsTimeline from "./ColorsTimeline";
import OutlinedTimeline from "./OutlinedTimeline";
import OppositeContentTimeline from "./OppositeContentTimeline";
import CustomizedTimeline from "./CustomizedTimeline";

const Timelines = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <BasicTimeline/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <LeftPositionedTimeline/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <AlternateTimeline/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ColorsTimeline/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <OutlinedTimeline/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <OppositeContentTimeline/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <CustomizedTimeline/>
            </Grid>
        </Grid>
    );
};

export default Timelines;

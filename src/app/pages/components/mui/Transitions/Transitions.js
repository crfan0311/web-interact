import React from 'react';
import {Grid} from "@mui/material";
import SimpleCollapse from "./SimpleCollapse";
import SimpleFade from "./SimpleFade";
import SimpleGrow from "./SimpleGrow";
import SimpleSlide from "./SimpleSlide";
import SlideFromContainer from "./SlideFromContainer";
import SimpleZoom from "./SimpleZoom";
import TransitionGroupExample from "./TransitionGroupExample";

const Transitions = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <SimpleCollapse/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SimpleFade/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SimpleGrow/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SimpleSlide/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SlideFromContainer/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SimpleZoom/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <TransitionGroupExample/>
            </Grid>
        </Grid>
    );
};

export default Transitions;

import React from 'react';
import Grid from "@mui/material/Grid";
import Variants from "./Variants";
import Animations from "./Animations";
import SkeletonPulStateExample from "./SkeletonPulStateExample";
import SkeletonWaveExample from "./SkeletonWaveExample";
import SkeletonTypography from "./SkeletonTypography";
import SkeletonColor from "./SkeletonColor";

const Skeletons = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <Variants/>
            </Grid>
            <Grid item xs={12}>
                <Animations/>
            </Grid>
            <Grid item xs={12}>
                <SkeletonPulStateExample/>
            </Grid>
            <Grid item xs={12}>
                <SkeletonWaveExample/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SkeletonTypography/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SkeletonColor/>
            </Grid>
        </Grid>
    );
};

export default Skeletons;

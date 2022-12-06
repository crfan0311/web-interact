import React from 'react';
import {Grid} from "@mui/material";
import SimplePaper from "./SimplePaper";
import Variants from "./Variants";
import Elevation from "./Elevation";

const Papers = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <SimplePaper/>
            </Grid>
            <Grid item xs={12}>
                <Variants/>
            </Grid>
            <Grid item xs={12}>
                <Elevation/>
            </Grid>
        </Grid>
    );
};

export default Papers;

import React from 'react';
import {Grid} from "@mui/material";
import SimpleContainer from "./SimpleContainer";
import FixedContainer from "./FixedContainer";

const Containers = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <SimpleContainer/>
            </Grid>
            <Grid item xs={12}>
                <FixedContainer/>
            </Grid>
        </Grid>
    );
};

export default Containers;

import React from 'react';
import {Grid} from "@mui/material";
import SimplePortal from "./SimplePortal";

const Portals = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <SimplePortal/>
            </Grid>
        </Grid>
    );
};

export default Portals;

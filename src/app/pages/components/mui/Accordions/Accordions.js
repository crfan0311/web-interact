import React from 'react';
import SimpleAccordions from "./SimpleAccordions";
import ControlledAccordions from "./ControlledAccordions";
import CustomizedAccordions from "./CustomizedAccordions";
import Grid from "@mui/material/Grid";

const Accordions = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <SimpleAccordions/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ControlledAccordions/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <CustomizedAccordions/>
            </Grid>
        </Grid>
    );
};

export default Accordions;

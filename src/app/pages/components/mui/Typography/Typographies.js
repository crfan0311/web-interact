import React from 'react';
import {Grid} from "@mui/material";
import TypesTypography from "./TypesTypography";
import TypographyTheme from "./TypographyTheme";

const Typographies = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <TypesTypography/>
            </Grid>
            <Grid item xs={12}>
                <TypographyTheme/>
            </Grid>
        </Grid>
    );
};

export default Typographies;

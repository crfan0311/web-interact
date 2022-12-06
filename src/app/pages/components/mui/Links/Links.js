import React from 'react';
import {Grid} from "@mui/material";
import BasicLinks from "./BasicLinks";
import UnderLineLinks from "./UnderLineLinks";
import ButtonLink from "./ButtonLink";

const Links = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <BasicLinks/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <UnderLineLinks/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ButtonLink/>
            </Grid>
        </Grid>
    );
};

export default Links;

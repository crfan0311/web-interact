import React from 'react';
import {Grid} from "@mui/material";
import BasicBreadcrumbs from "./BasicBreadcrumbs";
import ActiveLastBreadcrumbs from "./ActiveLastBreadcrumbs";
import IconBreadcrumbs from "./IconBreadcrumbs";
import CollapsedBreadcrumbs from "./CollapsedBreadcrumbs";

const Breadcrumbs = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <BasicBreadcrumbs/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ActiveLastBreadcrumbs/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <IconBreadcrumbs/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <CollapsedBreadcrumbs/>
            </Grid>
        </Grid>
    );
};

export default Breadcrumbs;

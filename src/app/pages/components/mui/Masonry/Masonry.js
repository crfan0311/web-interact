import React from 'react';
import {Grid} from "@mui/material";
import BasicMasonry from "./BasicMasonry";
import ImageMasonry from "./ImageMasonry";
import MasonryWithVariableHeightItems from "./MasonryWithVariableHeightItems";
import FixedColumns from "./FixedColumns";
import ResponsiveColumns from "./ResponsiveColumns";
import FixedSpacing from "./FixedSpacing";
import ResponsiveSpacing from "./ResponsiveSpacing";
import SSRMasonry from "./SSRMasonry";

const Masonry = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <BasicMasonry/>
            </Grid>
            <Grid item xs={12}>
                <ImageMasonry/>
            </Grid>
            <Grid item xs={12}>
                <MasonryWithVariableHeightItems/>
            </Grid>
            <Grid item xs={12}>
                <FixedColumns/>
            </Grid>
            <Grid item xs={12}>
                <ResponsiveColumns/>
            </Grid>
            <Grid item xs={12}>
                <FixedSpacing/>
            </Grid>
            <Grid item xs={12}>
                <ResponsiveSpacing/>
            </Grid>
            <Grid item xs={12}>
                <SSRMasonry/>
            </Grid>
        </Grid>
    );
};

export default Masonry;

import React from 'react';
import {Grid} from "@mui/material";
import StandardImageList from "./StandardImageList";
import QuiltedImageList from "./QuiltedImageList";
import WovenImageList from "./WovenImageList";
import MasonryImageList from "./MasonryImageList";
import TitlebarImageList from "./TitlebarImageList";
import TitlebarBelowImageList from "./TitlebarBelowImageList";
import TitlebarBelowMasonryImageList from "./TitlebarBelowMasonryImageList";
import CustomImageList from "./CustomImageList";

const ImagesList = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <StandardImageList/>
            </Grid>
            <Grid item xs={12}>
                <QuiltedImageList/>
            </Grid>
            <Grid item xs={12}>
                <WovenImageList/>
            </Grid>
            <Grid item xs={12}>
                <MasonryImageList/>
            </Grid>
            <Grid item xs={12}>
                <TitlebarImageList/>
            </Grid>
            <Grid item xs={12}>
                <TitlebarBelowImageList/>
            </Grid>
            <Grid item xs={12}>
                <TitlebarBelowMasonryImageList/>
            </Grid>
            <Grid item xs={12}>
                <CustomImageList/>
            </Grid>
        </Grid>
    );
};

export default ImagesList;

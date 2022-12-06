import React from 'react';
import {Grid} from "@mui/material";
import ImageAvatars from "./ImageAvatars";
import LetterAvatars from "./LetterAvatars";
import IconAvatars from "./IconAvatars";
import SizeAvatars from "./SizeAvatars";
import VariantAvatars from "./VariantAvatars";
import GroupAvatars from "./GroupAvatars";
import FallbackAvatars from "./FallbackAvatars";
import TotalAvatars from "./TotalAvatars";

const Avatars = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <ImageAvatars/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <LetterAvatars/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <IconAvatars/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SizeAvatars/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <VariantAvatars/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <FallbackAvatars/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <GroupAvatars/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <TotalAvatars/>
            </Grid>
        </Grid>
    );
};

export default Avatars;

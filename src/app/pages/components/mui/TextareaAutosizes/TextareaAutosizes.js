import React from 'react';
import EmptyTextarea from "./EmptyTextarea";
import MinHeightTextarea from "./MinHeightTextarea";
import MaxHeightTextarea from "./MaxHeightTextarea";
import Grid from "@mui/material/Grid";

const TextareaAutosizes = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <EmptyTextarea/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MinHeightTextarea/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MaxHeightTextarea/>
            </Grid>
        </Grid>
    );
};

export default TextareaAutosizes;

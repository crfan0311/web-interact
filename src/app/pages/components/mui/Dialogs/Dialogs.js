import React from 'react';
import {Grid} from "@mui/material";
import SimpleDialog from "./SimpleDialog";
import AlertDialog from "./AlertDialog";
import AlertDialogSlide from "./AlertDialogSlide";
import FormDialog from "./FormDialog";
import MaxWidthDialog from "./MaxWidthDialog";
import ScrollDialog from "./ScrollDialog";

const Dialogs = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <SimpleDialog/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <AlertDialog/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <AlertDialogSlide/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <FormDialog/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MaxWidthDialog/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ScrollDialog/>
            </Grid>
        </Grid>
    );
};

export default Dialogs;

import React from 'react';
import {Grid} from "@mui/material";
import SimpleSnackbar from "./SimpleSnackbar";
import ColorSnackbars from "./ColorSnackbars";
import PositionedSnackbar from "./PositionedSnackbar";
import DirectionSnackbar from "./DirectionSnackbar";
import LongTextSnackbar from "./LongTextSnackbar";
import MessageSnackbar from "./MessageSnackbar";
import MessageWithIconButton from "./MessageWithIconButton";

const Snackbars = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <SimpleSnackbar/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <DirectionSnackbar/>
            </Grid>
            <Grid item xs={12}>
                <PositionedSnackbar/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ColorSnackbars/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <LongTextSnackbar/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MessageSnackbar/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MessageWithIconButton/>
            </Grid>
        </Grid>
    );
};

export default Snackbars;

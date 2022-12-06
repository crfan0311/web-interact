import React from 'react';
import Grid from "@mui/material/Grid";
import BasicModal from "./BasicModal";
import NestedModal from "./NestedModal";
import TransitionsModal from "./TransitionsModal";
import KeepMountedModal from "./KeepMountedModal";
import ServerModal from "./ServerModal";

const Modals = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <BasicModal/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <NestedModal/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <TransitionsModal/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <KeepMountedModal/>
            </Grid>
            <Grid item xs={12}>
                <ServerModal/>
            </Grid>
        </Grid>
    );
};

export default Modals;

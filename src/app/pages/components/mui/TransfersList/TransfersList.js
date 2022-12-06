import React from 'react';
import Grid from "@mui/material/Grid";
import BasicTransferList from "./BasicTransferList";
import EnhancedTransferList from "./EnhancedTransferList";

const TransfersList = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <BasicTransferList/>
            </Grid>
            <Grid item xs={12}>
                <EnhancedTransferList/>
            </Grid>
        </Grid>
    );
};

export default TransfersList;

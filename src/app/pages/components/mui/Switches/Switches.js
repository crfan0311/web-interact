import React from 'react';
import Grid from "@mui/material/Grid";
import BasicSwitches from "./BasicSwitches";
import SwitchLabels from "./SwitchLabels";
import SizeSwitches from "./SizeSwitches";
import ColorSwitches from "./ColorSwitches";
import ControlledSwitches from "./ControlledSwitches";
import SwitchesGroup from "./SwitchesGroup";
import FormControlLabelPosition from "./FormControlLabelPosition";

const Switches = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <BasicSwitches/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ControlledSwitches/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SizeSwitches/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ColorSwitches/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SwitchLabels/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <FormControlLabelPosition/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SwitchesGroup/>
            </Grid>
        </Grid>
    );
};

export default Switches;

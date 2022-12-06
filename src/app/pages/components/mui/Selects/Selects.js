import React from 'react';
import {Grid} from "@mui/material";
import BasicSelect from "./BasicSelect";
import SelectVariants from "./SelectVariants";
import SelectLabels from "./SelectLabels";
import SelectAutoWidth from "./SelectAutoWidth";
import SelectSmall from "./SelectSmall";
import SelectOtherProps from "./SelectOtherProps";
import NativeSelectComponent from "./NativeSelectComponent";
import MultipleSelect from "./MultipleSelect";
import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks";
import MultipleSelectChip from "./MultipleSelectChip";
import MultipleSelectPlaceholder from "./MultipleSelectPlaceholder";
import MultipleSelectNative from "./MultipleSelectNative";
import ControlledOpenSelect from "./ControlledOpenSelect";
import DialogSelect from "./DialogSelect";
import GroupedSelect from "./GroupedSelect";

const Selects = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <BasicSelect/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SelectVariants/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SelectLabels/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SelectAutoWidth/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <SelectSmall/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <NativeSelectComponent/>
            </Grid>
            <Grid item xs={12}>
                <SelectOtherProps/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MultipleSelect/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MultipleSelectCheckmarks/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MultipleSelectChip/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MultipleSelectPlaceholder/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MultipleSelectNative/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ControlledOpenSelect/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <DialogSelect/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <GroupedSelect/>
            </Grid>
        </Grid>
    );
};

export default Selects;

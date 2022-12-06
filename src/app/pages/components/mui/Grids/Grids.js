import React from 'react';
import {Grid} from "@mui/material";
import BasicGrid from "./BasicGrid";
import FullWidthGrid from "./FullWidthGrid";
import SpacingGrid from "./SpacingGrid";
import RowAndColumnSpacing from "./RowAndColumnSpacing";
import ResponsiveGrid from "./ResponsiveGrid";
import AutoGrid from "./AutoGrid";
import VariableWidthGrid from "./VariableWidthGrid";
import ComplexGrid from "./ComplexGrid";
import NestedGrid from "./NestedGrid";
import ColumnsGrid from "./ColumnsGrid";
import AutoGridNoWrap from "./AutoGridNoWrap";
import CSSGrid from "./CSSGrid";
import InteractiveGrid from "./InteractiveGrid";

const Grids = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <BasicGrid/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <FullWidthGrid/>
            </Grid>
            <Grid item xs={12}>
                <SpacingGrid/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <RowAndColumnSpacing/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <CSSGrid/>
            </Grid>
            <Grid item xs={12}>
                <VariableWidthGrid/>
            </Grid>
            <Grid item xs={12}>
                <ResponsiveGrid/>
            </Grid>
            <Grid item xs={12}>
                <InteractiveGrid/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ComplexGrid/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <NestedGrid/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <AutoGrid/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ColumnsGrid/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <AutoGridNoWrap/>
            </Grid>
        </Grid>
    );
};

export default Grids;

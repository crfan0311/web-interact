import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SimpleTreemap from "./components/SimpleTreemap";
import CustomContentTreemap from "./components/CustomContentTreemap";
import {useTranslation} from "react-i18next";

const ChartTreemap = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.chartTreeMap')}</Typography>
            <Grid container spacing={3.75}>
                <Grid item xs={12} lg={6}>
                    <SimpleTreemap/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <CustomContentTreemap/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ChartTreemap;

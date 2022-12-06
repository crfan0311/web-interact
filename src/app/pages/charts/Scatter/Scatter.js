import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SimpleScatterChart from "./components/SimpleScatterChart";
import ThreeDimScatterChart from "./components/ThreeDimScatterChart";
import {useTranslation} from "react-i18next";

const ChartScatter = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.chartScatter')}</Typography>
            <Grid container spacing={3.75}>
                <Grid item xs={12} lg={6}>
                    <SimpleScatterChart/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <ThreeDimScatterChart/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ChartScatter;

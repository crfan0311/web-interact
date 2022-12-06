import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SimpleRadarChart from "./components/SimpleRadarChart";
import SpecifiedDomainRadarChart from "./components/SpecifiedDomainRadarChart";
import {useTranslation} from "react-i18next";

const ChartRadar = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.chartRadar')}</Typography>
            <Grid container spacing={3.75}>
                <Grid item xs={12} lg={6}>
                    <SimpleRadarChart/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <SpecifiedDomainRadarChart/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ChartRadar;

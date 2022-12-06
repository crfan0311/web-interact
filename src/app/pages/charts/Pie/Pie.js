import React from 'react';

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TwoLevelPieChart from "./components/TwoLevelPieChart";
import StraightAnglePieChart from "./components/StraightAnglePieChart";
import CustomActiveShapePieChart from "./components/CustomActiveShapePieChart";
import PieChartWithCustomizedLabel from "./components/PieChartWithCustomizedLabel";
import TwoSimplePieChart from "./components/TwoSimplePieChart";
import PieChartWithPaddingAngle from "./components/PieChartWithPaddingAngle";
import {useTranslation} from "react-i18next";

const ChartPie = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.chartPie')}</Typography>
            <Grid container spacing={3.75}>
                <Grid item xs={12} md={6}>
                    <TwoLevelPieChart/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <StraightAnglePieChart/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomActiveShapePieChart/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <PieChartWithCustomizedLabel/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TwoSimplePieChart/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <PieChartWithPaddingAngle/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ChartPie;

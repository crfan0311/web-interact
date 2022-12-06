import React from 'react';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TinyBarChart from "./components/TinyBarChart";
import StackedBarChart from "./components/StackedBarChart";
import MixBarChart from "./components/MixBarChart";
import CustomShapeBarChart from "./components/CustomShapeBarChart";
import PositiveAndNegativeBarChart from "./components/PositiveAndNegativeBarChart";
import BarChartStackedBySign from "./components/BarChartStackedBySign";
import BiaxialBarChart from "./components/BiaxialBarChart";
import {useTranslation} from "react-i18next";

const ChartBar = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.chartBar')}</Typography>
            <Stack spacing={3}>
                <TinyBarChart/>
                <StackedBarChart/>
                <MixBarChart/>
                <CustomShapeBarChart/>
                <PositiveAndNegativeBarChart/>
                <BarChartStackedBySign/>
                <BiaxialBarChart/>
            </Stack>
        </React.Fragment>

    );
};

export default ChartBar;

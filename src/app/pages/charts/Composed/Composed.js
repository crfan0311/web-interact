import React from 'react';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LineBarAreaComposedChart from "./components/LineBarAreaComposedChart";
import VerticalComposedChart from "./components/VerticalComposedChart";
import SameDataComposedChart from "./components/SameDataComposedChart";
import ComposedChartWithAxisLabels from "./components/ComposedChartWithAxisLabels";
import {useTranslation} from "react-i18next";

const ChartComposed = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.chartComposed')}</Typography>
            <Stack spacing={3}>
                <LineBarAreaComposedChart/>
                <VerticalComposedChart/>
                <SameDataComposedChart/>
                <ComposedChartWithAxisLabels/>
            </Stack>
        </React.Fragment>
    );
};

export default ChartComposed;

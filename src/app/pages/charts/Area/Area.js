import React from 'react';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SimpleAreaChart from "./components/SimpleAreaChart";
import StackedAreaChart from "./components/StackedAreaChart";
import AreaChartConnectNulls from "./components/AreaChartConnectNulls";
import SynchronizedAreaChart from "./components/SynchronizedAreaChart";
import PercentAreaChart from "./components/PercentAreaChart";
import {useTranslation} from "react-i18next";

const ChartArea = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.chartArea')}</Typography>
            <Stack spacing={3}>
                <SimpleAreaChart/>
                <StackedAreaChart/>
                <AreaChartConnectNulls/>
                <SynchronizedAreaChart/>
                <PercentAreaChart/>
            </Stack>
        </React.Fragment>
    );
};

export default ChartArea;

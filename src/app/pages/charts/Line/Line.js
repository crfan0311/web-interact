import React from 'react';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SimpleLineChart from "./components/SimpleLineChart";
import VerticalLineChart from "./components/VerticalLineChart";
import CustomizedDotLineChart from "./components/CustomizedDotLineChart";
import DashedLineChart from "./components/DashedLineChart";
import LineChartWithReferenceLines from "./components/LineChartWithReferenceLines";
import LineChartWithXAxisPadding from "./components/LineChartWithXAxisPadding";
import LineChartConnectNulls from "./components/LineChartConnectNulls";
import SynchronizedLineChart from "./components/SynchronizedLineChart";
import {useTranslation} from "react-i18next";


const ChartLine = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.chartLine')}</Typography>
            <Stack spacing={3}>
                <SimpleLineChart/>
                <VerticalLineChart/>
                <CustomizedDotLineChart/>
                <DashedLineChart/>
                <LineChartWithReferenceLines/>
                <LineChartWithXAxisPadding/>
                <LineChartConnectNulls/>
                <SynchronizedLineChart/>
            </Stack>
        </React.Fragment>
    );
};

export default ChartLine;

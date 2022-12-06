import React from 'react';
import Typography from "@mui/material/Typography";
import SimpleRadialBarChart from "./components/SimpleRadialBarChart";
import {useTranslation} from "react-i18next";

const ChartRadial = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.chartRadial')}</Typography>
            <SimpleRadialBarChart/>
        </React.Fragment>
    );
};

export default ChartRadial;

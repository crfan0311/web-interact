import React from 'react';
import ChartYearlyProfit from "./ChartYearlyProfit";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const YearlyProfileReport = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography variant={"h4"} mb={0}>{t('widgets.title.yearlyProfileReports')}</Typography>}
            wrapperSx={{pt: 0}}
        >
            <Grid container columnSpacing={2}>
                <Grid item xs={8}>
                    <ChartYearlyProfit/>
                </Grid>
                <Grid item xs={4} alignSelf={"center"}>
                    <Typography variant={"h2"}>$685k+</Typography>
                    <Typography variant={"body1"} color={"text.secondary"} sx={{whiteSpace: 'nowrap'}}>Past 9 months</Typography>
                </Grid>
            </Grid>
        </JumboCardQuick>
    );
};

export default YearlyProfileReport;

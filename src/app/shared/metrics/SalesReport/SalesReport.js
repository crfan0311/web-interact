import React from 'react';
import SalesReportChart from "./SalesReportChart";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import {useTranslation} from "react-i18next";

const SalesReport = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography variant={"h4"} mb={0}>{t('widgets.title.salesReports')}</Typography>}
            wrapperSx={{pt: 0}}
        >
            <Grid container columnSpacing={2}>
                <Grid item xs={5} alignSelf={"center"}>
                    <Typography variant={"h2"}>$685k+</Typography>
                    <Typography variant={"body1"} color={"text.secondary"} sx={{whiteSpace: 'nowrap'}} mb={0}>Past 9 months</Typography>
                </Grid>
                <Grid item xs={7}>
                    <Div sx={{my: '-2px'}}>
                        <SalesReportChart/>
                    </Div>
                </Grid>
            </Grid>
        </JumboCardQuick>
    );
};

export default SalesReport;

import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {Grid} from "@mui/material";
import RevenueInfo from "./components/RevenueInfo";
import RevenueProgress from "./components/RevenueProgress";
import {useTranslation} from "react-i18next";
import VisitorsOnMap from "../../widgets/SiteVisitors/VisitorsOnMap";

const RevenueOverview = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick title={t("widgets.title.revenueOverview")} wrapperSx={{pt: 0}}s>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={3}>
                    <RevenueProgress/>
                </Grid>
                <Grid
                    item
                    xs={12} sm={6} lg={3}
                    sx={{
                        order: {lg: 3},
                        mb: {lg: -3},
                        mt: {sm: -7}
                    }}
                >
                    <RevenueInfo/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <VisitorsOnMap/>
                </Grid>
            </Grid>
        </JumboCardQuick>
    );
};

export default RevenueOverview;

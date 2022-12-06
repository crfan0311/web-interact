import React from 'react';
import {Grid} from "@mui/material";
import Properties from "../../../shared/metrics/Properties";
import Cities from "../../../shared/metrics/Cities";
import VisitsStatistics from "../../../shared/metrics/VisitsStatistics";
import QueriesStatistics from "../../../shared/metrics/QueriesStatistics";
import PopularAgents from "../../../shared/widgets/PopularAgents";
import CurrentPlan from "../../../shared/widgets/CurrentPlan";
import DealsAnalytics from "../../../shared/metrics/DealsAnalytics";
import PropertiesList from "../../../shared/widgets/PropertiesList";
import RecentActivities1 from "../../../shared/widgets/RecentActivities1";


const ListingDashboard = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} sm={6} lg={3}>
                <Properties/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <Cities/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <VisitsStatistics/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <QueriesStatistics/>
            </Grid>
            <Grid item xs={12}>
                <PopularAgents/>
            </Grid>
            <Grid item xs={12} md={6}>
                <CurrentPlan/>
            </Grid>
            <Grid item xs={12} md={6}>
                <DealsAnalytics/>
            </Grid>
            <Grid item xs={12} lg={8}>
                <PropertiesList/>
            </Grid>
            <Grid item xs={12} lg={4}>
                <RecentActivities1 scrollHeight={556}/>
            </Grid>
        </Grid>
    );
};

export default ListingDashboard;

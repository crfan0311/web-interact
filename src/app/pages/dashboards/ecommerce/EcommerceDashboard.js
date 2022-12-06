import React from 'react';
import {Grid} from "@mui/material";
import SalesReport from "../../../shared/metrics/SalesReport";
import OrdersReport from "../../../shared/metrics/OrdersReport";
import PopularProducts from "../../../shared/widgets/PopularProducts";
import MarketingCampaign from "../../../shared/widgets/MarketingCampaign";
import SiteVisitors from "../../../shared/widgets/SiteVisitors";
import LastMonthSales from "../../../shared/metrics/LastMonthSales";
import OnlineSignupsFilled from "../../../shared/metrics/OnlineSignupsFilled";
import NewVisitorsThisMonth from "../../../shared/metrics/NewVisitorsThisMonth";
import TotalRevenueThisYear from "../../../shared/metrics/TotalRevenueThisYear";
import SalesStatistics from "../../../shared/metrics/SalesStatistics";
import YearlyProfileReport from "../../../shared/metrics/YearlyProfitReport";
import AppUsers from "../../../shared/metrics/AppUsers";
import OnlineVisitors from "../../../shared/metrics/OnlineVisitors";
import WebsiteTraffic from "../../../shared/metrics/WebsiteTraffic";
import LatestAlerts from "../../../shared/widgets/LatestAlerts";

const EcommerceDashboard = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <SalesStatistics/>
            </Grid>
            <Grid item xs={12} md={6}>
                <SalesReport/>
            </Grid>
            <Grid item xs={12} md={6}>
                <YearlyProfileReport/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <AppUsers/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <OnlineVisitors/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <WebsiteTraffic/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <OrdersReport subTitle={null} chartHeight={183}/>
            </Grid>
            <Grid item xs={12}>
                <PopularProducts/>
            </Grid>
            <Grid item xs={12} md={6}>
                <MarketingCampaign scrollHeight={428}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <LatestAlerts scrollHeight={385}/>
            </Grid>
            <Grid item xs={12}>
                <SiteVisitors/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <LastMonthSales/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <OnlineSignupsFilled/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <NewVisitorsThisMonth/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <TotalRevenueThisYear/>
            </Grid>
        </Grid>
    );
};

export default EcommerceDashboard;

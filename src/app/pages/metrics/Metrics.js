import React from 'react';
import {Grid} from "@mui/material";
import LastMonthSales from "../../shared/metrics/LastMonthSales";
import OnlineSignupsFilled from "../../shared/metrics/OnlineSignupsFilled";
import NewVisitorsThisMonth from "../../shared/metrics/NewVisitorsThisMonth";
import TotalRevenueThisYear from "../../shared/metrics/TotalRevenueThisYear";
import OrdersReport from "../../shared/metrics/OrdersReport";
import CreditScore from "../../shared/metrics/CreditScore";
import TrafficAnalysis from "../../shared/metrics/TrafficAnalysis";
import OnlineSignups from "../../shared/metrics/OnlineSignups";
import RevenueThisYear from "../../shared/metrics/RevenueThisYear";
import EmailCampaign from "../../shared/metrics/EmailCampaign";
import AvgDailyTraffic from "../../shared/metrics/AvgDailyTraffic";
import NewSubscribers from "../../shared/metrics/NewSubscribers";
import NewAuthors from "../../shared/metrics/NewAuthors";
import NewArticles from "../../shared/metrics/NewArticles";
import SalesReport from "../../shared/metrics/SalesReport";
import ActiveUsers from "../../shared/metrics/ActiveUsers";
import PageViews from "../../shared/metrics/PageViews";
import Orders from "../../shared/metrics/Orders";
import ObjectCountOrders from "../../shared/metrics/ObjectCountCards/ObjectCountOrders";
import ObjectCountRevenue from "../../shared/metrics/ObjectCountCards/ObjectCountRevenue";
import ObjectCountVisits from "../../shared/metrics/ObjectCountCards/ObjectCountVisits";
import ObjectCountQueries from "../../shared/metrics/ObjectCountCards/ObjectCountQueries";
import Stocks from "../../shared/metrics/Stocks";

const MetricsPage = () => {
    return (
        <Grid container spacing={3.75}>
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
            <Grid item xs={12} md={6} lg={4}>
                <OrdersReport/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <CreditScore/>
            </Grid>
            <Grid item xs={12} lg={4}>
                <TrafficAnalysis/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ObjectCountOrders vertical={true}/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ObjectCountRevenue vertical={true}/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ObjectCountVisits vertical={true}/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ObjectCountQueries vertical={true}/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <OnlineSignups/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <RevenueThisYear/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <EmailCampaign/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <AvgDailyTraffic/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <NewSubscribers/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <NewAuthors/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <NewArticles/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <SalesReport/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <ActiveUsers/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <PageViews/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Orders/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Stocks/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ObjectCountOrders vertical={true}/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ObjectCountRevenue vertical={true}/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ObjectCountVisits vertical={true}/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ObjectCountQueries vertical={true}/>
            </Grid>
        </Grid>
    );
};

export default MetricsPage;

import React from 'react';
import {Grid} from "@mui/material";
import RecentActivities from "../../../shared/widgets/RecentActivities";
import TaskListExpandable from "../../../shared/widgets/TaskListExpandable";
import MarketingCampaign from "../../../shared/widgets/MarketingCampaign";
import WeeklySales from "../../../shared/widgets/WeeklySales";
import PopularProducts from "../../../shared/widgets/PopularProducts";
import PageViews from "../../../shared/metrics/PageViews";
import Orders from "../../../shared/metrics/Orders";
import CurrentProjectList from "../../../shared/widgets/CurrentProjectsList";
import MarkerClusterer from "../../maps/MarkerClusterer";
import UserProfileCard from "../../../shared/widgets/UserProfileCard";
import HeaderChartComponent from "../../../shared/metrics/HeaderChartComponent";
import Visits from "../../../shared/metrics/Visits";
import UserPhotos from "../../../shared/widgets/UserPhotos";
import LatestAlerts from "../../../shared/widgets/LatestAlerts";
import DailyFeed from "../../../shared/widgets/DailyFeed";
import PopularArticles from "../../../shared/widgets/PopularArticles";

const IntranetDashboard = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12}>
                <HeaderChartComponent/>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3.75}>
                    <Grid item xs={12} lg={7}>
                        <Grid container spacing={3.75}>
                            <Grid item xs={12} sm={6}>
                                <PageViews/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Orders/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                         <Visits/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} md={5} lg={4}>
                <UserProfileCard/>
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
                <PopularArticles scrollHeight={423}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <RecentActivities scrollHeight={342}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <CurrentProjectList scrollHeight={341}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <DailyFeed scrollHeight={400}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TaskListExpandable scrollHeight={395}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <MarketingCampaign scrollHeight={428}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <LatestAlerts scrollHeight={385}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <WeeklySales/>
            </Grid>
            <Grid item xs={12} md={6}>
                <UserPhotos/>
            </Grid>
            <Grid item xs={12}>
                <MarkerClusterer isExample={false}/>
            </Grid>
            <Grid item xs={12}>
                <PopularProducts/>
            </Grid>

        </Grid>
    );
};

export default IntranetDashboard;

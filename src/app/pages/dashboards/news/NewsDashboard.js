import React from 'react';
import {Grid} from "@mui/material";
import NewSubscribers from "../../../shared/metrics/NewSubscribers";
import NewArticles from "../../../shared/metrics/NewArticles";
import NewAuthors from "../../../shared/metrics/NewAuthors";
import AvgDailyTraffic from "../../../shared/metrics/AvgDailyTraffic";
import PopularAuthors from "../../../shared/widgets/PopularAuthors";
import PopularArticles from "../../../shared/widgets/PopularArticles";
import MarketingCampaign from "../../../shared/widgets/MarketingCampaign";
import Comments from "../../../shared/widgets/Comments";
import LatestAlerts from "../../../shared/widgets/LatestAlerts";
import DailyFeed from "../../../shared/widgets/DailyFeed";

const NewsDashboard = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} sm={6} lg={3}>
                <NewSubscribers/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <NewArticles headerSx={{pb: 1.25}}/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <NewAuthors/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <AvgDailyTraffic/>
            </Grid>
            <Grid item xs={12} lg={5}>
                <PopularAuthors/>
            </Grid>
            <Grid item xs={12} lg={7}>
                <PopularArticles/>
            </Grid>
            <Grid item xs={12} md={6}>
                <LatestAlerts/>
            </Grid>
            <Grid item xs={12} md={6}>
                <DailyFeed/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Comments scrollHeight={450}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <MarketingCampaign scrollHeight={430}/>
            </Grid>

        </Grid>
    );
};

export default NewsDashboard;

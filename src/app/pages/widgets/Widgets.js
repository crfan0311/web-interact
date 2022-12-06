import React from 'react';
import Grid from "@mui/material/Grid";
import PortfolioBalance from "../../shared/metrics/PortfolioBalance";
import EarningExpenses from "../../shared/metrics/EarningExpenses";
import AyurvedaCard from "../../shared/widgets/AyurvedaCard";
import NewConnections from "../../shared/widgets/NewConnections";
import ProjectCard from "../../shared/widgets/ProjectCard";
import NewsLetterSubscription from "../../shared/widgets/NewsLetterSubscription";
import NewPhotos from "../../shared/widgets/NewPhotos";
import FlyingBird from "../../shared/widgets/FlyingBird";
import OurOffice from "../../shared/widgets/OurOffice";
import CurrencyCalculator from "../../shared/widgets/CurrencyCalculator";
import WordOfTheDay1 from "../../shared/widgets/WordOfTheDay1";
import ProductImage from "../../shared/widgets/ProductImage";
import ExplorePlaceCard from "../../shared/widgets/ExplorePlaceCard";
import EventInviteConfirmCard from "../../shared/widgets/EventInviteConfirmCard";
import UserProfileCard from "../../shared/widgets/UserProfileCard";
import GoogleNest from "../../shared/widgets/GoogleNest";
import CurrentPlan from "../../shared/widgets/CurrentPlan";
import Ideas from "../../shared/widgets/Ideas";
import Documents from "../../shared/widgets/Documents";
import CityBgCard from "../../shared/widgets/CityBgCard";
import WeeklySales from "../../shared/widgets/WeeklySales";
import LatestPosts from "../../shared/widgets/LatestPosts";
import MarketingCampaign from "../../shared/widgets/MarketingCampaign";
import CurrentProjectsList from "../../shared/widgets/CurrentProjectsList";
import NewRequests from "../../shared/widgets/NewRequests";
import RecentActivites from "../../shared/widgets/RecentActivities";
import TaskListExpandable from "../../shared/widgets/TaskListExpandable";
import DailyFeed from "../../shared/widgets/DailyFeed";
import UpgradePlan from "../../shared/widgets/UpgradePlan";
import WordOfTheDay from "../../shared/widgets/WordOfTheDay";
import UserProfileAction from "../../shared/widgets/UserProfileAction";
import SiteVisitors from "../../shared/widgets/SiteVisitors";
import CryptoNews from "../../shared/widgets/CryptoNews";
import Summary from "../../shared/widgets/Summary";

const Widgets = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <PortfolioBalance/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <EarningExpenses/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <AyurvedaCard height={175}/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <NewConnections scrollHeight={296}/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <ProjectCard/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <NewsLetterSubscription/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <NewPhotos/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <FlyingBird/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <OurOffice/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <CurrencyCalculator/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <WordOfTheDay1/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Summary/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <ProductImage/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <ExplorePlaceCard/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <EventInviteConfirmCard/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <UserProfileCard/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <GoogleNest/>
            </Grid>
            <Grid item xs={12} md={6}>
                <CurrentPlan/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Grid container spacing={3.75}>
                    <Grid item xs={12} md={6}>
                        <Ideas/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Documents/>
                    </Grid>
                    <Grid item xs={12}>
                        <CityBgCard/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <WeeklySales/>
            </Grid>
            <Grid item xs={12} md={6}>
                <LatestPosts/>
            </Grid>
            <Grid item xs={12} md={6}>
                <MarketingCampaign/>
            </Grid>
            <Grid item xs={12} md={6}>
                <CurrentProjectsList/>
            </Grid>
            <Grid item xs={12} md={6}>
                <NewRequests/>
            </Grid>
            <Grid item xs={12} md={6}>
                <RecentActivites scrollHeight={304}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TaskListExpandable/>
            </Grid>
            <Grid item xs={12} md={6}>
                <DailyFeed scrollHeight={398}/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <UpgradePlan/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <WordOfTheDay/>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
                <UserProfileAction/>
            </Grid>
            <Grid item xs={12}>
                <SiteVisitors/>
            </Grid>
            <Grid item xs={12}>
                <CryptoNews/>
            </Grid>
        </Grid>
    );
};

export default Widgets;

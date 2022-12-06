import React from 'react';
import {Grid} from "@mui/material";
import SalesOverview from "../../../shared/metrics/SalesOverview";
import Documents1 from "../../../shared/widgets/Documents1";
import Ideas1 from "../../../shared/widgets/Ideas1";
import UserOrders from "../../../shared/metrics/UserOrders";
import UserSummary from "../../../shared/widgets/UserSummary";
import ScheduleCard from "../../../shared/widgets/ScheduleCard";
import UserProfileCard1 from "../../../shared/widgets/UserProfileCard1";
import NewConnections from "../../../shared/widgets/NewConnections";
import RecentActivities from "../../../shared/widgets/RecentActivities";
import LastMonthSales from "../../../shared/metrics/LastMonthSales";
import OnlineSignupsFilled from "../../../shared/metrics/OnlineSignupsFilled";
import NewVisitorsThisMonth from "../../../shared/metrics/NewVisitorsThisMonth";
import TotalRevenueThisYear from "../../../shared/metrics/TotalRevenueThisYear";
import UpgradePlan from "../../../shared/widgets/UpgradePlan";
import SalesReport1 from "../../../shared/metrics/SalesReport1";
import WordOfTheDay from "../../../shared/widgets/WordOfTheDay";
import OurOffice1 from "../../../shared/widgets/OurOffice1";
import UserProfileAction from "../../../shared/widgets/UserProfileAction";
import PopularProducts from "../../../shared/widgets/PopularProducts";
import ProjectsListCard from "../../../shared/widgets/ProjectsListCard";
import ProductImage from "../../../shared/widgets/ProductImage";
import ExplorePlaceCard from "../../../shared/widgets/ExplorePlaceCard";
import MarkerClusterer from "../../maps/MarkerClusterer";
import AppUsers from "../../../shared/metrics/AppUsers";
import CafeStore1 from "../../../shared/widgets/CafeStore1";
import LatestAlerts from "../../../shared/widgets/LatestAlerts";
import DailyFeed from "../../../shared/widgets/DailyFeed";
import {LAYOUT_NAMES} from "../../../layouts/layouts";
import {useJumboApp} from "@jumbo/hooks";

const MiscDashboard = () => {
    const {setActiveLayout} = useJumboApp();

    React.useEffect(() => {
        setActiveLayout(LAYOUT_NAMES.VERTICAL_DEFAULT);
    }, []);
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={7}>
                <SalesOverview/>
            </Grid>
            <Grid item xs={12} lg={2}>
                <Grid container spacing={3.75}>
                    <Grid item xs={12} sm={6} lg={12}>
                        <Documents1/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={12}>
                        <Ideas1/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={3}>
                <Grid container spacing={3.75}>
                    <Grid item xs={12} sm={6} lg={12}>
                        <UserOrders/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={12}>
                        <UserSummary/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <LatestAlerts/>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
                <DailyFeed/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <ScheduleCard/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <UserProfileCard1/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <NewConnections/>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
                <RecentActivities/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <LastMonthSales/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <OnlineSignupsFilled/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <NewVisitorsThisMonth/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <TotalRevenueThisYear/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <UpgradePlan/>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <SalesReport1/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <AppUsers/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <WordOfTheDay/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <OurOffice1/>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
                <UserProfileAction height={282}/>
            </Grid>
            <Grid item xs={12} lg={8}>
                <PopularProducts/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <ProjectsListCard/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <ProductImage height={370}/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <CafeStore1/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <ExplorePlaceCard height={450}/>
            </Grid>
            {<Grid item xs={12}>
                <MarkerClusterer isExample={false}/>
            </Grid>}
        </Grid>
    );
};

export default MiscDashboard;

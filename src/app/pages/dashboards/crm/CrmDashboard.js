import React from 'react';
import {Grid} from "@mui/material";
import CurrencyCalculator from "../../../shared/widgets/CurrencyCalculator";
import WelcomeSummary from "../../../shared/metrics/WelcomSummary";
import RevenueHistory from "../../../shared/metrics/RevenueHistory";
import NewCustomers from "../../../shared/widgets/NewCustomers";
import Growth from "../../../shared/metrics/Growth";
import ProjectCounterCard from "../../../shared/widgets/ProjectCounterCard";
import TasksCounterCard from "../../../shared/widgets/TasksCounterCard";
import TeamsCounterCard from "../../../shared/widgets/TeamsCounterCard";
import FilesCounterCard from "../../../shared/widgets/FilesCounterCard";
import TasksList2 from "../../../shared/widgets/TasksList2";
import RecentTickets from "../../../shared/widgets/RecentTickets";
import TicketsStatus from "../../../shared/metrics/TicketsStatus";
import RevenueOverview from "../../../shared/metrics/RevenueOverview";
import RecentActivities1 from "../../../shared/widgets/RecentActivities1";
import CurrentProjectList from "../../../shared/widgets/CurrentProjectsList";

const CrmDashboard = () => {
    return (
        <Grid container spacing={3.5}>
            <Grid item xs={12}>
                <WelcomeSummary/>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <RevenueHistory/>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <NewCustomers/>
            </Grid>
            <Grid item xs={12} lg={4}>
                <Growth/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <ProjectCounterCard/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <TasksCounterCard/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <TeamsCounterCard/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <FilesCounterCard/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TasksList2 scrollHeight={373}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <CurrentProjectList/>
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
                <RecentTickets/>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <TicketsStatus/>
            </Grid>
            <Grid item xs={12}>
                <RevenueOverview/>
            </Grid>
            <Grid item xs={12} md={6}>
                <RecentActivities1 scrollHeight={306}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <CurrencyCalculator/>
            </Grid>
        </Grid>
    );
};

export default CrmDashboard;

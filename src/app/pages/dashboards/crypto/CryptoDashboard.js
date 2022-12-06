import React from 'react';
import {Grid} from "@mui/material";
import BitcoinPrice from "./components/BitcoinPrice";
import RipplePrice from "./components/RipplePrice";
import EthereumPrice from "./components/EthereumPrice";
import LitecoinPrice from "./components/LitecoinPrice";
import PortfolioBalance from "../../../shared/metrics/PortfolioBalance";
import EarningExpenses from "../../../shared/metrics/EarningExpenses";
import WordOfTheDay1 from "../../../shared/widgets/WordOfTheDay1";
import EarnRewardCard from "../../../shared/widgets/EarnRewardCard";
import CurrencyCalculator from "../../../shared/widgets/CurrencyCalculator";
import LatestPosts from "../../../shared/widgets/LatestPosts";
import MarketingCampaign from "../../../shared/widgets/MarketingCampaign";
import CryptoNews from "../../../shared/widgets/CryptoNews";

const CryptoDashboard = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} sm={6} lg={3}>
                <BitcoinPrice/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <RipplePrice/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <EthereumPrice/>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <LitecoinPrice/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <PortfolioBalance/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <EarningExpenses/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <WordOfTheDay1/>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <EarnRewardCard/>
            </Grid>
            <Grid item xs={12} lg={4}>
                <CurrencyCalculator/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <LatestPosts scrollHeight={356}/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <MarketingCampaign/>
            </Grid>
            <Grid item xs={12}>
                <CryptoNews/>
            </Grid>
        </Grid>
    );
};

export default CryptoDashboard;

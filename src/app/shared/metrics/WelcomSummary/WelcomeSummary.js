import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import GeneralInfo from "./components/GeneralInfo";
import SiteVisitsGraph from "./components/SiteVisitsGraph";
import SiteAudienceInfo from "./components/SiteAudienceInfo";
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

const WelcomeSummary = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t("widgets.title.welcomeEMA")}
            wrapperSx={{pt: 1}}
        >
            <Grid container spacing={3.75}>
                <Grid item xs={12} sm={6} lg={3}>
                    <GeneralInfo/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} sx={{order: {lg: 3}}}>
                    <SiteAudienceInfo/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <SiteVisitsGraph/>
                </Grid>
            </Grid>
        </JumboCardQuick>
    );
};

export default WelcomeSummary;

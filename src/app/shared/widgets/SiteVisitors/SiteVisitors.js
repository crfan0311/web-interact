import React from 'react';
import CountriesList from "./CountriesList";
import VisitorsOnMap from "./VisitorsOnMap";
import {countryList} from "./data";
import Grid from "@mui/material/Grid";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const SiteVisitors = () => {
    const {t}=useTranslation();
    return (
        <JumboCardQuick
            title={t('widgets.title.siteVisitors')}
            subheader={t('widgets.subheader.siteVisitors')}
        >
            <Grid container spacing={3.75}>
                <Grid item xs={12} md={5}>
                    <CountriesList countries={countryList}/>
                </Grid>
                <Grid item xs={12} md={7}>
                    <VisitorsOnMap/>
                </Grid>
            </Grid>
        </JumboCardQuick>
    );
};

export default SiteVisitors;

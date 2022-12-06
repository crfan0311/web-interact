import React from 'react';
import ChartWebsiteTraffic from "./ChartWebsiteTraffic";
import {Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const WebsiteTraffic = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography variant={"h4"} mb={0}>{t('widgets.title.websiteTraffics')}</Typography>}
            noWrapper
            sx={{textAlign: 'center'}}
        >
            <ChartWebsiteTraffic onlineUsers={130}/>
        </JumboCardQuick>
    );
};

export default WebsiteTraffic;

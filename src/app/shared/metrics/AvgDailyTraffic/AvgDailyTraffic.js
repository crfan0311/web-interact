import React from 'react';
import AvgDailyTrafficChart from "./AvgDailyTrafficChart";
import TimelineIcon from '@mui/icons-material/Timeline';
import Typography from "@mui/material/Typography";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const AvgDailyTraffic = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            noWrapper
            title={<Typography variant={"h2"} color={"common.white"}>756+</Typography>}
            subheader={<Typography variant={"h6"} color={"common.white"}
                                   mb={0}>{t('widgets.subheader.avgDailyTraffic')}</Typography>}
            action={<TimelineIcon/>}
            sx={{color: "common.white"}}
            bgColor={'#3D2C8D'}
        >
            <AvgDailyTrafficChart/>
        </JumboCardQuick>
    );
};

export default AvgDailyTraffic;

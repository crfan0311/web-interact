import React from 'react';
import ActivitiesList from "./ActivitiesList";
import {Chip} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";

const RecentActivities = ({scrollHeight}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t('widgets.title.recentActivities')}
            action={
                <Chip color={"warning"} size={"small"} label={"Last 20 days"}/>
            }
            wrapperSx={{px: 0}}
        >
            <JumboScrollbar
                autoHeight
                autoHeightMin={scrollHeight ? scrollHeight : 278}
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
            >
                <ActivitiesList/>
            </JumboScrollbar>
        </JumboCardQuick>
    );
};
/* Todo scrollHeight prop define */
export default RecentActivities;

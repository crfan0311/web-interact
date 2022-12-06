import React from 'react';
import {dailyFeed} from "./data";
import FeedItem from "./FeedItem";
import {CardActions, Typography} from "@mui/material";
import List from "@mui/material/List";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import {useTranslation} from "react-i18next";

const DailyFeed = ({scrollHeight}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t('widgets.title.dailyFeed')}
            action={
                <Chip label={"23 New Feeds"} size={"small"} color={"warning"}/>
            }
            noWrapper
        >
            <JumboScrollbar
                autoHeight
                autoHeightMin={scrollHeight ? scrollHeight : 498}
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
            >
                <List disablePadding>
                    {
                        dailyFeed.map((feed, index) => (
                            <FeedItem key={index} feed={feed}/>
                        ))
                    }
                </List>
            </JumboScrollbar>
            <Divider/>
            <CardActions sx={{py: theme => theme.spacing(1.5)}}>
                <Typography variant={"h6"} color={"text.secondary"} mb={0}>{"Last Updated 30 min ago"}</Typography>
            </CardActions>
        </JumboCardQuick>
    );
};
/* Todo scrollHeight prop define */
export default DailyFeed;

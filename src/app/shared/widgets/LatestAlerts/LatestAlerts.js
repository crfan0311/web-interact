import React from 'react';
import Chip from "@mui/material/Chip";
import {CardActions, Link} from "@mui/material";
import Tab from "@mui/material/Tab";
import {latestNotifications} from "./data";
import {TabContext, TabPanel} from "@mui/lab";
import TabList from "@mui/lab/TabList";
import Divider from "@mui/material/Divider";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import {useTranslation} from "react-i18next";
import MessagesList from "./components/FeedMessages/MessagesList";
import FeedsList from "./components/FeedsList";
import InvitationsList from "./components/InvitationsList";

const NotificationListComponents = {
    "MESSAGES": MessagesList,
    "FEEDS": FeedsList,
    "INVITATIONS": InvitationsList
};

const LatestAlerts = ({scrollHeight}) => {
    const {t} = useTranslation();
    const [value, setValue] = React.useState("notification");
    return (
        <JumboCardQuick
            noWrapper
            title={t('widgets.title.latestAlerts')}
            action={<Chip size={"small"} label={"2 New"} color={"secondary"}/>}
        >
            <TabContext value={value}>
                <TabList
                    sx={{borderBottom: 1, borderColor: 'divider'}}
                    onChange={(event, newValue) => setValue(newValue)}
                >
                    <Tab label={"App Notifications"} value={"notification"} sx={{flex: '1 1 auto'}}/>
                    <Tab label={"Feeds"} value={"feed"} sx={{flex: '1 1 auto'}}/>
                </TabList>
                <TabPanel value="notification" sx={{p: 0}}>
                    <JumboScrollbar
                        autoHeight
                        autoHeightMin={scrollHeight ? scrollHeight : 448}
                        autoHide
                        autoHideDuration={200}
                        autoHideTimeout={500}
                    >
                        {
                            latestNotifications.map((notificationGroupType, index) => {
                                const GroupTypeComponent = NotificationListComponents[`${notificationGroupType.type}`];
                                return (
                                    <GroupTypeComponent
                                        key={index}
                                        notifications={notificationGroupType.records}
                                        count={notificationGroupType.total}
                                        noHeader={true}
                                    />
                                )
                            })
                        }
                    </JumboScrollbar>
                </TabPanel>
                <TabPanel value="feed" sx={{p: 0}}>
                    <JumboScrollbar
                        autoHeight
                        autoHeightMin={scrollHeight ? scrollHeight : 452}
                        autoHide
                        autoHideDuration={200}
                        autoHideTimeout={500}
                    >
                        <FeedsList
                            notifications={latestNotifications[2].records}
                            count={latestNotifications[2].count}
                            noHeader={true}
                        />
                    </JumboScrollbar>
                </TabPanel>
            </TabContext>
            <Divider/>
            <CardActions sx={{py: theme => theme.spacing(1.5)}}>
                <Link href={"#/"} underline={"none"} lineHeight={1.2}>Learn More</Link>
            </CardActions>
        </JumboCardQuick>
    );
};

export default LatestAlerts;

import React from 'react';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import NotificationBirthday from "./NotificationBirthday";
import NotificationInvitation from "./NotificationInvitation";
import NotificationSharedPost from "./NotificationSharedPost";
import NotificationPost from "./NotificationPost";
import {notifications} from "./fake-data";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";
import JumboIconButton from "@jumbo/components/JumboIconButton";
import JumboDdPopover from "@jumbo/components/JumboDdPopover";
import Div from "@jumbo/shared/Div";
import {CardActions, ThemeProvider} from "@mui/material";
import {useJumboHeaderTheme, useJumboTheme} from "@jumbo/hooks";

const NotificationComponents = {
    "POSTING": NotificationPost,
    "SHARED_POST": NotificationSharedPost,
    "INVITATION": NotificationInvitation,
    "BIRTHDAY": NotificationBirthday
};

const NotificationsDropdown = () => {
    const {theme} = useJumboTheme();
    const {headerTheme} = useJumboHeaderTheme();
    return (
        <ThemeProvider theme={theme}>
            <JumboDdPopover
                triggerButton={
                    <ThemeProvider theme={headerTheme}>
                        <JumboIconButton badge={{variant: "dot"}} elevation={25}>
                            <NotificationImportantOutlinedIcon sx={{fontSize: '1.25rem'}}/>
                        </JumboIconButton>
                    </ThemeProvider>
                }
                disableInsideClick
            >
                <Div sx={{width: 360, maxWidth: '100%'}}>
                    <CardHeader
                        title={"Notifications"}
                        action={<IconButton sx={{my: -1}}><MoreHorizIcon/></IconButton>}
                    />
                    <List disablePadding>
                        {
                            notifications.map((item, index) => {
                                const NotificationComponent = NotificationComponents[item.type];
                                return (NotificationComponent) ?
                                    <NotificationComponent key={index} item={item}/>
                                    :
                                    null;
                            })
                        }
                    </List>
                    <Divider/>
                    <CardActions sx={{justifyContent: 'center'}}>
                        <Button sx={{textTransform: "none", fontWeight: 'normal', '&:hover': {bgcolor: 'transparent'}}}
                                size={"small"} variant="text" endIcon={<ArrowForwardIcon/>} disableRipple>
                            View All
                        </Button>
                    </CardActions>
                </Div>
            </JumboDdPopover>
        </ThemeProvider>
    );
};

export default NotificationsDropdown;

import React from 'react';
import {notificationIcons} from "./notificationIcons";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import {Typography} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import {getDateElements} from "@jumbo/utils";
import Span from "@jumbo/shared/Span";

const NotificationSharedPost = ({item}) => {
    return (
        <ListItemButton component={"li"} alignItems={"flex-start"}>
            <ListItemAvatar>
                <Avatar src={item.user.profile_pic}/>
            </ListItemAvatar>
            <ListItemText>
                <Link underline={"none"} href="#/">{item.user.name}</Link> has shared {item.metaData.post.owner.name}'s post
                <Typography component="span" sx={{
                    display: 'flex',
                    fontSize: '90%',
                    mt: .5,
                }}>
                    {notificationIcons[item.type]}
                    <Span sx={{color: 'text.secondary', ml: 1}}>{getDateElements(item.date).time}</Span>
                </Typography>
            </ListItemText>
        </ListItemButton>

    );
};

export default NotificationSharedPost;

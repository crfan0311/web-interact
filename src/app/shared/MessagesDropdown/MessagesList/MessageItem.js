import React from 'react';
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from "@mui/material/IconButton";
import {ListItemButton, Typography} from "@mui/material";

const MessageItem = ({item}) => {
    return (
        <ListItemButton component={"li"} disableRipple>
            <ListItemAvatar>
                <Avatar src={item.user.profile_pic}/>
            </ListItemAvatar>
            <ListItemText primary={<Typography variant={"h6"} mb={.25}>{item.user.name}</Typography>}
                          secondary={<Typography noWrap color={"text.secondary"}>{item.message}</Typography>}
            />
            <IconButton elevation={1} edge={"end"} size={"small"}><MoreHorizIcon/></IconButton>
        </ListItemButton>
    );
};

export default MessageItem;

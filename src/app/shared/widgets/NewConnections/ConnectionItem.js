import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const ConnectionItem = ({item, handleFollowToggle}) => {
    return (
        <ListItem sx={{p: theme => theme.spacing(1, 3)}}>
            <ListItemAvatar>
                <Avatar alt={item.user.name} src={item.user.profile_pic}/>
            </ListItemAvatar>
            <ListItemText
                primary={<Typography variant='h5' mb={.5}>{item.user.name}</Typography>}
                secondary={"@" + item.user.username}
            />
            <Button
                size={"small"}
                variant={"contained"}
                color={"success"}
                disableElevation
                onClick={() => handleFollowToggle(item)}
                {...(item.follow) ? {color: "inherit"} : {}}
                sx={{
                    minWidth: 78,
                    textTransform: 'none',
                    p: theme => theme.spacing(.5, 1.5)
                }}
            >
                {item.follow ? "Unfollow" : "Follow"}
            </Button>
        </ListItem>

    )
};
/* Todo item, handleFollowToggle prop define */
export default ConnectionItem;

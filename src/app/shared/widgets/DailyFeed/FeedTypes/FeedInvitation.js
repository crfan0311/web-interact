import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Span from "@jumbo/shared/Span";

const FeedInvitation = ({feed}) => {
    return (
        <ListItem alignItems={"flex-start"} sx={{px: 3}}>
            <ListItemAvatar sx={{minWidth: 65}}>
                <Avatar sx={{width: 52, height: 52, boxShadow: 1}} alt={feed.name}
                        src={feed.metaData.sender.profile_pic}/>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Typography
                        variant={"h6"}
                        color={"text.secondary"}
                    >{feed.timeRange}
                    </Typography>
                }
                secondary={
                    <Typography component={"div"}>
                        <Typography color={"text.primary"} mb={2}>
                            <Span sx={{color: 'primary.main'}}>{feed.metaData.sender.name} </Span>
                            {"has sent you an invitation to join project"}
                            <Span sx={{color: 'primary.main'}}> {feed.metaData.project.name}</Span>
                        </Typography>
                        <Stack direction={"row"} spacing={1}>
                            <Button variant={"contained"} size={"small"}>Accept</Button>
                            <Button variant={"contained"} color={"inherit"} size={"small"}>Deny</Button>
                        </Stack>
                    </Typography>
                }
            />
        </ListItem>
    );
};
/* Todo feed prop define */
export default FeedInvitation;

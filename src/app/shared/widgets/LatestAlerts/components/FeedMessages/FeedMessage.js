import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Span from "@jumbo/shared/Span";

const FeedMessage = ({feed}) => {
    return (
        <ListItem alignItems={"flex-start"} sx={{px: 3}}>
            <ListItemAvatar sx={{minWidth: 65}}>
                <Avatar sx={{width: 52, height: 52, boxShadow: 1}} alt={feed.name} src={feed.avatar}/>
            </ListItemAvatar>
            <ListItemText
                primary={<Typography variant={"h6"} color={"text.secondary"}>{feed.time}</Typography>}
                secondary={
                    <Typography component={"div"}>
                        <Typography color={"text.primary"} mb={2}>
                            <Span sx={{color: 'primary.main'}}>{feed.content} </Span>
                            {"has sent you an invitation to join project"}
                            <Span sx={{color: 'primary.main'}}> {feed.name}</Span>
                        </Typography>
                        <Stack direction={"row"} spacing={1}>
                            <Button variant={"contained"} size={"small"}>Reply</Button>
                        </Stack>
                    </Typography>
                }
            />
        </ListItem>
    );
};

export default FeedMessage;

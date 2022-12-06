import React from 'react';
import {alpha, Avatar, AvatarGroup, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import moment from 'moment';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";

const RecentActivityItem = ({recentItem}) => {
    return (
        <React.Fragment>
            <Typography
                variant={"body1"}
                color={'text.secondary'}
                sx={{px: 3, fontSize: 12, my: 1}}
            >
                {moment(recentItem.date).format("MMMM DD, YYYY")}
            </Typography>
            <List sx={{
                p: theme => theme.spacing(0, 0, 1)
            }}
            >
                {
                    recentItem?.data.map((item, index) => (
                        <ListItemButton
                            component={"li"}
                            key={index}
                            alignItems={item.mediaList.length === 0 ? null : ("flex-start")}
                            sx={{
                                px: 3,
                                transition: 'all 0.2s',

                                '&:hover': {
                                    boxShadow: `0 3px 10px 0 ${alpha('#000', 0.2)}`,
                                    transform: 'translateY(-4px)',
                                }
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    alt={item.user.name}
                                    src={item.user.profilePic}
                                    sx={{width: "44px", height: "44px"}}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.content}
                                secondary={
                                    item.mediaList.length === 0 ? null : (
                                        <Typography component={"div"} sx={{display: 'flex'}}>
                                            <AvatarGroup variant={"rounded"} spacing={0} max={3} sx={{pt: 1}}>
                                                {
                                                    item?.mediaList.map((media, index) => (
                                                        <Avatar
                                                            sx={{
                                                                mr: .5,
                                                                borderRadius: '6px'
                                                            }}
                                                            key={index}
                                                            src={media.mediaUrl}
                                                        />
                                                    ))
                                                }
                                            </AvatarGroup>
                                        </Typography>
                                    )
                                }
                            />
                        </ListItemButton>
                    ))
                }
            </List>
        </React.Fragment>

    );
};
/* Todo :- recent activity item props */
export default RecentActivityItem;

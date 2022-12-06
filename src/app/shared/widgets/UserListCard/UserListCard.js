import React from 'react';
import {Card, IconButton, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Div from "@jumbo/shared/Div";

const Item = ({children, sx}) => (
    <Div sx={{p: theme => theme.spacing(1, 2), ...sx}}>
        {children}
    </Div>
);

const UserListCard = ({user}) => {

    return (
        <Card sx={{mb: 1}}>
            <Stack direction={"row"} alignItems={"center"} sx={{p: 2}}>
                <Item>
                    {user.isFavorite ? <StarIcon fontSize={"small"} sx={{verticalAlign: 'middle'}}/> :
                        <StarBorderIcon fontSize={"small"} sx={{verticalAlign: 'middle'}}/>}
                </Item>
                <Item>
                    <Badge overlap="circular"  variant="dot"
                           anchorOrigin={{
                               vertical: 'bottom',
                               horizontal: 'right',
                           }}
                           sx={{
                               '.MuiBadge-badge': {
                                   border: '2px solid #FFF',
                                   height: '14px',
                                   width: '14px',
                                   borderRadius: '50%',
                                   bgcolor: user.isOnline ? "success.main" : "#757575"
                               }
                           }}
                    >
                        <Avatar sx={{width: 56, height: 56}} alt={`${user.firstName} ${user.lastName}`}
                                src={user.profilePic}/>
                    </Badge>
                </Item>
                <Item sx={{
                    flexBasis: '17%'
                }}>
                    <Typography variant={"h6"} mb={.5}>{`${user.firstName} ${user.lastName}`}</Typography>
                    <Typography variant={"body1"} color="text.secondary">{user.handle}</Typography>
                </Item>
                <Item sx={{
                    flexBasis: '12%',
                    marginRight: 'auto'
                }}>
                    <Typography variant={"h6"} mb={3}>{user.title}</Typography>
                </Item>
                <Item>
                    <Typography variant={"h6"} mb={.5}>{user.summary.views}</Typography>
                    <Typography variant={"body1"} color="text.secondary">Views</Typography>
                </Item>
                <Item>
                    <Typography variant={"h6"} mb={.5}>{user.summary.projects}</Typography>
                    <Typography variant={"body1"} color="text.secondary">Project</Typography>
                </Item>
                <Item>
                    <Typography variant={"h6"} mb={.5}>{user.summary.followers}</Typography>
                    <Typography variant={"body1"} color="text.secondary">Followers</Typography>
                </Item>
                <Item>
                    <Button sx={{minWidth: 105}} disableElevation variant={"contained"} color={user.isFollowing ? "error" : "primary"}
                    >
                        {user.isFollowing ? "Unfollow" : "Follow"}
                    </Button>
                    <Button disableElevation variant={"contained"} color={"inherit"} sx={{ml: 1}}>Profile</Button>
                </Item>
                <Item>
                    <IconButton aria-label="settings">
                        <MoreHorizIcon/>
                    </IconButton>
                </Item>
            </Stack>
        </Card>
    );
};

export default UserListCard;

import React from 'react';
import CardHeader from "@mui/material/CardHeader";
import {ButtonGroup, Card, CardActions, CardContent, IconButton, Typography} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styled from "@mui/material/styles/styled";
import Button from "@mui/material/Button";
import Div from "@jumbo/shared/Div";
import JumboBookmark from "@jumbo/components/JumboBookmark";

const Item = ({children, sx}) => (
    <Div sx={{textAlign: 'center', flexBasis: '33.33%', p: theme => theme.spacing(1, 2), ...sx}}>
        {children}
    </Div>
);

const ActionButton = styled(Button)(({theme}) => ({
    padding: theme.spacing(1.5, 2),
    borderBottom: 'none',
    borderRadius: 0,
    textTransform: 'none',
    letterSpacing: 0,
    borderColor: theme.palette.divider,
    color: theme.palette.text.secondary,

    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderBottom: 'none',
    },
}));

const UserProfileCard = ({user}) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <JumboBookmark value={user.isFavorite} sx={{verticalAlign: 'middle', fontSize: 'small'}}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon/>
                    </IconButton>
                }
                sx={{pb: 0}}
            >
            </CardHeader>
            <CardContent sx={{
                pt: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Div sx={{mb: 3}}>
                    <Badge overlap="circular" variant="dot"
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
                        <Avatar sx={{width: 72, height: 72}} alt={`${user.firstName} ${user.lastName}`}
                                src={user.profilePic}/>
                    </Badge>
                </Div>
                <Typography variant={"h5"} mb={.75}>{`${user.firstName} ${user.lastName}`}</Typography>
                <Typography variant={"h6"} color="text.secondary" mb={.5}>{user.title}</Typography>
                <Typography fontSize={"12px"} variant={"body1"} color="text.secondary" mb={2}>{user.handle}</Typography>
                <Stack direction={"row"} color={"text.secondary"} mb={1}>
                    <IconButton color="inherit" aria-label="Facebook">
                        <FacebookIcon fontSize={"small"}/>
                    </IconButton>
                    <IconButton color="inherit" aria-label="Twitter">
                        <TwitterIcon fontSize={"small"}/>
                    </IconButton>
                    <IconButton color="inherit" aria-label="LinkedIn">
                        <LinkedInIcon fontSize={"small"}/>
                    </IconButton>
                </Stack>
                <Stack direction={"row"} alignSelf="stretch">
                    <Item>
                        <Typography variant={"h6"} mb={.5}>{user.summary.views}</Typography>
                        <Typography variant={"body1"} color="text.secondary" fontSize={13}>Views</Typography>
                    </Item>
                    <Item>
                        <Typography variant={"h6"} mb={.5}>{user.summary.projects}</Typography>
                        <Typography variant={"body1"} color="text.secondary" fontSize={13}>Project</Typography>
                    </Item>
                    <Item>
                        <Typography variant={"h6"} mb={.5}>{user.summary.followers}</Typography>
                        <Typography variant={"body1"} color="text.secondary" fontSize={13}>Followers</Typography>
                    </Item>
                </Stack>
            </CardContent>
            <CardActions sx={{p: 0, mx: '-1px'}}>
                <ButtonGroup size="large" fullWidth variant="outlined">
                    <ActionButton>Follow</ActionButton>
                    <ActionButton>View Profile</ActionButton>
                </ButtonGroup>
            </CardActions>
        </Card>
    );
};

export default UserProfileCard;

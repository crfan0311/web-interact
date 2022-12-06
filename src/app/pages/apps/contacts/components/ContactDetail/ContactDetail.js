import React from 'react';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CardHeader from "@mui/material/CardHeader";
import {alpha, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import Divider from "@mui/material/Divider";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import List from "@mui/material/List";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Stack from "@mui/material/Stack";
import JumboChipsGroup from "@jumbo/components/JumboChipsGroup";
import Div from "@jumbo/shared/Div";

const ContactDetail = ({contact, onClose}) => {
    return (
        <Div sx={{m: theme => theme.spacing(-2.5, -3)}}>
            <CardHeader
                title={contact?.name}
                subheader={contact?.job_title}
                avatar={<Avatar src={contact?.profile_pic}/>}
                action={
                    <IconButton onClick={onClose}><CloseIcon/></IconButton>
                }
            />
            <List disablePadding>
                <ListItem sx={{px: 4}}>
                    <ListItemAvatar sx={{minWidth: 66}}>
                        <Avatar
                            variant="rounded"
                            sx={{
                                height: 48,
                                width: 48,
                                bgcolor: theme => alpha(theme.palette.primary.main, .15)
                            }}
                        >
                            <CorporateFareIcon sx={{color: 'primary.light'}}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Typography variant={"body1"} color={"text.secondary"} mb={.5}>Company</Typography>}
                        secondary={<Typography variant={"h5"} mb={0}>{contact?.company}</Typography>}
                    />
                </ListItem>
                <Divider component={"li"}/>
                <ListItem sx={{px: 4}}>
                    <ListItemAvatar sx={{minWidth: 66}}>
                        <Avatar
                            variant="rounded"
                            sx={{
                                height: 48,
                                width: 48,
                                bgcolor: theme => alpha(theme.palette.primary.main, .15)
                            }}
                        >
                            <MailOutlineIcon sx={{color: 'primary.light'}}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Typography variant={"body1"} color={"text.secondary"} mb={.5}>Email</Typography>}
                        secondary={<Typography variant={"h5"} mb={0}>{contact?.email}</Typography>}
                    />
                </ListItem>
                <Divider component={"li"}/>
                <ListItem sx={{px: 4}}>
                    <ListItemAvatar sx={{minWidth: 66}}>
                        <Avatar
                            variant="rounded"
                            sx={{
                                height: 48,
                                width: 48,
                                bgcolor: theme => alpha(theme.palette.primary.main, .15)
                            }}
                        >
                            <LabelOutlinedIcon sx={{color: 'primary.light'}}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Typography variant={"body1"} color={"text.secondary"} mb={.5}>Labels</Typography>}
                        secondary={<Typography component={"div"}>
                            <JumboChipsGroup
                                spacing={1}
                                size={"small"}
                                chips={contact?.labels}
                                mapKeys={{label: "name", color: "color"}}
                            />
                        </Typography>
                        }
                    />
                </ListItem>
                <Divider component={"li"}/>
            </List>
            <Stack spacing={1} direction={"row"} sx={{px: 4, py: 2}}>
                <IconButton
                    size={'large'}
                    sx={{
                        backgroundColor: theme => theme.palette.grey[400],
                        color: 'common.white',

                        '&:hover': {
                            backgroundColor: 'primary.main'
                        }
                    }}
                >
                    <ForumOutlinedIcon fontSize={'medium'} color={"inherit"}/>
                </IconButton>
                <IconButton
                    size={'large'}
                    sx={{
                        backgroundColor: theme => theme.palette.grey[400],
                        color: 'common.white',

                        '&:hover': {
                            backgroundColor: 'primary.main'
                        }
                    }}
                >
                    <LocalPhoneIcon fontSize={'medium'} color={"inherit"}/>
                </IconButton>
            </Stack>
        </Div>
    );
};

export default ContactDetail;

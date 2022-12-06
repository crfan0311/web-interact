import React from 'react';
import {useNavigate} from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import {ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

const ContactItem = ({contactItem}) => {

    const navigate = useNavigate();
    const handleContactClick = () => {
        navigate(`/app/chats/contact/${contactItem?.id}`);
    };
    return (
        <List disablePadding>
            <ListItemButton component="li">
                <ListItemAvatar>
                    <Badge
                        overlap="circular"
                        variant="dot"
                        sx={{
                            '& .MuiBadge-badge': {
                                height: 10,
                                width: 10,
                                border: 1,
                                borderColor: 'common.white',
                                borderRadius: '50%',
                                backgroundColor: (
                                    contactItem.status === 'offline'
                                        ? '#a89f9f'
                                        : contactItem.status === 'online' ? '#72d63a' : '#F7BB07'
                                )
                            }
                        }}
                    >
                        <Avatar alt={contactItem.name} src={contactItem.profile_pic}/>
                    </Badge>
                </ListItemAvatar>
                <ListItemText
                    onClick={handleContactClick}
                    primary={
                        <Typography
                            component="div"
                            variant="body1"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Typography variant="h6" mb={0}>{contactItem.name}</Typography>
                        </Typography>
                    }
                />

            </ListItemButton>
            <Divider component="li"/>
        </List>
    );
};
/* Todo contactItem prop define */
export default ContactItem;

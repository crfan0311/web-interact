import React from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import {alpha, Avatar, Chip, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Span from "@jumbo/shared/Span";

const RecentTicketItem = ({item}) => {
    return (
        <ListItemButton
            component={"li"}
            sx={{
                p: theme => theme.spacing(1.25, 3),
                transition: 'all 0.2s',

                '&:hover': {
                    boxShadow: `0 3px 10px 0 ${alpha('#000', 0.2)}`,
                    transform: 'translateY(-4px)',

                    '& .MuiChip-animation': {
                        width: 'auto',
                        height: 22,
                        fontSize: 12
                    }
                }
            }}
        >
            <ListItemAvatar sx={{minWidth: 68}}>
                <Avatar alt={item.user.name} src={item.user.profilePic} sx={{width: "48px", height: "48px"}}/>
            </ListItemAvatar>
            <ListItemText
                primary={<Typography variant={"h5"} mb={.5}>{item.title}</Typography>}
                secondary={
                    <Typography variant={"body1"} color={'text.secondary'} fontSize={"small"}>
                        <Span sx={{color: 'primary.main'}}>{item.user.name}</Span> {"created by"} {item.createdDate}
                    </Typography>
                }
            />
            <Chip
                size={'small'}
                label={item.priority.label}
                color={item.priority.color}
                className={'MuiChip-animation'}
                sx={{
                    width: 8,
                    height: 8,
                    fontSize: 0,
                    transition: 'all 0.2s',
                }}
            />
        </ListItemButton>
    );
};
/* Todo item prop define */
export default RecentTicketItem;

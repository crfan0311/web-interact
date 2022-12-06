import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {menuItems} from "./data";
import Divider from "@mui/material/Divider";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";

const NewRequestItem = ({item, onAction}) => {
    return (
        <React.Fragment>
            <Divider component="li"/>
            <ListItem sx={{px: 3, py: 1.25}}>
                <ListItemAvatar>
                    <Avatar alt={item.user.name} src={item.user.profile_pic}/>
                </ListItemAvatar>
                <ListItemText sx={{ flexBasis: '40%' }} primary={<Typography variant='h5' mb={.5}>{item.user.name}</Typography>}
                              secondary={"@" + item.user.username}
                />
                <ListItemText sx={{ flexBasis: '20%' }} primary={<Typography>{item.created_at}</Typography>}/>

                <ListItemText  sx={{flexGrow: 0}} primary={<JumboDdMenu onClickCallback={(action) => {
                    onAction(action, item)
                }} menuItems={menuItems}/>}/>
            </ListItem>
        </React.Fragment>
    );
};
/* Todo prop define */
export default NewRequestItem;

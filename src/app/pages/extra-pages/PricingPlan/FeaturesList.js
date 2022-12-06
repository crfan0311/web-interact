import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import List from "@mui/material/List";
import TranslateIcon from "@mui/icons-material/Translate";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import HotelIcon from "@mui/icons-material/Hotel";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const FeaturesList = () => {
    return (
        <List disablePadding sx={{mb: 4}}>
            <ListItem>
                <ListItemIcon sx={{minWidth: 32, color: 'inherit'}}>
                    <TranslateIcon fontSize={"small"}/>
                </ListItemIcon>
                <ListItemText primary="Easy Translation"/>
            </ListItem>
            <ListItem>
                <ListItemIcon sx={{minWidth: 32, color: 'inherit'}}>
                    <FormatColorTextIcon fontSize={"small"}/>
                </ListItemIcon>
                <ListItemText primary="Awesome Google Fonts"/>
            </ListItem>
            <ListItem>
                <ListItemIcon sx={{minWidth: 32, color: 'inherit'}}>
                    <HotelIcon fontSize={"small"}/>
                </ListItemIcon>
                <ListItemText primary="Hotel Booking System"/>
            </ListItem>
            <ListItem>
                <ListItemIcon sx={{minWidth: 32, color: 'inherit'}}>
                    <EmailIcon fontSize={"small"}/>
                </ListItemIcon>
                <ListItemText primary="Email Compose Interface"/>
            </ListItem>
            <ListItem>
                <ListItemIcon sx={{minWidth: 32, color: 'inherit'}}>
                    <LocationOnIcon fontSize={"small"}/>
                </ListItemIcon>
                <ListItemText primary="Location Finder App"/>
            </ListItem>
        </List>
    );
};

export default FeaturesList;

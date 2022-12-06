import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import code from "../Dividers/demo-code/sub-header-dividers.txt";

const SubheaderDividers = () => {
    return (
        <JumboDemoCard title={"Subheader Dividers"} demoCode={code}>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                <ListItem>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                </ListItem>
                <Divider component="li"/>
                <li>
                    <Typography
                        sx={{mt: 0.5, ml: 2}}
                        color="text.secondary"
                        display="block"
                        variant="caption"
                    >
                        Divider
                    </Typography>
                </li>
                <ListItem>
                    <ListItemText primary="Work" secondary="Jan 7, 2014"/>
                </ListItem>
                <Divider component="li" variant="inset"/>
                <li>
                    <Typography
                        sx={{mt: 0.5, ml: 9}}
                        color="text.secondary"
                        display="block"
                        variant="caption"
                    >
                        Leisure
                    </Typography>
                </li>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014"/>
                </ListItem>
            </List>
        </JumboDemoCard>
    );
};

export default SubheaderDividers;

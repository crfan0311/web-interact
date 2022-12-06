import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import StarIcon from "@mui/icons-material/Star";
import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import code from "../Lists/demo-code/inset-list.txt";

const InsetList = () => {
    return (
        <JumboDemoCard title={"Inset List"} demoCode={code}>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <StarIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Chelsea Otakan"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Eric Hoffman"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </JumboDemoCard>
    );
};

export default InsetList;

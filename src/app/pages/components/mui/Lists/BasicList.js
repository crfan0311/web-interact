import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
import code from "../Lists/demo-code/basic-list.txt";

const BasicList = () => {
    return (
        <JumboDemoCard title={"Simple List"} demoCode={code}>
            <Div sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Inbox"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Drafts"/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider/>
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Trash"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Spam"/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Div>
        </JumboDemoCard>
    );
};

export default BasicList;

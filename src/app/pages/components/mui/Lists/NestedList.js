import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Collapse, List, ListItemIcon, ListItemText} from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import InboxIcon from "@mui/icons-material/Inbox";
import code from "../Lists/demo-code/nested-list.txt";

const NestedList = () => {
    const [open, setOpen] = React.useState(true);
    return (
        <JumboDemoCard title={"Nested List"} demoCode={code}>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Sent mail"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Drafts"/>
                </ListItemButton>
                <ListItemButton onClick={() => setOpen(!open)}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Inbox"/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <StarBorder/>
                            </ListItemIcon>
                            <ListItemText primary="Starred"/>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </JumboDemoCard>
    );
};

export default NestedList;

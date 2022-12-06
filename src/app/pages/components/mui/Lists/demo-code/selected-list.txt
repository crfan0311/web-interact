import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {List, ListItemIcon, ListItemText} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import code from "../Lists/demo-code/selected-list.txt";

const SelectedList = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    }
    return (
        <JumboDemoCard title={"Selected List"} demoCode={code}>
            <Div sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Drafts"/>
                    </ListItemButton>
                </List>
                <Divider/>
                <List component="nav" aria-label="secondary mailbox folder">
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemText primary="Trash"/>
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemText primary="Spam"/>
                    </ListItemButton>
                </List>
            </Div>
        </JumboDemoCard>
    );
};

export default SelectedList;

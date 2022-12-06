import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {List, ListItem, ListItemText} from "@mui/material";
import Divider from "@mui/material/Divider";
import code from "../Dividers/demo-code/list-dividers.txt";

const ListDividers = () => {
    return (
        <JumboDemoCard title={"List Dividers"} demoCode={code}>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                component="nav"
                aria-label="mailbox folders"
            >
                <ListItem button>
                    <ListItemText primary="Inbox"/>
                </ListItem>
                <Divider/>
                <ListItem button divider>
                    <ListItemText primary="Drafts"/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Trash"/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="Spam"/>
                </ListItem>
            </List>
        </JumboDemoCard>
    );
};

export default ListDividers;

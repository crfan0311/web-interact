import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import code from "../Lists/demo-code/folder-list.txt";

const FolderList = () => {
    return (
        <JumboDemoCard title={"Folder List"} demoCode={code}>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014"/>
                </ListItem>
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

export default FolderList;

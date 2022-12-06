import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import List from "@mui/material/List";
import {ListItem, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import code from "../Lists/demo-code/gutter-list.txt";

const GutterList = () => {
    return (
        <JumboDemoCard title={"Gutter List"} demoCode={code}>
            <List sx={{width: '100%', maxWidth: 360, p: 2, bgcolor: 'background.paper'}}>
                {[1, 2, 3, 4, 5].map((value) => (
                    <ListItem
                        key={value}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                <CommentIcon/>
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`Line item ${value}`}/>
                    </ListItem>
                ))}
            </List>
        </JumboDemoCard>
    );
};

export default GutterList;

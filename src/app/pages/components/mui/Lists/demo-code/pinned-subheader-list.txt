import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {pinnedData} from "./data";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import code from "../Lists/demo-code/pinned-subheader-list.txt";

const PinnedSubheaderList = () => {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <JumboDemoCard title={"Pinned Subheader List"} demoCode={code}>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 420,
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    bgcolor: 'background.paper',
                    '& ul': {
                        padding: 0
                    },

                }}
                subheader={<li/>}
            >
                {pinnedData.map((pinnedItem, index) => (
                    <li key={index}>
                        <ul>
                            <ListSubheader>{pinnedItem.label}</ListSubheader>
                            {pinnedItem?.items?.map((item, index) => {
                                return (
                                    <ListItem
                                        key={index}
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="comments" color={item.color}>
                                                {item.icon}
                                            </IconButton>
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton role={undefined} onClick={handleToggle(item)} dense>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={checked.indexOf(item) !== -1}
                                                    tabIndex={-1}
                                                    disableRipple
                                                />
                                            </ListItemIcon>
                                            <ListItemText id={item.id} primary={item.label}/>
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </ul>
                    </li>
                ))}
            </List>
        </JumboDemoCard>
    );
};

export default PinnedSubheaderList;

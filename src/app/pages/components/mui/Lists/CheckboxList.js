import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Avatar, Checkbox, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import {userDetails} from "./data";
import code from "../Lists/demo-code/checkbox-list.txt";

const CheckboxList = () => {
    const [checked, setChecked] = React.useState([1]);
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
        <JumboDemoCard title={"Checkbox List"} demoCode={code}>

                <List dense sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                    {userDetails.map((item, index) => {
                        const labelId = `checkbox-list-secondary-label-${item.labelId}`;
                        return (
                            <ListItem
                                key={index}
                                secondaryAction={
                                    <Checkbox
                                        edge="end"
                                        onChange={handleToggle(item)}
                                        checked={checked.indexOf(item) !== -1}
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                }
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={item.email}
                                            src={item.profilePic}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText id={labelId} primary={item.email}/>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
        </JumboDemoCard>
    );
};

export default CheckboxList;

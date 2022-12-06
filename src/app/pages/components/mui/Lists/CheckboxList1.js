import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import {items} from "./data";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Lists/demo-code/checkbox-list1.txt";

const CheckboxList1 = () => {
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
        <JumboDemoCard title={"Checkbox List-1"} demoCode={code}>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                {items.map((item, index) => {
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
            </List>
        </JumboDemoCard>
    );
}
export default CheckboxList1;

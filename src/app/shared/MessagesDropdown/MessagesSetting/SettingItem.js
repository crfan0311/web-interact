import React from 'react';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import {ListItemButton} from "@mui/material";

const SettingItem = ({icon, title, subheader, onChangeCallback, isChecked, value}) => {
    return (
        <ListItemButton component={"li"} disableRipple>
            <ListItemIcon sx={{minWidth: 36}}>
                {icon}
            </ListItemIcon>
            <ListItemText primary={title} secondary={subheader} />
            {
                onChangeCallback && typeof onChangeCallback === "function" &&
                <Switch
                    edge="end"
                    onChange={() => onChangeCallback(value)}
                    checked={isChecked}
                    size={"small"}
                />
            }
        </ListItemButton>
    );
};

export default SettingItem;

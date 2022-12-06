import React from 'react';
import {Checkbox, ListItem, Typography} from "@mui/material";

const CheckboxItem = ({checked, item, onCheckboxChange}) => {
    return (
        <ListItem>
            <Checkbox
                checked={checked}
                onChange={(event) => onCheckboxChange(event.target.checked, event.target.value)}
                name={"products"}
                value={item.id}
                sx={{my: -1, ml: -1}}
            />
            <Typography variant={'body1'}>{item.name}</Typography>
        </ListItem>
    );
};

export default CheckboxItem;

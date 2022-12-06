import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";

const FolderItem = ({icon, label, path, count, selected}) => {
    return (
        <MenuItem disableRipple sx={{p: 0, mb: 2}} selected={selected}>
            <Link underline={"none"} component={RouterLink} to={path}>
                {
                    icon &&
                    <ListItemIcon sx={{color: 'inherit'}}>
                        {icon}
                    </ListItemIcon>
                }
                <ListItemText>
                    {label}
                </ListItemText>
                {
                    count > 0 &&
                    <Chip size={"small"} label={count} />
                }
            </Link>
        </MenuItem>
    );
};
/* Todo prop define */
export default FolderItem;

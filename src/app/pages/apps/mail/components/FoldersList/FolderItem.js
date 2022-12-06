import React from 'react';
import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Link from "@mui/material/Link";

const FolderItem = ({icon, name, selected, slug}) => {
    const navigate = useNavigate();
    const handleFolderItem = () => {
        navigate(`/app/mails/${slug}`)
    }
    return (
        <MenuItem disableRipple sx={{p: 0, mb: 2}} selected={selected}>
            <Link underline={"none"} onClick={handleFolderItem}>
                {
                    icon &&
                    <ListItemIcon sx={{color: 'inherit'}}>
                        {icon}
                    </ListItemIcon>
                }
                <ListItemText>
                    {name}
                </ListItemText>
            </Link>
        </MenuItem>
    );
};
/* Todo prop define */
export default FolderItem;

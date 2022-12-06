import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import {useNavigate} from 'react-router-dom';
import {ListItemIcon, ListItemText} from "@mui/material";
import Link from "@mui/material/Link";

const FilterItem = ({name, icon, slug, selected}) => {
    const navigate = useNavigate();
    const handleFilterItem = () => {
        navigate(`/app/mails/${slug}`);
    }
    return (
        <MenuItem disableRipple sx={{p: 0, mb: 2}} selected={selected}>
            <Link underline={"none"} onClick={handleFilterItem}>
                {
                    icon &&
                    <ListItemIcon sx={{color: "inherit"}}>
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
export default FilterItem;

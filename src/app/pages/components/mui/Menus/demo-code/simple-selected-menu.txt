import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import List from "@mui/material/List";
import {ListItem, ListItemText, Menu, MenuItem} from "@mui/material";
import code from "../Menus/demo-code/simple-selected-menu.txt";
import Div from "@jumbo/shared/Div";

const options = [
    'Show some love to MUI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
];
const SimpleSelectedMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };
    return (
        <JumboDemoCard title={"Selected Menu"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <List
                    component="nav"
                    aria-label="Device settings"
                    sx={{bgcolor: 'background.paper'}}
                >
                    <ListItem
                        button
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(event) => setAnchorEl(event.currentTarget)}
                    >
                        <ListItemText
                            primary="When device is locked"
                            secondary={options[selectedIndex]}
                        />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            disabled={index === 0}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </Div>
        </JumboDemoCard>
    );
};

export default SimpleSelectedMenu;

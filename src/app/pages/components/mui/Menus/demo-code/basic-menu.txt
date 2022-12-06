import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Button from "@mui/material/Button";
import {Menu, MenuItem} from "@mui/material";
import code from "../Menus/demo-code/basic-menu.txt";
import Div from "@jumbo/shared/Div";

const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    return (
        <JumboDemoCard title={"Basic Menu"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                    Dashboard
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
                    <MenuItem onClick={() => setAnchorEl(null)}>My account</MenuItem>
                    <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
                </Menu>
            </Div>
        </JumboDemoCard>
    );
};

export default BasicMenu;

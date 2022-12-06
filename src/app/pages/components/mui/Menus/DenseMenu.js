import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import MenuList from "@mui/material/MenuList";
import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import {Check} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import code from "../Menus/demo-code/dense-menu.txt";

const DenseMenu = () => {
    return (
        <JumboDemoCard title={"Dense Menu"} demoCode={code}>
            <Div sx={{width: 320, maxWidth: '100%', backgroundColor: 'background.paper'}}>
                <MenuList dense>
                    <MenuItem>
                        <ListItemText inset>Single</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText inset>1.15</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText inset>Double</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Check/>
                        </ListItemIcon>
                        Custom: 1.2
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <ListItemText>Add space before paragraph</ListItemText>
                    </MenuItem>
                    <MenuItem>
                        <ListItemText>Add space after paragraph</ListItemText>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <ListItemText>Custom spacing...</ListItemText>
                    </MenuItem>
                </MenuList>
            </Div>
        </JumboDemoCard>
    );
};

export default DenseMenu;

import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import MenuList from "@mui/material/MenuList";
import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import {Cloud, ContentCopy, ContentCut, ContentPaste} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import code from "../Menus/demo-code/icon-menu.txt";

const IconMenu = () => {
    return (
        <JumboDemoCard title={"Icon Menu"} demoCode={code}>

            <Div sx={{width: 320, maxWidth: '100%', backgroundColor: 'background.paper'}}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCut fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText>Cut</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘X
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCopy fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText>Copy</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘C
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentPaste fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText>Paste</ListItemText>
                        <Typography variant="body2" color="text.secondary">
                            ⌘V
                        </Typography>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <ListItemIcon>
                            <Cloud fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText>Web Clipboard</ListItemText>
                    </MenuItem>
                </MenuList>
            </Div>
        </JumboDemoCard>
    );
};

export default IconMenu;

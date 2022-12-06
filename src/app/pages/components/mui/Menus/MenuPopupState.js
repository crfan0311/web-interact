import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, {bindMenu, bindTrigger} from 'material-ui-popup-state';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Menus/demo-code/menu-popup-state.txt";
import Div from "@jumbo/shared/Div";

const MenuPopupState = () => {
    return (
        <JumboDemoCard title={"PopupState helper"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button variant="contained" {...bindTrigger(popupState)}>
                                Dashboard
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                <MenuItem onClick={popupState.close}>My account</MenuItem>
                                <MenuItem onClick={popupState.close}>Logout</MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </Div>
        </JumboDemoCard>
    );
};
export default MenuPopupState;

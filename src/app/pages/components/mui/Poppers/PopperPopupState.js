import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, {bindToggle, bindPopper} from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Poppers/demo-code/popper-popup-state.txt";

const PopperPopupState = () => {
    return (
        <JumboDemoCard
            title={"Popper Popup State"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <PopupState variant="popper" popupId="demo-popup-popper">
                {(popupState) => (
                    <div>
                        <Button variant="contained" {...bindToggle(popupState)}>
                            Toggle Popper
                        </Button>
                        <Popper {...bindPopper(popupState)} transition>
                            {({TransitionProps}) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                        <Typography sx={{p: 2}}>The content of the Popper.</Typography>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                    </div>
                )}
            </PopupState>
        </JumboDemoCard>
    );
};
export default PopperPopupState;

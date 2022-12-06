import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Stack} from "@mui/material";
import code from "../Snackbars/demo-code/positioned-snackbar.txt";

const PositionedSnackbar = () => {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const {vertical, horizontal, open} = state;

    const handleClick = (newState) => () => {
        setState({open: true, ...newState});
    };

    const handleClose = () => {
        setState({...state, open: false});
    };

    const buttons = (
        <React.Fragment>
            <Button
                variant={"contained"}
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'center',
                })}
            >
                Top-Center
            </Button>
            <Button
                variant={"contained"}
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'right',
                })}
            >
                Top-Right
            </Button>
            <Button
                variant={"contained"}
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'right',
                })}
            >
                Bottom-Right
            </Button>
            <Button
                variant={"contained"}
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'center',
                })}
            >
                Bottom-Center
            </Button>
            <Button
                variant={"contained"}
                onClick={handleClick({
                    vertical: 'bottom',
                    horizontal: 'left',
                })}
            >
                Bottom-Left
            </Button>
            <Button
                variant={"contained"}
                onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'left',
                })}
            >
                Top-Left
            </Button>
        </React.Fragment>
    );

    return (
        <JumboDemoCard title={"Positioned"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack direction={"row"} flexWrap={'wrap'} sx={{'& .MuiButton-root': {mr: 1, mb: 1}}}>
                {buttons}
                <Snackbar
                    anchorOrigin={{vertical, horizontal}}
                    open={open}
                    onClose={handleClose}
                    message="I love snacks"
                    key={vertical + horizontal}
                />
            </Stack>
        </JumboDemoCard>
    );
};
export default PositionedSnackbar;

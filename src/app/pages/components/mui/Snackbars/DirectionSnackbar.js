import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Stack} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";
import code from "../Snackbars/demo-code/direction-snackbar.txt";

function TransitionLeft(props) {
    return <Slide {...props} direction="left"/>;
}

function TransitionUp(props) {
    return <Slide {...props} direction="up"/>;
}

function TransitionRight(props) {
    return <Slide {...props} direction="right"/>;
}

function TransitionDown(props) {
    return <Slide {...props} direction="down"/>;
}

const DirectionSnackbar = () => {
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);

    const handleClick = (Transition) => () => {
        setTransition(() => Transition);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <JumboDemoCard title={"Transition Control Direction"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack direction={"row"} flexWrap={'wrap'} sx={{'& .MuiButton-root': {mr: 1, mb: 1}}}>
                <Button
                    variant={"contained"}
                    onClick={handleClick(TransitionLeft)}
                    startIcon={<ArrowForwardIcon/>}
                >
                    Right
                </Button>
                <Button
                    variant={"contained"}
                    onClick={handleClick(TransitionUp)}
                    startIcon={<ArrowUpward/>}
                >
                    Up
                </Button>
                <Button
                    variant={"contained"}
                    onClick={handleClick(TransitionRight)}
                    startIcon={<ArrowBackIcon/>}
                >
                    Left
                </Button>
                <Button
                    variant={"contained"}
                    onClick={handleClick(TransitionDown)}
                    startIcon={<ArrowDownward/>}
                >
                    Down
                </Button>
            </Stack>
            <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                message="I love snacks"
                key={transition ? transition.name : ''}
            />
        </JumboDemoCard>
    );
};
export default DirectionSnackbar;

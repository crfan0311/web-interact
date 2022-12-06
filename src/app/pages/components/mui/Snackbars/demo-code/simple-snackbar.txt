import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Fade from "@mui/material/Fade";
import {Grow} from "@mui/material";
import code from "../Snackbars/demo-code/simple-snackbar.txt";

const GrowTransition = (props) => {
    return <Grow {...props} />;
}

const SimpleSnackbar = () => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
    });
    const handleSlideClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition,
        });
    };
    const handleFadeClose = () => {
        setState({
            ...state,
            open: false,
        });
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleSlideClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleSlideClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );


    return (
        <JumboDemoCard title={"Simple Snackbar"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Button variant={"contained"} onClick={() => setOpen(true)} sx={{mr: 2}}>Slide</Button>
            <Button variant={"contained"} onClick={handleClick(GrowTransition)}>Fade</Button>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleSlideClose}
                message="Note archived"
                action={action}
            />
            <Snackbar
                sx={{ml: 50}}
                open={state.open}
                onClose={handleFadeClose}
                TransitionComponent={state.Transition}
                message="I love snacks"
                key={state.Transition.name}
            />
        </JumboDemoCard>
    );
};
export default SimpleSnackbar;

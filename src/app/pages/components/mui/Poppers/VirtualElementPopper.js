import * as React from 'react';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Poppers/demo-code/virtual-element-popper.txt";

const VirtualElementPopper = () => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setOpen(false);
    };

    const handleMouseUp = () => {
        const selection = window.getSelection();

        if (!selection || selection.anchorOffset === selection.focusOffset) {
            handleClose();
            return;
        }

        const getBoundingClientRect = () =>
            selection.getRangeAt(0).getBoundingClientRect();

        setOpen(true);
        setAnchorEl({
            getBoundingClientRect,
        });
    };

    const id = open ? 'virtual-element-popper' : undefined;

    return (
        <JumboDemoCard
            title={"Virtual Element Popper"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <div onMouseLeave={handleClose}>
                <Typography aria-describedby={id} onMouseUp={handleMouseUp}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus,
                    bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum
                    vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor
                    porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis
                    vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus
                    massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit
                    amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus
                    consequat. Suspendisse lacinia tellus a libero volutpat maximus.
                </Typography>
                <Popper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    transition
                    placement="bottom-start"
                >
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Typography sx={{p: 2}}>The content of the Popper.</Typography>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </div>
        </JumboDemoCard>
    );
};
export default VirtualElementPopper;

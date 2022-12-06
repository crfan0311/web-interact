import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Poppers/demo-code/transitions-popper.txt";

const TransitionsPopper = () => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    return (
        <JumboDemoCard
            title={"Transitions Popper"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <button aria-describedby={id} type="button" onClick={handleClick}>
                Toggle Popper
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({TransitionProps}) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>
                            The content of the Popper.
                        </Box>
                    </Fade>
                )}
            </Popper>
        </JumboDemoCard>
    );
};
export default TransitionsPopper;

import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Poppers/demo-code/simple-popper.txt";

const SimplePopper = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <JumboDemoCard
            title={"Simple Popper"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <button aria-describedby={id} type="button" onClick={handleClick}>
                Toggle Popper
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{border: 1, p: 1, bgcolor: 'background.paper'}}>
                    The content of the Popper.
                </Box>
            </Popper>
        </JumboDemoCard>
    );
};
export default SimplePopper;

import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../ClickAwayListeners/demo-code/click-away.txt";

const ClickAway = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: 1,
        borderColor: 'divider',
        p: 1,
        bgcolor: 'background.paper',
    };

    return (
        <JumboDemoCard
            title={"Click Away"}
            demoCode={code}
            sx={{overflow: 'visible'}}
            wrapperSx={{
                pt: 0,
                backgroundColor: 'background.paper',
                borderRadius: '0 0 12px 12px'
            }}
        >
            <ClickAwayListener onClickAway={handleClickAway}>
                <Div sx={{position: 'relative'}}>
                    <button type="button" onClick={handleClick}>
                        Open menu dropdown
                    </button>
                    {open ? (
                        <Div sx={styles}>
                            Click me, I will stay visible until you click outside.
                        </Div>
                    ) : null}
                </Div>
            </ClickAwayListener>
        </JumboDemoCard>
    );
};
export default ClickAway;

import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Portal from '@mui/material/Portal';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../ClickAwayListeners/demo-code/portal-click-away.txt";

const PortalClickAway = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'fixed',
        width: 200,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: 1,
        borderColor: 'divider',
        p: 1,
        bgcolor: 'background.paper',
    };

    return (
        <JumboDemoCard
            title={"Portal"}
            demoCode={code}
            sx={{overflow: 'visible'}}
            wrapperSx={{
                pt: 0,
                backgroundColor: 'background.paper',
                borderRadius: '0 0 12px 12px'
            }}
        >
            <ClickAwayListener onClickAway={handleClickAway}>
                <Div>
                    <button type="button" onClick={handleClick}>
                        Open menu dropdown
                    </button>
                    {open ? (
                        <Portal>
                            <Div sx={styles}>
                                Click me, I will stay visible until you click outside.
                            </Div>
                        </Portal>
                    ) : null}
                </Div>
            </ClickAwayListener>
        </JumboDemoCard>
    );
};
export default PortalClickAway;

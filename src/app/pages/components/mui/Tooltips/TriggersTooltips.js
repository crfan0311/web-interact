import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Grid from "@mui/material/Grid";
import {ClickAwayListener, Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import code from "../Tooltips/demo-code/triggers-tooltips.txt";

const TriggersTooltips = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <JumboDemoCard title={"Trigger Tooltip"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Grid container justifyContent="center">
                <Grid item>
                    <Tooltip disableFocusListener title="Add">
                        <Button>Hover or touch</Button>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Tooltip disableHoverListener title="Add">
                        <Button>Focus or touch</Button>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <Tooltip disableFocusListener disableTouchListener title="Add">
                        <Button>Hover</Button>
                    </Tooltip>
                </Grid>
                <Grid item>
                    <ClickAwayListener onClickAway={() => setOpen(false)}>
                        <div>
                            <Tooltip
                                PopperProps={{
                                    disablePortal: true,
                                }}
                                onClose={() => setOpen(false)}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title="Add"
                            >
                                <Button onClick={() => setOpen(true)}>Click</Button>
                            </Tooltip>
                        </div>
                    </ClickAwayListener>
                </Grid>
            </Grid>
        </JumboDemoCard>
    );
};

export default TriggersTooltips;

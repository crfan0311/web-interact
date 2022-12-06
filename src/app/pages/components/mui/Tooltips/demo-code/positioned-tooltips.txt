import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Grid, Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import code from "../Tooltips/demo-code/positioned-tooltips.txt";

const PositionedTooltips = () => {
    return (
        <JumboDemoCard title={"Positioned Tooltip"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: 500, maxWidth: '100%'}}>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Tooltip title="Add" placement="top-start">
                            <Button>top-start</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="top">
                            <Button>top</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="top-end">
                            <Button>top-end</Button>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={6}>
                        <Tooltip title="Add" placement="left-start">
                            <Button>left-start</Button>
                        </Tooltip>
                        <br/>
                        <Tooltip title="Add" placement="left">
                            <Button>left</Button>
                        </Tooltip>
                        <br/>
                        <Tooltip title="Add" placement="left-end">
                            <Button>left-end</Button>
                        </Tooltip>
                    </Grid>
                    <Grid item container xs={6} alignItems="flex-end" direction="column">
                        <Grid item>
                            <Tooltip title="Add" placement="right-start">
                                <Button>right-start</Button>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Add" placement="right">
                                <Button>right</Button>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title="Add" placement="right-end">
                                <Button>right-end</Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Tooltip title="Add" placement="bottom-start">
                            <Button>bottom-start</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="bottom">
                            <Button>bottom</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="bottom-end">
                            <Button>bottom-end</Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Div>
        </JumboDemoCard>
    );
};

export default PositionedTooltips;

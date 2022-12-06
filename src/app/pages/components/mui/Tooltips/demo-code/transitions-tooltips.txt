import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
import Fade from "@mui/material/Fade";
import code from "../Tooltips/demo-code/transitions-tooltips.txt";

const TransitionsTooltips = () => {
    return (
        <JumboDemoCard title={"Transition Tooltip"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Tooltip title="Add">
                <Button>Grow</Button>
            </Tooltip>
            <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{timeout: 600}}
                title="Add"
            >
                <Button>Fade</Button>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Add">
                <Button>Zoom</Button>
            </Tooltip>
        </JumboDemoCard>
    );
};

export default TransitionsTooltips;

import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import code from "../Tooltips/demo-code/not-interactive-tooltips.txt";

const NotInteractiveTooltips = () => {
    return (
        <JumboDemoCard title={"Not Interactive Tooltip"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Tooltip title="Add" disableInteractive>
                <Button>Not interactive</Button>
            </Tooltip>
        </JumboDemoCard>
    );
};

export default NotInteractiveTooltips;

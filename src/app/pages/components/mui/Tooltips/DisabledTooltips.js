import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import Span from "@jumbo/shared/Span";
import code from "../Tooltips/demo-code/disabled-tooltips.txt";

const DisabledTooltips = () => {
    return (
        <JumboDemoCard title={"Disabled Tooltip"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Tooltip title="You don't have permission to do this">
                <Span>
                    <Button disabled>A Disabled Button</Button>
                </Span>
            </Tooltip>
        </JumboDemoCard>
    );
};

export default DisabledTooltips;

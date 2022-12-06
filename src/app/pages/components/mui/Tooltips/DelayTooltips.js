import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import code from "../Tooltips/demo-code/delay-tooltips.txt";

const DelayTooltips = () => {
    return (
        <JumboDemoCard title={"Delay Tooltip"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
                <Button>[500ms, 200ms]</Button>
            </Tooltip>
        </JumboDemoCard>
    );
};

export default DelayTooltips;

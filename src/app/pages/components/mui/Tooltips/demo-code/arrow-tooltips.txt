import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import code from "../Tooltips/demo-code/arrow-tooltips.txt";

const ArrowTooltips = () => {
    return (
        <JumboDemoCard title={"Arrow Tooltip"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Tooltip title="Add" arrow>
                <Button>Arrow</Button>
            </Tooltip>
        </JumboDemoCard>
    );
};

export default ArrowTooltips;

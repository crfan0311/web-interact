import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Tooltip} from "@mui/material";
import Div from "@jumbo/shared/Div";
import code from "../Tooltips/demo-code/follow-cursor-tooltips.txt";

const FollowCursorTooltips = () => {
    return (
        <JumboDemoCard title={"Follow Cursor Tooltip"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Tooltip title="You don't have permission to do this" followCursor>
                <Div sx={{bgcolor: 'text.disabled', color: 'background.paper', p: 2}}>
                    Disabled Action
                </Div>
            </Tooltip>
        </JumboDemoCard>
    );
};

export default FollowCursorTooltips;

import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {IconButton, Tooltip} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import code from "../Tooltips/demo-code/basic-tooltips.txt";

const BasicTooltip = () => {
    return (
        <JumboDemoCard
            title={"Basic Tooltip"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
        </JumboDemoCard>
    );
};

export default BasicTooltip;

import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Tooltip} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import code from "../Tooltips/demo-code/accessibility-tooltips.txt";

const AccessibilityTooltips = () => {
    return (
        <JumboDemoCard title={"Accessibility Tooltip"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip describeChild title="Does not add if it already exists.">
                <Button>Add</Button>
            </Tooltip>
        </JumboDemoCard>
    );
};

export default AccessibilityTooltips;

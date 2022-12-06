import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import code from "../Tooltips/demo-code/controlled-tooltips.txt";

const ControlledTooltips = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <JumboDemoCard title={"Controlled Tooltip"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Tooltip
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                title="Add"
            >
                <Button>Controlled</Button>
            </Tooltip>
        </JumboDemoCard>
    );
};

export default ControlledTooltips;

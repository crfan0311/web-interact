import React from 'react';
import {Chip} from "@mui/material";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Chips/demo-code/clickable-chips.txt";

const ClickableChips = () => {
    return (
        <JumboDemoCard title={"Clickable Chips"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Chip
                label={"I'm Clickable"}
                component="a"
                onClick={()=> alert("You clicked the chip")}
                clickable
            />
        </JumboDemoCard>
    );
};

export default ClickableChips;

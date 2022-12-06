import React from 'react';
import {Chip} from "@mui/material";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Chips/demo-code/default-chips.txt";

const DefaultChips = () => {
    return (
        <JumboDemoCard
            title={"Default Chip"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Chip label={"Default"}/>
        </JumboDemoCard>
    );
};

export default DefaultChips;

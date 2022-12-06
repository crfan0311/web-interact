import React from 'react';
import {Chip} from "@mui/material";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Chips/demo-code/outlined-chips.txt";

const OutlinedChips = () => {
    return (
        <JumboDemoCard title={"Outlined Chips"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Chip label={"Outline Chip"} variant={"outlined"}/>
        </JumboDemoCard>
    );
};

export default OutlinedChips;

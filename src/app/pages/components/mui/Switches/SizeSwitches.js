import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Switch} from "@mui/material";
import code from "../Switches/demo-code/size-switches.txt";

const label = {inputProps: {'aria-label': "Switch demo"}};
const SizeSwitches = () => {
    return (
        <JumboDemoCard title={"Size"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Switch {...label} defaultChecked size="small"/>
            <Switch {...label} defaultChecked/>
        </JumboDemoCard>
    );
};

export default SizeSwitches;

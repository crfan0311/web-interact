import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Switch} from "@mui/material";
import code from "../Switches/demo-code/basic-switches.txt";

const label = {inputProps: {'aria-label': "Switches"}}
const BasicSwitches = () => {
    return (
        <JumboDemoCard title={"Switch demo"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Switch {...label} defaultChecked/>
            <Switch {...label}/>
            <Switch {...label} disabled defaultChecked/>
            <Switch {...label} disabled/>
        </JumboDemoCard>
    );
};

export default BasicSwitches;

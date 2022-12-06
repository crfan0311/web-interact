import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import code from "../Switches/demo-code/switches-label.txt";

const SwitchLabels = () => {
    return (
        <JumboDemoCard title={"Labels"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked/>} label="Label"/>
                <FormControlLabel disabled control={<Switch/>} label="Disabled"/>
            </FormGroup>
        </JumboDemoCard>
    );
};

export default SwitchLabels;

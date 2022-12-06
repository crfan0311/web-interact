import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import code from "../Checkboxes/demo-code/checkbox-labels.txt";

const CheckboxLabels = () => {
    return (
        <JumboDemoCard title={"Labels"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked/>} label="Label"/>
                <FormControlLabel disabled control={<Checkbox/>} label="Disabled"/>
            </FormGroup>
        </JumboDemoCard>
    );
};

export default CheckboxLabels;

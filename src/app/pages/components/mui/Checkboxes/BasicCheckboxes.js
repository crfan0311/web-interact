import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Checkbox} from "@mui/material";
import code from "../Checkboxes/demo-code/basic-checkboxes.txt";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};
const BasicCheckboxes = () => {
    return (
        <JumboDemoCard title={"Basic Checkbox"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <Checkbox {...label} defaultChecked/>
                <Checkbox {...label} />
                <Checkbox {...label} disabled/>
                <Checkbox {...label} disabled checked/>
            </Div>
        </JumboDemoCard>
    );
};

export default BasicCheckboxes;

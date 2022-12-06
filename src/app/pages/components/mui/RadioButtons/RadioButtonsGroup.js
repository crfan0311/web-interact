import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import code from "../RadioButtons/demo-code/radio-button-group.txt";

const RadioButtonsGroup = () => {
    return (
        <JumboDemoCard title={"Radio group"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                </RadioGroup>
            </FormControl>
        </JumboDemoCard>
    );
};

export default RadioButtonsGroup;

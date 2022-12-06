import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import code from "../RadioButtons/demo-code/row-radio-button-group.txt";

const RowRadioButtonsGroup = () => {
    return (
        <JumboDemoCard title={"Direction"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio/>}
                        label="other"
                    />
                </RadioGroup>
            </FormControl>
        </JumboDemoCard>
    );
};

export default RowRadioButtonsGroup;

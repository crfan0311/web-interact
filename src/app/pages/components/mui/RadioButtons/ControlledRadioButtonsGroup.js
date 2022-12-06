import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import code from "../RadioButtons/demo-code/controlled-radio-button-group.txt";

const ControlledRadioButtonsGroup = () => {
    const [value, setValue] = React.useState('female');

    return (
        <JumboDemoCard title={"Controlled"} demoCode={code}  wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                >
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                </RadioGroup>
            </FormControl>
        </JumboDemoCard>
    );
};

export default ControlledRadioButtonsGroup;

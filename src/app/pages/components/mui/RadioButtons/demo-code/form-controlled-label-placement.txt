import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../RadioButtons/demo-code/form-controlled-label-placement.txt";

const FormControlLabelPlacement = () => {
    return (
        <JumboDemoCard
            title={"Form Controlled Label Placement"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <FormControl>
                <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    defaultValue="top"
                >
                    <FormControlLabel
                        value="top"
                        control={<Radio/>}
                        label="Top"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="start"
                        control={<Radio/>}
                        label="Start"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="bottom"
                        control={<Radio/>}
                        label="Bottom"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel value="end" control={<Radio/>} label="End"/>
                </RadioGroup>
            </FormControl>
        </JumboDemoCard>
    );
};
export default FormControlLabelPlacement;

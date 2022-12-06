import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import code from "../Checkboxes/demo-code/form-controlled.txt";

const FormControlledPosition = () => {
    return (
        <JumboDemoCard
            title={"Form Controlled Position"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <FormControl component="fieldset">
                <FormLabel component="legend">Label placement</FormLabel>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="top"
                        control={<Checkbox/>}
                        label="Top"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="start"
                        control={<Checkbox/>}
                        label="Start"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="bottom"
                        control={<Checkbox/>}
                        label="Bottom"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox/>}
                        label="End"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
        </JumboDemoCard>
    );
};

export default FormControlledPosition;

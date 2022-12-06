import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import code from "../Switches/demo-code/form-control-label-position.txt";

const FormControlLabelPosition = () => {
    return (
        <JumboDemoCard title={"Label Position"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Label placement</FormLabel>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="top"
                        control={<Switch color="primary"/>}
                        label="Top"
                        labelPlacement="top"
                    />
                    <FormControlLabel
                        value="start"
                        control={<Switch color="primary"/>}
                        label="Start"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="bottom"
                        control={<Switch color="primary"/>}
                        label="Bottom"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Switch color="primary"/>}
                        label="End"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
        </JumboDemoCard>
    );
};

export default FormControlLabelPosition;

import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import code from "../Checkboxes/demo-code/checkbox-group.txt";

const CheckboxesGroup = () => {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const {gilad, jason, antoine} = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    return (
        <JumboDemoCard title={"Group"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{display: 'flex'}}>
                <FormControl sx={{m: 3}} component="fieldset" variant="standard">
                    <FormLabel component="legend">Assign responsibility</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={gilad} onChange={handleChange} name="gilad"/>
                            }
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={jason} onChange={handleChange} name="jason"/>
                            }
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={antoine} onChange={handleChange} name="antoine"/>
                            }
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>
                <FormControl
                    required
                    error={error}
                    component="fieldset"
                    sx={{m: 3}}
                    variant="standard"
                >
                    <FormLabel component="legend">Pick two</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={gilad} onChange={handleChange} name="gilad"/>
                            }
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={jason} onChange={handleChange} name="jason"/>
                            }
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={antoine} onChange={handleChange} name="antoine"/>
                            }
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>You can display an error</FormHelperText>
                </FormControl>
            </Div>
        </JumboDemoCard>
    );
};

export default CheckboxesGroup;

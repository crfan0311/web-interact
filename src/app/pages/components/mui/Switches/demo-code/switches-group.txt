import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import code from "../Switches/demo-code/switches-group.txt";

const SwitchesGroup = () => {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: true
    })
    return (
        <JumboDemoCard title={"Group"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.gilad}
                                onChange={(event) => setState(event.target.value)}
                                name="gilad"
                            />
                        }
                        label="Gilad Gray"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.jason}
                                onChange={(event) => setState(event.target.value)}
                                name="jason"
                            />
                        }
                        label="Jason Killian"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.antoine}
                                onChange={(event) => setState(event.target.value)}
                                name="antoine"
                            />
                        }
                        label="Antoine Llorca"
                    />
                </FormGroup>
                <FormHelperText>Be careful</FormHelperText>
            </FormControl>
        </JumboDemoCard>
    );
};

export default SwitchesGroup;

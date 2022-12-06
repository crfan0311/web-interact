import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {FormControl, FormHelperText, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import code from "../Selects/demo-code/select-labels.txt";
import Div from "@jumbo/shared/Div";

const SelectLabels = () => {
    const [age, setAge] = React.useState("");
    return (
        <JumboDemoCard title={"Label and helper text"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <FormControl sx={{m: 1, minWidth: 120}}>
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Age"
                        onChange={(event) => setAge(event.target.value)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>With label + helper text</FormHelperText>
                </FormControl>
                <FormControl sx={{m: 1, minWidth: 120}}>
                    <Select
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                        displayEmpty
                        inputProps={{'aria-label': 'Without label'}}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Without label</FormHelperText>
                </FormControl>
            </Div>
        </JumboDemoCard>
    );
};

export default SelectLabels;

import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {FormHelperText, InputLabel} from "@mui/material";
import {FormControl, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import code from "../Selects/demo-code/select-other-props.txt";
import Div from "@jumbo/shared/Div";

const SelectOtherProps = () => {
    const [age, setAge] = React.useState("");
    return (
        <JumboDemoCard title={"Other Prop"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <FormControl sx={{m: 1, minWidth: 120}} disabled>
                    <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-disabled"
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
                    <FormHelperText>Disabled</FormHelperText>
                </FormControl>
                <FormControl sx={{m: 1, minWidth: 120}} error>
                    <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-error-label"
                        id="demo-simple-select-error"
                        value={age}
                        label="Age"
                        onChange={(event) => setAge(event.target.value)}
                        renderValue={(value) => `⚠️  - ${value}`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Error</FormHelperText>
                </FormControl>
                <FormControl sx={{m: 1, minWidth: 120}}>
                    <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-readonly-label"
                        id="demo-simple-select-readonly"
                        value={age}
                        label="Age"
                        onChange={(event) => setAge(event.target.value)}
                        inputProps={{readOnly: true}}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Read only</FormHelperText>
                </FormControl>
                <FormControl required sx={{m: 1, minWidth: 120}}>
                    <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={age}
                        label="Age *"
                        onChange={(event) => setAge(event.target.value)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            </Div>
        </JumboDemoCard>
    );
};

export default SelectOtherProps;

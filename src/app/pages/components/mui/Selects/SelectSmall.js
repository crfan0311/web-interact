import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import code from "../Selects/demo-code/select-small.txt";
import Div from "@jumbo/shared/Div";

const SelectSmall = () => {
    const [age, setAge] = React.useState("");
    return (
        <JumboDemoCard title={"Small Size"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <FormControl sx={{m: 1, minWidth: 120}} size="small">
                    <InputLabel id="demo-select-small">Age</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
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
                </FormControl>
            </Div>
        </JumboDemoCard>
    );
};

export default SelectSmall;

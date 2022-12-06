import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import code from "../Selects/demo-code/basic-select.txt";

const BasicSelect = () => {
    const [age, setAge] = React.useState(" ");
    return (
        <JumboDemoCard title={"Basic Select"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <FormControl sx={{minWidth: 120}}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={(event) => setAge(event.target.value)}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </JumboDemoCard>
    );
};

export default BasicSelect;

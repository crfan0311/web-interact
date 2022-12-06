import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import code from "../Selects/demo-code/select-auto-width.txt";
import Div from "@jumbo/shared/Div";

const SelectAutoWidth = () => {
    const [age, setAge] = React.useState("");
    return (
        <JumboDemoCard title={"Auto Width"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <FormControl sx={{m: 1, minWidth: 80}}>
                    <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                        autoWidth
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </Div>
        </JumboDemoCard>
    );
};

export default SelectAutoWidth;

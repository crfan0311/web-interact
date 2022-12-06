import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {FormControl, InputLabel, ListSubheader, MenuItem, Select} from "@mui/material";
import code from "../Selects/demo-code/grouped-select.txt";

const GroupedSelect = () => {
    return (
        <JumboDemoCard title={"Grouped Select"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
                <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                    <option aria-label="None" value=""/>
                    <optgroup label="Category 1">
                        <option value={1}>Option 1</option>
                        <option value={2}>Option 2</option>
                    </optgroup>
                    <optgroup label="Category 2">
                        <option value={3}>Option 3</option>
                        <option value={4}>Option 4</option>
                    </optgroup>
                </Select>
            </FormControl>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <ListSubheader>Category 1</ListSubheader>
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <ListSubheader>Category 2</ListSubheader>
                    <MenuItem value={3}>Option 3</MenuItem>
                    <MenuItem value={4}>Option 4</MenuItem>
                </Select>
            </FormControl>
        </JumboDemoCard>
    );
};

export default GroupedSelect;

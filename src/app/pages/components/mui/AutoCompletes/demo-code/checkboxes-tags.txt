import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {top100Films} from "./data";
import {Autocomplete, Checkbox, TextField} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import code from "../../mui/AutoCompletes/demo-code/checkboxes-tags.txt";

const CheckboxesTags = () => {
    return (
        <JumboDemoCard
            title={"Checkbox Tags"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, {selected}) => (
                    <li {...props}>
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                            checkedIcon={<CheckBoxIcon fontSize="small"/>}
                            style={{marginRight: 8}}
                            checked={selected}
                        />
                        {option.title}
                    </li>
                )}
                sx={{width: 500}}
                renderInput={(params) => (
                    <TextField {...params} label="Checkboxes" placeholder="Favorites"/>
                )}
            />
        </JumboDemoCard>
    );
};

export default CheckboxesTags;

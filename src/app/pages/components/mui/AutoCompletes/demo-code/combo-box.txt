import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {top100Films} from "./data";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../AutoCompletes/demo-code/combo-box.txt"

const ComboBox = () => {
    return (
        <JumboDemoCard
            title={"Combo Box"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                getOptionLabel={(option) => option.title}
                options={top100Films}
                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} label="Movie"/>}
            />
        </JumboDemoCard>
    );
};
export default ComboBox;

import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {top100Films} from "./data";
import code from "../AutoCompletes/demo-code/limit-tags.txt"
import JumboDemoCard from "@jumbo/components/JumboDemoCard";

const LimitTags = () => {
    return (
        <JumboDemoCard title={"Limit Tags"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Autocomplete
                multiple
                limitTags={2}
                id="multiple-limit-tags"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
                renderInput={(params) => (
                    <TextField {...params} label="limitTags" placeholder="Favorites"/>
                )}
                sx={{width: '500px'}}
            />
        </JumboDemoCard>
    );
};
export default LimitTags;

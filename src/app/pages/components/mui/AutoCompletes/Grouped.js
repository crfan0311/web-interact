import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Autocomplete, TextField} from "@mui/material";
import {top100Films} from "./data";
import code from "../../mui/AutoCompletes/demo-code/grouped.txt";

const Grouped = () => {
    const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });
    return (
        <JumboDemoCard title={"Grouped"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Autocomplete
                id="grouped-demo"
                options={options.sort((a, b) =>
                    -b.firstLetter.localeCompare(a.firstLetter))
                }
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.title}
                sx={{width: 300}}
                renderInput={(params) =>
                    <TextField {...params} label="With categories"/>
                }
            />
        </JumboDemoCard>
    );
};

export default Grouped;

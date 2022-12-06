import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Autocomplete, Stack, TextField} from "@mui/material";
import {top100Films} from "./data";
import code from "../../mui/AutoCompletes/demo-code/free-solo.txt";

const FreeSolo = () => {
    return (
        <JumboDemoCard title={"Free Solo"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={2} sx={{width: 300}}>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField {...params} label="freeSolo"/>
                    )}
                />
                <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search input"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </Stack>
        </JumboDemoCard>
    );
};

export default FreeSolo;

import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Autocomplete, Box, TextField} from "@mui/material";
import {countries} from "./data";
import code from "../../mui/AutoCompletes/demo-code/country-select.txt";

const CountrySelect = () => {
    return (
        <JumboDemoCard
            title={"Country Select"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Autocomplete

                id="country-select-demo"
                sx={{width: 500, maxWidth: '100%'}}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                    <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            alt=""
                        />
                        {option.label} ({option.code}) +{option.phone}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose a country"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password',
                        }}
                    />
                )}
            />
        </JumboDemoCard>
    );
};

export default CountrySelect;

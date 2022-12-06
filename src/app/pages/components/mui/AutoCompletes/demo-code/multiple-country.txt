import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Autocomplete, Box, TextField} from "@mui/material";
import {countries} from "./data";
import Div from "@jumbo/shared/Div";
import code from "../AutoCompletes/demo-code/multiple-country.txt";

const MultipleCountrySelect = () => {
    return (
        <JumboDemoCard
            title={"Multiple Country Selects"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div sx={{width: 500, maxWidth: '100%'}}>
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={countries}
                    getOptionLabel={(option) => option.label}
                    defaultValue={[countries[13]]}
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
                            variant="standard"
                            label="Choose multiple countries"
                            placeholder="Favorites"
                        />
                    )}
                />
            </Div>
        </JumboDemoCard>
    );
};

export default MultipleCountrySelect;

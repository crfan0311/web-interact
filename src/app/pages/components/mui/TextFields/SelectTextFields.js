import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Box from "@mui/material/Box";
import {MenuItem, TextField} from "@mui/material";
import Div from "@jumbo/shared/Div";
import code from "../TextFields/demo-code/select-text-field.txt";

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];
const SelectTextFields = () => {
    const [currency, setCurrency] = React.useState("EUR");
    return (
        <JumboDemoCard title={"Select Text Field"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '24ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <Div>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                        helperText="Please select your currency"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Native select"
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your currency"
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Div>
                <Div>
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Select"
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                        helperText="Please select your currency"
                        variant="filled"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="filled-select-currency-native"
                        select
                        label="Native select"
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your currency"
                        variant="filled"
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Div>
                <Div>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                        helperText="Please select your currency"
                        variant="standard"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="standard-select-currency-native"
                        select
                        label="Native select"
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your currency"
                        variant="standard"
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Div>
            </Box>
        </JumboDemoCard>
    );
};

export default SelectTextFields;

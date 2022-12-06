import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Box, TextField} from "@mui/material";
import code from "../TextFields/demo-code/color-text-fields.txt";

const ColorTextFields = () => {
    return (
        <JumboDemoCard title={"Color Text Field"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '24ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Outlined secondary" color="secondary" focused/>
                <TextField label="Filled success" variant="filled" color="success" focused/>
                <TextField
                    label="Standard warning"
                    variant="standard"
                    color="warning"
                    focused
                />
            </Box>
        </JumboDemoCard>
    );
};

export default ColorTextFields;

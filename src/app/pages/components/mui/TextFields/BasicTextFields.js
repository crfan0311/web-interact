import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import code from "../TextFields/demo-code/basic-text-fields.txt";

const BasicTextFields = () => {
    return (
        <JumboDemoCard title={"Basic Text Field"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '24ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
                <TextField id="filled-basic" label="Filled" variant="filled"/>
                <TextField id="standard-basic" label="Standard" variant="standard"/>
            </Box>
        </JumboDemoCard>
    );
};

export default BasicTextFields;

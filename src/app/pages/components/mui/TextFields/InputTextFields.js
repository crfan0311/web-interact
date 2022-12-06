import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Input from '@mui/material/Input';
import {Box} from "@mui/material";
import code from "../TextFields/demo-code/input-text-fields.txt";

const ariaLabel = {'aria-label': 'description'};
const InputTextFields = () => {
    return (
        <JumboDemoCard title={"Inputs"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1},
                }}
                noValidate
                autoComplete="off"
            >
                <Input defaultValue="Hello world" inputProps={ariaLabel}/>
                <Input placeholder="Placeholder" inputProps={ariaLabel}/>
                <Input disabled defaultValue="Disabled" inputProps={ariaLabel}/>
                <Input defaultValue="Error" error inputProps={ariaLabel}/>
            </Box>
        </JumboDemoCard>
    );
};

export default InputTextFields;

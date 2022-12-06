import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import code from "../TextFields/demo-code/validation-text-field.txt";

const ValidationTextFields = () => {
    return (
        <JumboDemoCard title={"Validation Text Field"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '24ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        error
                        id="outlined-error"
                        label="Error"
                        defaultValue="Hello World"
                    />
                    <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                    />
                </div>
                <div>
                    <TextField
                        error
                        id="filled-error"
                        label="Error"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        error
                        id="filled-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        error
                        id="standard-error"
                        label="Error"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                        variant="standard"
                    />
                </div>
            </Box>
        </JumboDemoCard>
    );
};

export default ValidationTextFields;

import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Div from "@jumbo/shared/Div";
import code from "../TextFields/demo-code/form-props-text-fields.txt";

const FormPropsTextFields = () => {
    return (
        <JumboDemoCard title={"Form Props Text Field"} demoCode={code}
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
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField id="outlined-search" label="Search field" type="search"/>
                    <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                    />
                </Div>
                <Div>
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        disabled
                        id="filled-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <TextField
                        id="filled-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                    <TextField
                        id="filled-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="filled"
                    />
                    <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                    />
                    <TextField
                        id="filled-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="filled"
                    />
                </Div>
                <Div>
                    <TextField
                        required
                        id="standard-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="standard"
                    />
                    <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        id="standard-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="standard"
                    />
                </Div>
            </Box>
        </JumboDemoCard>
    );
};

export default FormPropsTextFields;

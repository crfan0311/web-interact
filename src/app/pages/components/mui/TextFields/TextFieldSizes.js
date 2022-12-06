import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import code from "../TextFields/demo-code/text-field-size.txt";
import Div from "@jumbo/shared/Div";

const TextFieldSizes = () => {
    return (
        <JumboDemoCard title={"Sizes"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
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
                        label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                    />
                    <TextField label="Size" id="outlined-size-normal" defaultValue="Normal"/>
                </Div>
                <Div>
                    <TextField
                        label="Size"
                        id="filled-size-small"
                        defaultValue="Small"
                        variant="filled"
                        size="small"
                    />
                    <TextField
                        label="Size"
                        id="filled-size-normal"
                        defaultValue="Normal"
                        variant="filled"
                    />
                </Div>
                <Div>
                    <TextField
                        label="Size"
                        id="standard-size-small"
                        defaultValue="Small"
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        label="Size"
                        id="standard-size-normal"
                        defaultValue="Normal"
                        variant="standard"
                    />
                </Div>
            </Box>
        </JumboDemoCard>
    );
};

export default TextFieldSizes;

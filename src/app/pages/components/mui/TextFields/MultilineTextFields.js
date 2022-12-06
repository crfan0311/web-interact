import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Div from "@jumbo/shared/Div";
import code from "../TextFields/demo-code/multiline-text-field.txt";

const MultilineTextFields = () => {
    const [value, setValue] = React.useState("Controlled");
    return (
        <JumboDemoCard title={"Multiline Text Field"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '30ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <Div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                    />
                </Div>
                <Div>
                    <TextField
                        id="filled-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        variant="filled"
                    />
                    <TextField
                        id="filled-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        variant="filled"
                    />
                    <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                    />
                </Div>
                <Div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                        variant="standard"
                    />
                    <TextField
                        id="standard-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="standard"
                    />
                </Div>
            </Box>
        </JumboDemoCard>
    );
};

export default MultilineTextFields;

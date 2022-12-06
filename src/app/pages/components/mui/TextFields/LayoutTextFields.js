import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Div from "@jumbo/shared/Div";
import code from "../TextFields/demo-code/layout-text-field.txt";

const RedBar = () => {
    return (
        <Div
            sx={{
                height: 12,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? 'rgba(255, 0, 0, 0.1)'
                        : 'rgb(255 132 132 / 25%)',
            }}
        />
    );
}

const LayoutTextFields = () => {
    return (
        <JumboDemoCard title={"Layout Text Field"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': {width: '24ch'},
                }}
            >
                <RedBar/>
                <TextField label={'margin="none"'} id="margin-none"/>
                <RedBar/>
                <TextField label={'margin="dense"'} id="margin-dense" margin="dense"/>
                <RedBar/>
                <TextField label={'margin="normal"'} id="margin-normal" margin="normal"/>
                <RedBar/>
            </Box>
        </JumboDemoCard>
    );
};

export default LayoutTextFields;

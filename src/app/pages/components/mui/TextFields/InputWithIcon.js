import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {FormControl, InputAdornment, InputLabel, TextField} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import Input from '@mui/material/Input';
import Box from "@mui/material/Box";
import code from "../TextFields/demo-code/input-with-icon.txt";

const InputWithIcon = () => {
    return (
        <JumboDemoCard title={"Input With Icon"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Box sx={{'& > :not(style)': {m: 1}}}>
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        With a start adornment
                    </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle/>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <TextField
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle/>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                    <AccountCircle sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                    <TextField id="input-with-sx" label="With sx" variant="standard"/>
                </Box>
            </Box>
        </JumboDemoCard>
    );
};

export default InputWithIcon;

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Pickers/demo-code/native-picker.txt";

const NativePickers = () => {
    return (
        <JumboDemoCard
            title={"Native Pickers"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.color', pt: 0}}
        >
            <Stack component="form" noValidate spacing={3}>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{width: 220}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    sx={{width: 150}}
                />
                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    sx={{width: 250}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Stack>
        </JumboDemoCard>
    );
};
export default NativePickers;

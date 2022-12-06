import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/lab";
import TimePicker from "@mui/lab/TimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import code from "../Pickers/demo-code/time-picker.txt";

const TimePickers = () => {
    const [value, setValue] = React.useState(new Date('2022-06-04T21:11:54'));
    return (
        <JumboDemoCard
            title={"Time Pickers"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.color', pt: 0}}
        >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="Time"
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </JumboDemoCard>
    );
};

export default TimePickers;

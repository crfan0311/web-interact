import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import TextField from "@mui/material/TextField";
import {LocalizationProvider} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import code from "../Pickers/demo-code/date-time-picker.txt";

const DateAndTimePickers = () => {
    const [value, setValue] = React.useState(new Date('2022-06-04T21:11:54'));
    return (
        <JumboDemoCard
            title={"Date & Time Pickers"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.color', pt: 0}}
        >
            <LocalizationProvider dateAdapter={AdapterDateFns}>

                <DateTimePicker
                    label="Date&Time picker"
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </JumboDemoCard>
    );
};

export default DateAndTimePickers;

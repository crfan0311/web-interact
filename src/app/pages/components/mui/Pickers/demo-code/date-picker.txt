import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from "@mui/lab";
import DesktopDatePicker from "@mui/lab/DatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import code from "../Pickers/demo-code/date-picker.txt";

const DatePickers = () => {
    const [value, setValue] = React.useState(new Date('2022-06-04T21:11:54'));
    return (
        <JumboDemoCard
            title={"Date Pickers"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.color', pt: 0}}
        >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                        label="Date desktop"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <MobileDatePicker
                        label="Date mobile"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
            </LocalizationProvider>
        </JumboDemoCard>
    );
};

export default DatePickers;

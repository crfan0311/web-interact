import React from 'react';
import DatePickers from "./DatePickers";
import TimePickers from "./TimePickers";
import DateAndTImePickers from "./DateAndTImePickers";
import NativePickers from "./NativePickers";
import Masonry from "@mui/lab/Masonry";

const Pickers = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '50%', width: 'auto'}}
        >
            <DateAndTImePickers/>
            <TimePickers/>
            <DatePickers/>
            <NativePickers/>
        </Masonry>
    );
};

export default Pickers;

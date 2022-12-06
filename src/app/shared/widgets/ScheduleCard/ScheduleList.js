import React from 'react';
import {Typography} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import ScheduleItem from "./ScheduleItem";
import {scheduleData} from "./data";

const ScheduleList = () => {
    return (
        <React.Fragment>
            <Typography variant={"h5"} color={"text.secondary"} mb={2}>Today's schedule</Typography>
            <Timeline sx={{
                m: 0,
                p: 0,
            }}>
                {
                    scheduleData.map((schedule, index) => (
                        <ScheduleItem item={schedule} key={index}/>
                    ))
                }
            </Timeline>
        </React.Fragment>
    );
};

export default ScheduleList;

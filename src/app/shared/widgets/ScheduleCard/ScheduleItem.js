import React from 'react';
import {TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {Typography} from "@mui/material";

const ScheduleItem = ({item}) => {
    return (
        <TimelineItem
            sx={{
                '&::before': {
                    display: 'none'
                }
            }}
        >
            <TimelineSeparator>
                <TimelineDot sx={{
                    m: theme => theme.spacing(.5, 0),
                    bgcolor: item.color,
                    width: 20,
                    height: 20,
                    boxShadow: '0 0 0 4px #fff,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
                }}
                >
                    {item.icon}
                </TimelineDot>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent
                sx={{
                    p: theme => theme.spacing(.5, 0),
                    ml: 2.5,
                }}
            >
                {
                    item.title &&
                    <Typography variant={"h6"} color={"text.primary"}
                                lineHeight={1.5}>{item.title}</Typography>
                }
                {
                    item.subTitle &&
                    <Typography variant={"body1"} color={"text.secondary"} fontSize={12}
                                mb={2}>{item.subTitle}</Typography>
                }
            </TimelineContent>
        </TimelineItem>
    )
};

/* Todo item prop define */
export default ScheduleItem;

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Timelines/demo-code/colors-timeline.txt";

const ColorsTimeline = () => {
    return (
        <JumboDemoCard title={"Color"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>Primary</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary"/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>Secondary</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="success"/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>Success</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="warning"/>
                    </TimelineSeparator>
                    <TimelineContent>Warning</TimelineContent>
                </TimelineItem>
            </Timeline>
        </JumboDemoCard>
    );
};
export default ColorsTimeline;

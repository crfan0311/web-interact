import React from 'react';
import {recentActivities} from "./data";
import ActivitiesItem from "./ActivitiesItem";
import {Timeline} from "@mui/lab";

const ActivitiesList = () => {
    return (
        <Timeline sx={{m: 0, p: theme => theme.spacing(0, 3)}}>
            {
                recentActivities.map((item, index) => (
                    <ActivitiesItem item={item} key={index}/>
                ))
            }
        </Timeline>
    );
};

export default ActivitiesList;

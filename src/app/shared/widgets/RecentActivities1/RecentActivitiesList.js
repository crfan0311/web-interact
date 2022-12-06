import React from 'react';
import {recentActivities} from "./data";
import RecentActivityItem from "./RecentActivityItem";

const RecentActivitiesList = () => {
    return (
            <React.Fragment>
                {
                    recentActivities.map((item, index) => (
                        <RecentActivityItem recentItem={item} key={index}/>
                    ))
                }
            </React.Fragment>
    );
};

export default RecentActivitiesList;

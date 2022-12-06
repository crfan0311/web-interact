import {Mail, MessageOutlined} from "@mui/icons-material";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import React from "react";

export const siteVisits = [
    {name: '', visits: 0, queries: 0},
    {name: 'Jan', visits: 4000, queries: 3000},
    {name: 'Feb', visits: 2000, queries: 1000},
    {name: 'Mar', visits: 4400, queries: 4000},
    {name: 'Apr', visits: 9000, queries: 3800},
    {name: 'May', visits: 3500, queries: 2000},
    {name: 'Jun', visits: 1750, queries: 1000},
    {name: 'Jul', visits: 100, queries: 100},
];

export const siteAudiences = [
    {label: 'Male', value: 89, color: 'warning'},
    {label: 'Female', value: 56, color: 'secondary'},
    {label: 'Others', value: 12, color: 'success'},
];

export const generalInfo = [
    {
        id: 1,
        title: "5 Unread Messages",
        icon: <MessageOutlined fontSize={'small'}/>
    },
    {
        id: 2,
        title: "2 Pending Invitations",
        icon: <Mail fontSize={'small'}/>
    },
    {
        id: 3,
        title: "7 Due Tasks",
        icon: <TaskAltOutlinedIcon fontSize={'small'}/>
    },
    {
        id: 4,
        title: "3 Other notifications",
        icon: <NotificationsActiveRoundedIcon fontSize={'small'}/>
    },
];

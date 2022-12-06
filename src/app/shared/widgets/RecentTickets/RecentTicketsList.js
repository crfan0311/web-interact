import React from 'react';
import RecentTicketItem from "./RecentTicketItem";
import {tickets} from "./data";
import List from "@mui/material/List";

const RecentTicketsList = () => {
    return (
        <List disablePadding sx={{mb: 1}}>
            {
                tickets.map((item, index) => (
                    <RecentTicketItem item={item} key={index}/>
                ))
            }
        </List>
    );
};

export default RecentTicketsList;

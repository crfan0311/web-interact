import React from 'react';
import List from "@mui/material/List";
import MessageItem from "./MessageItem";
import messages from "./fake-data";

const MessagesList = () => {
    return (
        <List disablePadding>
            {
                messages.map((item, index) => {
                    return (
                        <MessageItem key={index} item={item}/>
                    )
                })
            }
        </List>
    );
};

export default MessagesList;

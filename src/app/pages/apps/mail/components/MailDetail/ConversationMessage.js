import React from 'react';
import {Typography} from "@mui/material";

const ConversationMessage = ({reply}) => {
    return (
        <React.Fragment>
            <Typography mb={2}>{reply.message}</Typography>
        </React.Fragment>
    );
};

export default ConversationMessage;

import React from 'react';
import Div from "@jumbo/shared/Div";
import {Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

const SentMessageContent = ({message}) => {
    return (
        <Div
            sx={{
                display: 'flex',
                textAlign: 'right',
                alignItems: 'flex-start',
                flexDirection: 'row-reverse',
                mb: 2,
                px: 3,
            }}
        >
            <div className="Message-root">
                <div className="Message-item">
                    <Typography
                        variant={"body1"}
                        color={"text.secondary"}
                        fontSize={"smaller"}
                        mb={.5}
                    >
                        {message?.sent_at}
                    </Typography>
                    <Paper elevation={0} sx={{p: theme => theme.spacing(1.5, 2), bgcolor: theme => theme.palette.divider}}>
                        <Typography variant={"body1"}>{message?.message}</Typography>
                    </Paper>
                </div>
            </div>
        </Div>
    );
};

export default SentMessageContent;

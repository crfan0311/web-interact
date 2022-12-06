import React from 'react';
import Div from "@jumbo/shared/Div";
import Paper from "@mui/material/Paper";
import {Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import useChatApp from "../../../hooks/useChatApp";

const ReceivedMessageContent = ({message}) => {
    const {activeConversation} = useChatApp();
    return (
        <Div
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 2,
                px: 3,
                '& .Message-item': {
                    marginTop: '2px'
                }
            }}
        >
            {
                message?.messageType === 'text' ? (
                    <div className="Message-item">
                        <Paper elevation={0} sx={{p: theme => theme.spacing(1.5, 2), bgcolor: 'primary.main', color: 'common.white'}}>
                            <Typography variant={"body1"}>{message?.message}</Typography>
                        </Paper>
                    </div>
                ) : (
                    <React.Fragment>
                        <Avatar alt="Remy Sharp" src={activeConversation?.contact?.profile_pic}
                                sx={{width: 40, height: 40, mr: 2}}/>
                        <div className="Message-root">
                            <Typography
                                variant={"body1"}
                                color={"text.secondary"}
                                fontSize={"smaller"}
                                mb={.5}
                            >
                                {activeConversation?.contact?.name} - {message?.sent_at}
                            </Typography>
                            <div className="Message-item">
                                <Paper
                                    elevation={0}
                                    sx={{p: theme => theme.spacing(1.5, 2), bgcolor: 'primary.main', color: 'common.white'}}
                                >
                                    <Typography variant={"body1"}>{message?.message}</Typography>
                                </Paper>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        </Div>
    );
};

export default ReceivedMessageContent;

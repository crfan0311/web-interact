import React from 'react';
import {useMutation} from "react-query";
import Div from "@jumbo/shared/Div";
import {TextField} from "@mui/material";
import useChatApp from "../../hooks/useChatApp";
import {chatService} from "../../../../../services/chat-services";

const ActiveConversationFooter = () => {
    const {
        activeConversation,
        activeConversationRef,
        favoriteConversationsListRef,
        recentConversationsListRef,
        contactConversationsListRef,
    } = useChatApp();
    const [message, setMessage] = React.useState('');
    const addMessageMutation = useMutation(chatService.addConversationMessage, {
        onSuccess: () => {
            activeConversationRef?.current?.refresh();
            favoriteConversationsListRef?.current?.refresh();
            recentConversationsListRef?.current?.refresh();
            contactConversationsListRef?.current?.refresh();
        }
    });
    const onSendMessage = (event) => {
        const message = event.target.value.trim();
        if (event.key === 'Enter' && message) {
            addMessageMutation.mutate({conversationID: activeConversation.id, message: message})
            setMessage('');
        }
    };
    return (
        <Div
            sx={{
                display: 'flex',
                alignItems: 'center',
                p: theme => theme.spacing(2, 3),
                borderTop: 1,
                borderTopColor: 'divider',
                bgcolor: theme => theme.palette.action.hover,
            }}
        >
            <TextField
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                size={'small'}
                placeholder={"Type message...."}
                onKeyPress={onSendMessage}
                fullWidth
                sx={{
                    backgroundColor: theme => theme.palette.background.paper
                }}
            />
        </Div>
    );
};

export default ActiveConversationFooter;

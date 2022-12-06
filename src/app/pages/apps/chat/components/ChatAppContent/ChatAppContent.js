import React from 'react';
import ActiveConversation from "../ActiveConversation";
import useChatApp from "../../hooks/useChatApp";

const ChatAppContent = () => {
    const {activeConversationRef} = useChatApp();
    return (
        <ActiveConversation ref={activeConversationRef}/>
    );
};

export default ChatAppContent;

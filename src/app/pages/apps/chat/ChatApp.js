import React from 'react';
import ChatAppProvider from "./ChatAppProvider";
import ChatAppLayout from "./ChatAppLayout";

const ChatApp = () => {
    return (
        <ChatAppProvider>
            <ChatAppLayout />
        </ChatAppProvider>
    );
};

export default ChatApp;

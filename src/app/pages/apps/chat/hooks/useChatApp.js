import React from 'react';
import ChatAppContext from "../ChatAppContext";

const useChatApp = () => {
    return React.useContext(ChatAppContext);
};

export default useChatApp;

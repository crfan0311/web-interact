import axios from "./config";

const chatService = {};

chatService.getContacts = async () => {
    const {data} = await axios.get("/chats/contacts");
    return data;
};

chatService.getFavoriteConversations = async () => {
    const {data} = await axios.get("/chats/favorite-conversations");
    return data;
};

chatService.getRecentConversations = async () => {
    const {data} = await axios.get("/chats/recent-conversations");
    return data;
};

chatService.getConversation = async ({queryKey}) => {
    const {id} = queryKey[queryKey.length - 1];
    const {data} = await axios.get("/chats/conversation", {
        conversationID: id
    });
    return data;
};

chatService.addConversationMessage = async (conversationDetail) => {
    const {data} = await axios.post('/chats/conversation/add-message', {
        conversationID: conversationDetail.conversationID,
        message: conversationDetail.message,
    });
    return data;
};

chatService.getConversationByContactID = async ({queryKey}) => {
    const {id} = queryKey[queryKey.length - 1];
    const {data} = await axios.get("/chats/contact/conversation", {
        contactID: id
    });
    return data;
};

export {chatService};

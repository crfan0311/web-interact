import mock from "../index";
import {conversations, favorite_users, users} from "../mock-data/chats";
import {getCustomDate, getCustomTime, idGenerator} from "@jumbo/utils";

mock.onGet("/chats/contacts").reply(() => {
    return [
        200, {
            contacts: users.filter(user => user.id !== 1),
        }
    ];
});

mock.onGet("/chats/favorite-conversations").reply(() => {
    const authUserConversations = conversations.filter(
        conversation => {
            if (conversation.first_user_id === 1) {
                return favorite_users.includes(conversation?.second_user_id);
            } else if (conversation.second_user_id === 1) {
                return favorite_users.includes(conversation?.first_user_id);
            }
            return false;
        }
    );
    const chatConversations = authUserConversations.map(conversation => {
        const userIndex = users.findIndex(user => {
            if (conversation.first_user_id === 1)
                return (user.id === conversation.second_user_id);

            return user.id === conversation.first_user_id;
        });
        conversation.contact = users[userIndex];
        conversation.last_message = conversation?.messages?.length > 0
            ? conversation.messages[conversation?.messages.length - 1]
            : "";
        return conversation;
    });
    return [
        200, {
            conversations: chatConversations,
        }
    ];
});

mock.onGet("/chats/recent-conversations").reply(() => {
    const authUserConversations = conversations.filter(conversation =>
        (conversation.first_user_id === 1 || conversation.second_user_id === 1)
    );
    const chatConversations = authUserConversations.map(conversation => {
        const userIndex = users.findIndex(user => {
            if (conversation.first_user_id === 1) {
                return user.id === conversation.second_user_id;
            }
            return user.id === conversation.first_user_id;
        });
        conversation.contact = users[userIndex];
        conversation.last_message = conversation?.messages?.length > 0
            ? conversation.messages[conversation?.messages.length - 1]
            : "";
        return conversation;
    });
    return [
        200, {
            conversations: chatConversations,
        }
    ];
});

mock.onGet("/chats/conversation").reply(request => {
    if (request?.conversationID) {
        const conversationIndex = conversations.findIndex(conversation =>
            conversation.id === parseInt(request.conversationID)
        );
        const conversation = conversations[conversationIndex];
        return [
            200, {
                conversation: conversation,
            }
        ];
    }
    return [
        200, {
            messages: []
        }
    ];
});

mock.onPost('/chats/conversation/add-message').reply(request => {
    const conversationDetails = JSON.parse(request.data);
    if (conversationDetails.conversationID) {
        const conversationIndex = conversations.findIndex(conversation =>
            conversation.id === parseInt(conversationDetails.conversationID)
        );
        const conversation = conversations[conversationIndex];
        const conversationMessage = conversation.messages;
        const newMessage = {
            id: idGenerator(),
            message: conversationDetails.message,
            sent_by: 1,
            sent_at: getCustomTime(0, 'minutes'),
            sent_date: getCustomDate(0, "days"),
            unread: false,
        };
        conversationMessage.push(newMessage);
        return [
            200, {
                newMessage: newMessage,
                conversations: conversationMessage,
                conversationMessage: conversation
            }
        ];
    } else {
        return [200, {
            newMessage: {}
        }]
    }
});

mock.onGet("/chats/contact/conversation").reply(request => {
    if (request?.contactID) {
        const conversationIndex = conversations.findIndex(conversation => {
            return (
                (conversation.first_user_id === parseInt(request.contactID) && conversation.second_user_id === 1) ||
                (conversation.second_user_id === parseInt(request.contactID) && conversation.first_user_id === 1)
            )
        });
        let conversation = {};
        if (conversationIndex === -1) {
            conversation = {
                id: idGenerator(),
                first_user_id: parseInt(request?.contactID),
                second_user_id: 1,
                contact: users.find(({id}) => id === parseInt(request?.contactID)),
                messages: []
            };
            conversations.push(conversation);
        } else {
            conversation = conversations[conversationIndex];
        }
        conversation.last_message = conversation?.messages?.length > 0
            ? conversation.messages[conversation?.messages.length - 1]
            : "";
        return [200, {
            conversation: conversation,
        }];
    }
    return [200, {conversation: null}];
});

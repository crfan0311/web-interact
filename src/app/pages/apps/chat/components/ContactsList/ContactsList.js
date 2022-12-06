import React from 'react';
import JumboRqList from "@jumbo/components/JumboReactQuery/JumboRqList";
import ContactItem from "./ContactItem";
import useChatApp from "../../hooks/useChatApp";
import {chatService} from "../../../../../services/chat-services";

const ContactsList = () => {
    const {contactConversationsListRef} = useChatApp();
    const renderContact = React.useCallback((contact) => {
        return (
            <ContactItem contactItem={contact}/>
        )
    }, []);
    return (
        <JumboRqList
            ref={contactConversationsListRef}
            service={chatService.getContacts}
            renderItem={renderContact}
            primaryKey={"id"}
            queryOptions={{
                queryKey: "contacts-list",
                dataKey: "contacts"
            }}
            componentElement={"div"}
        />
    );
};

export default ContactsList;

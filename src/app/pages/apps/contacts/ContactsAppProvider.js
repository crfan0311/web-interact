import React from 'react';
import ContactsAppContext from "./ContactsAppContext";
import {CONTACT_APP_ACTIONS} from "./utils/constants";

const init = (appState) => appState;

const contactsAppReducer = (state, action) => {
    switch (action.type) {
        case CONTACT_APP_ACTIONS.SET_SELECTED_ITEMS:
            return {
                ...state,
                selectedContacts: action?.payload
            };
        case CONTACT_APP_ACTIONS.SET_CONTACTS_LIST_REFRESH:
            return {
                ...state,
                refreshContactsList: action.payload,
            };
        case CONTACT_APP_ACTIONS.SET_LABELS_LIST_REFRESH:
            return {
                ...state,
                refreshLabelsList: action.payload,
            };
        default:
            return state;
    }
};

const ContactsAppProvider = ({children}) => {
    const [contactsApp, setContactsApp] = React.useReducer(contactsAppReducer, {
        selectedContacts: [],
        refreshContactsList: false,
        refreshLabelsList: false,
    }, init);

    const setSelectedContacts = React.useCallback((contacts) => {
        setContactsApp({type: CONTACT_APP_ACTIONS.SET_SELECTED_ITEMS, payload: contacts});
    }, [setContactsApp]);

    const setContactsListRefresh = React.useCallback((refresh) => {
        setContactsApp({type: CONTACT_APP_ACTIONS.SET_CONTACTS_LIST_REFRESH, payload: refresh})
    }, [setContactsApp]);

    const setLabelsListRefresh = React.useCallback((refresh) => {
        setContactsApp({type: CONTACT_APP_ACTIONS.SET_LABELS_LIST_REFRESH, payload: refresh})
    }, [setContactsApp]);

    const contextValue = React.useMemo(() => ({
        ...contactsApp,
        setSelectedContacts: setSelectedContacts,
        setContactsListRefresh: setContactsListRefresh,
        setLabelsListRefresh: setLabelsListRefresh,
    }), [contactsApp]);
    return (
        <ContactsAppContext.Provider value={contextValue}>
            {children}
        </ContactsAppContext.Provider>
    );
};

export default ContactsAppProvider;

import React from 'react';
import MailAppContext from "./MailAppContext";
import {MAIL_APP_ACTIONS} from "./utils/constants";

const init = (appState) => appState;

const MailsAppReducer = (state, action) => {
    switch (action.type) {
        case MAIL_APP_ACTIONS.SET_SELECTED_ITEMS:
            return {
                ...state,
                selectedMails: action?.payload
            };
        case MAIL_APP_ACTIONS.SET_MAILS_LIST_REFRESH:
            return {
                ...state,
                refreshMailsList: action.payload,
            };
        case MAIL_APP_ACTIONS.SET_LABELS_LIST_REFRESH:
            return {
                ...state,
                refreshLabelsList: action.payload,
            };
        default:
            return state;
    }

};
const MailAppProvider = ({children}) => {
    const [mailsApp, setMailsApp] = React.useReducer(MailsAppReducer, {
        selectedMails: [],
        refreshMailsList: false,
        refreshLabelsList: false,
    }, init);
    const activeConversation = React.useRef();
    const setSelectedMails = React.useCallback((mails) => {
        setMailsApp({type: MAIL_APP_ACTIONS.SET_SELECTED_ITEMS, payload: mails});
    }, [setMailsApp]);

    const setMailsListRefresh = React.useCallback((refresh) => {
        setMailsApp({type: MAIL_APP_ACTIONS.SET_MAILS_LIST_REFRESH, payload: refresh})
    }, [setMailsApp]);

    const setLabelsListRefresh = React.useCallback((refresh) => {
        setMailsApp({type: MAIL_APP_ACTIONS.SET_LABELS_LIST_REFRESH, payload: refresh})
    }, [setMailsApp]);

    const contextValue = {
        ...mailsApp,
        activeConversation,
        setSelectedMails: setSelectedMails,
        setMailsListRefresh: setMailsListRefresh,
        setLabelsListRefresh: setLabelsListRefresh,
    }
    return (
        <MailAppContext.Provider value={contextValue}>
            {children}
        </MailAppContext.Provider>
    )
}
export default MailAppProvider;

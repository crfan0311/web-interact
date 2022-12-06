import {
    ASSIGN_LABELS_TO_CONTACTS,
    CONTACT_ADDED,
    CONTACT_DELETE_COMPLETED,
    CONTACT_DELETE_STARTED,
    CONTACT_EDIT_COMPLETED,
    CONTACT_EDIT_STARTED,
    CONTACT_LIST_REFRESH_COMPLETED,
    CONTACT_READ_COMPLETED,
    CONTACT_READ_STARTED,
    HIDE_VISIBLE_DIALOG,
    LABEL_ADDED, LABEL_DELETE_COMPLETED,
    LABEL_DELETE_STARTED,
    LABEL_EDIT_COMPLETED,
    LABEL_EDIT_STARTED,
    LABEL_LIST_REFRESH_COMPLETED
} from "../../utils/constants/contactApp";

export const onContactAdd = () => {
    return dispatch => {
        dispatch({ type: CONTACT_ADDED });
    }
};

export const onContactDeleteStart = (contact) => {
    return dispatch => {
        dispatch({type: CONTACT_DELETE_STARTED, payload: contact});
    }
};

export const onContactDeleteComplete = () => {
    return dispatch => {
        dispatch({type: CONTACT_DELETE_COMPLETED})
    }
};

export const onLabelsAssignedToContacts = () => {
    return dispatch => {
        dispatch({type: ASSIGN_LABELS_TO_CONTACTS});
    }
};

export const onContactEditStart = (contact) => {
    return dispatch => {
        dispatch({type: CONTACT_EDIT_STARTED, payload: contact});
    }
};

export const onContactEditComplete = () => {
    return dispatch => {
        dispatch({type: CONTACT_EDIT_COMPLETED});
    }
};

export const onContactReadStart = (contact) => {
    return dispatch => {
        dispatch({type: CONTACT_READ_STARTED, payload: contact});
    }
};

export const onContactReadComplete = () => {
    return dispatch => {
        dispatch({type: CONTACT_READ_COMPLETED});
    }
};

export const onContactListRefreshComplete = () => {
    return dispatch => {
        dispatch({type: CONTACT_LIST_REFRESH_COMPLETED})
    }
};

export const onVisibleDialogHide = () => {
    return dispatch => {
        dispatch({type: HIDE_VISIBLE_DIALOG})
    }
};

export const onLabelAdd = () => {
    return dispatch => {
        dispatch({ type: LABEL_ADDED });
    }
};

export const onLabelEditStart = (label) => {
    return dispatch => {
        dispatch({type: LABEL_EDIT_STARTED, payload: label});
    }
};

export const onLabelEditComplete = () => {
    return dispatch => {
        dispatch({type: LABEL_EDIT_COMPLETED});
    }
};

export const onLabelDeleteStart = (label) => {
    return dispatch => {
        dispatch({type: LABEL_DELETE_STARTED, payload: label});
    }
};

export const onLabelDeleteComplete = () => {
    return dispatch => {
        dispatch({type: LABEL_DELETE_COMPLETED})
    }
};

export const onLabelListRefreshComplete = () => {
    return dispatch => {
        dispatch({type: LABEL_LIST_REFRESH_COMPLETED})
    }
};
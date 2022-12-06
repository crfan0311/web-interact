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
    LABEL_ADDED,
    LABEL_DELETE_COMPLETED, LABEL_DELETE_STARTED,
    LABEL_EDIT_COMPLETED,
    LABEL_EDIT_STARTED,
    LABEL_LIST_REFRESH_COMPLETED,
    VISIBLE_DIALOG_OPTIONS
} from "../../utils/constants/contactApp";


const INIT_STATE = {
    refreshContactList: false,
    visibleDialog: VISIBLE_DIALOG_OPTIONS.NONE,
    currentContact: null,
    refreshLabelList: false,
    currentLabel: null,
};

const reducerFunc = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CONTACT_ADDED: {
            return {
                ...state,
                refreshContactList: true,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.CONTACT_EDIT,
            }
        }

        case CONTACT_EDIT_STARTED: {
            return {
                ...state,
                currentContact: action.payload,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.CONTACT_EDIT,
            }
        }

        case CONTACT_EDIT_COMPLETED: {
            return {
                ...state,
                refreshContactList: true,
                currentContact: null,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.NONE,
            }
        }

        case CONTACT_DELETE_STARTED: {
            return {
                ...state,
                currentContact: action.payload,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.CONTACT_CONFIRM_DELETE,
            }
        }

        case CONTACT_DELETE_COMPLETED: {
            return {
                ...state,
                refreshContactList: true,
                currentContact: null,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.NONE,
            }
        }

        case CONTACT_READ_STARTED: {
            return {
                ...state,
                currentContact: action.payload,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.CONTACT_DETAIL
            }
        }

        case CONTACT_READ_COMPLETED: {
            return {
                ...state,
                currentContact: null,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.NONE
            }
        }

        case CONTACT_LIST_REFRESH_COMPLETED: {
            return {
                ...state,
                refreshContactList: false,
            }
        }

        case HIDE_VISIBLE_DIALOG: {
            return {
                ...state,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.NONE,
            }
        }

        case LABEL_ADDED: {
            return {
                ...state,
                refreshLabelList: true,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.LABEL_EDIT,
            }
        }

        case LABEL_EDIT_STARTED: {
            return {
                ...state,
                currentLabel: action.payload,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.LABEL_EDIT,
            }
        }

        case LABEL_EDIT_COMPLETED: {
            return {
                ...state,
                refreshLabelList: true,
                currentLabel: null,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.NONE,
            }
        }

        case LABEL_DELETE_STARTED: {
            return {
                ...state,
                currentLabel: action.payload,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.LABEL_CONFIRM_DELETE,
            }
        }

        case LABEL_DELETE_COMPLETED: {
            return {
                ...state,
                refreshLabelList: true,
                refreshContactList: true,
                currentLabel: null,
                visibleDialog: VISIBLE_DIALOG_OPTIONS.NONE,
            }
        }

        case LABEL_LIST_REFRESH_COMPLETED: {
            return {
                ...state,
                refreshLabelList: false,
            }
        }

        case ASSIGN_LABELS_TO_CONTACTS: {
            return {
                ...state,
                refreshContactList: true,
            }
        }

        default: {
            return state;
        }
    }
};

export default reducerFunc;

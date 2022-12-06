import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import contactsApp from "./contactsApp"
import localization from "./localization"

const exportReducers = history => {
    return combineReducers({
        router: connectRouter(history),
        contactsApp,
        localization
    });
};

export default exportReducers;


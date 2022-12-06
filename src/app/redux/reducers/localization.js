import { localizationServices } from "app/services/localization";
import { USER_ACTIONS } from "../actions/user";







const DEFAULT_STATE = {
    deviceTimezone: localizationServices.getDeviceTimezone()
};

const reducerFunc = (state = DEFAULT_STATE, action ) => {
    switch (action.type) {
        
        case USER_ACTIONS.AUTH_DATA_RECEIVED: {
            return {
                ...state,
                loggedIn: true,
                authData: action.payload
            }
        }
        default: {
            return state;
        }
    }
};

export default reducerFunc;

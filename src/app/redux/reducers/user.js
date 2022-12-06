import { USER_ACTIONS } from "../actions/user";







const INIT_STATE = {
    loggedIn: false,
};

const reducerFunc = (state = INIT_STATE, action ) => {
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
